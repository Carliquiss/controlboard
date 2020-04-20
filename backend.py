from flask_cors import CORS
from flask import Flask, request
from mongo_handler import * 
import requests
import json


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
    json_repsonse = json.loads(requests.get("https://ipinfo.io/{}/json".format(ip)).text)
    return {"coordinates":[json_repsonse["loc"].split(",")]}


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
    info = request.get_json()
    print(info)
    info.update(locateIP(info["ip"]))

    insertInfo(info)
    
    return "OK"



if __name__ == '__main__':

    app.run(debug=True, host="0.0.0.0", port=5000)