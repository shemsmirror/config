import urllib.request
import os
import json
script_dir = os.path.dirname(__file__)

if __name__ == '__main__':
    print('checking Github config file for an update...')
    configurl = 'https://raw.githubusercontent.com/shemsmirror/config/master/config.js'  
    configdir = 'config/new_config.js'
    conffile = os.path.join(script_dir, configdir)

    newest = urllib.request.urlretrieve(configurl, conffile)
    with open('config/config.js') as currentConfig:
        with open('config/new_config.js') as newConfig:
            current = currentConfig.read()
            new = newConfig.read()
            if current == new:
                upToDate = True
                print('config.js is already the newest version')
            else:
                upToDate = False
                print('newer version detected')

    if upToDate is False:
        print('downloading update...')
        os.remove('config/config.js')
        os.rename('config/new_config.js', 'config/config.js')
        print('update successful')
    else:
        print('removing temporary config file...')
        os.remove('config/new_config.js')
        print('done!')

    print('checking Github compliments file for an update...')
    compurl = 'https://raw.githubusercontent.com/shemsmirror/config/master/compliments.json'
    compdir = 'modules/default/compliments/new_compliments.json'
    compfile = os.path.join(script_dir, compdir)

    newest = urllib.request.urlretrieve(compurl, compfile)
    with open('modules/default/compliments/compliments.json') as currentComps:
        with open('modules/default/compliments/new_compliments.json') as newComps:
            compcurrent = currentComps.read()
            compnew = newComps.read()
            if compcurrent == compnew:
                compUpToDate = True
                print('compliments.json is already the newest version')
            else:
                compUpToDate = False
                print('newer version detected')

    if compUpToDate is False:
        print('downloading update...')
        os.remove('modules/default/compliments/compliments.json')
        os.rename('modules/default/compliments/new_compliments.json', 'modules/default/compliments/compliments.json')
        print('update successful')
    else:
        print('removing temporary config file...')
        os.remove('modules/default/compliments/new_compliments.json')
        print('done!')

    if upToDate is False or compUpToDate is False:
        print('changes applied, please restart MagicMirror')
    else:
        print('all files were up to date, no restart required')
