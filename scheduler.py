import schedule
import time
import requests

def showModule(moduleName,time):
    print("Showing "+ moduleName + " ("+time+")")
    url = "http://192.168.1.228:9090/remote?action=SHOW&module="+moduleName
    resp = requests.get(url)
    print(resp.json())
    return

def hideModule(moduleName,time):
    print("Hiding "+ moduleName + " ("+time+")")
    url = "http://192.168.1.228:9090/remote?action=HIDE&module="+moduleName
    resp = requests.get(url)
    print(resp.json())
    return

train_times = ["05:00","15:00"]
schedule.every().day.at(train_times[0]).do(showModule,'MMM-UKNationalRail',train_times[0])
schedule.every().day.at(train_times[1]).do(hideModule,'MMM-UKNationalRail',train_times[0])

while True:
    schedule.run_pending()
    time.sleep(30)
