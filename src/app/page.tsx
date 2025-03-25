import Card from "@/components/ui/Card";
import Search from "@/components/ui/Search";

export default async function Home() {
    const catalogRequest = await fetch("https://fakestoreapi.com/products");
    const catalogResponse = await catalogRequest.json();

    return (
        <div className="mt-6">
            <Search />
            <div className="mt-6 grid grid-cols-4 gap-8 sm:mt-8 px-32">
                {catalogResponse.map(({ id, title, price, image, rating }) => (
                    <Card key={id} title={title} price={price} imageUrl={image} rating={rating.rate} />
                ))}
            </div>
        </div>
    );
}
