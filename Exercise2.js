
let countOfTrue = 0;
function countTrue(bools) {
    
    for (let i=0; i <= bools.length; i++){
        if (bools[i] === true){
            countOfTrue+=1;
        }
        return countOfTrue;
    }

console.log(countOfTrue);
}