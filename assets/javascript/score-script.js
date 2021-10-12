var names = document.getElementById("names-scores");

var localName = localStorage.getItem("usernames");
if(localName !== null) {
    var parsedData = JSON.parse(localName);
}

names.innerText = localName;
console.log(localName)