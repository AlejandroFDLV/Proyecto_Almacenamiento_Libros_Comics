/*PLANTEAMIENTO 
Simular un sistema de "almacenamiento" de libros y comics.
Propiedades a registrar para cada objeto:
Libros: Título, Autor, Precio, Stock y un Id.
Comics: es la misma información que libros, más los ilustradores y el volumen.
**Los usuarios no podrán modificar ningún valor**
Funciones: cada objeto podrá mostrar su información completa.

Tutorial de YouDevs: https://www.youtube.com/watch?v=vAbfpTVWRRw*/

class Libro{
    //ATRIBUTOS: title, author, price, stock, id.
#title
#author
#price
#stock
#id
    constructor(t, a, p, s, i){
        this.#title=t
        this.#author=a
        this.#price=p
        this.#stock=s
        this.#id=i
    }
    getInfo(){
        //console.log("Aquí está toda la información")
        let info= `Título: ${ this.#title }, Autor: ${this.#author}, Precio: ${this.#price}, Existencias: ${this.#stock}, Id: ${this.#id}`
        console.log(info)
    }
}
//instanciar
const book1 = new Libro('Calculo Vectorial','Jorge Saenz', 15, 5, 1)
book1.getInfo()
//const book2 = new Libro('Sistemas y Procedimientos','Fernando Contreras', 30, 3, 2)
//console.log(book2.getInfo())
//book1.title='Otro Nombre'
//console.log(book1.title)
//console.log(book1);


class Comic extends Libro{
    #illustrators
    #vol
    constructor(t, a, p, s, i,ill,v){
        super(t, a, p, s, i,ill,v)
        this.#illustrators=ill
        this.#vol=v
    }
    getInfo(){
        let info=`Ilustradores: ${this.#illustrators.toString()}, Volumen: ${this.#vol}`
        super.getInfo()  
        console.log(info)}
}
const comic1=new Comic('Scott Pilgrim','Bryan Lee O’Malley', 8, 55, 3, ['1'], 1)
//console.log(comic1)
 comic1.getInfo()