// write your code below!
var name = "Susan"
var height = 34
var message = ` ${name} is ${height} inches tall`

module.exports = {name, height, message}

function sayhelloTo(firstName){
    console.log("Hello" + firstName );
}

sayhelloTo("Jackie")

function say (greeting,firstName){
  console.log(`${greeting},${firstName}!`)
}

say("hello","Alex")
