# Health Pulse
<img src="https://i.imgur.com/wIhYden.png" alt="Health Pulse banner">

## Table of Contents
- [Description](#description)
- [Features](#features)
- [Requirements](#requirements)
- [Getting Started](#getting-started)
- [Live Demo](#live-demo)
- [Credits](#credits)

## Description
Health Pulse is a web application designed for doctors to monitor and manage patient data. Given the impact of the recent COVID-19 pandemic, doctors utilize various tools, including X-rays, to evaluate the health status of COVID-19 patients by generating images of their internal organs and structures. This aids in visualizing infections like pneumonia in the lungs. Post X-ray procedures, doctors require a systematic means to document their findings for future reference and analysis.

Health Pulse empowers doctors to perform CRUD operations (Create, Read, Update, and Delete) on structured radiology reports. These reports serve as evaluations of X-ray images conducted during examinations of patients with COVID-19.

## Features
- Sign up or log in to an account with your individual data
- View all exams on one organized page with each patient's age, sex, BMI, zip code, exam ID, date of exam, key findings, brixia scores, and images (which can be clicked on to enlarge)
- Create new exams with optional fields if necessary
- Update existing exams
- Delete existing exams
- Click on patient IDs to see all exams designated to a specific patient
- Contact the Health Pulse team easily with your email address

## Getting Started
### Client
In order to run the client, you'll run the following commands:

```
bash
cd client/
npm i
npm start
```

You should then be able to visit `localhost:3000` in your browser and see the client running. If you make changes in the `App.js` file, you should see them reflected.

### API
In order to run the server, you'll run the following commands:

```
bash
cd api/
npm i
npm start
```

You should then be able to visit `localhost:9000` in your browser and see the server running.

## Live Demo
Link to live demo here

## Credits
### Developers
<img src= "https://i.imgur.com/CHdmIoc.png" alt = "Zaacaa Team">

<div align="center">
  <table>
    <tr>
      <td><a href="https://github.com/alinemoreau">Aline Moreau</a></td>
      <td><a href="https://github.com/AndrewDeAsevedo">Andrew De Asevedo</a></td>
      <td><a href="https://github.com/camilleb2700">Camille Baptiste</a></td>
      <td><a href="https://github.com/AlbertoChavez928">Alberto Chavez</a></td>
      <td><a href="https://github.com/AymanDevOps">Ayman Alabbasi</a></td>
      <td><a href="https://github.com/zachverdieu">Zacharie Verdieu</a></td>
    </tr>
  </table>
</div>



### Assets
- This project was created using the Hack.Diversity Tech Dive Template found [here.](https://github.com/Hack-Diversity/tech-dive-skeleton)
- Health Pulse's icon can be found on FlatIcon [here.](https://www.flaticon.com/free-icons/x-ray)
