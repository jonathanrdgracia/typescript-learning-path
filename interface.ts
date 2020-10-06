interface Staff{
    id: number
    name: string
}
interface Billable{
    total: number
    bill(): string
}

const person={
    name:'jonathan',
    id:33,
    total:22,
    bill(){
        return `${this.total}`
    }
}
const printStaff=(staff: Staff)=>{
    console.log(staff.name);
}

const printBill=(bill: Billable)=>{
    console.log(bill.bill());
    
}
printBill(person)



















// interface IStaff{
//     id: number,
//     nombre:string,
// }

// interface IBillable{
//     total: number,
//     currentBill(): string
// }

// let medico={
//     id: 22,
//     nombre: 'jonathan',
//     total: 2,
//     currentBill(){
//         return `${this.total}`
//     }
// }

// const printBill=(bill: IBillable)=> console.log(bill.currentBill());

// const printStaff=(staff: IStaff)=>{
//     console.log(staff.nombre);
    
// }

// printBill(medico)
