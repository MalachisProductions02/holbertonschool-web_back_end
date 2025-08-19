import { listOfStudents } from "./9-hoisting.js";

console.log(listOfStudents.length);

const listPrinted = listOfStudents.map(
  student => student.fullStudentDescription
);

console.log(listPrinted);

