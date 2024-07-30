
// Greeting Messages. 

let usernames=["Admin","Khalid","Naveed","Ibrahim","Tasneem","Zahra","Zainab","Eshaal"]

if(usernames[0]==="Admin"){
    console.log(`Hello ${usernames[0]}, would you like to see a status report?`)
}

for(let i=1; i<usernames.length; i++){
    console.log(`Hello ${usernames[i]}, thank you for logging in again.`)   
}


