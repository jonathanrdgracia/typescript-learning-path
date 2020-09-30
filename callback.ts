function sum(val1: number, val2: number, result: (result: number)=>void ){
    result(val1+val2)
}

sum(2,2,(x)=>{
    console.log(x)
})