let mark = prompt("Enter your marks:");
let grade;

function getGrade() {
    if (mark >= 80 && mark <= 100) {
        grade = "A";
    } else if (mark >= 70 && mark < 80) {
        grade = "B";
    } else if (mark >= 60 && mark < 70) {
        grade = "C";
    } else if (mark >= 50 && mark < 60) {
        grade = "D";
    } else if (mark >= 0 && mark < 50) {
        grade = "F";
    } else {
        console.log("Invalid Marks entered!");
        return;
    }
    console.log("You've Secured", grade, "Grade with", mark, "Marks");
}

getGrade();1

if(mark >= 80 && mark <= 100){
    grade = "A";
} else if (mark >=70 && mark < 80) {
    grade = "B";
} else if (mark >= 60 && mark < 70) {
    grade = "C";
} else if (mark >= 50 && mark < 70) {
    grade = "D";
} else if (mark >= 0 && mark < 50) {
    grade = "F";
} else {
    grade = null;
}

if (grade !== null) {
    console.log("You've Secured", grade, "Grade width", mark, "Marks.")
} else {
    console.log("Invalid marks entered!")
}