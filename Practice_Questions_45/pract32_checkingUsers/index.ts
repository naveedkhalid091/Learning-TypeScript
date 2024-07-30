let current_users=["Naveed","Khalid","Tasneem","Ibrahim","Zahra"]

let new_users=["Zainab","Eshaal","Naveed","Zahra"]

for(let i=0; i<new_users.length; i++){
    let is_available=true;
    for(let j=0; j<current_users.length; j++){
        if(new_users[i]===current_users[j]){
            is_available=false
        break;
        }
    }
    if(is_available){
        console.log(`The userName ${new_users[i]} is available`)
    }else{
        console.log(`This Name: ${new_users[i]} is already taken! so create a new one`)
    }
}


