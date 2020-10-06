"use strict";
class Family {
    constructor(name, castles) {
        this.name = name;
        this.castles = castles;
    }
}
const first = new Family('Name one', ['Castle one', 'Castle two']);
const second = new Family('Name two', ['Castle second', 'Castle second two']);
const families = [first, second];
function getCastleByFamily(family) {
    let p = new Promise((resolve, reject) => {
        const foundCastle = families.filter((x) => x.name == family);
        if (foundCastle.length > 0) {
            const data = foundCastle.map(castle => castle.castles)[0];
            resolve(data);
        }
        else {
            reject('Bada');
        }
    });
    return p;
}
getCastleByFamily('Name two').then(console.log).catch(console.log);
//  class Family{
//     constructor(
//         public readonly name: string,
//         public readonly castles: string[]
//     ){}
// }
// const lannister = new Family('Lannister', ['Winterfell','Casterly Rock'])
// const targayen = new Family('Targaryen', ['Dragonstone','Summerhall'])
// const families: Family[] = [lannister, targayen]
// //! Promise uses generics
// function getCastleByFamily(family: string): Promise<string[]> {
//     let p: Promise<string[]> = new Promise((resolve,reject) => {
//     setTimeout(()=>{
//         const foundCastle = families.filter((e)=> e.name == family)
//         if(foundCastle.length > 0){
//             let castles = foundCastle.map((x)=>x.castles)[0]
//             resolve(castles)
//         }else{
//             reject('Not found')
//         }
//     },2000)
//     });
//     return p;
// }
// getCastleByFamily('')
//     .then((result)=>{
//         console.log(result);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
