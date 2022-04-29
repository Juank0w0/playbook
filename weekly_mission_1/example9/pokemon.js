class Pokemon{
    constructor (name){
        this.name = name //atributo?
        // this es una variable para referenciar el valor del contexto local de esta clase
         // Estás variables se le conocen como atributos

           // método
        // this.name es la variable que se guarda en el contexto local
        // message es una variable que se le pasa al ejecutar este método
    }
        sayHello(){
            console.log(`Mi pokemon ${this.name} te saluda!!!`)

        }
        sayMessage(){
            console.log(`Mi pokemon ${this.name} dice: Heey!`)
    
    }
}
module.exports = Pokemon
