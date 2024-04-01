"use strict";

function addTwo(num1, num2)
{
    let result = num1 + num2;
    return result;
}

function multiplyTwo(num1, num2)
{
    let result = num1 * num2;
    return result;
}

function show()
{
    const name = document.getElementById("uname").value;
    const password = document.getElementById("upass").value;

    // Displaying feedback on screen
    if (name ==  "user" && password == "admin")
    {
        alert("Login successful!");
    }
    else
    {
        alert("Login failed!")
    }

    // // Redirecting to another page
    // if (name ==  'admin'&& password == 'admin')
    // {
    //     window.location.replace("home.html");
    // }
    // else
    // {
    //     window.location.replace("signout.html")
    // }
}

function reset()
{
    document.getElementById('uname').value = '';
    document.getElementById('upass').value = '';
}

function demo()
{
    alert("This is an event listener");
}

// Using event listeners and anonymous functions - allow you to configure onlick in script instead of in html
document.addEventListener("DOMContentLoaded", function (){
    document.querySelector("#tester").onkeyup = demo;
})