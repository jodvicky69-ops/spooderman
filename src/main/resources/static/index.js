alert("are you over 18!!");

// {
//     "name": "John";
//     "gender": "male"
// }

var users = [
    {
        "name" : "John Doe",
        "gender" : "Male",
        "image" : "john.png"
    },
    {
        "name" : "Jane Doe",
        "gender" : "Female",
        "image": "jane.png"
    }
]

var id=0;

function toggleUser(){
    id=(id+1)%2;
    var userimage = document.getElementById("user-image");
    userimage.src=users[id].image;
    var username = document.getElementById("user-name");
    username.innerHTML=users[id].name;
    var usergender = document.getElementById("user-gender");
    usergender.innerHTML=users[id].gender;
    
}

function randomuser(){
    fetch("https://randomuser.me/api/")
        .then(function(response){
            //convert the text into json
                return response.json();
        })
        .then(function(data){
                var userdata = data.results[0];
                //image
                var  userimage=userdata.picture.large;
                document.getElementById("user-image").src=userimage;
                //name
                var username = userdata.name.first+" "+userdata.name.last;
                document.getElementById("user-name").innerHTML = username;
                // gender
                var usergender = userdata.gender;
                document.getElementById("user-gender").innerHTML =usergender;

        })
}