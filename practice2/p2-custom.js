
document.getElementById('btn').addEventListener('click', function(){

let a = document.getElementById('firstNum').value;
let b = document.getElementById('secondNum').value;

function getGcd(a,b){
    let max = Math.max(a,b);
    let min = Math.min(a,b);
    if (max % min === 0 ){
        return min;
    }
    else{
        return getGcd(max % min, min)
    }
}

// console.log(getGcd(a,b))

function getLcm(a,b){
    return a * b / getGcd(a,b)  
}

// console.log(getLcm(a,b))

let answer = document.getElementById('CommonMultipleAnswer')

let li = document.createElement('li')
let textNode = document.createTextNode(getLcm(a,b) + ` 是${a}和${b}的最小公倍數`)

li.appendChild(textNode);
answer.appendChild(li);

document.getElementById('btn').setAttribute('disabled', true)

})



document.getElementById('btn100').addEventListener('click', function(){

let a = document.getElementById('firstNum').value;
let b = document.getElementById('secondNum').value;

function getGcd(a,b){
    let max = Math.max(a,b);
    let min = Math.min(a,b);
    if (max % min === 0 ){
        return min;
    }
    else{
        return getGcd(max % min, min)
    }
}
    
// console.log(getGcd(a,b))
    
function getLcm(a,b){
    return a * b / getGcd(a,b)  
}
    
// console.log(getLcm(a,b))   

for ( let dividend = 1; dividend <= 100; dividend++){
    if (dividend % a == 0 && dividend % b ==0 ){
        // console.log(dividend + ` 是${a}和${b}的公倍數`)

        let answer = document.getElementById('CommonMultipleAnswer')

        let li = document.createElement('li')
        let textNode = document.createTextNode(dividend + ` 是${a}和${b}的公倍數`)

        li.appendChild(textNode);
        answer.appendChild(li);
    }
}

document.getElementById('btn100').setAttribute('disabled', true)

})


// bug1 - btn100就算沒輸入數字，按下之後還是會disabled，但btn不會...



// document.getElementById('btn').addEventListener('click', function(){

//     let answer = document.getElementById('CommonMultipleAnswer')

// for ( let dividend = 1; dividend <= 100; dividend++ ){
//     if ( dividend % 3 == 0 && dividend % 4 == 0 ){
//         console.log( dividend + `是3和4的公倍數`)
        
//         let li = document.createElement('li')
//         let textNode = document.createTextNode(dividend + ` 是3和4的公倍數`)

//         li.appendChild(textNode)
//         answer.appendChild(li)

//     }
//     else{
//         console.log ( dividend + `不是3和4的公倍數`)
//     }
// }

// document.getElementById('btn').setAttribute('disabled', true)

            
// })

// function formReset(){
//     document.getElementsByClassName('content').reset();
// }

