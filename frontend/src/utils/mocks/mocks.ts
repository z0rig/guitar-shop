import { GUITAR_STRINGS_COUNTS, MAX_PRODUCT_PRICE, MIN_PRODUCT_PRICE } from '../../const';
import faker from 'faker';
import { TProduct } from '../../types/product';
import { EProductType } from '../../const';
import { TUser } from '../../types/user';


export const makeFakeProductStub = (): TProduct => ({
  id: faker.datatype.uuid(),
  name: faker.datatype.string(),
  description: faker.commerce.productDescription(),
  addDate: faker.date.past().getTime(),
  img: faker.image.abstract(),
  type: faker.random.arrayElement([
    EProductType.ACOUSTIC, EProductType.ELECTRO, EProductType.UCULELE
  ]),
  article: faker.datatype.string(),
  guitarStringsCount: faker.random.arrayElement(GUITAR_STRINGS_COUNTS),
  price: faker.datatype.number({
    min: MIN_PRODUCT_PRICE, max: MAX_PRODUCT_PRICE
  }),
});
export const makeFakeProductsStub = (): TProduct[] => new Array(4).fill(null).map(makeFakeProductStub);

export const makeFakeUserStub = (): TUser => ({
  name: `${faker.name.firstName() } ${ faker.name.lastName()}`,
  email: faker.internet.email(),
  password: faker.datatype.string(),
});
