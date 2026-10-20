fetch("https://dummyjson.com/products")
.then(response => response.json())
.then(Data =>{
    console.log(Data);
})
.catch(error =>{
    console.log(error);
})

let age = 19;

let promise = new Promise((resolve,reject)=>{
     
     if(age>=18) {
    resolve("u are adult");

} else {
    reject("don't allow");
}

});
promise.then(result =>{
    console.log(result);
});
promise.catch(error =>{
    console.log(error);
});