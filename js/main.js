let data=[...document.getElementsByTagName("div")]
console.log(data);
let html=""
data.forEach((elem) => {
    elem.addEventListener("click",function() {
        elem.classList.toggle("active")
        elem.classList.toggle("radius")
    
    })
});