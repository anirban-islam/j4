function checkDigitsInName(name) {
   
    if (typeof name !== 'string') {
        return "Invalid Input";
    }
    const checkN = /\d/.test(name);
    
    return checkN;
}
