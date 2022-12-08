//Create a function that reverses a String:
//'Hey' should be:
//'yeh'

function reverses(str) {

    //check input
    if(!str || str.length<2 || typeof str !== 'string') {
        return 'hmm that is not good';
    }

    const reversed = [];
    const totalItems = str.length - 1;

    for(let i=totalItems; i>=0 ;i--) {
        reversed.push(str[i]); //Acessing regular String just like an array (Beware only works in JS!)
    }

    console.log(reversed);
    
   return reversed.join('');

}

/* Cleanest way with JavaScript built in types */
function reverse2(str) {

    /* const reversedString = str.split('').reverse().join('');
    console.log(reversedString); */ 

    return str.split('').reverse().join('');
}


/* If the interviewer asks for an even more cleaner modern solution */
//Using ES6 syntax we can create a 1 line function

const reverse3 = str => str.split('').reverse().join(''); 

//We can also use JS spread operator
const reverse4 = str => [...str].reverse().join('');

//reverses('Hi My name is Akshath');
//reverse2('Hi My name is Akshath');
// . reverse3('Hi My name is Akshath'); 
reverse4('Hi My name is Akshath'); 
