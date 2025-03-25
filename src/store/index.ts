import { create } from "zustand";

import { CatalogItem } from "@/types";

interface CheckoutStore {
    cartItems: CatalogItem[];
    addToCheckout: (item: CatalogItem) => void;
    removeFromCheckout: (id: string) => void;
}

const useCheckoutStore = create<CheckoutStore>((set) => ({
    cartItems: [],
    addToCheckout: (item: CatalogItem) =>
        set((state) => ({
            cartItems: [...state.cartItems, item],
        })),
    removeFromCheckout: (id: string) =>
        set((state) => ({
            cartItems: state.cartItems.filter((item) => item.id !== id),
        })),
}));

export default useCheckoutStore;
