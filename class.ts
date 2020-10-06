let counter = 0
class Vehicle{
    private name: string

    constructor(name: string){
        counter++
        this.name= name
    }

    getName(): string{
        return `Type: ${this.name} and counter: ${counter}`
    }

}

const honda = new Vehicle('Civic')

let objecto={
    name: 'another',
    getName: honda.getName
}
console.log(objecto.getName());
