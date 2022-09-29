<h1>See how this application works:</h1>
<br>
https://carsapp.tlossy.networkmanager.pl
<br>
<br>
You can create your own account using your email adress, log in and test how it works 🙂
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
<p>With the Cars App you will be able to find and buy your perfect car. However, if you want to sell your car, you can create an account, log in and add your ad.</p>


<!-- Screenshots -->
### :camera: Screenshots

<p>1</p>
<div align="center"> 
  <img src="" alt="screenshot" />
</div>

<br>
<p>2</p>
<div align="center"> 
  <img src="" alt="screenshot" />
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
