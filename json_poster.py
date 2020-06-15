import requests
import json
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

#peticion = requests.get("http://localhost:5000/getNames")
#print(peticion.text)
#peticion2 = requests.get("http://localhost:5000/getDeviceInfo?name=test_device")
#print(peticion2.text)

"""
ip = "79.147.171.51 "
ip_info = requests.get("https://ipinfo.io/{}/json".format(ip))

print(ip_info.text)
json_info = json.loads(ip_info.text)
print(json_info["loc"])
"""

test_info = {
    "status"        : "ON",
    "name"          : "test_device",
    "shellIP"       : "10.10.10.2",
    "shellPort"     : "4443"
}


test_info2 = {
    "status"        : "ON",
    "name"          : "test_device2",
    "shellIP"       : "10.10.10.2",
    "shellPort"     : "4444"
}


test_info3 = {
    "status"        : "ON",
    "name"          : "test_device3",
     "shellIP"       : "10.10.10.2",
    "shellPort"     : "4445"
}

test_info4 = {
    "status"        : "ON",
    "name"          : "test_device4",
    "shellIP"       : "10.10.10.2",
    "shellPort"     : "4446"
}


for i in range(5):
    requests.post("http://localhost:5000/update", json=test_info)
    requests.post("http://localhost:5000/update", json=test_info2)
    requests.post("http://localhost:5000/update", json=test_info3)
    requests.post("http://localhost:5000/update", json=test_info4)