const BILL = document.querySelector('.bill-input');
const TIP_PERCENT = document.querySelectorAll('.percent');
const PEOPLE = document.querySelector('.number-input');
const TOTAL_BILL = document.getElementById('total');
const TIP_AMOUNT = document.getElementById('tip-amount');
const CUSTOM = document.querySelector('.custom');
const CUSTOM_BUTTON = document.getElementById('cst-btn')
const CUSTOM_INPUT = document.getElementById('cst-input')

let billValue;
let person;
let custom = 0;

let myArray = [5, 10, 15, 25, 50];
let tipAmount = 0;

let error = true;
let inputPeople = false;

const calculateHandler = () => {
    if (inputPeople) {
        let amount = (billValue + tipAmount) / person;
        TOTAL_BILL.textContent = `${amount.toFixed(2)}`;
    }
};

BILL.addEventListener('change', () => {
    error = !error;
    billValue = +BILL.value;
    // console.log(billValue)
    TIP_PERCENT.forEach((el, idx) => {
        let percent = myArray[idx];
        el.addEventListener('click', () => {
            if (CUSTOM.firstElementChild === CUSTOM_INPUT && idx === 5) {
                console.log('yes')
                CUSTOM_INPUT.addEventListener('change', () => {
                    console.log('yes')
                    percent = 20;
                })
            }
            tipAmount = BILL.value * (+percent / 100);
            TIP_AMOUNT.textContent = `${tipAmount}`;
            calculateHandler();
        });
    });
});

PEOPLE.addEventListener('input', () => {
    inputPeople = !inputPeople;
    person = +PEOPLE.value;
    // console.log(person)
    if (!error) {
        calculateHandler();
    }
});

CUSTOM.addEventListener('click', () => {
    if (CUSTOM.firstElementChild === CUSTOM_BUTTON) {
        CUSTOM.innerHTML = `<input type="number" id="cst-input" class="percent" placeholder="Custom" />`
    }

})