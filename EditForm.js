var array = [];
var Obj = {};
function EidtTheEmployee() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("search");
    Obj.firstName = document.getElementById("fname1").value;
    Obj.lastName = document.querySelector("#lname1").value;
    Obj.role = document.querySelector("#DEPARTMENTS1").value;
    Obj.salary = document.querySelector("#salary1").value;
    console.log(Obj)
    array.push(Obj);
    console.log(array[myParam]);
    console.log(array);
}
var Edit = document.getElementById("Edit");
Edit.addEventListener("click", EidtTheEmployee)