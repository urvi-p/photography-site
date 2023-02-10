import {
  getDownloadURL,
  getMetadata,
  listAll, ref,
} from 'firebase/storage';
import { storage } from './utils/firebase';
/* eslint-disable no-console */

// FUNCTION GETS PHOTO INFO FROM STORAGE
async function AddImageInfo() {
  const imageList = [];

  const listRef = ref(storage, 'files');
  listAll(listRef)
    .then((img) => {
      img.items.forEach(async (itemRef) => {
        const url = await getDownloadURL(itemRef);
        const metadata = await getMetadata(itemRef);
        imageList.push({
          url,
          location: metadata.customMetadata.location,
          title: metadata.customMetadata.title,
        });
      });
    })
    .catch((error) => {
      // Handle any errors
      console.log('Uh-oh, an error occurred!', error);
    });

  console.log('final list', imageList);
  return imageList;
}

export default AddImageInfo;
