const name = getInput(0) + ' ' + getInput(1)
const pass = getInput(2)

const member = (pass === 'codeimmersive' || pass === 'Codingisfun') ? 'members in dir >> joshua londono, michael phelps, donald trump, elon musk, donald duck, john smith' : 'contact admin for password';

function getPhone(param1,param2){
  param1 = param1.toLowerCase()
  param2 = param2

    return (param1 === 'joshua londono' && param2 === 'Codingisfun' || param2 === 'codeimmersives') ? 5619832659
         : (param1 === 'michael phelps' && param2 === 'Codingisfun' || param2 === 'codeimmersives') ? 7189932659
         : (param1 === 'donald trump' && param2 === 'Codingisfun' || param2 === 'codeimmersives') ? 8589872679
         : (param1 === 'elon musk' && param2 === 'codingisfun' || param2 === 'codeimmersives') ? 7279832659
         : (param1 === 'donald duck' && param2 === 'Codingisfun' || param2 === 'codeimmersives') ? 6199832659
         : (param1 === 'john smith' && param2 === 'Codingisfun' || param2 === 'codeimmersives') ? 7039842659
         : (param1 === undefined && param2 === undefined || param2 === undefined) ? 'You must input 3 arg >> fname, lname & pass'
         : 'missing contact or incorrect pass!';
}

const contact = getPhone(name, pass)

function getInput(n) {
  return process.argv[n + 2];
}

console.log(name.toUpperCase() + ' - ' + contact + ' |||| enter member name and password |||| ' + member)

