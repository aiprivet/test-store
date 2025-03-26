"use client";
import useCheckoutStore from "@/store";
import CheckoutCard from "../ui/CartItem";

export default function Checkout() {
    const { cartItems, removeFromCart } = useCheckoutStore((state) => state);

    return (
        <div className="flex flex-col gap-8 h-full w-full">
            {cartItems.length === 0 && <h1 className="text-3xl justify-center items-center flex">Cart is empty</h1>}
            {cartItems.map((item) => {
                return <CheckoutCard key={item.id} {...item} handleRemoveClick={() => removeFromCart(item.id)} />;
            })}
        </div>
    );
}
