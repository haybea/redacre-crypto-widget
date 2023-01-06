# redacre-crypto-widget
# Maker-Checker Admin
This widget displays several currency exchanges rates and allows the user to exchange USD for
Crypto. The application consists of a React front-end client and a Node back-end
service (Nest.js). The backend can be found here https://github.com/haybea/redacre-crypto-exchange

## Getting Started
These instructions will get you a copy of the project up and running on your local machine.

### Install
Clone the git repository on your computer

```$ git clone https://github.com/haybea/redacre-crypto-widget.git```


You can also download the entire repository as a zip file and unpack in on your computer if you do not have git

## Run the application

Locate the index.html file at ```/build/index.html``` and open it in your preferred browser to run the app.
This project has been pre-built with the assumption that the backend is hosted on ```PORT 5005``` on the same machine.

## Embed widget in custom app
If you want to embed this widget in your app/custom layout. Copy the following files into your project folder
```
/build/static/css/main.6196addc.css
/build/static/js/main.43d4dac6.js
```

After that, add the two files into the head of the document
```
<script defer="defer" src="./PATH_TO_FILE/main.43d4dac6.js"></script>
<link href="./PATH_TO_FILE/main.6196addc.css" rel="stylesheet" />
```

#### Embed the exchange toolbar
To embed the Exchange Toolbar, copy the code below into the desired location.
```
    <div
      id="exchange"
      data-type="exchange"
      class="red-acre-crypto-widget"
      style="width: 80%; margin: 0 auto"
    ></div>
```
#### Embed the exchange toolbar
To embed the Historical data table, copy the code below into the desired location.
```
    <div
      id="exchange-list"
      data-type="exchange-list"
      class="red-acre-crypto-widget"
      style="width: 80%; margin: 0 auto"
    ></div>
```
## To change the port
To change the port for the exchange api, locate the config file at ```src/config/config.js```. Then change the port from the value of base_url as desired e.g from ```http://localhost:5005``` to ```http://localhost:6000```. Make sure this corresponds to the port at which the backend is served. You can find instructions on how to change the port that serves backend on the backend repository.
After changing the port you need to build the app again. Open your terminal.
```
$ cd /redacre-crypto-widget
$ npm install
$ npm run build

```
You will find your files in the ```/build``` folder


## Built With
* [React](https://reactjs.org) - A JavaScript library for building user interfaces

