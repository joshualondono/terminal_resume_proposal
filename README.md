# Password Protected Directory Summary

       1. Input
       2. View members 
       3. View Phone Number 
       4. 3 terminal arg >> fname, lname, pass
       
# Getting Started 

1. Running the command
  	
~~~~ js

node main.js fname, lname, pass

~~~~


# App Logic

1. Add password to view members (2 possible passwords)
  	
~~~~ js

const member = (pass === 'codeimmersives' || pass === 'Codingisfun') ? 'members in dir >> joshua londono, michael phelps, donald trump, elon musk, donald duck, john smith' : 'contact admin for password';


~~~~

2. Output phone number to terminal  

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
