"use client";
import { CatalogItem } from "@/types";
import Card from "@/components/ui/Card";
import Search from "@/components/ui/Search";
import Button from "@/components/ui/Button";
import { useCatalogFilters } from "@/hooks";

export default function Catalog({ catalog }: { catalog: CatalogItem[] }) {
    const { query, setQuery, handlePriceFilter, handleRatingFilter, resetFilters, filteredProducts, price, rating } =
        useCatalogFilters(catalog);

    return (
        <div className="p-8">
            <div className="flex justify-center items-center gap-4 mb-6 flex-wrap">
                <Search query={query} setQuery={setQuery} />
                <Button text={`Price < 20$ 💵`} onClick={handlePriceFilter} variant={price ? "primary" : "secondary"} />

                <Button
                    text={`Rating > 4 ⭐️`}
                    onClick={handleRatingFilter}
                    variant={rating ? "primary" : "secondary"}
                />

                <Button
                    text="Reset filters"
                    onClick={resetFilters}
                    variant={price || rating ? "primary" : "secondary"}
                />
            </div>

            {filteredProducts.length === 0 ? (
                <div className="text-center py-12">
                    <h3 className="text-xl font-semibold">No products found</h3>
                    <p>Try changing your search or filter criteria</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                        <Card
                            key={product.id}
                            title={product.title}
                            price={product.price}
                            imageUrl={product.image}
                            rating={product.rating.rate}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
