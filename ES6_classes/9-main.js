import { listOfStudents } from "./9-hoisting.js";

console.log(listOfStudents.length); // 5

const listPrinted = listOfStudents.map(
  student => student.fullStudentDescription
);

console.log(listPrinted);

