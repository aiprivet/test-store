import { useCallback, useMemo, useState } from "react";
import { CatalogItem } from "@/types";

export function useCatalogFilters(catalog: CatalogItem[]) {
    const [query, setQuery] = useState("");
    const [rating, setRating] = useState<number | null>(null);
    const [price, setPrice] = useState<number | null>(null);

    const handlePriceFilter = useCallback(() => {
        setPrice((prev) => (prev === 20 ? null : 20));
    }, []);

    const handleRatingFilter = useCallback(() => {
        setRating((prev) => (prev === 4 ? null : 4));
    }, []);

    const resetFilters = useCallback(() => {
        setRating(null);
        setPrice(null);
    }, []);

    const filteredProducts = useMemo(() => {
        return catalog.filter((product) => {
            const matchesSearch = product.title.toLowerCase().includes(query.toLowerCase());
            const matchesPrice = price ? product.price < price : true;
            const matchesRating = rating ? product.rating.rate >= rating : true;

            return matchesSearch && matchesPrice && matchesRating;
        });
    }, [catalog, query, price, rating]);

    return {
        queryState: { query, setQuery },
        rating,
        price,
        handlePriceFilter,
        handleRatingFilter,
        resetFilters,
        filteredProducts,
    };
}
