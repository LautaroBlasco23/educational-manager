import AuthUseCases from "../../auth/application/auth.usecases";
import { AuthDatabaseRepository } from "../mock.db";

const authApp = new AuthUseCases(AuthDatabaseRepository);

test("login controller with wrong credentials", () => {
  const loggedUser = authApp.Login("test@gmail.com", "test123", "student");
  expect(loggedUser).toStrictEqual({"code": 400, "message": "invalid credentials"})
})

test("registering new students", () => {
  // i assign newStudent type to "any" because i cant solve property "x" does not exist on type "y".
  const newStudent: any = authApp.RegisterEntity({
    studentId: "1",
    firstName: "Lautaro",
    lastName: "Blasco",
    email: "test@gmail.com",
    listOfCourses: [],
    password: "test123"
  }, "student");
  expect(newStudent).not.toBe(null);
  expect(newStudent.id).toStrictEqual("1");
  expect(newStudent.token).toStrictEqual('1-Lautaro-student');

  console.log("newStudent: ", newStudent);
})