import type { ISmartphone, ISmartphoneToCreate } from "../types/types";


// helper functions
const sleep = (ms: number) => new Promise(
  resolve => setTimeout(resolve, ms));


// fetch functions
export const getSmartphones = async () => {

  const url = "https://api.restful-api.dev/objects";
  try {
    await sleep(1000)
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json() as ISmartphone[];
    return result.sort(() => Math.random() - 0.5)
    
  } catch (error) {
    console.error(error);
  }
}

export const getSmartphonesWithError = async () => {
  const url = "https://api.restful-api.dev/objectss";
  try {
    await sleep(1000)
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json() as ISmartphone[];
    return result.sort(() => Math.random() - 0.5)
    
  } catch (error) {
    console.error(error);
  }
}


// create functions
export const smartphoneToCreate: ISmartphoneToCreate = {
   "name": "Apple MacBook Pro 16",
   "data": {
      "year": 2019,
      "price": 1849.99,
   }
}

export const createSmartphone = async (smartphone: ISmartphoneToCreate) => {
  const url = "https://api.restful-api.dev/objects";
  try {
    await sleep(1000)
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: JSON.stringify(
        smartphone
      )
    });
    if (!response.ok) {
      console.log('createSmartphone response not ok one: ', response.status)
      throw new Error(`Response status: ${response.status}`);
    }
    const result = await response.json() as ISmartphone;
    return result;
    
  } catch (error) {
    console.log('createSmartphone catch error: ', error);
    throw new Error(`Response status: ${error}`);
  }
}