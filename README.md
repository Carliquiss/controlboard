# Control Dashboard for IoT devices on MongoDB 💻
_This project contains a Backend and a Frontend to show information from IoT devices obtained with [**this**](https://github.com/Carliquiss/uart_extractor) tool_

## ⚙️ How does it works 
This project contains a Backend and a Frontend: 
 * **Backend**: Made with Flask (Python module). It receives a HTTP GET request or a JSON and store the information on a DB managed by MongoDB. 
 * **Frontend**: Made with Angular 8. It shows a web page that requests the information in the DB from the Backend and shows it to the user.


## 🔧 Installing 
* For the Backend you need to install MongoDB, Flask and pymongo (library for Python):
```
sudo apt install mongodb
pip3 install Flask
pip3 install pymongo
```
* For the Frontend you need to install NodeJS and Angular with its libraries:
```
apt-get install nodejs
npm install -g @angular/cli
npm install leaflet
npm install @asymmetrik/ngx-leaflet
```

## 🚀 Usage
* Launch the Backend: 
```
python3 backend.py
```
* Launch the Frontend:
```
cd frontend
ng serve
```
Go to http://locahost:4200 to see the web page
