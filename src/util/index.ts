import axios from 'axios';
import {
  URLOptions,
  methods
} from '../interfaces/web/index'
import URLError from '../classes/URLError';


export const request = (method: methods, url: string): Promise<any> =>{
  return new Promise(async(resolve, reject) =>{
    try {
      const options: URLOptions = {
        method: method
      };
      const res = await axios(url, options);
      resolve(res);
    } catch (err) {
      reject(new URLError(err));
    }
  });
};
