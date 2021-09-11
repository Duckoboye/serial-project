
console.log("bababooey");

//const url = 'ws://localhost:8989/websocket'
const url = "ws://storpojke.com:8989/websocket"
const connection = new WebSocket(url)

connection.onopen = () => {
  connection.send('Client connected') 
}

connection.onerror = (error) => {
  console.log(`WebSocket error: ${error}`)
}

connection.onmessage = (e) => {
  console.log(e.data)
}

function customButtonClick() {
    const input = document.getElementById("inpt");
    console.log("button clicked " + input.value)
    connection.send("\z"+ input.value)
}

function buttonClick(arg) {
    console.log("button clicked ")
    connection.send("\z"+ arg)
}