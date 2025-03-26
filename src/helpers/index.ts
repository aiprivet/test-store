import { CartItem } from "@/types";

export const calculateCartTotal = (cartItems: CartItem[]) => {
    return cartItems.reduce((total, item) => total + item.price, 0);
};
