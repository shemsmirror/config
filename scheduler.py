import schedule
import time
import requests

def showModule(moduleName,time):
    print("showing "+ moduleName + " ("+time+")")
    url = "http://127.0.0.1:9090/remote?action=SHOW&module="+moduleName
    resp = requests.get(url)
    print(resp.json())

    schedule.every().hour.do(refreshBrowser).tag("hourly-refresh")
    print("hourly browser refresh enabled")
    return

def hideModule(moduleName,time):
    print("hiding "+ moduleName + " ("+time+")")
    url = "http://127.0.0.1:9090/remote?action=HIDE&module="+moduleName
    resp = requests.get(url)
    print(resp.json())
    schedule.clear("hourly-refresh")
    print("hourly browser refresh disabled")
    return

def refreshBrowser():
    print("hourly browser refresh")
    url = "http://127.0.0.1:9090/remote?action=REFRESH"
    resp = requests.get(url)
    print(resp.json())

train_times = ["05:00","17:00"]
schedule.every().day.at(train_times[0]).do(showModule,'MMM-UKNationalRail',train_times[0])
schedule.every().day.at(train_times[1]).do(hideModule,'MMM-UKNationalRail',train_times[0])

while True:
    schedule.run_pending()
    time.sleep(30)
