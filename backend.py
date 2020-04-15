
from flask import Flask, request
from mongo_handler import * 


app = Flask(__name__)


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


@app.route('/')
def index():
    return "Pagina principal"


@app.route('/update', methods=['POST'])
def update():
    info = request.get_json()
    insertInfo(info)
    
    return "OK"



if __name__ == '__main__':

    app.run(debug=True, host="0.0.0.0", port=5000)