function calculateTax(income , expense){
    if(income<0 || expense < 0 || income < expense){
       
        return"Invalid Input";
    }
    else{
        const sub = income - expense ;
        const tax = sub*0.20; 
        return tax;
    } 
}

console.log(calculateTax(6000,-1500))


