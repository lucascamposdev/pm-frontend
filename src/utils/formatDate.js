const formatDate = (dateString) =>{
    let dateObject = new Date(dateString);

    let day = dateObject.getDate().toString().padStart(2, '0');
    let month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    let year = dateObject.getFullYear();

    let formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
}

export default formatDate