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
    // return `
    //         Name of the Employee : ${firstName}
    //         Gender of the Employee : ${genderValue}
    //         Number of dependants : ${dependantValue}
    //         Total Salary : ${( grossPay + bonus + allowances )}
    //         On Hand salary : ${calculateOnHandSalary(grossPay,bonus,allowances,incometax,empInsurance,cpp,genderValue,dependantValue)}
    //         Total Deduction : ${((( grossPay + bonus + allowances ) * calculateIncomeTax(incometax,genderValue,dependantValue)+empInsurance+cpp))/100}
    // `
    return `
    <div>
        <h5> Name of the Employee : ${firstName}</h5>
        <h5> Gender of the Employee : ${genderValue}</h5>
        <h5> Number of dependants : ${dependantValue}</h5>
        <h5> Total Salary : ${( grossPay + bonus + allowances )} </h5>
        <h5>  Total Deduction : ${((( grossPay + bonus + allowances ) * calculateIncomeTax(incometax,genderValue,dependantValue)+empInsurance+cpp))/100}</h5> 
        <h5> On Hand salary : ${calculateOnHandSalary(grossPay,bonus,allowances,incometax,empInsurance,cpp,genderValue,dependantValue)} </h5>  
    </div>
    `
}
function getFormValues(){
   let formValues = {

    firstName : document.querySelector('#firstName').value,
    grossPay : parseInt(document.querySelector('#grossPay').value),
    bonus : parseInt(document.querySelector('#bonus').value),
    allowances : parseInt(document.querySelector('#allowances').value),
    incometax : parseInt(document.querySelector('#incometax').value),
    empInsurance : parseInt(document.querySelector('#empInsurance').value),
    cpp : parseInt(document.querySelector('#cpp').value),

    genderValue : document.getElementsByName("gender"),
    dependantValue : document.getElementsByName("dependants"),
    getGenderValue(){
        for (let i = 0; i < this.genderValue.length;i ++){
            if(this.genderValue[i].checked){
              return this.genderValue[i].value
            }
        }
    },
    getDependantValue : function(){
        for (let i = 0; i < this.dependantValue.length;i ++){
            if(this.dependantValue[i].checked){
               return this.dependantValue[i].value
            }
        }
    },
   }
    return formValues 
}

form.addEventListener("submit",function(e){
   e.preventDefault();
    
   const form = getFormValues()
   result.innerHTML = printDetails(form.firstName,form.grossPay,form.bonus,form.allowances,form.incometax,form.empInsurance,form.cpp,form.getGenderValue(),form.getDependantValue());

});