const form = document.querySelector('#form');
const result = document.getElementById("result");

function calculateOnHandSalary(grossPay,bonus,allowances,incometax,empInsurance,cpp,gender,dependant){
    const grossSalary = grossPay + bonus + allowances 
    const totalTax = (calculateIncomeTax(incometax,gender,dependant)+empInsurance+cpp) 
    const deduction = ((grossSalary * totalTax)/100)
    const onHandSalary = grossSalary - deduction
    
    return onHandSalary

}

function calculateIncomeTax(incometax,gender,dependant){
    if (gender === "male"){
        if (dependant === 3){
            return (incometax - 2)
        }else if(dependant === 4){
            return (incometax - 4)
        }else{
            return incometax
        }
    }else{
        if (dependant === 4){
            return (incometax - 4) // applying 2 % deduction for female employee
        }else if(dependant === 4){
            return (incometax - 6) // applying 2 % deduction for female employee
        }else{
            return (incometax - 2) // applying 2 % deduction for female employee
        }    
    }   
}

function printDetails(firstName,grossPay,bonus,allowances,incometax,empInsurance,cpp,genderValue,dependantValue){
    return `
            Name of the Employee : ${firstName}
            Gender of the Employee : ${genderValue}
            Number of dependants : ${dependantValue}
            Total Salary : ${( grossPay + bonus + allowances )}
            On Hand salary : ${calculateOnHandSalary(grossPay,bonus,allowances,incometax,empInsurance,cpp,genderValue,dependantValue)}
            Total Deduction : ${((( grossPay + bonus + allowances ) * calculateIncomeTax(incometax,genderValue,dependantValue)+empInsurance+cpp))/100}
    `
}

form.addEventListener("submit",function(e){
   e.preventDefault();
   
 
   const firstName = document.querySelector('#firstName').value;
   const grossPay = parseInt(document.querySelector('#grossPay').value);
   
   const bonus = parseInt(document.querySelector('#bonus').value);
   const allowances = parseInt(document.querySelector('#allowances').value);
   
   const incometax = parseInt(document.querySelector('#incometax').value);
   const empInsurance = parseInt(document.querySelector('#empInsurance').value);
   const cpp = parseInt(document.querySelector('#cpp').value);
   
   let genderValue
   const gender = document.getElementsByName("gender");
   for (let i = 0; i < gender.length;i ++){
        if(gender[i].checked){
            genderValue = gender[i].value
        }
   }

   let dependantValue
   const dependant = document.getElementsByName("dependants");
   for (let i = 0; i < dependant.length;i ++){
    if(dependant[i].checked){
        dependantValue = parseInt(dependant[i].value)
        }
    }
    console.log("income", typeof incometax)
     result.innerHTML = printDetails(firstName,grossPay,bonus,allowances,incometax,empInsurance,cpp,genderValue,dependantValue);

});