const strings = ['a', 'b', 'c', 'd'];
//4 * 4 = 16 bytes of storage 

//lookup/access
strings[2];

//push
strings.push('e'); //0(1) since we're inserting in the end of the array there won't be any displacement

//delete
//pop - will remove last element of an array
strings.pop(); //O(1)
strings.pop(); //O(1)
 
//Add an element 'x ' at the beginning of the array
//unshift in JS is the method that does this
strings.unshift('x'); //O(n)

//Add an item in the middle of the array
//splice is the method that does this in JS
strings.splice(2, 0, 'alien'); // 0(n/2) [since half the array is displaced] applying big 0 rules this become 0(n) worst case

console.log(strings);


//Example consider Static arrays declaration in C++ 
//int a[20];
//int b[5] {1, 2, 3, 4, 5, 6};
 
/** const strings = ['a', 'b', 'c', 'd','new element'];
 * Now if we want ot add a new element in to the dynamic array:
 * 
 * It's going to loop over these items, copy them and move it to a 
 * different location with now 8 blocks (it usually doubles the space) so that we
 * can keep adding onto it. 
 * 
 * Since, we did the looping here the operation becomes O(n)
 */

