const capitalizeInput = (inputString) => {
    const words = inputString.split(' ');
    
    const capitalizedWords = words.map(word => word.charAt(0).toLocaleUpperCase() + word.substring(1));
  
    const resultString = capitalizedWords.join(' ');
  
    return resultString;
}

export default capitalizeInput;