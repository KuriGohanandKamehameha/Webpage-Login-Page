function unamechecker(){
    var username1= document.getElementById("uname1").value
    if(username1==""){
        alert("Username must not be a null value")
        }
    }

function passchecker(){
    var pass1=document.getElementById("pass1").value
    var pass2=document.getElementById("pass2").value
    if(pass1 !== pass2){
        alert("Password must be the same")

    }
}

function emailchecker(){
    var email1= document.getElementById("email1").value
    if(email1==""){
        alert("Email must not be a null value")
        }
    }

function checkchecker(){
    var c1= document.getElementById("check1").value
    if(c1.checked){}
     else{
            alert("Accept the terms and conditions")

        }
    }