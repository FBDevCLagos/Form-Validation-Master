var fullnameValue = document.getElementById("fullName")
var emailValue = document.getElementById("email") 
var usernameValue = document.getElementById("username")
var dobValue = document.getElementById("dob")
var websiteValue = document.getElementById("website")
var streetAddressValue = document.getElementById("streetAddress")

var fullnameError = document.getElementById("fullNameError");
var emailError = document.getElementById("emailError")
var usernameError = document.getElementById("usernameError")
var dobError = document.getElementById("dobError")
var websiteError = document.getElementById("websiteError")
var streetAddressError = document.getElementById("streetAddressError")


var fullnameSuccess = document.getElementById("fullNameSuccess");
var emailSuccess = document.getElementById("emailSuccess")
var usernameSuccess = document.getElementById("usernameSuccess")
var dobSuccess = document.getElementById("dobSuccess")
var websiteSuccess = document.getElementById("websiteSuccess")
var streetAddressSuccess = document.getElementById("streetAddressSuccess")

const myForm = document.getElementById("myForm");

const validateForm = (boolValue) =>{
        if(boolValue){
            myForm.addEventListener("sumbit", ()=>{
                console.log("I will submit")
                return true
            })
        }else{
            myForm.addEventListener("sumbit", ()=>{
                console.log("I will not submit")
                return false
            })
        }
}

//FOR FULL NAME 
fullNamePatt = /[a-zA-z]{2,}/gi
fullnameValue.addEventListener("change", (e)=>{
    if(fullNamePatt.test(e.target.value) && e.target.value){
        successFunction(fullnameError, fullnameSuccess)
    }else{
        errorFunction(fullnameError, fullnameSuccess)
    }
    validateForm(fullNamePatt.test(e.target.value) && e.target.value)  
})

//FOR EMAIL PATTERN
var emailPatt = /^[a-z]+@[a-z]+\.com$|^[a-z0-9]+@[a-z]+\.com$/gi
emailValue.addEventListener("change", (e)=>{
    if(emailPatt.test(e.target.value) && e.target.value){
        successFunction(emailError, emailSuccess)
    }else{
        errorFunction(emailError, emailSuccess)
    }
})

//FOR USENAME PATTERN
var usernamePatt = /\w/gi
usernameValue.addEventListener("change", (e)=>{
    if(usernamePatt.test(e.target.value)&& e.target.value){
        successFunction(usernameError, usernameSuccess)
    }else{
        errorFunction(usernameError, usernameSuccess)
    }
})

//FOR DOB PATTERN
var dobPatt = /^[[0-9][0-9]]{0,31}-[0-9][0-9]-[0-9][0-9][0-9][0-9]$/gi
dobValue.addEventListener("change", (e)=>{
    if(dobPatt.test(e.target.value)&& e.target.value){
        successFunction(dobError, dobSuccess)
    }else{
        errorFunction(dobError, dobSuccess)
    }
})

//FOR WEBSITE URL
var websitePatt = /^http:\/\/[a-zA-Z]+\.com$|https:\/\/[a-zA-Z]+\.com$/gi
websiteValue.addEventListener("change", (e)=>{
    if(websitePatt.test(e.target.value) && e.target.value){
        successFunction(websiteError, websiteSuccess)
    }else{
        errorFunction(websiteError, websiteSuccess)
    }
})

//FOR STREET ADDRESS
var streetPatt = /No\s[0-9],\s[a-zA-Z]+,\s[a-zA-Z]+,\s[a-zA-Z]+/gi
streetAddressValue.addEventListener("change", (e)=>{
    if(streetPatt.test(e.target.value) && e.target.value){
        successFunction(streetAddressError, streetAddressSuccess)
    }else{
        errorFunction(streetAddressError, streetAddressSuccess)
    }
})


function errorFunction(errorName, successName){
    errorName.style.display = "block";
    successName.style.display = "none";
}

function successFunction(errorName, successName){
    successName.style.display = "block";
    errorName.style.display = "none";
}