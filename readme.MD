# Educational Manager

**Usefull Commands**

* npm install -> install all dependencies. 
* npm dev -> Development mode (console logs errors and restart server on any file change).
* npm test -> Run the test of "application-tests" folder.
* npm build -> install all dependencies and compiles all typescript files.
* npm start -> runs the node server.

**entities:**

* institutions
* courses
* professionals
* students

## Entities endpoints

**Institutions**
- GET "/api/institutions/": *Institution[]*
- GET "/api/institutions/:id": *Institution*
- PUT "/api/institutions/:id": *string*
- DELETE "/api/institutions/:id" *string*

**Students**
- GET "/api/students/": *Student[]*
- GET "/api/students/:id": *Student*
- PUT "/api/students/:id": *string*
- POST "/api/students/" *string*
- DELETE "/api/students/:id" *string*

**Professionals**
- GET "/api/professionals/": *Professional[]*
- GET "/api/professionals/:id": *Professional*
- PUT "/api/professionals/:id": *string*
- DELETE "/api/professionals/:id" *string*

**Courses**
- GET "/api/courses/": *Course[]*
- GET "/api/courses/:id": *Course*
- PUT "/api/courses/:id": *string*
- DELETE "/api/courses/:id" *string*

**Auth**
- POST "/api/auth/register" *{Institution | Professional | Student, token: string}*
- POST "/api/auth/login" *{id: string, token: string}* 


## Main dependencies
- express
- mongoose
- jsonwebtoken
- bcrypt
- jest
