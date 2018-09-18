// primary values
let primaryHome = {
    price: 0,
    lotSqFt: 0,
    sqFt: 0,
    avg: 0
};
let primeIn = document.querySelector('#primeIn');
let primeSqFt = document.querySelector('#primeSqFt');
let primeLotSqFt = document.querySelector('#primeLotSqFt');
let primeBtn = document.querySelector('#primeBtn');
let primary = document.querySelector('#primary');
let home = document.querySelector('#home');

// reset value
const reset = document.querySelector('#reset');

document.querySelector('#stack').style.display = 'none';
document.querySelector('#mortgageStackComplex').style.display = 'none';

// this function adds to the obj 
const addArr = (val, sqVal, lotVal, obj) => {
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
        primaryHome.avg += primaryHome.price / primaryHome.sqFt;
        primary.style.display = 'none';
    } 
}

reset.addEventListener('click', () => {
    // we want to reset the obj
    primaryHome.price = 0;
    primaryHome.lotSqFt = 0;
    primaryHome.sqFt = 0;
    primaryHome.avg = 0;
    primary.style.display = 'block';
});

primeBtn.addEventListener('click', () => {
    addArr(primeIn, primeLotSqFt, primeSqFt, primaryHome);
    document.querySelector('#stack').style.display = 'block';
    text.innerHTML = "Add 5 or more homes for full evaluation. 10 homes is ideal."
});

document.querySelector('#foot').innerHTML = `Created by Asai Andrade - Copyright ${new Date().getFullYear()}`;