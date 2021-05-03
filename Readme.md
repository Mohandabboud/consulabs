We are going to implement a simple demo human resources software.

The application will be realized entirely in HTML, CSS and Javascript without server and database. In this demo data won't be permanent, all data will be handled by javascript variables.

I suggest to integrate Bootstrap in order to easily design the application. You can design good forms without writing any css simply by loading theirs (https://getbootstrap.com/docs/4.0/components/forms/ for design). Also jQuery should be useful but vanilla JS is enough if you prefere.


Prepare the project creating the HTML page, loading the JS and CSS files and integrate all the eventual libraries and frameworks you would like to use.
Define a global variable STAFF, as an empty array of Employee objects
Define a global variable DEPARTMENTS, as a key value array populated with the following depts: 
development: "Development", 
creative: "Creative", 
commercial: "Commercial", 
directive: "Directive"
Prepare the HTML, it will contain 3 sections: Home (Employees list), Edit employee (Form), Stats (some analysis).
Prepare the JS, create 3 functions to handle the sections (showHome, showForm, showStats). Init them to show the related HTML and hide the others.
Init the application by calling the right function: if STAFF is empty show the form to insert them, else show homepage.
Prepare the HTML of Form section, show page title, back button, form and submit button.Add the Employee fields to the form:
- first_name > type string, text field
- last_name > type string, text field
- role > type relation, select field, show DEPARTMENTS content as options
- salary > type number, text field
Handle the form submit to add the employee object to the STAFF array
Handle the back button click and call showHome
Prepare the HTML of the Home section, add title, add employeee button, go to stats button and a table with the headings in the thead and the tbody for the contents. 
Modify the showHome javascript to populate the table tbody with the STAFF. Each row will contain an edit button and a delete button.
Modify the showForm function to get an optional employee parameter. If the function receives the parameter in input, it prefills the form and the employee data is modified, if not it creates a new one.
Handle the add employeee button click and the edit button click, by calling the showForm function with the right parameter.
Use javascript to handle the delete button click, use window.confirm before deletion.
Copy the STAFF object using console.log to and put it in your code to work on a prefilled staff array.
Handle the go to stats button click and call showStats.
Prepare the HTML of Stats section, add title, back button, filters form, analyze button, ul list for stats.
Add fields to filter form: department, min age, max age. All the parameters are optional.
Handle analyize button click, use the filter form parameters to filter the staff to count the number of employees and the average salary of the requested segment. Show the result in the ul list, by adding a li with the following text: “In the dept. {department} between {minAge} and {maxAge} the are {numberOfEmployees} employees that takes {averageSalay} on average.”
