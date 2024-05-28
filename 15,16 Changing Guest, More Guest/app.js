// Exercise:15
// Changing Guest List: You just heard that one of your guest can't 
// make the dinner, so you need to send out a new set of
//  invitations.........
// let guest_list: string []= ['ali','farhan','raza','zaid'];
// for(let i =0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam' + guest_list[i] +',\n We invited you on dinner tomorrow.\n\n Thankyou');
// }
// let not_present : string = 'farhan';
// let new_guest: string = 'Babar Azam';
// for(let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam' + guest_list[i] + ',\n We invited you ondinner tomorrow.\n thankyou\n');
// }
// console.log(`Mr.${not_present} will not coming tomorrow dinner.`)
// Exercise:16
//More Guest:
var guest_list = ['ali', 'farhan', 'raza', 'zaid'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\n We invited you on dinner tomorrow.\n\n Thankyou');
}
var not_present = 'farhan';
var new_guest = 'Babar Azam';
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\n We invited you ondinner tomorrow.\n thankyou\n');
}
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\n We invited you on dinner tomrrow. we found big table so we decided to invite 3 more guest\nThank you\n');
}
