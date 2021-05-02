var Home = document.getElementById("Home")
var editEmployee = document.getElementById("Edit-employee");
var editEmployee1 = document.getElementById("Edit-employee1");
var Stats = document.getElementById("Stats");
console.log(Stats)

var STAFF = [];
if (STAFF.length === 0) {
    Home.style.display = "none";
    editEmployee.style.display = "block";
    Stats.style.display = "none";
} else {
    Home.style.display = "block";
    editEmployee.style.display = "none";
    Stats.style.display = "none";
}
/*var keys = [0, 1, 2, 3];
var values = ["Development", "Creative", "Commercial", "Directive"];
var DEPARTMENTS = new Map();
for(var i = 0; i < keys.length; i++){
    DEPARTMENTS.set(keys[i], values[i]);
}
for (var key of DEPARTMENTS.keys()) {
    console.log(key + " : " + DEPARTMENTS.get(key) + "</br>")
}
*/
var DEPARTMENTS = {
    development: "Development", 
    creative: "Creative", 
    commercial: "Commercial", 
    directive: "Directive"
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
    Employee.role = document.querySelector("#Role").value;
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
        var a = document.createElement("a");
        var button2 = document.createElement("button");
        a.innerHTML = "Edit";
        a.className = "button"
        button2.innerHTML = "Delete";
        row.appendChild(a);
        row.appendChild(button2);
        card.appendChild(row);
        var firstButton = document.getElementsByClassName("button")[i];
        console.log(firstButton);
        //function ChangeHref() {
        a.href = "http://127.0.0.1:8000/EditForm.html?Id="+Id
        //    }
     //   firstButton.addEventListener("click", ChangeHref)
    //}
}
}

var submit = document.getElementById("submit");
submit.addEventListener("click" , showForm);
//submit.addEventListener("click" , showHome);

function getEmployee() {
    console.log(STAFF);
    Home.style.display = "none";
    editEmployee.style.display = "none";
    Stats.style.display = "block";
}
var stats = document.getElementById("stats");
stats.addEventListener("click", getEmployee)

function goBack() {
    Home.style.display = "block";
    editEmployee.style.display = "none";
}
var back = document.querySelector("#back");
back.addEventListener("click" , showHome);
back.addEventListener("click" , goBack)

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

function Analyze() {
    var department = document.getElementById("Role1");
    var res = department.options[department.selectedIndex].value;
    console.log(department)
    var minAge = document.getElementById("minAge").value;
    var maxAge = document.getElementById("maxAge").value;
    var number = 0;
    var Salary = 0;
    var avgSalary = 0;
    var result = [];
    STAFF.forEach( function(item){
        if (item.role === res) {
            Salary =  +Salary + +item.salary;
            result.push(item);
            number++;
            var ul = document.createElement("ul");
            var li1 = document.createElement("li");
            var li2 = document.createElement("li");
            var li3 = document.createElement("li");
            var li4 = document.createElement("li");
            li1.innerHTML = item.firstName;
            li2.innerHTML = item.lastName;
            li3.innerHTML = item.role;
            li4.innerHTML = item.salary;
            ul.appendChild(li1);
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
            Stats.appendChild(ul)
            console.log(Salary)
        }
    })
    avgSalary = Salary/number;
    console.log(Salary)
    console.log(number)
    var p = document.createElement("p");
    p.innerHTML = "In the dept. "+res+" between "+minAge+" and "+maxAge+" the are "+number+" employees that takes "+avgSalary+" on average."
    Stats.appendChild(p)
}

var analyze = document.getElementById("analyze");
analyze.addEventListener("click", Analyze);

function getBack () {
    Home.style.display = "block";
    editEmployee.style.display = "none";
    Stats.style.display = "none";
}

var goHomePage = document.getElementById("back1");
goHomePage.addEventListener("click", getBack)