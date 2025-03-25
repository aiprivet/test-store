import Card from "@/components/ui/Card";

export default async function Home() {
    const catalogRequest = await fetch("https://fakestoreapi.com/products");
    const catalogResponse = await catalogRequest.json();

    return (
        <div>
            {catalogResponse.map(({ id, title, price, image, rating }) => (
                <Card key={id} title={title} price={price} imageUrl={image} rating={rating.rate} />
            ))}
        </div>
    );
}
