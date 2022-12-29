// Get the HTML elements that weare  gonna modify
//Buttons
const encryptButton = document.getElementById('encrypt')
const decryptButton = document.getElementById('decrypt')
// Textarea input
const message = document.getElementById('message')
// Paragraph to show message
const paragraph1 = document.getElementById('firstText')
const paragraph2 = document.getElementById('secondText')
// Image in the aside
const doll = document.getElementById('doll')

// Auto focus the cursor into the textarea
message.focus()


encryptButton.onclick = function() {
  // Condition to know the textarea is empty or not
  if(message.value != ""){
    let encrypted = encrypt(message)  
    alert(encrypted.value)
  }else{
    alert('Debes de ingresar un texto para continuar')
  }
}

decryptButton.onclick = function() {
  let decrypted = dencrypt(message)
}

function encrypt(msg) {

  return msg
}

function decrypt(msg) {
  return msg
}