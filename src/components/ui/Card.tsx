import Image from "next/image";

interface CardProps {
    title: string;
    price: string;
    rating: number;
    imageUrl: string;
}

const Card: React.FC<CardProps> = ({ title, price, rating, imageUrl }) => {
    return (
        <div className="max-w-sm overflow-hidden shadow-lg border rounded-2xl border-gray-200">
            <Image className="aspect-auto rounded-2xl" src={imageUrl} alt={title} width={100} height={100} />
            <div className="px-6 py-4">
                <div className="font-bold text-l mb-2">{title}</div>
                <p className="text-gray-700 text-base">💵 {price} USD</p>
                <p className="text-gray-700 text-base">⭐️ {rating} / 5</p>
            </div>
        </div>
    );
};

export default Card;
