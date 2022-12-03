class MyArray {

    constructor() {
        this.length = 0;
        this.data = {};
    }

    //To access an item at a particular index
    get(index) {
        return this.data[index];
    }

    //To add an element to the array
    push(item) {
        this.data[this.length]=item;
        this.length++;
        return this.data;
    }

    //To delete the last element in the array
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length -1];
        this.length--;
        return lastItem;
    }

    //To delete an element at a particular index 
    deleteAtIndex(index) {
        const item = this.data[index];
        this.shiftElements(index);
        return item;
    }

    //Helper method to delete an element and shift remaning elements  
    shiftElements(index) {
        for(let i=index; i<this.length; i++) {
            this.data[i] = this.data[i+1]; 
        }

        console.log(this.data[this.length-1]);
        delete this.data[this.length - 1];
        this.length--;
    }   

}

const newArray = new MyArray();

newArray.push('Hey');
newArray.push('you');
newArray.push('!');
//newArray.pop();
newArray.deleteAtIndex(0);
newArray.push('are');
newArray.push('nice');


newArray.deleteAtIndex(1);

console.log(newArray);

//console.log(newArray.get(1));

