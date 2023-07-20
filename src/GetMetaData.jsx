/* eslint-disable no-console */
import {
  getMetadata,
  ref,
} from 'firebase/storage';
import { storage } from './utils/firebase';

// FUNCTION GETS METADATA FOR SPECIFIC PHOTO FROM FIREBASE STORAGE
async function GetMetaData(path) {
  let customMetaData = {};

  const testRef = ref(storage, path);
  await getMetadata(testRef)
    .then((metaData) => {
      // console.log('metaData Received:', metaData);
      // console.log('custom metaData:', metaData.customMetadata);
      customMetaData = metaData.customMetadata;
    })
    .catch((error) => {
      // Handle any errors
      console.log('Uh-oh, an error occurred!', error);
    });

  // console.log('final metadata list', customMetaData);
  return customMetaData;
}

export default GetMetaData;
