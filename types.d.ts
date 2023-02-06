export interface Product {
  category: string;
  productImage: {
    asset: {
      _id: string;
      url: string;
    };
  };
  _id: string;
  length?: number;
  productName: string;
  productDetails: string;
  price: number;
}

export interface OrderItem {
  _id: string;
  _type: string;
  name: string;
  _key: string;
  _ref: string;
  postedBy: string;
}

export interface IUser {
  _id: string;
  _type: string;
  userName: string;
  image: string;
}
