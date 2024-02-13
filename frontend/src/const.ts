export enum AppRoute {
  Root = '/',
  Add = 'add',
  Edit = 'edit',
  Product = 'product',
  ProductList = 'products',
  Regitration = 'registration',
}

// user
export const MIN_USER_NAME_LENGTH = 1;
export const MAX_USER_NAME_LENGTH = 15;
export const MIN_PASSWORDLENGTH = 6;
export const MAX_PASSWORDLENGTH = 12;

// product
export const MIN_PRODUCT_NAME_LENGTH = 10;
export const MAX_PRODUCT_NAME_LENGTH = 100;
export const MIN_PRODUCT_DESCRIPTION_LENGTH = 20;
export const MAX_PRODUCT_DESCRIPTION_LENGTH = 1024;
export const MIN_PRODUCT_ARTICLE_LENGTH = 5;
export const MAX_PRODUCT_ARTICLE_LENGTH = 40;
export const MIN_PRODUCT_PRICE = 100;
export const MAX_PRODUCT_PRICE = 100000;
export const GUITAR_STRINGS_COUNTS = [4, 6, 7, 12];

export enum EProductType {
  ELECTRO = 'электро',
  ACOUSTIC = 'аккустика',
  UCULELE = 'укулеле'
}
