@echo off

::Asks the User To Enter A File Name For Their Component
SET /p fileName="Please Enter Your Components Name: "
::Creates A Similary Variable To The Name But Without Any Hyphens 
SET varName=%fileName:-=%
::Gets The Current Directory
SET dir=%~dp0
::Creates A Path To The New Component
SET component=%dir%components\%fileName%
::Tells The User Where The New File Will Be Saved
echo Creating A New Component In: %component%

::Makes The New Component Root File
mkdir %component%

::Goes To The Components Root File
cd %component%

::Makes a CSS Subdirectory
mkdir css
::Goes To The CSS Subdirectory
cd ./css

::Makes A File Which Contains The index.css File
mkdir css
cd ./css
echo. 2>index.css
::Goes Back To The ./planner-app/src/components/%fileName%/css directory
cd ..

::Makes A SCSS Subdirectory 
mkdir scss
::Goes Inside Of It And Makes The index.scss File
cd ./scss
echo. 2>index.scss

::Write To The index.scss File Which Tells It To Import The public.scss file
@echo @import '../../../public.scss';> index.scss

::Goes Back To The Component's Root Directory 
cd ..
cd .. 

::Makes An index.js file
echo. 2>index.js

::Writes A Basic React Component Inside Of It 
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




