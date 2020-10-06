

//High order function
//  class Family{
//     constructor(
//         public readonly name: string,
//         public readonly castles: string[]
//     ){}
// }

// const lannister = new Family('Lannister', ['Winterfell','Casterly Rock'])
// const targayen = new Family('Targaryen', ['Dragonstone','Summerhall'])

//  const families: Family[] = [lannister, targayen]

// interface CastleByFamily{
//     (err?: Error, castles?: string[]): void
// }

// function getCastlesByFamily(family: string, callback: CastleByFamily): void{
//     setTimeout(() => {
//         try {
//             const foundCastle = families.filter((x)=> x.name == family)

//             if(foundCastle.length > 0){
//                 callback(undefined,foundCastle.map((x)=> x.castles)[0] )
//             }else{
//                 throw new Error('Family not found')
//             }
//         } catch (err) {
//             callback(err, undefined)
//         }

//     }, 2000);
// }

// function logCastleSearch(err?: Error, castles?: string[]):void{
//     if(err){
//         console.log(`Mensaje de error ${err.message}`);
        
//     }else{
//         console.log(castles);
        
//     }
// }

// getCastlesByFamily('Targaryen',logCastleSearch)