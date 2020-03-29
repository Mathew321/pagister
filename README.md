# Pagister

**Pagister** is goede time-table app voor middelbare school! Demo versie is [here](https://pagister-moxin4gnyq-ez.a.run.app/Login).
Alleen geregistreerde users kunnen inloggen. Voor nu heeft het alleen Twee users: *matvei* en *marcin*
De app heeft een sidebar menu en vier beelden:
- Hoofd beeld
    - lessen voor vandaag (afhankelijk van welke dag het is, worden er lessen laten zien)
    - mail
    - huiswerk
    - laatse cijfers
- Profile beeld
    - user foto (als er geen foto aanwezig is, dan zie je een anonymous-user plaatje)
    - user name
    - klas
- agenda
    - lessen van de week
    - de en wordt ook huiswerk laten zien
- cijfers
    - Alle laatste cijfers van de user

## Project setup

- Install [Node.js](https://nodejs.org/en/).
- In your VisualStudio go to project folder (../pagister). Open new Terminal (Terminal -> New Terminal)
- In terminal check that you are in the right folder (e.g. 'PS C:\Projects\pagister>')
- To launch your application locally run the following commands in terminal:
    - `npm install`
    - `npm run serve`
The aplication can be found on your browser [http://localhost:8080/](http://localhost:8080/)
- To stop your application in your Terminal press `ctrl + C` and press `y` on the confirmation question

To checkout the project install any Windows tool for GitHub (e.g. [GitHub Desktop](https://desktop.github.com/))

## All commands:
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
