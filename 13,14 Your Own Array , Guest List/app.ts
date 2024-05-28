//Your Own Array
//let transportation: string[] =['tesla','jet','bus','coaster','bike','car','suzuki'];
//for(let i=0; i<transportation.length; i++){
   // console.log('I would like to own a' +transportation[i]);
//}

//Guest List
let guest_list: string[]=['farhad','freeha','shehraam','mahnoor'];
//for(let i=0; i<guest_list.length; i++){
//   console.log('Respected Sir/Madam'+ guest_list[i]+ ',\n We invited you on dinner tomorrow.\n\nThank you')
//}       

// Changing Guest List 15
let not_present: string ='seemap';
let new_uest: string ='Babar Azam';
guest_list[1] = new_uest;
for(let i=0; i<guest_list.length; i++){
   console.log('Respected Sir/Madam'+ guest_list[i]+ ',\n We invited you on dinner tomorrow.\n\nThank you')
}
console.log(`Mr.${not_present} will not coming tomorrow dinner`)

// More Guest List 16
guest_list.unshift('shaheen','sarfaraz','rizwan');
//for(let i=0; i<guest_list.length; i++){
//   console.log('Respected Sie/Madam'+ guest_list[i]+',\n We invited you on dinner tomorrow. We found big table so we decided to invited 3 more guest\n')
//}   

// Shrinking Guest List 17
console.log('\n Unfortunately we can not arrange big table, Only two people allow.')
while(guest_list.length>2){
   let remove_guest = guest_list.pop();
   console.log(`Sorry Sir Madam.${remove_guest}you are not invited for dinner.`);
}
for(let i=0; i<guest_list.length; i++){
   console.log('Respected Sir/Madam' + guest_list[i] +',\n Yes you are still invited on tomorrow dinner \n Thank you\n')
} 
guest_list.splice(0,2)
console.log(guest_list)     
