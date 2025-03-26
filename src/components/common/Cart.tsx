"use client";
import useCheckoutStore from "@/store";
import CartItem from "@/components/ui/CartItem";
import { useMemo } from "react";
import { calculateCartTotal } from "@/helpers";

export default function Cart() {
    const { cartItems, removeFromCart } = useCheckoutStore((state) => state);
    const cartTotalPrice = useMemo(() => calculateCartTotal(cartItems), [cartItems]);
    return (
        <div className="flex flex-col gap-8 h-full w-full">
            {cartItems.length === 0 && <h1 className="text-3xl justify-center items-center flex">Cart is empty</h1>}
            {cartItems.map((item) => {
                return <CartItem key={item.id} {...item} handleRemoveClick={() => removeFromCart(item.id)} />;
            })}
            {cartItems.length !== 0 && <h1>Total: {cartTotalPrice} $💵</h1>}
        </div>
    );
}
