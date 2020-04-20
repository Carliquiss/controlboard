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
    "status"        : "OFF",
    "ip"            : "79.147.171.51 ",
    "name"          : "test_device",
    "time"          : str(datetime.now())
}


test_info2 = {
    "status"        : "ON",
    "ip"            : "194.35.233.206",
    "name"          : "test_device2",
    "time"          : str(datetime.now())
}


test_info3 = {
    "status"        : "OFF",
    "ip"            : "195.158.248.163",
    "name"          : "test_device3",
    "time"          : str(datetime.now())
}

test_info4 = {
    "status"        : "ON",
    "ip"            : "195.154.38.231",
    "name"          : "test_device4",
    "time"          : str(datetime.now())
}


for i in range(5):
    requests.post("http://localhost:5000/update", json=test_info)
    requests.post("http://localhost:5000/update", json=test_info2)
    requests.post("http://localhost:5000/update", json=test_info3)
    requests.post("http://localhost:5000/update", json=test_info4)