const formatDate = (dateString) =>{
    let dateObject = new Date(dateString);

    let day = dateObject.getDate();
    let month = dateObject.getMonth() + 1; 
    let year = dateObject.getFullYear();
  
    var formatedDate = day + "/" + month + "/" + year;

    return formatedDate
}

export default formatDate