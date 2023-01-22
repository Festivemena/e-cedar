import create from 'zustand';
import { persist } from 'zustand/middleware';

interface cartItem {
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
  price: number;

}

interface CartState {
  items: cartItem[];
  total: number;
}


const useCartStore = create(
  persist(
  (set: any) => ({
  items: [],
  total: 0,
  addItem: (item: cartItem) => {
    set((state: any) => { 
      return{
        items: [...state.items, item],
        total: state.total + item.price,
      };
    });
  },
  clearCart: () => set({ total: 0, items: [] }),
  removeItem: (_id: string) => {
    set((state: any) => {
      const item = state.items.find((i: any) => i._id === _id);
      if (item) {
        return {
          items: state.items.filter((i: any) => i._id !== _id),
          total: state.total - item.price,
        };
      }
    });
  },
}),
{name: 'cart'} )
);



export default useCartStore ;