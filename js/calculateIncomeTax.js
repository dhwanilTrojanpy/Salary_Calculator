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

export default calculateIncomeTax;