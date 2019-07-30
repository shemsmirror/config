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




    print('checking Github css file for an update...')
    cssurl = 'https://raw.githubusercontent.com/shemsmirror/config/master/custom.css'
    cssdir = 'css/new_custom.css'
    cssfile = os.path.join(script_dir, cssdir)

    newest = urllib.request.urlretrieve(cssurl, cssfile)
    with open('css/custom.css') as currentCss:
        with open('css/new_custom.css') as newCss:
            csscurrent = currentCss.read()
            cssnew = newCss.read()
            if csscurrent == cssnew:
                cssUpToDate = True
                print('custom.css is already the newest version')
            else:
                cssUpToDate = False
                print('newer version detected')

    if cssUpToDate is False:
        print('downloading update...')
        os.remove('css/custom.css')
        os.rename('css/new_custom.css', 'css/custom.css')
        print('update successful')
    else:
        print('removing temporary config file...')
        os.remove('css/new_custom.css')
        print('done!')


    if upToDate is False or compUpToDate is False or cssUpToDate is False:
        print('changes applied, please restart MagicMirror')
    else:
        print('all files were up to date, no restart required')
