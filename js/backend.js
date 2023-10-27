import getFormValues from './getFormValues.js';
import printDetails from './PrintSalarySlip.js';

const form = document.querySelector('#form');
const result = document.getElementById("result");

form.addEventListener("submit",function(e){
   e.preventDefault();
    
   const form = getFormValues()
   result.innerHTML = printDetails(form.firstName,form.grossPay,form.bonus,form.allowances,form.incometax,form.empInsurance,form.cpp,form.getGenderValue(),form.getDependantValue());

});