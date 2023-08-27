import BASE_PATH_FORAPI from "@/components/shared/BasePath";
import AllProductsCompo from "@/components/views/AllProducts";
async function fetchAllProductData() {
    let res = await fetch(`https://08cvugs0.api.sanity.io/v2023-08-02/data/query/production?query=*%5B_type%3D%3D+%22products%22%5D`, {
        next: {
            revalidate: 120
        }
    })
    if (!res.ok) {
        throw new Error("Failed to fetch")
    }
    return res.json();
};


const Products = async () => {
    const ProdutcData = await fetchAllProductData()
    return (
        <AllProductsCompo ProdutcData={ProdutcData} />
    )
}

export default Products