import { create } from "zustand";

import { CartItem } from "@/types";

interface CartStore {
    cartItems: CartItem[];
    addToCart: (item: CartItem) => void;
    removeFromCart: (id: string) => void;
}

const useCartStore = create<CartStore>((set) => ({
    cartItems: [],
    addToCart: (item: CartItem) =>
        set((state) => ({
            cartItems: [...state.cartItems, item],
        })),
    removeFromCart: (id: string) =>
        set((state) => ({
            cartItems: state.cartItems.filter((item) => item.id !== id),
        })),
}));

export default useCartStore;
