// Write your code here!
//dom is in index.html file
//document.querySelector('main')
const main = document.getElementById('main');
main.remove()
//create element h1 and assign to var newHeader
const newHeader = document.createElement('h1');
//assign id 'victory' to element
newHeader.id = 'victory'
//add content
newHeader.textContent = 'YOUR-NAME is the champion'
//next line not needed for test
document.body.append(newHeader);