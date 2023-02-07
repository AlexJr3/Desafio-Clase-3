class ProductManager {
#id = 0;
#products = [];

addProduct(title, descrip, price, thubnailm, code, stock){
    const codeCheck = this.#products.some((el) => el.code === code);

    if(!title || !descrip || !price || !thubnailm || !code || !stock){
        console.log('ERROR!!! Falta llenar uno de los campos');
    }
    
    
    else if(codeCheck){
        console.log(`ERROR!!! El codigo ${code} ya existe`);
    }

   
    else{
        const newProduct = {
            id: this.#id,
            title,
            descrip,
            price,
            thubnailm,
            code,
            stock,
        }
        this.#products = [...this.#products, newProduct];
        this.#id++;
    }
};
getProducts(){
    return this.#products;
};

getProductById(idProduct){
    const product = this.#products.find((el) => el.id === idProduct);
    if(!product){
        console.log('not found');
        return
    }
    return console.log(product);
};

}


const product = new ProductManager;

console.log(product.getProducts());
product.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);
console.log(product.getProducts());
product.addProduct("producto prueba", "Este es un producto prueba", 200, "Sin imagen", "abc123", 25);

product.getProductById(3);



