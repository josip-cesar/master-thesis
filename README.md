# Applications based on NoSQL and relational databases
Josip Cesar's master thesis sample app

## Prerequisites
* **_JDK 8_** - Install JDK 1.8 version from, http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
* **_Docker Compose_** - It comes as a part of the Docker for Windows install package, https://docs.docker.com/docker-for-windows/install/
* **_Node package manager (npm)_** - npm is a part of Node.js platform, install Node.js from, https://nodejs.org/en/download/
* **_Spring Tool Suite_** - get Spring Tool Suite from, https://spring.io/tools/sts

## Startup instructions 
### 1. Download or Clone Repository
Download or clone this repository to any folder on your machine. You can clone this repository by executing following instruction:
```
git clone https://github.com/josip-cesar/master-thesis.git
```

### 2. Build and run Docker Database Containers
Open a command line window or terminal and navigate to **implementation/docker** folder. After that issue the following commands in sequence:
```
docker-compose build
docker-compose up -d
```
This will start one MongoDB and two MySQL docker containers which are needed to run web-app services.

### 3. Build and run web-app services
Individual web services are located in **implementation/web-app** folder. The fastest way to start them is by using Spring Tool Suite. All you have to do is to open each individual project located in implementation/web-app folder inside of Spring Tool Suite and run them as standard Java program.

Once this is done user-service should be available at `http://localhost:8181`. Similarly, product-service should be available at port `8282`, shopping-cart-service on the port `8383`, and order-service on the port `8484`.

### 4. Build Frontend App (React.JS)
Frontend application is located in **implementation/demo-online-store-ui** folder. To build & run frontend app open a command line window or terminal and navigate to that folder and then issue the following commands in sequence:
```
npm install
npm start
```
Once above instructions successfully executed, you can view frontend applikacion by browsing this URL, http://localhost:3000.
