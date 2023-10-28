import calculateIncomeTax from "./calculateIncomeTax.js";
import calculateOnHandSalary from "./calculateSalary.js";

function printDetails(firstName,grossPay,bonus,allowances,incometax,empInsurance,cpp,genderValue,dependantValue){
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

export default printDetails;