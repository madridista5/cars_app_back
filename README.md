<h1>See how this application works:</h1>
<br>
https://carsapp.tlossy.networkmanager.pl
<br>
<br>
You can create your own account using your email adress, log in and test how it works 🙂. There are two validations. Email must includes @ and passoword length cannot be shorter then 8 signs.
<br>
<br>
If you don't want to create an account you can use this test USER account:
<br>
email: <b>user@gmail.com</b>
<br>
password: <b>user1234</b></p>
<br>
You can also use this test ADMIN account:
<br>
email: <b>admin@gmail.com</b>
<br>
password: <b>admin123</b>
<br>

<div align="center">

<img src="https://github.com/madridista5/madridista5/blob/main/cars_app.gif" alt="logo" width="500" height="auto" />
  <h1>Cars App</h1>
</div>

<br />

- [About the Project](#star2-about-the-project)
  * [Description](#star-description)
  * [Screenshots](#camera-screenshots)
  * [Tech Stack](#space_invader-tech-stack)
  * [Environment Variables](#key-environment-variables)
- [Getting Started](#toolbox-getting-started)
  * [Prerequisites](#bangbang-prerequisites)
  * [Run Locally](#running-run-locally)

  

<!-- About the Project -->
## :star2: About the Project

<!-- Description -->
### :star: Description
<p>With the Cars App you will be able to find and buy your perfect car. However, if you want to sell your car, you can create an account, log in and add your ad. There are two validations. Email must includes @ and passoword length cannot be shorter then 8 signs. If you are Admin you can also delete each ad. The application looks good on desktop and on mobile as well.</p>

<br>
If you don't want to create an account you can use this test USER account:
<br>
email: <b>user@gmail.com</b>
<br>
password: <b>user1234</b></p>
<br>
You can also use this test ADMIN account:
<br>
email: <b>admin@gmail.com</b>
<br>
password: <b>admin123</b>
<br>


<!-- Screenshots -->
### :camera: Screenshots

<p>1. Home page:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/cars_app_front/blob/main/screenshots/1.png" alt="screenshot" />
</div>

<br>
<p>2. Short video:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/cars_app_front/blob/main/screenshots/2.png" alt="screenshot" />
</div>

<br>
<p>3. Gallery:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/cars_app_front/blob/main/screenshots/3.png" alt="screenshot" />
</div>

<br>
<p>4. Awards:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/cars_app_front/blob/main/screenshots/4.png" alt="screenshot" />
</div>

<br>
<p>5. Footer:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/cars_app_front/blob/main/screenshots/5.png" alt="screenshot" />
</div>

<br>
<p>6. Cars App:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/cars_app_front/blob/main/screenshots/6.png" alt="screenshot" />
</div>

<br>
<p>7. Car's View:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/cars_app_front/blob/main/screenshots/7.png" alt="screenshot" />
</div>

<br>
<p>8. Car's gallery:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/cars_app_front/blob/main/screenshots/8.png" alt="screenshot" />
</div>

<br>
<p>9. Login form:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/cars_app_front/blob/main/screenshots/9.png" alt="screenshot" />
</div>

<br>
<p>10. Ad form:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/cars_app_front/blob/main/screenshots/10.png" alt="screenshot" />
</div>

<br>
<p>11. User's ads:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/cars_app_front/blob/main/screenshots/11.png" alt="screenshot" />
</div>

<br>
<p>12. User's watch ads:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/cars_app_front/blob/main/screenshots/12.png" alt="screenshot" />
</div>

<br>
<p>13. Admin:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/cars_app_front/blob/main/screenshots/13.png" alt="screenshot" />
</div>

<!-- TechStack -->
### :space_invader: Tech Stack

<details>
  <summary>Client</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://reactjs.org/">React.js</a></li>
  </ul>
</details>

<details>
  <summary>Server</summary>
  <ul>
    <li><a href="https://www.typescriptlang.org/">Typescript</a></li>
    <li><a href="https://expressjs.com">Express.js</a></li>  
    <li><a href="https://nodejs.org/en/">Node.js</a></li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li><a href="https://www.mysql.com">MySQL</a></li>  
  </ul>
</details>

<br>
<p>Database structure:</p>
<div align="center"> 
  <img src="https://github.com/madridista5/cars_app_front/blob/main/screenshots/db_cars_app.png" alt="screenshot" />
</div>

<!-- Env Variables -->
### :key: Environment Variables

To run this project, you will need to add the following environment variables to your config/config.ts file

`dbHost`

`dbUser`

`dbPassword`

`dbDatabase`

`dbPort`

`corsOrigin`

`secretKey`

`domain`

<!-- Getting Started -->
## 	:toolbox: Getting Started

<!-- Prerequisites -->
### :bangbang: Prerequisites

This project uses npm as package manager


<!-- Run Locally -->
### :running: Run Locally

Clone the project

```bash
  git clone https://github.com/madridista5/cars_app_back
```

Go to the project directory

```bash
  cd cars_app_back
```

Install dependencies

```bash
  npm install
```

Start the application

```bash
  tsnd index.ts
```
