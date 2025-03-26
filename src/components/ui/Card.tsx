import Image from "next/image";

interface CardProps {
    title: string;
    price: number;
    rating: number;
    imageUrl: string;
    handleAddToCartClick: () => void;
    addToCartDisabled: boolean;
}

const Card: React.FC<CardProps> = ({ title, price, imageUrl, rating, handleAddToCartClick, addToCartDisabled }) => {
    return (
        <div className="space-y-6 overflow-hidden rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-neutral-800 dark:bg-neutral-900">
            <div className="flex flex-col gap-2 h-full w-full">
                <Image
                    className="mx-auto h-44 w-44 mb-4 rounded-full"
                    src={imageUrl}
                    alt="image"
                    height={100}
                    width={100}
                />
                <div>
                    <a className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white max-h-2.5">
                        {title.slice(0, 14)}...
                    </a>
                </div>
                <div>
                    <p className="text-lg font-bold leading-tight text-neutral-600 dark:text-neutral-500">
                        💵 ${price}
                    </p>
                    <p className="text-lg font-bold leading-tight text-neutral-600 dark:text-neutral-500">
                        ⭐️ ${rating} / 5
                    </p>
                </div>
                <div className="mt-6 flex items-center gap-2.5">
                    {!addToCartDisabled ? <button
                        onClick={handleAddToCartClick}
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium  text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        🛒 Add to cart
                    </button>
                        :
                        <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-neutral-600 px-5 py-2.5 text-sm font-medium  text-white hover:bg-neutral-800 focus:outline-none focus:ring-4 focus:ring-neutral-300 dark:bg-neutral-600 dark:hover:bg-neutral-700 dark:focus:ring-neutral-800"
                    >
                        Item in cart
                    </button>
                    }
                </div>
            </div>
        </div>
    );
};

export default Card;
