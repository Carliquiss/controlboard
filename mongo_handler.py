from datetime import datetime
from pymongo import *



CLIENT = MongoClient('localhost', 27017)

DB = CLIENT["C&C"]
COLLECTION = DB["devices"]



def populate(collection):

    test_info = {
        "status" : "OFF",
        "ip"     : "0.0.0.0",
        "name"   : "test_device",
        "time"   : datetime.now()
    }


    test_info2 = {
        "status" : "ON",
        "ip"     : "1.1.1.1",
        "name"   : "test_device2",
        "time"   : datetime.now()
    }

    collection.insert_one(test_info)
    collection.insert_one(test_info2)

    


def dbExists(db_name):
    if db_name in CLIENT.list_database_names():
        return True
    
    return False



def collExist(db, collection_name):

    if collection_name in db.list_collection_names():
        return True
    
    return False



def checkInfo(info):
    fields = ["status", "ip", "name", "time"]

    for field in info: 
        if field not in fields:
            return False

    return True


def insertInfo(info):
    if checkInfo(info):
        COLLECTION.insert_one(info)
    
    else: 
        print("Error with JSON provided")


def getDocuments():
    documents = []
    for doc in COLLECTION.find(): 
        documents.append(doc)
        print(doc)
    
    return documents


def getDeviceInfo(device_name):
    query = {"name":device_name}
    documents = COLLECTION.find(query, {"_id":0})
    
    stringDocs = []
    for doc in documents: 
        stringDocs.append(doc)
    
    return {"info":stringDocs}


def clearCollection():
    COLLECTION.delete_many({})


def getDevicesNames():
    names = COLLECTION.find().distinct("name")
    names_string = []

    for name in names: 
        names_string.append(name)
    
    return {"names":names_string}




