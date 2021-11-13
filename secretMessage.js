//Using array methods, you will transform an array of strings into a secret message!
let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];
console.log(secretMessage.length);
const removeElements=secretMessage.pop();
console.log(removeElements);
console.log(secretMessage.length);//checking the length of the arrray
secretMessage.push('to','Program');

secretMessage[7]='right';//replacing the word 'easily' with 'right'
//console.log(secretMessage);

secretMessage.shift();//removes the first elements/string in the array list.
secretMessage.unshift('Programming');//adding the string 'Programming to the begining of the array
secretMessage.splice(7,10,'know');//removes group of strings and replacing them with 'know'
console.log(secretMessage.join(' '));//prints all the strings altogether as a sentence.





