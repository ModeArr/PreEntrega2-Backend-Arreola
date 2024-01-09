#### Nombre: Modesto Arreola

#### Institucion: Coderhouse

#### Curso: BackEnd

#### Comision: 50040

#### Profesor: Rabindranath Ferreira Villamizar

#### Tutor: Tomás Alessandro Yovino

#### Entrega Numero: 2

#### EL proyecto pide que se haga una clase que gestione productos asi como su agregacion y recibimiento, esto usando manejo de archivos mediante un json. Se agregan al ejercicio paradigmas de validacion de datos con diferentes fuinciones internas de javascript para su compresion como FIND, FINDINDEX, entre otros para escoger y entender conceptos de manejo de objetos, datos y su manipulacion. Asì tambien se agrego la opcion de borrar y de moficar, para borrar de un array de objeto se uso splice que permite retirar un elemento de un array y se uso asi FIND y FINDINDEXOF para ecnotrar el elem ento

---

## Cosas a realizar

### getProducts()
#### Esta funcion permite traer todo los objetos del archivo usando la liberia nativa fs y la funcion fs.readFileSync

### addProduct()
#### Esta funcion permite agregar un producto al al archivo JSON mediante una serie de parametros(title, description, price, thumbnail, code, stock), se tiene que validar que cada uno se ingrese correctamente. Para esto se realizo una condicional por paramentro para verificar que esta no este vacia y se su tipo de dato. Así también se agrego un incrementador de id para poder guardarlos con un id para su identifiacion. En una de las verificaciones del code se uso FIND para poder verficiar que no se este repitiendo en ningun producto el code. Así también se uso fs.writeFileSync para escribir sobre el archivo JSON

### getProductById(id)
#### Esta funcion permite encontrar un producto por su id, para esto se uso un simple FIND para encontrar el producto que tiene el id buscado y luego un FINDINDEX para el contar la posicion de ese producto en el un array de objetos traido desde el archivo JSON usando 

### updateProduct(id, field, edit)
#### Esta funcion modifica un producto del archivo json, esto mediante traer todos los productos del arhivo luego usar FIND para encontrar el archivo que se quiere modificar para luego tener su INDEXOF para luego validar y usar su index para modificar el array de produictos traiudos para luego usar fs.writeFileSync para escribirlo. Se usaronm la validaciones de addProduct para validarlo una funcion ayudaria en este caso para que no fuera repetitivo.

### deleteProduct(id)
#### Esta funcion permite borrar un producto con id, esto se logro primero trayendo todos los productos con getProducts() luego usando find para encontrar el id y validar que exista, luego obtenemos el INDEXOF de este producto dentro del array traido para luego usar splice para retirarlo para luego usar fs.writeFileSync para ingresar el array a la base de datos. MEJORA seria hacer que los id posteriores al borrado se decrementaran para medios esteticos.