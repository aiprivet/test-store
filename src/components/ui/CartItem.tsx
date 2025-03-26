import type { CartItem } from "@/types";
import Image from "next/image";

interface CartItemProps extends CartItem {
    handleRemoveClick: () => void;
}

export default function CartItem({ title, price, image, handleRemoveClick }: CartItemProps) {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-neutral-700 dark:bg-neutral-800 md:p-6">
            <div className="flex justify-between">
                <div className="space-y-4 md:flex md:items-center md:justify-start md:gap-6 md:space-y-0">
                    <a className="shrink-0 md:order-1">
                        <Image className="h-20 w-20 rounded-2xl" src={image} alt="" height={100} width={100} />
                    </a>

                    <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
                        <a className="text-base font-medium text-neutral-900 hover:underline dark:text-white">
                            {title}
                        </a>

                        <div className="flex items-center gap-4">
                            <button
                                type="button"
                                className="inline-flex items-center text-sm font-medium text-red-600 hover:underline dark:text-red-500"
                                onClick={handleRemoveClick}
                            >
                                <svg
                                    className="me-1.5 h-5 w-5"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="24"
                                    height="24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18 17.94 6M18 18 6.06 6"
                                    />
                                </svg>
                                Remove
                            </button>
                        </div>
                    </div>
                </div>
                <div>{price}$</div>
            </div>
        </div>
    );
}
