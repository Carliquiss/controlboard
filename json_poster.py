import requests
from datetime import datetime

incorrect_json = {"test":"hola"}

correct_json = {
    "status" : "OFF",
    "ip"     : "440.550.660.770",
    "name"   : "requester chulo",
    "time"   : str(datetime.now())
}


#correct_petition = requests.post("http://localhost:5000/update", json = correct_json)
#print(correct_petition.text)
#incorrect_petition = requests.post("http://localhost:5000/update", json = incorrect_json)
#print(incorrect_petition.text)

peticion = requests.get("http://localhost:5000/getNames")
print(peticion.text)
peticion2 = requests.get("http://localhost:5000/getDeviceInfo?name=test_device")
print(peticion2.text)