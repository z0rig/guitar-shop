import { EProductType } from '../const';

export type TProduct = {
  id: string;
  name: string;
  description: string;
  addDate: number;
  img: string;
  type: EProductType;
  article: string;
  guitarStringsCount: number;
  price: number;
}
