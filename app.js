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

var editCounter = 0;
var deleteCounter = 0;
var l = 0;
var m = 0;
var t = 10;
var f = 100;
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
        function editt() {
            Home.style.display = "none";
            editEmployee.style.display = "block";
            Stats.style.display = "none"; 
            editCounter = +firstButton.className;
            var fName = document.getElementById("fname").value;
            console.log(fName)
            fName = "";
            console.log(fName)
        }
        firstButton.addEventListener("click", editt);  
        function del() {
            if (m > 0 &&  +secondButton.className - 10 > deleteCounter && +secondButton.className > f) {
                t = 10 + (m - 0);
                console.log(t)
                deleteCounter = +secondButton.className - (t);
                console.log(deleteCounter);
                document.getElementsByClassName("tbody")[0].deleteRow(deleteCounter);
                m++; 
            } else{            
                deleteCounter = +secondButton.className - 10;
                f = +secondButton.className;
                console.log(deleteCounter);
                document.getElementsByClassName("tbody")[0].deleteRow(deleteCounter);
                m++;
            }

        } 
        secondButton.addEventListener("click", del);
    }
}
function Eddit() {
    console.log(editCounter);
    STAFF[editCounter].firstName = document.querySelector("#fname").value;
    STAFF[editCounter].lastName = document.querySelector("#lname").value;
    STAFF[editCounter].role = document.querySelector("#Role").value;
    STAFF[editCounter].salary = document.querySelector("#salary").value;
    console.log(STAFF[editCounter])
    Home.style.display = "block";
    editEmployee.style.display = "none";
    Stats.style.display = "none";
    var j = document.getElementsByClassName("tr")[editCounter];
    console.log(j)
    var td1 = j.getElementsByClassName("td")[0];
    var td2 = j.getElementsByClassName("td")[1];
    var td3 = j.getElementsByClassName("td")[2];
    var td4 = j.getElementsByClassName("td")[3];
    td1.innerHTML = STAFF[editCounter].firstName;
    td2.innerHTML = STAFF[editCounter].lastName;
    td3.innerHTML = STAFF[editCounter].role;
    td4.innerHTML = STAFF[editCounter].salary;
}
var eidtTheTable = document.getElementById("Edit0")
eidtTheTable.addEventListener("click", Eddit)


var submit = document.getElementById("submit");
submit.addEventListener("click" , showForm);

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
    var ul = document.getElementsByTagName("ul");
    if (ul) {
    var i;
    for(i = 0 ; i < ul.length; i++)  {
        ul[i].innerHTML = "";
    }
    }
    STAFF.forEach( function(item){
        if (item.role === res) {
            Salary =  +Salary + +item.salary;
            result.push(item);
            number++;
            var ul = document.getElementsByClassName("ul")[0];
            var ul = document.createElement("ul");
            ul.className = "ul";
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
    console.log(number);
    var paragraph = document.getElementsByTagName("p");
    if (paragraph) {
    var i;
    for(i = 0 ; i < paragraph.length; i++)  {
        paragraph[i].innerHTML = "";
    }
    }
    var p = document.createElement("p");
    p.className= "p";
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