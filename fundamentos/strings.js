const escola = "Cod3r"
console.log(escola.charAt(4));
console.log(escola.charAt(5));// nao vai achar
console.log(escola.charCodeAt(3));
console.log(escola.indexOf('3'));

console.log(escola.substr(1));
console.log(escola.substr(0,3));
console.log('Escola '.concat(escola).concat('!'));
console.log('Escola '+ escola + '!');

console.log(escola.replace(3, 'e'));
console.log(escola.replace(/\w/g, 'e')); //regex

console.log('Ana,Maria,Pedro'.split(','));



