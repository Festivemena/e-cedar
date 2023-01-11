export interface Product {
  category: string;
  productImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  _id: string;
  productName: string;
  productDetails: string;
  price: string;
}

export interface IUser {
  _id: string;
  _type: string;
  userName: string;
  image: string;
}
