# Password Protected Directory Summary

View phone number of members of a directory with password protection on terminal 
       
# Getting Started 

Prerequisites
You will need to install node and terminal in order to use the app.

Installing

~~~~
$ git clone https://github.com/joshualondono/terminal_resume_proposal
$ cd ./iffy 
~~~~

Installing the Node

~~~~
$ npm init -y
$ npm i
~~~~

1. Running the command
  	
~~~~ 

$ node main.js fname, lname, pass

~~~~


# App Logic

1. Outputs directory of members without phone number when contact name is incorrect 
  	
~~~~ js

const member = (pass === 'codeimmersives' || pass === 'Codingisfun') ? 'members in dir >> joshua londono, michael phelps, donald trump, elon musk, donald duck, john smith' : 'contact admin for password';


~~~~

2. Output phone number to terminal when contact name is correct 
~~~~ js

function getPhone(param1,param2){
  param1 = param1.toLowerCase()
  param2 = param2

    return (param1 === 'joshua londono' && param2 === 'Codingisfun' || param2 === 'codeimmersives') ? 5619832659
         : (param1 === 'michael phelps' && param2 === 'Codingisfun' || param2 === 'codeimmersives') ? 7189932659
         : (param1 === 'donald trump' && param2 === 'Codingisfun' || param2 === 'codeimmersives') ? 8589872679
         : (param1 === 'elon musk' && param2 === 'Codingisfun' || param2 === 'codeimmersives') ? 7279832659
         : (param1 === 'donald duck' && param2 === 'Codingisfun' || param2 === 'codeimmersives') ? 6199832659
         : (param1 === 'john smith' && param2 === 'Codingisfun' || param2 === 'codeimmersives') ? 7039842659
         : (param1 === undefined && param2 === undefined || param2 === undefined) ? 'You must input 3 arg >> fname, lname & pass'
         : 'missing contact or incorrect pass!';
}
~~~~


# Details

       1. Password can be specific to contact 
       2. Not very secure
