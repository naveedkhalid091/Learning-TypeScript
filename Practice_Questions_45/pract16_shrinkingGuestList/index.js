let guests = ['Raja Hashim', 'Naveed Khalid', 'Ghulam Muhammad', 'Abrar Khan',
    'Mubashir Bukhari', 'Saad Massood', 'Abdullah'];
// Console message of limited seats
console.log('Limited table space Notice:\nApologies, I can only invite two friends for the dinner becasue of limited space');
// removing guests from the invitation because of limited seats. 
let removedguests = guests.splice(1, 5);
// List of Removed Guests
console.log(removedguests);
// console messages to all canceled invitations.  
for (let i = 0; i < removedguests.length; i++) {
    console.log(`Dear Mr. ${removedguests[i]}, I am sorry, I can't invite you for the dinner now because of limited space.`);
}
// console message to remaining guests. 
for (let j = 0; j < guests.length; j++) {
    console.log(`Dear Mr.${guests[j]}, You are still Invited for the dinner.`);
}
// removing remaining guests from the array to have an empty array. 
guests.pop();
guests.pop();
console.log(guests); // Empty Array list in the end.
export {};
