import calculateIncomeTax from "./calculateIncomeTax.js"

function calculateOnHandSalary(grossPay,bonus,allowances,incometax,empInsurance,cpp,gender,dependant){
    const grossSalary = grossPay + bonus + allowances 
    const totalTax = (calculateIncomeTax(incometax,gender,dependant)+empInsurance+cpp) 
    const deduction = ((grossSalary * totalTax)/100)
    const onHandSalary = grossSalary - deduction
    
    return onHandSalary

}

export default calculateOnHandSalary;