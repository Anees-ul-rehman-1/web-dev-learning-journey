let marks = [10, 20, 90, 91, 99, 95, 65, 84, 94];
console.log(marks.filter((val) =>{
    if(val >= 90){
       return true;
    }
})); 



// solution second
let stuMarks = [43, 90, 43, 92, 93, 43, 32, 99];
const topper = stuMarks.filter((val) => {
    if(val >= 90){
        return true;
    }
});
console.log(topper);

