
import ContextWrapper from "@/global/context"

async function fatchAllStoreProducts() {
    let res = await fetch(`https://08cvugs0.api.sanity.io/v2023-08-02/data/query/production?query=*[_type == 'products']`, {
        cache: "no-store",
    })
    return res.json();
};

const Cart = async () => {
    let allProductsOfStore = await fatchAllStoreProducts();
    return (
        <ContextWrapper>
            {/* <CartComp allProductsOfStore={allProductsOfStore.result} /> */}
        </ContextWrapper>
    )
}

export default Cart