# Password Protected Directory Summary

       1. Input
       2. View members (need password to view)
       3. View Phone Number (no password if you know name)


# App Logic

1. Add password to view members 
  	
~~~~ js

const pass = getInput(0);

const member = (pass === 'codeimmersive105' || pass === 'codingisfun' || pass === 'projectforterm') ? "joshua londono, michael phelps, donald trump, elon musk, donald duck, john smith" : "no contact info!";

console.log(member);

~~~~

2. Output phone number to terminal  

~~~~ js

function getResume(param){
  param = param.toLowerCase()
  
    return (param === 'joshua londono') ? 5619832659
         : (param === 'michael phelps') ? 5619832659
         : (param === 'donald trump') ? 5619832659
         : (param === 'elon musk') ? 5619832659
         : (param === 'donald duck') ? 5619832659
         : (param === 'john smith') ? 5619832659
         : 'No Resume Available!;
}
~~~~


# Stretch Goals

       1. View markdown contact info
