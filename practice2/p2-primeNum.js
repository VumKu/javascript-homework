
document.getElementById('btn').addEventListener('click', function(){

let a = document.getElementById('firstNum').value;
let b = document.getElementById('secondNum').value;


for (let dividend = 2; dividend <= 100; dividend++) {

    let isPrime = true;
    // console.log(dividend)

    // if ( a = 1 && dividend == a){
    //     let isPrime = false
    // }


    for (let dividsor = 2; dividsor < dividend; dividsor++) {
        if (dividend % dividsor == 0) {
            isPrime = false;
        }
    }   

    if (isPrime == false) {
        // console.log(dividend + ' not prime.')
    }
    else {
        // console.log(dividend + ' is prime.')

        let answer = document.getElementById('CommonMultipleAnswer')

        let li = document.createElement('li')
        let textNode = document.createTextNode(dividend + ' 是質數')

        li.appendChild(textNode);
        answer.appendChild(li);
    }
}

document.getElementById('btn').setAttribute('disabled', true)

})


// 如果想設範圍a-b
// bug1 - 不管怎麼設條件，1還是會被歸入prime中 (13-15)
// bug2 - 不知道為什麼有範圍印不出來結果
// bug3 -想學重置鍵