// document.querySelector(".loginBtn").addEventListener("click", () =>{
//     var newUser = {
//         "email": 
//     }
// })


var firstName = document.querySelector(".firstname").value;
var lastName = document.querySelector(".lastname").value;
var birthday = document.querySelector(".birthday").value;
var phoneNumber = document.querySelector(".phonenumber").value;
var address = document.querySelector(".address").value;
var email = document.querySelector(".email").value;
var password = document.querySelector(".password").value;
var confirmPassword = document.querySelector(".confirmpassword").value;

var newUser = {
    "first name": firstName,
    "last name": lastName,
    "birthday": birthday,
    "phone number": phoneNumber,
    "address": address,
    "email": email,
    "password": password,
    "confirmPassword": confirmPassword
}

document.querySelector("#signUp").addEventListener("click", () => {

    for (let ele = 0; ele < 8; ele++) {
        if (!checkNullElement(newUser[ele])) {
            alert("All empty areas must be completed!");
            return
        }
    }

    

})

function checkNullElement(element) {
    if (element == '') {
        return false;
    }
    return true;
}