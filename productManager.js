const fs = require("fs")
const path = require("path")

class ProductManager {
    constructor(path) {
        this.pathDB = path
    }

    getProducts() {
            const allProducts = JSON.parse(fs.readFileSync(this.pathDB, "utf8"))
            if (!allProducts){
                return []
            } else {
                return allProducts
            }    
    }

    addProduct(title="", description="", price=0, thumbnail="", code="", stock=0) {
        const allProducts = this.getProducts()

        if (!title.trim()){
            console.log('Ingresa un titulo de producto correcto')
            return ''
        }

        if (!description.trim()){
            console.log('Ingresa una descripcion de producto correcto')
            return ''
        }

        if (price <= 0  || typeof price != 'number'){
            console.log('Ingresa un numero de precio correcto')
            return ''
        }

        if (!thumbnail.trim()){
            console.log('Ingresa un thumbnail de producto correcto')
            return ''
        }

        if (!code.trim()){
            console.log('Ingresa un codigo de producto correcto')
            return ''
        }

       let codeDuplicated = allProducts.find(e => e.code === code)
        if (codeDuplicated){
            console.log('el codigo esta duplicado')
            return ''
        }
        
        if (stock <= 0 || typeof stock != 'number') {
            console.log('Ingresa un numero mayor a cero para el stock')
            return ''
        }

        const producto = {
            title,
            description,
            price,
            thumbnail,
            stock,
            code
        }

        if (allProducts.length === 0) {
            producto.id = 1;
        } else {
            producto.id = allProducts.length + 1;
        }

       allProducts.push(producto)
       fs.writeFileSync(this.pathDB, JSON.stringify(allProducts));
       console.log("Se agrego el producto exitosamente")
    }

    getProductById(id) {
        const products = this.getProducts()
        const productId = products.find(e => e.id === id)
        if (!productId) {
          console.log("Producto no encontrado");
          return '';
        } else {
            let index = products.indexOf(productId);
            return products[index]
        }
    }
    updateProduct(id, field, edit){
        const products = this.getProducts()
        const product = products.find(e => e.id === id)
        const index = products.indexOf(product);

        switch (field){
            case "title":
                if (!edit.trim()){
                    console.log('Ingresa un titulo de producto correcto')
                    return ''
                } else {
                    products[index].title = edit
                    break
                }
            case "description":
                if (!edit.trim()){
                    console.log('Ingresa una descripcion de producto correcto')
                    return ''
                } else {
                    products[index].description = edit
                    break
                }
            case "price":
                if (edit <= 0  || typeof edit != 'number'){
                    console.log('Ingresa un numero de precio correcto')
                    return ''
                } else {
                    products[index].price = edit
                    break
                }
            case "thumbnail":
                if (!edit.trim()){
                    console.log('Ingresa un thumbnail de producto correcto')
                    return ''
                } else {
                    products[index].thumbnail = edit
                    break
                }
            case "code":
                let codeDuplicated = products.find(e => e.code === edit)
                if (!edit.trim()){
                    console.log('Ingresa un codigo de producto correcto')
                    return ''
                } else if (codeDuplicated){
                    console.log('el codigo esta duplicado, intenta otro')
                    return ''
                } else {
                    products[index].code = edit
                    break
                }
            case "stock":
                if (edit <= 0 || typeof edit != 'number') {
                    console.log('Ingresa un numero mayor a cero para el stock')
                    return ''
                } else {
                    products[index].stock = edit
                    break
                }
            default:
                console.log("Ingresa un campo a editar correcto")
                return ''
        }
        fs.writeFileSync(this.pathDB, JSON.stringify(products));
        console.log("Producto actualizado")
    }

    deleteProduct(id){
        const products = this.getProducts()
        const productId = products.find(e => e.id === id)
        if (!productId) {
          console.log("Producto no encontrado");
          return '';
        } else {
            let index = products.indexOf(productId);
            products.splice(index, 1)
            fs.writeFileSync(this.pathDB, JSON.stringify(products));
            console.log("Se borro correctamente el producto")
        }
    }
}

const pathDB = path.join(`${__dirname}/db.json`)
console.log(pathDB)
const frutas = new ProductManager(pathDB)
console.log(frutas.getProducts())
frutas.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen','13235432', 25)
console.log(frutas.getProducts())
frutas.addProduct('producto prueba', 'Este es un producto prueba', 200, 'Sin imagen','13235433', 24)
console.log(frutas.getProducts())
console.log(frutas.getProductById(1))
frutas.updateProduct(2, "title", "cambio titulo")
console.log(frutas.getProducts())
frutas.deleteProduct(1)
console.log(frutas.getProducts())