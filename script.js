var studentPassword = "student"
var teacherPassword = "teacher"

console.log("Your Javascript works.")

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

var url = "https://spreadsheets.google.com/feeds/list/14Ia62bl8uyZImRmxvqQNPMXZpiKQAcbG0AGLI0Tn2hs/1/public/values?alt=json"

$.getJSON(url, function(response){
    url = response;
    
    // console.log(
    //     url.feed.entry[0].gsx$age,url.feed.entry[0].gsx$heightfeetinches,url.feed.entry[0].gsx$weightlbs,url.feed.entry[0].gsx$sex
    //     )
        
            
    for(i = 0; i < url.feed.entry.length; i++){
        $("#studentData").append(
            
            "<div class='col-md-3'><div class='well well-lg'>" +
            
            url.feed.entry[i].gsx$age.$t + " years old<br>" + 
            
            url.feed.entry[i].gsx$sex.$t + "<br>" +
            
            url.feed.entry[i].gsx$height.$t + " ft<br>" +
            
            url.feed.entry[i].gsx$weightlbs.$t + " lbs<br>" +
            
            url.feed.entry[i].gsx$illnesses.$t + 
            
            "</div></div>"
            
            )
    }
});

$("#enGraph").click(function(){
    console.log("You have enabled graphs.")
    
    $("#studentData").hide()
})

