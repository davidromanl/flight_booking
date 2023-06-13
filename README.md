# flight_booking

Project created with:
- Node.js
- Express
- React

Requirements

Install Node.js >= 16.0 version
Install Postgres
Install Git

Commands:
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
~/client/$ npm run build

// Run App
~/client/$ npm run start
```