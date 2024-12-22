const gamename = new String("Laxmi-game");

console.log(`My new game is ${gamename}`);


console.log(gamename.length)
console.log(gamename.charAt(2));
console.log(gamename.indexOf('i'))
console.log(gamename.substring(0,5))
console.log(gamename.slice(0,4))

const newname = "   laxmi _"
console.log(newname.trim())

const url = "http://test.com/laxmi&20kalal"
console.log(url.replace('&20','-'))
console.log(url.includes('lax'));
console.log(gamename.split('-'))
