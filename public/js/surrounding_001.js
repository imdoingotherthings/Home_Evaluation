// holding data
let arr = [];
let objHome = {
    price: 0,
    lotSqFt: 0,
    sqFt: 0,
    avg: 0
};

// form document
let stack = document.querySelector('#stack');
let stackPrice = document.querySelector('#stackPrice');
let stackSqFt = document.querySelector('#stackSqFt');
let stackLotSqFt = document.querySelector('#stackLotSqFt');
let stackBtn = document.querySelector('#stackBtn');

// logic
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
        console.log(obj);
        primary.style.display = 'none';
    } 
}

stackBtn.addEventListener('click', () => {
    addHomes(stackPrice, stackSqFt, stackLotSqFt, objHome);
    arr.push([objHome.price, objHome.lotSqFt, objHome.sqFt, objHome.avg]);

    objHome.price = 0;
    objHome.lotSqFt = 0;
    objHome.sqFt = 0;
    objHome.avg = 0;

    console.log(objHome);
    console.log(arr);
});

if (arr.length === 5) {
    alert("If you don't have enough surrounding homes. We could stop at FIVE homes.");
}