// https://calculator.swiftutors.com/compound-annual-growth-rate-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const compoundAnnualGrowthRateRadio = document.getElementById('compoundAnnualGrowthRateRadio');
const beginningValueRadio = document.getElementById('beginningValueRadio');
const endingValueRadio = document.getElementById('endingValueRadio');
const numberofYearsRadio = document.getElementById('numberofYearsRadio');

let compoundAnnualGrowthRate;
let beginningValue = v1;
let endingValue = v2;
let numberofYears = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

compoundAnnualGrowthRateRadio.addEventListener('click', function() {
  variable1.textContent = 'Beginning Value';
  variable2.textContent = 'Ending Value';
  variable3.textContent = 'Number of Years';
  beginningValue = v1;
  endingValue = v2;
  numberofYears = v3;
  result.textContent = '';
});

beginningValueRadio.addEventListener('click', function() {
  variable1.textContent = 'Compound Annual Growth Rate (CAGR)';
  variable2.textContent = 'Ending Value';
  variable3.textContent = 'Number of Years';
  compoundAnnualGrowthRate = v1;
  endingValue = v2;
  numberofYears = v3;
  result.textContent = '';
});

endingValueRadio.addEventListener('click', function() {
  variable1.textContent = 'Compound Annual Growth Rate (CAGR)';
  variable2.textContent = 'Beginning Value';
  variable3.textContent = 'Number of Years';
  compoundAnnualGrowthRate = v1;
  beginningValue = v2;
  numberofYears = v3;
  result.textContent = '';
});

numberofYearsRadio.addEventListener('click', function() {
  variable1.textContent = 'Compound Annual Growth Rate (CAGR)';
  variable2.textContent = 'Beginning Value';
  variable3.textContent = 'Ending Value';
  compoundAnnualGrowthRate = v1;
  beginningValue = v2;
  endingValue = v3;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(compoundAnnualGrowthRateRadio.checked)
    result.textContent = `Compound Annual Growth Rate = ${computeCompoundAnnualGrowthRate().toFixed(2)}`;

  else if(beginningValueRadio.checked)
    result.textContent = `Beginning Value = ${computeBeginningValue().toFixed(2)}`;

  else if(endingValueRadio.checked)
    result.textContent = `Ending Value = ${computeEndingValue().toFixed(2)}`;

  else if(numberofYearsRadio.checked)
    result.textContent = `Number of Years = ${computeNumberofYears().toFixed(2)}`;
})

// calculation

function computeCompoundAnnualGrowthRate() {
  return (Math.pow(Number(endingValue.value) / Number(beginningValue.value), 1/Number(numberofYears.value)) - 1) * 100;
}

function computeBeginningValue() {
  return (Number(straightLineDepreciation.value) * Number(usefulLifeinYears.value)) + Number(salvageValue.value);
}

function computeEndingValue() {
  return Number(assetValue.value) - (Number(straightLineDepreciation.value) * Number(usefulLifeinYears.value));
}

function computeNumberofYears() {
  return (Number(assetValue.value) - Number(salvageValue.value)) / Number(straightLineDepreciation.value);
}