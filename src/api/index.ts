import { CatalogItem } from "@/types";

export const fetchProductCatalog = async () => {
    const catalogRequest = await fetch("https://fakestoreapi.com/products");
    const catalogResponse = await catalogRequest.json();
    return catalogResponse as CatalogItem[];
};
