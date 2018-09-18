# Applications based on NoSQL and relational databases
Josip Cesar's master thesis sample app

## Prerequisites
* **_JDK 8_** - Install JDK 1.8 version from, http://www.oracle.com/technetwork/java/javase/downloads/jdk8-downloads-2133151.html
* **_Docker Compose_** - It comes as a part of the Docker for Windows install package, https://docs.docker.com/docker-for-windows/install/
* **_Node package manager (npm)_** - npm is a part of Node.js platform, install Node.js from, https://nodejs.org/en/download/
* **_Spring Tool Suite_** - get Spring Tool Suite from, https://spring.io/tools/sts

## Startup instructions 
#### 1. Download or Clone Repository
Download or clone this repository to any folder on your machine. You can clone this repository by executing following instruction,
```
git clone https://github.com/josip-cesar/master-thesis.git
```

#### 2. Build and run Docker Database Containers
Open a command line window or terminal and navigate to **implementation/docker** folder. After that issue the following commands in sequence:
```
docker-compose build
docker-compose up -d
```
This will start one MongoDB and two MySQL docker containers which are needed to run web-app services.

#### 3. Build and run web-app services


