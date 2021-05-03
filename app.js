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
var u = 0;
var h = 0;
var l = 0;
function showHome () { 
    var number = 1;
    var card = document.querySelector(".tbody")
    var i;
    for (i =  STAFF.length-1 ; i < STAFF.length; i++) {
        var Id = document.createElement("td");
        var row = document.createElement("tr");
        row.className = "tr";
        Id.innerHTML= i;
        row.appendChild(Id);
        for (const key in STAFF[i]) {
            var td = document.createElement("td");
            td.className = "td"
            td.innerHTML = STAFF[i][key]
            row.appendChild(td)
        }
        var a = document.createElement("a");
        var deleteButton = document.createElement("button");
        a.innerHTML = "Edit";
        a.className = i;
        l = i +10;
        deleteButton.innerHTML = "Delete";
        deleteButton.className = l;
        row.appendChild(a);
        row.appendChild(deleteButton);
        card.appendChild(row);
        var firstButton = document.getElementsByClassName(i)[0];
        console.log(firstButton);
        var secondButton = document.getElementsByClassName(l)[0];
        console.log(secondButton);
        //console.log(firstButton);
        //a.href = "http://127.0.0.1:8000/EditForm.html?Id="+Id
        function editt() {
            Home.style.display = "none";
            editEmployee.style.display = "block";
            Stats.style.display = "none"; 
            u = +firstButton.className;
        }
        firstButton.addEventListener("click", editt);  
        function del() {
            h = +secondButton.className - 10;
            console.log(h);
            document.getElementsByClassName("tbody")[0].deleteRow(h);
      
        } 
        secondButton.addEventListener("click", del);
    }
}
function Eddit() {
    console.log(u);
    STAFF[u].firstName = document.querySelector("#fname").value;
    STAFF[u].lastName = document.querySelector("#lname").value;
    STAFF[u].role = document.querySelector("#Role").value;
    STAFF[u].salary = document.querySelector("#salary").value;
    console.log(STAFF[u])
    Home.style.display = "block";
    editEmployee.style.display = "none";
    Stats.style.display = "none";
    var j = document.getElementsByClassName("tr")[u];
    console.log(j)
    var td1 = j.getElementsByClassName("td")[0];
    var td2 = j.getElementsByClassName("td")[1];
    var td3 = j.getElementsByClassName("td")[2];
    var td4 = j.getElementsByClassName("td")[3];
    td1.innerHTML = STAFF[u].firstName;
    td2.innerHTML = STAFF[u].lastName;
    td3.innerHTML = STAFF[u].role;
    td4.innerHTML = STAFF[u].salary;
}
var z = document.getElementById("Edit0")
z.addEventListener("click", Eddit)


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