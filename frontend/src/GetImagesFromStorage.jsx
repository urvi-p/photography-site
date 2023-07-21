/* eslint-disable no-console */
import {
  getDownloadURL,
  getMetadata,
  listAll, ref,
} from 'firebase/storage';
import { storage } from './utils/firebase';

// FUNCTION GETS PHOTO INFO FROM FIREBASE STORAGE
async function GetImagesFromStorage(storagePath) {
  console.log('GETTING DATA FROM FIREBASE');
  const imageList = [];

  const listRef = ref(storage, storagePath);
  await listAll(listRef)
    .then((img) => {
      img.items.forEach(async (itemRef) => {
        // console.log('ItemRef:', itemRef);
        // console.log('TestRef:', testRef);
        // console.log('Equal:', testRef === itemRef);
        const url = await getDownloadURL(itemRef);
        const metadata = await getMetadata(itemRef);
        imageList.push({
          url,
          metadata,
        });
      });
    })
    .catch((error) => {
      // Handle any errors
      console.log('Uh-oh, an error occurred!', error);
    });

  // console.log('final list', imageList);
  return imageList;
}

export default GetImagesFromStorage;
