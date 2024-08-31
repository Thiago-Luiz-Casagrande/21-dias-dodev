arrayA = [2,52,8,14,27,48,52,73,49,24]
arrayB = [34,41,69,73,24,50,22,9,98,87]
arrayC = []
let y = 0

function acharSemelhanca(){
for(let i = 0; i<10;i++){
    for(let x = 0; x<10; x++){
        if(arrayA[x] == arrayB[i]){
        arrayC[y] = arrayA[x]
        y++
        }
    }
}

console.log('Array A: '+ arrayA)
console.log('Array B: '+ arrayB)
console.log('Array C: '+ arrayC)
return(y)
}
