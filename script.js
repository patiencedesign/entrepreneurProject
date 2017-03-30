var studentPassword = "student"
var teacherPassword = "teacher"

console.log("Hello")

$("#loginButton").click(function(){
    var userPassword = $("#passwordInput").val()

    if (userPassword == studentPassword){
        console.log("Go to student portal.")
    } 
    else if (userPassword == teacherPassword){
        console.log("Go to teacher portal.")
    }
    else {
        console.log("Enter a valid password")
    }
});

