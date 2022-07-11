# Injozi-Assessment

# Description

Displays the Formula One champions for the seasons 2005 to 2015 and the winners of each rounds of these seasons

# Architecture

The code divided into modules for scaleability and faster loading. A shared module has been used for the Angular Material and other common modules. A reusable componeent used to display the seasons champions. A state has been used to pass the RaceTable and the champion of the season to the season component. This approach used for demonstration reasons since that has the disantvantage that the state data will lost if the age reload. Other approaches can be used to avoid this issue like using the localstorge, load the data again from the api etc. Specific folders have been used for the interfaces and services. Setup Ensure you have a recent version of Node and NPM installed. Install Angular CLI, npm i -g angular-cli@latest Install Typescript, npm i -g typescript Install Node packages, npm i Run local build, ng serve

# Libraries

Angular Material modules and RxJs libraries has been used

# Code scaffolding

Run ng generate component component-name to generate a new component. You can also use ng generate directive|pipe|service|class|guard|interface|enum|module.

# Build

The android apk file is located under "android>>app>>release>>app-release.apk
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.
Run npm install to install all packages.
Run ionic serve to run the app on web.
Run ionic serve -l to run the app on mobile emulator.

# Further help

To get more help on the Angular CLI use ng help or go check out the Angular CLI README.
