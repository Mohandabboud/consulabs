var Home = document.getElementById("Home")
var editEmployee = document.getElementById("Edit-employee");
var editEmployee1 = document.getElementById("Edit-employee1")

var STAFF = [];
var keys = [0, 1, 2, 3];
var values = ["Development", "Creative", "Commercial", "Directive"];
var DEPARTMENTS = new Map();
for(var i = 0; i < keys.length; i++){
    DEPARTMENTS.set(keys[i], values[i]);
}
for (var key of DEPARTMENTS.keys()) {
    console.log(key + " : " + DEPARTMENTS.get(key) + "</br>")
}

function showHome () { 
    var card = document.querySelector(".tbody")
    STAFF.forEach(function (item) {
        var row = document.createElement("tr")
        for (const key in item) {
            var td = document.createElement("td");
            td.innerHTML = item[key]
            row.appendChild(td)
        }
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        row.appendChild(button1);
        row.appendChild(button2);
        card.appendChild(row);

    })
}

function showForm() {
    var Employee = {};
    Employee.firstName = document.querySelector("#fname").value;
    Employee.lastName = document.querySelector("#lname").value;
    Employee.role = document.querySelector("#DEPARTMENTS").value;
    Employee.salary = document.querySelector("#salary").value;
    console.log(Employee);
    STAFF.push(Employee);
    console.log(STAFF);
}
/*
function showHome () { 
    var number = 1;
    var card = document.querySelector(".tbody")
    STAFF.forEach(function (item) {
        if (item.firstName = number || typeof Id === 'undefined') {
        var Id = number;
        var row = document.createElement("tr");
        row.innerHTML= Id;
        for (const key in item) {
            var td = document.createElement("td");
            td.innerHTML = item[key]
            row.appendChild(td)
        }
        number++;
        var button1 = document.createElement("button");
        var button2 = document.createElement("button");
        button1.innerHTML = "Edit";
        button2.innerHTML = "Delete";
        row.appendChild(button1);
        row.appendChild(button2);
        card.appendChild(row);
    }
    })
}
*/
function showHome () { 
    var number = 1;
    var card = document.querySelector(".tbody")
    var i;
    for (i =  STAFF.length-1 ; i < STAFF.length; i++) {
        var Id = i;
        var row = document.createElement("tr");
        row.innerHTML= Id;
        for (const key in STAFF[i]) {
            var td = document.createElement("td");
            td.innerHTML = STAFF[i][key]
            row.appendChild(td)
        }
        var button1 = document.createElement("a");
        var button2 = document.createElement("button");
        button1.innerHTML = "Edit";
        button1.className = "button"
        button2.innerHTML = "Delete";
        row.appendChild(button1);
        row.appendChild(button2);
        card.appendChild(row);
        var firstButton = document.getElementsByClassName("button")[i];
        console.log(firstButton);
        function ChangeHref() {
            var url = new URL("http://127.0.0.1:8000/EditForm.html")
            url.searchParams.append("search", i-1)
            firstButton.href = url;
            console.log(url)
            }
        firstButton.addEventListener("click", ChangeHref)
    }
}

var submit = document.getElementById("submit");
submit.addEventListener("click" , showForm);
submit.addEventListener("click" , showHome);

function goBack() {
    Home.style.display = "block";
    editEmployee.style.display = "none";
}
var back = document.querySelector("#back");
submit.addEventListener("click" , goBack)

function AddEmployee() {
    Home.style.display = "none";
    editEmployee.style.display = "block";
}
var add = document.getElementById("Add");
add.addEventListener("click" , AddEmployee)

/*
if (Object.keys(Employee).length === 0) {
window.addEventListener("load", showForm)
} else {
window.addEventListener("load", showHome)  
}
*/
if (STAFF.length === 0) {
    Home.style.display = "none";
    editEmployee.style.display = "block";
}

