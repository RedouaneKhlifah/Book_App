import {AxiosResponse} from 'axios';
import axios from './axios.config';
import {IBook} from '../types';

export const getRecords = async (): Promise<AxiosResponse> => {
  const response = await axios.get('book');
  console.log(response);
  return response;
};

export const getRecordById = async (id: string): Promise<AxiosResponse> => {
  return await axios.get('book' + '/' + id);
};

export const createRecord = async (
  data: IBook | object,
): Promise<AxiosResponse> => {
  try {
    const response = await axios.post('book', data);
    return response.data;
  } catch (error) {
    if (
      ((error as any).response,
      (error as any).response?.status === 400 &&
        (error as any).response.data.errors)
    ) {
      console.log('motherv pai----------------');
      console.log(error);
      throw (error as any).response.data.errors;
      // Re-throw the error for the calling code to handle
    }

    console.log('motherv pai 2----------------');
    console.log(error);
    throw error; // Re-throw the error for the calling code to handle
  }
};

export const updateRecord = async (
  data: IBook | object,
  id: string,
): Promise<AxiosResponse> => {
  try {
    const response = await axios.patch('book' + '/' + id, data);
    return response;
  } catch (error) {
    if (
      ((error as any).response,
      (error as any).response?.status === 400 &&
        (error as any).response.data.errors)
    ) {
      throw (error as any).response.data.errors;
      // Re-throw the error for the calling code to handle
    }
    throw error; // Re-throw the error for the calling code to handle
  }
};

export const deleteRecord = async (id: string): Promise<AxiosResponse> => {
  try {
    const response = await axios.delete('book' + '/' + id);
    return response;
  } catch (error) {
    throw error; // Re-throw the error for the calling code to handle
  }
};
