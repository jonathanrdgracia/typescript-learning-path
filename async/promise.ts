class Family{
    constructor(
        public readonly name: string,
        public readonly castles: string[]
    ){}
}

const first = new Family('Name one',['Castle one','Castle two'])
const second = new Family('Name two',['Castle second','Castle second two'])

const families: Family[] =[first,second]

function getCastleByFamily(family: string): Promise<string[]> {
    const foundCastle = families.filter((x)=> x.name == family);
    let p: Promise<string[]> = new Promise((resolve,reject)=>{
        
        setTimeout(() => {

            if(foundCastle.length > 0){
                const data = foundCastle.map(castle => castle.castles)[0]
                resolve(data)
            }else{
                reject('Bada')
            }
        }, 2000);
    })


    return p;



}
    getCastleByFamily('Name two').then(console.log).catch(console.log);
    
  