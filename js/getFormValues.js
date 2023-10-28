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

 export default getFormValues;