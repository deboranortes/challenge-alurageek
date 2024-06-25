const productList = async () => {
    try {
        const res = await fetch("http://localhost:3000/produtos");
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
};

const createProduct = async (name, price, image) => {
    try {
        const res = await fetch("http://localhost:3000/produtos", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    price,
                    image,
                }),
            }
        );
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
};

const deleteProduct = async (id) => {
    try {
        const res = await fetch(`http://localhost:3000/produtos${id}`, {
                method: "DELETE",
            });
        return await res.json();
    } catch (err) {
        return console.log(err);
    }
};

export const servicesProducts = {
    productList,
    createProduct,
    deleteProduct,
};