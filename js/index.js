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

// this function addsArrays 
const addArr = (val, sqVal, lotVal, obj) => {
    if (val.value === '' || sqVal.value === '' || lotVal.value === '') {
        alert('Please enter a number.');
    } else {
        let num = Number(val.value);
        let lotSq = Number(lotVal.value);
        obj.price += num
        obj.lotSqFt += lotSq;
        obj.sqFt += sqFt;
        
        val.value = '';
        sqVal.value = '';
        lotVal.value = '';
        primaryHome.avg += primaryHome.price / primaryHome.sqFt;
        console.log(obj);
        primary.style.display = 'none';
        let sqFt = Number(sqVal.value);
        // for (let i = 0; i < obj.length; i++) {
        //     home.appendChild(`<li>obj[i]</li>`);
        // }
    } 
}

primeBtn.addEventListener('click', () => {
    addArr(primeIn, primeLotSqFt, primeSqFt, primaryHome);
});

