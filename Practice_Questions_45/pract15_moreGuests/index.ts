let guests=["Naveed Khalid","Abrar Khan","Mubashir Bukhari","Saad Massood"];

guests.unshift("Raja Hashim"); // add guest at the start on an Array.
guests.splice(2,0,"Ghulam Muhammad"); // add guest at the middle on an Array.
guests.push("Abdullah"); // adding through push bcz append method is not available in TypeScript.

console.log(guests); //Array updated list

// Sending invitations to the Updated list. 

for(let i=0; i<guests.length; i++){
   console.log(`Dear Mr.${guests[i]}: You are invited for my Dinner at PC hotel, please reach out shart at 8PM.`);

}

// console message of bigger Table.
console.log("Exciting news!, We have found a bigger table now");
