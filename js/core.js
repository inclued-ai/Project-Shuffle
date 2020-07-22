function getDateTimeForStorage() {
    return new Date().toUTCString().slice(0, -4);
}

function recordResult(results){
    // TODO #5: Record results
    console.log(results);
}