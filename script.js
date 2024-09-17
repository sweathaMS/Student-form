
btn.addEventListener("click", function () {
    var name = document.getElementById("names")
    var age = document.getElementById("age")
    var course = document.getElementById("course")
    var gender = document.getElementById("gender")
    var email = document.getElementById("email")
    var btn = document.getElementById("btn")
    

    var table2 = document.getElementById("table2")
    //create a new row
    var newrow = document.createElement("tr")
    //create a name-column
    var namecol = document.createElement("td")
    namecol.textContent = name.value
    newrow.appendChild(namecol)
    //create a age-column
    var agecol = document.createElement("td")
    agecol.textContent = age.value
    newrow.append(agecol)
    //create a course-column
    var coursecol = document.createElement("td")
    coursecol.textContent = course.value
    newrow.append(coursecol)
    //create a email-column
    var emailcol = document.createElement("td")
    emailcol.textContent = email.value
    newrow.append(emailcol)

    var actioncol = document.createElement("td")
    actioncol.innerHTML = "<button onclick=del(event) class='remove'> DELETE </button>"
    newrow.append(actioncol)

    //append the new row to the table2
    table2.append(newrow)

})
function del(event) {
    event.target.parentElement.parentElement.remove()
}

