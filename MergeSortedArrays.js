//merge sorted arrays ([0, 3, 4, 31], [4, 6, 30]) 
// => [0, 3, 4, 4, 6, 30, 31]

function mergeSortedArrays(array1, array2) {

     //Checking input
     if(array1.length === 0) {  //If the first array is empty we'll just return the second sorted array
        return array2;
    }

    if(array2.length === 0) {  //If the second array is empty we'll just return the first sorted array
        return array1; 
    }

    let mergedArray = [];
    let array1Item = array1[0];
    let array2Item = array2[0];
    let i = 1;
    let j = 1;

   
    //While the elements exist
    while(array1Item || array2Item) {

        if(array2Item === undefined || array1Item < array2Item) {
            mergedArray.push(array1Item); //while the element of the first array is less than the second we'll add it to the merged array and increment the index 
            array1Item = array1[i];
            i++;
        } else {
            mergedArray.push(array2Item);
            array2Item = array2[j];
            j++;
        }  
    }

    return mergedArray;    

}

console.log(mergeSortedArrays([0,3,4,31], [3,4,6,30]));