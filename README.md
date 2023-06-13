# flight_booking

Project created with:
- Node.js
- Express
- React

[Demo Site Deployed](http://20.9.64.7:3000/)

http://20.9.64.7:3000/

Azure Cloud VM - Ubuntu 20

# Requirements
Install Node.js >= 16.0 version

Install Postgres

Install Git

# Commands:
Run this commands to install App
```bash
// Create DataBase and User
sudo -u postgres createuser <UserName>
sudo -u postgres createdb <DataBaseName>

// Clone repository
git clone https://github.com/davidromanl/flight_booking.git

// Create tables and insert demo data
psql -U UserName -d DataBaseName -a -f data_demo_cities.sql

// Install all dependencies
npm install
cd client/ && npm install

// Build Front dist folder
client/ npm run build

// Run App
npm run start
```