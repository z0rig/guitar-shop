enum EProductType {
  ELECTRO = 'электро',
  ACOUSTIC = 'аккустика',
  UCULELE = 'укулеле'
}

export type TProduct = {
  id: string;
  name: string;
  description: string;
  addDate: string;
  img: string;
  type: EProductType;
  article: string;
  guitarStringsCount: number;
  price: number;
}
