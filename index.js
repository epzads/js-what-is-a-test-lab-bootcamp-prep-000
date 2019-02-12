// write your code below!
var name = "Susan"
var height = 34
var message = ` ${name} is ${height} inches tall`

module.exports = {name, height, message}

function sayhelloTo(firstName){
    console.log("Hello" + firstName );
}


function sayhiTo(hello,firstName){
    return `${hello},  ${firstName}!` );
}


function add(x,y) {

  return x + y
}

console.log (add (1,2))
sayhiTO("HEllo","Alex")
