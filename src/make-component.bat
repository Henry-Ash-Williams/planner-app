@echo off

SET /p name="Please Enter Your Components Name: "
SET dir=%~dp0
SET component=%dir%components\%name%
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

::Removes All Hyphens From The Name Of The Component

set name=%name:-=%

@echo import React, { Component } from 'react';> index.js
@echo import './css/css/index.css';>> index.js
@echo. >> index.js
@echo class %name% extends Component {>> index.js
@echo     render() {>> index.js
@echo         return ^(>> index.js 
@echo             ^<div className="%name%"^>>> index.js
@echo. >> index.js
@echo             ^</div^>>> index.js
@echo         ^);>> index.js
@echo     }>> index.js
@echo }>> index.js
@echo export default %name%;>> index.js


