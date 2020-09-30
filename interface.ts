interface IStaff{
    name: string
}

interface IBillable{
    total: number,
    currentBill(): string
}

let medico={
    name:'Jonathan',
    total:33,
    currentBill(){
        return `${this.total}`
    }
}

const printStaff=(staff: IStaff )=> `${staff.name}`;
const printBill=(bill: IBillable) => `${bill.currentBill()}`

console.log(`Nombre: ${printStaff(medico)} ${printBill(medico)}`);

















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
