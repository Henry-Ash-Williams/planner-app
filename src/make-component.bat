@echo off

SET /p fileName="Please Enter Your Components Name: "
SET varName=%fileName:-=%
SET dir=%~dp0
SET component=%dir%components\%fileName%
echo Creating A New Component In: %component%

mkdir %component%

cd %component%

mkdir css
cd ./css
mkdir css
cd ./css
echo. 2>index.css
cd ..

mkdir scss
cd ./scss
echo. 2>index.scss

@echo @import '../../../public.scss';> index.scss

cd ..
cd .. 

echo. 2>index.js

@echo import React, { Component } from 'react';> index.js
@echo import './css/css/index.css';>> index.js
@echo. >> index.js
@echo class %varName% extends Component {>> index.js
@echo     render() {>> index.js
@echo         return ^(>> index.js 
@echo             ^<div className="%fileName%"^>>> index.js
@echo. >> index.js
@echo             ^</div^>>> index.js
@echo         ^);>> index.js
@echo     }>> index.js
@echo }>> index.js
@echo export default %varName%;>> index.js




