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