import {StudentsDatabaseRepository} from "../mock.db";
import StudentsUseCases from "../../students/application/students.usecases";

// app created to test the business logic logic of students App
const studentsApp = new StudentsUseCases(StudentsDatabaseRepository);

test("GET students test", () => {
  const listOfStudents = studentsApp.getAllStudents();
  expect(listOfStudents).toBeInstanceOf(Array);
  expect(listOfStudents).toHaveLength(0);
  expect(listOfStudents).toStrictEqual([]);
});

test("GET student by ID", () => {
  const user = studentsApp.getStudentById("1");
  expect(user).toBeNull;
});

test("GET student by email", () => {
  const user = studentsApp.getStudentByEmail("test@gmail.com");
  expect(user).toBeNull;
});

test("PUT student by ID", () => {

});

test("DELETE student by ID", () => {

});