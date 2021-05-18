const urlChecker = (url) => {
    let check = url.match(/^(ftp|http|https):\/\/[^ "]+$/);
    if (check === null){
        alert("Please enter a valid URL beginning with http:// or https://")
    } else {
    return true }
}

export {urlChecker}
