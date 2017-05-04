var studentPassword = "student"
var teacherPassword = "teacher"

console.log("Hello")

// Login Logic

$("#loginButton").click(function(){
    var userPassword = $("#passwordInput").val()

    if (userPassword == studentPassword){
        console.log("Go to student portal.")
        window.location.href = "studentPortal.html"
    } 
    else if (userPassword == teacherPassword){
        console.log("Go to teacher portal.")
        window.location.href = "teacherPortal.html"
    }
    else {
        console.log("Enter a valid password")
        alert("Enter a valid password.")
    }
});


// Google JSON Data to Teacher Portal

var url = "https://spreadsheets.google.com/feeds/list/1cPYR2mkb07_pxVQebSWKDjQ1Ee_sfbwk4x_640chWoA/1/public/values?alt=json"

$.getJSON(url, function(response){
    url = response;
    
    console.log(
        url.feed.entry[0].gsx$age,url.feed.entry[0].gsx$heightfeetinches,url.feed.entry[0].gsx$weightlbs,url.feed.entry[0].gsx$sex
        )
        
            
    for(i = 0; i < url.feed.entry.length; i++){
        $("#studentData").append(
            
            url.feed.entry[i].gsx$age.$t + "<br>",
    
            url.feed.entry[i].gsx$heightfeetinches.$t + "<br>",
            
            url.feed.entry[i].gsx$weightlbs.$t + "<br>",
            
            url.feed.entry[i].gsx$sex.$t + "<br>"
            )
    }
});