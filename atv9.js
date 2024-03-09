//numero primo 
let num = 11;
let divisores = 0;
for(let i = 1; i<=num; i++){
    if(num % i === 0)
    divisores++;
}
if(divisores==2){
    console.log("primo");
}
else{
    console.log("não é Primo");
}