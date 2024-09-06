fetch("https://jsonplaceholder.typicode.com/photos")

.then(function(item){
return item.json();
})
.then (function(element){
document.querySelector(".test img").src = element[0].url;

document.querySelector(".test h2").innerHTML = element[0].title;

document.querySelector(".test h5").innerHTML = element[0].id;

})