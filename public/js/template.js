// holding data
let arr = [];
let objHome = {
    price: 0,
    lotSqFt: 0,
    sqFt: 0,
    avg: 0
};

// form document
const stack = document.querySelector('#stack');
const stackPrice = document.querySelector('#stackPrice');
const stackSqFt = document.querySelector('#stackSqFt');
const stackLotSqFt = document.querySelector('#stackLotSqFt');
const stackBtn = document.querySelector('#stackBtn');
const text = document.querySelector('#add5');

// averages text 
const avgPrice = document.querySelector('#avgPrice'); 
const avgLot = document.querySelector('#avgLot'); 
const avgSq = document.querySelector('#avgSq'); 
const avgPriceSq = document.querySelector('#avgPriceSq'); 

// functions and logic
const averages = (text, num, avg) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][num];
        let total = sum / arr.length;
        text.innerHTML = `${avg}: $${total.toFixed(2)}`;  
    }
};

const addHomes = (val, sqVal, lotVal, obj) => {
    if (val.value === '' || sqVal.value === '' || lotVal.value === '') {
        alert('Please enter a number.');
    } else {
        let num = Number(val.value);
        let lotSq = Number(lotVal.value);
        let sqFt = Number(sqVal.value);
        obj.price += num
        obj.lotSqFt += lotSq;
        obj.sqFt += sqFt;
        
        val.value = '';
        sqVal.value = '';
        lotVal.value = '';
        objHome.avg += objHome.price / objHome.sqFt;
        primary.style.display = 'none';
    } 
}

stackBtn.addEventListener('click', () => {
    addHomes(stackPrice, stackSqFt, stackLotSqFt, objHome);
    if (objHome.price === 0 || objHome.lotSqFt === 0 || objHome.sqFt === 0) {
        alert('Not Valid');
    } else {
        arr.push([objHome.price, objHome.lotSqFt, objHome.sqFt, objHome.avg]);
    }

    objHome.price = 0;
    objHome.lotSqFt = 0;
    objHome.sqFt = 0;
    objHome.avg = 0;

    averages(avgPrice, 0, 'Average Home Price');
    averages(avgLot, 1, 'Average Lot Square Foot');
    averages(avgSq, 2, 'Average Square Foot');
    averages(avgPriceSq, 3, 'Average Price Per Square Foot');

    text.style.display = 'none';

    console.log(primaryHome.price);

    if (arr.length === 2) {
        stack.style.display = 'none';
        let sum = 0;
        for (let i = 0; i < arr.length; i++) {
            sum += arr[i][3];
            let total = sum / arr.length;
            console.log(primaryHome.price * total);  
        }
    }
    console.log(arr);
});