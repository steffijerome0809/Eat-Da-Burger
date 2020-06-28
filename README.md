# Eat-Da-Burger

![GitHub Logo](/public/assets/css/burger.png)

THis burger app allows you to create new burger and devour the bugers and you make it again by adding to the list of created burgers

# Heroku Deployment:

- Create a heroku application by opening the Git Bash

  - Type Heroku Login and once the application is connected
  - Type heroku create to create the application link

- Go to heroku dashboards
  - Click on the application link
  - Install Jaws DB from the Add-ons
  - Click on the Jaws DB Icon

# MYSQL WorkBench with Jaws DB:

- Open MS SQL Workbench , Click to add a new Database
  - Enter the host, username,password and the new created database name and connect
  - Once the database is connected we can start to set the folder structure

# Setting up the Folder Structure:

```
.
├── config
│   ├── connection.js
│   └── orm.js
│ 
├── controllers
│   └── burgers_controller.js
│
├── db
│   ├── schema.sql
│   └── seeds.sql
│
├── models
│   └── burger.js
│ 
├── node_modules
│ 
├── package.json
│
├── public
│   └── assets
│       ├── css
│       │   └── burger_style.css
│       └── img
│           └── burger.png
│  
│
├── server.js
│
└── views
   ├── index.handlebars
   └── layouts
       └── main.handlebars
```

# Tools Required:

- VS Code
- Jquery
- Ms SQL

# Run the application

- Run npm init -y
- npm install
- npm install express
- npm npm install mysql
- npm install express-handlebars

# Setting server Connection

- Under the connection.js page
  - Create a SQL connection
    - Using the var connection set the connection to jaws db or if it fails to the local database connection.
- Create the server.js page by importing handlebars and the routes configurtaions

# Run the Application

- Once the code is created ,
- Run heroku open to open the application
- EAT -DA -BURGER

- Once the app is opened , choose a burger from the defualt list or else enter a new Burger name and click on Order it .

- You can view the list of burgers being added and if you want the burgers to be devoured click on "Eat Me" , and the burger gets added to devoured list of burgers,

- Under the Devoured burger list you can send the item back to the list of available burgers by clickin on the icon "Make it Again"

# URL:

https://whispering-beyond-68285.herokuapp.com/
