let guests = ["Naveed Khalid", "Abrar Khan", "Waleed Raza", "Saad Massood"];
// Changing Guest List from Middle of an ARRAY (ADDING and REMOVING one guest).
let removedGuest = guests.splice(2, 1, "Mubashir Mukhari");
// Remaining Guests list
console.log(guests);
// Invitation to the remaining guests.
for (let i = 0; i < guests.length; i++) {
    console.log(`Dear Mr.${guests[i]}: I've arranged a dinner for friends tomorrow at PC Hotel. Please join us at 8PM sharp.`);
}
// console message for removed guest.
console.log(`${removedGuest}, is no longer participating at Dinner`);
export {};
