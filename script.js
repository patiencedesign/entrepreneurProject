var studentPassword = "student";
var teacherPassword = "teacher";

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

//Data Tables Data

var healthData = [];

// Google JSON Data to Teacher Portal

var url = "https://spreadsheets.google.com/feeds/list/19SDw8uxESTlGUPiTfb6BUisd7wc8rQAFzJaKHRhdXEA/1/public/values?alt=json"

$.getJSON(url, function(response){
    url = response;
    
            
    for(i = 0; i < url.feed.entry.length; i++){
        $("#studentData").append(
            
            "<div class='col-md-4' id='dataBlock'><div class='well well-lg'>" +
            
            url.feed.entry[i].gsx$age.$t + " years old<br>" + 
            
            url.feed.entry[i].gsx$sex.$t + "<br>" +
            
            url.feed.entry[i].gsx$height.$t + " ft<br>" +
            
            url.feed.entry[i].gsx$weightlbs.$t + " lbs<br>" +
            
            url.feed.entry[i].gsx$concerns.$t + 
            
            "</div></div>"
            
            )
    }
    
    
    for(i = 0; i < url.feed.entry.length; i++){
        healthData.push(
            [url.feed.entry[i].gsx$age.$t, url.feed.entry[i].gsx$sex.$t, url.feed.entry[i].gsx$height.$t, url.feed.entry[i].gsx$weightlbs.$t, url.feed.entry[i].gsx$concerns.$t]
        )
    }
    console.log(healthData)
    
    $("#actualTable").DataTable({
        data: healthData
    })
});


$("#enTable").click(function(){
    console.log("You have enabled data tables.")
    $("#studentData").hide()
    $("#dataTables").show()
})

$("#title").click(function(){
    $("#dataTables").hide()
    $("#studentData").show()
})


