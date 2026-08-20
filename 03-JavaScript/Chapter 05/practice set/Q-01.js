let marks = [85, 97, 44, 37, 76, 60];
let totalMark = 0;
for (let mark of marks) {
    totalMark += mark;
}

let average = totalMark / marks.length;
console.log(`The average of ${totalMark} is ${average}`);

