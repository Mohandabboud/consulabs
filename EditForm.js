var array = [];
var Obj = {};
function EidtTheEmployee() {
    const urlParams = new URLSearchParams(window.location.search);
    const myParam = urlParams.get("Id");
    Obj.firstName = document.getElementById("fname1").value;
    Obj.lastName = document.querySelector("#lname1").value;
    Obj.role = document.querySelector("#DEPARTMENTS1").value;
    Obj.salary = document.querySelector("#salary1").value;
    console.log(Obj)
    array.push(Obj);
   // console.log(array[myParam]);
    console.log(array);
    var a = document.getElementById("Edit");
    a.href = "http://127.0.0.1:8000/index.html?firstName:"+Obj.firstName+" lastName:"+Obj.lastName+" role:"+Obj.role+" salary:"+Obj.salary+" Id:"+myParam;

}


var Edit = document.getElementById("Edit");
Edit.addEventListener("click", EidtTheEmployee)
