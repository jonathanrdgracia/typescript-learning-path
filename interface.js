"use strict";
var medico = {
    name: 'Jonathan',
    total: 33,
    currentBill: function () {
        return "" + this.total;
    }
};
var printStaff = function (staff) { return "" + staff.name; };
var printBill = function (bill) { return "" + bill.currentBill(); };
console.log("Nombre: " + printStaff(medico) + " " + printBill(medico));
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
