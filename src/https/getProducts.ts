import axios from 'axios';

import Papa from 'papaparse'
import { IProduct } from '../Types/IProduct';


const API_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vSTG86Ocym8DqgUOQ2KE51_Iw_bKvXcAHqwLSmI04wpOk5K-0O1Gu2aqivT42xfDA/pub?output=csv";

export const getAllProducts = async () => {
  const response = await axios.get(API_URL);
  const csvData = response.data;

  const parsed = Papa.parse<IProduct>(csvData, {
    header: true,
    skipEmptyLines: true,
  });

  console.log(parsed.data); // Esto será un array de objetos
  return parsed.data;
};
