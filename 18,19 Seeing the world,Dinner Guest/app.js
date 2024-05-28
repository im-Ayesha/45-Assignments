// 18. Seeing the world: Think of at least fives places in the world you'd like to visit.
//. Stoe the location in a array. Make sure he array is not in alphabetical order.
//. Print your array in its original order.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var places = ['cape town', 'delhi', 'faisalbad', 'bankok', 'ahmedabad'];
// console.log('original:'+ places);
// Print your array in alphabetical order without modfying the actual list.
// console.log('copy'+ [...places].sort());
//. show that your array is still in its oriinal orer by prining it.
// console.log('original :' + places);
//. Print your array in reverse alphabetical order without changing th order of he original list.
console.log('copy' + __spreadArray([], places, true).sort().reverse());
//. Show hat your array is still in its original order by printing it again.
console.log('copy' + __spreadArray([], places, true).sort().reverse());
//. Reverse the order of your list. Print he array to show its order has chaned.
console.log('copy' + __spreadArray([], places, true).sort());
//. Reverse the order of your list again. Print the list to show it's back to it's original order.
console.log('copy' + __spreadArray([], places, true).sort());
//. Sort your array so it's stored in alphabetical order. Print the array to show that its order has been changed.
console.log('copy' + __spreadArray([], places, true).sort());
