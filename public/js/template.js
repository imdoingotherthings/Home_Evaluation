// holding data
let arr = [];
let objHome = {
    price: 0,
    lotSqFt: 0,
    sqFt: 0,
    avg: 0
};



let mortgage = {
    listPrice: 0,
    fairPrice: 0,
    discount: 0,
    purchasePrice: 0,
    percentDown: 0,
    downPayment: 0,
    amtFinance: 0,
    interest: 0,
    costOfRepairs: 0,
    payment: 0,
    years: 0,
    monthlyMrtg: 0,
    rentReady: 0,
    totalOfAVG: 0
}

// form document
const avgsStack = document.querySelector('#averagesStack');
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
const fair = document.querySelector('#fairMarket'); 
const yourHome = document.querySelector('#yourHome'); 

// functions and logic - this is the average of the houses
const averages = (text, num, avg) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i][num];
        mortgage.totalOfAVG = sum / arr.length;
        text.innerHTML = `${avg}: $${mortgage.totalOfAVG.toFixed(2)}`;  
    }
};

// this is the primary home calculation
const addHomes = (val, sqVal, lotVal, obj) => {
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

// this is the event listener that does all the calculation for all the houses 
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

    if (arr.length === 2) {
        stack.style.display = 'none';
        avgsStack.style.display = 'none';
        document.querySelector('#mortgageStackComplex').style.display = 'block';
        // yourHome.innerHTML = `Your Home Price: $${primaryHome.price}`;
        // fair.innerHTML = `Fair Market Value: $${mortgage.totalOfAVG * primaryHome.price.toFixed(2)}`;
    }
});