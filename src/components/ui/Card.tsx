import Image from "next/image";

interface CardProps {
    title: string;
    price: string;
    rating: number;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, price, imageUrl }) => {
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
                    <p className="text-lg font-bold leading-tight text-neutral-600 dark:text-neutral-500">💵 ${price}</p>
                </div>
                <div className="mt-6 flex items-center gap-2.5">
                    
                    <button
                        type="button"
                        className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-medium  text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        <svg
                            className="-ms-2 me-2 h-5 w-5"
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
                                d="M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7h-1M8 7h-.688M13 5v4m-2-2h4"
                            />
                        </svg>
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;
