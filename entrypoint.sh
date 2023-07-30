#!/bin/bash

cd /usr/src/app

sequelize db:create 
sequelize db:migrate

npm install
npm start