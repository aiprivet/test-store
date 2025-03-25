import { fetchProductCatalog } from "@/api";
import Catalog from "@/components/common/Catalog";

export default async function Home() {
    const catalog = await fetchProductCatalog();

    return (
        <div className="mt-6">
            <Catalog catalog={catalog} />
        </div>
    );
}
