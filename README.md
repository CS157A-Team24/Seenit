<h1 align="center">
  <br>
  <br>
    Seenit 
  <br>
</h1>

<h4 align="center">A Reddit clone using <a href="https://reactjs.org/" target="_blank">React</a>, <a href="https://spring.io/" target="_blank">Spring Boot</a>
and <a href="https://www.mysql.com/" target="_blank">MySQL</a></h4>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-try-locally">How to Try</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>


## Key Features 

## How To Try Locally

### Requirements:
+ [Git](https://git-scm.com)
+ [Node.js (version >=10.0.0)](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com))
+ JDK (version >=1.8)
+ Maven (version >=3.2)
+ Spring-2.1.8 RELEASE
+ MySQL (version >=5.1.47) 
  
**If you use an approriate IDE, you dont need to manually install Maven and Spring.** 

**From your command line:**

```bash
# Clone this repository
$ git clone https://github.com/CS157A-Team24/Seenit
$ cd Seenit
```
**Client side**
```bash
# Go into the client repository
$ cd client

# Install dependencies
$ npm install or yarn install

# Run the app
$ npm start or yarn start
```
In case the website doesn't automatically pop up, go to http://localhost:3000/


**Server side**

Simply use can use an IDE, import/open the project and hit "run" or if you refer command line:
```bash
# Go into the server repository
$ cd server

# Comple and run
$ mvn spring-boot:run
```
Default port at http://localhost:8080/. Configurate the *application.properties* file to match your MySQL server address if it isn't at localhost:3306. 

**Database**

Start your MySQL server. Create the Databse and Tables using the SQL files in *database* foler. 

## Credits

This software uses the following open source packages:

- [Node.js](https://nodejs.org/)
- [React](https://reactjs.org/)
- [Spring Boot](https://spring.io/)

## License

MIT

