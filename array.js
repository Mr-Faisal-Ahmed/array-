//let car = ["BMW","corolla","civic","Audi"];
//console.log(car[car.length -1]);
//car.sort();
//console.log(car);
//const n= 5;
//for(let i=0 ;i<=n; i++){
//console.log(i);
//}
//let sum =0;
//const n= 100
//for( let i = 1; i<=n; i++){
    //sum +=i;
//}
//console.log('sum',sum)
//let arr=[1,2,3,4,5,2,6,8]

//for(let i = 0; i < arr.length -1;i++){
    //console.log(arr[i])
//}
//for(let i of arr){
    //console.log(i);
//}
//function add(a,b){
    //return (a*b);
//}
//let res = add(4,5)
//console.log(res);

function func(arr){
    let sum = 0;
    for (let i = 0; i < arr.length;i++){

    
    
if(arr[i] % 2==0 ){
    
    sum = sum+ arr[i];
    }
    

}
return sum;
}



let arr = [1,5,6,6,6,2,2,2];
let a = func(arr);
console.log(a);
