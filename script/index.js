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
// Clipboard Button
const clipboard = document.getElementById('clipboardButton')

// Auto focus the cursor into the textarea
message.focus()

// Button onClick encrypt the message
encryptButton.onclick = function () {
  // Condition to know the textarea is empty or not
  if (message.value != '') {
    let encrypted = encrypt(message.value)
    doll.style.display = 'none'
    paragraph1.textContent = encrypted
    paragraph2.textContent = ''
    clipboard.style.display = 'block'
    // alert(encrypted)
  } else {
    alert('Debes de ingresar un texto para continuar')
  }
}

// Button onClick decrypt the message
decryptButton.onclick = function () {
  // Condition to know the textarea is empty or not
  if (message.value != '') {
    let dencrypted = decrypt(message.value)
    doll.style.display = 'none'
    paragraph1.textContent = dencrypted
    paragraph2.textContent = ''
    clipboard.style.display = 'block'
    // alert(dencrypted)
    } else {
    alert('Debes de ingresar un texto para continuar')
  }
}

// Button onClick save the final message to the clipboard
clipboard.onclick = function () {
  let text = paragraph1.textContent
  if (!navigator.clipboard) {
    // Clipboard API not available
    return
  }
  navigator.clipboard.writeText(text)
      .then(() => {
      alert("Text copied to clipboard")
    })
    .catch(err => {
      alert('Could not copy to clipboard\nAn unexpected error occurred while copying to clipboard')
      console.log('Something went wrong', err);
  })
}

function copyToClickBoard(){
  var content = document.getElementById('textArea').innerHTML;

  navigator.clipboard.writeText(content)
      .then(() => {
      console.log("Text copied to clipboard...")
  })
      .catch(err => {
      console.log('Something went wrong', err);
  })

}

// Function to replace the characters to encrypt
function encrypt(msg) {
  // Replace 'e' to 'enter'
  if (msg.includes('e')) {
    msg = msg.replaceAll('e', 'enter')
  }
  // Replace 'i' to 'imes'
  if (msg.includes('i')) {
    msg = msg.replaceAll('i', 'imes')
  }
  // Replace 'a' to 'ai'
  if (msg.includes('a')) {
    msg = msg.replaceAll('a', 'ai')
  }
  // Replace 'o' to 'ober'
  if (msg.includes('o')) {
    msg = msg.replaceAll('o', 'ober')
  }
  // Replace 'u' to 'ufat'
  if (msg.includes('u')) {
    msg = msg.replaceAll('u', 'ufat')
  }
  return msg
}

// Function to replace the encrypt letter to the original character
function decrypt(msg) {
  msg = msg.toLowerCase()
  // Replace 'enter' to 'e'
  if (msg.includes('enter')) {
    msg = msg.replaceAll('enter', 'e')
  }
  // Replace 'imes' to 'i'
  if (msg.includes('imes')) {
    msg = msg.replaceAll('imes', 'i')
  }
  // Replace 'ai' to 'a'
  if (msg.includes('ai')) {
    msg = msg.replaceAll('ai', 'a')
  }
  // Replace 'ober' to 'o'
  if (msg.includes('ober')) {
    msg = msg.replaceAll('ober', 'o')
  }
  // Replace 'ufat' to 'u'
  if (msg.includes('ufat')) {
    msg = msg.replaceAll('ufat', 'u')
  }
  return msg
}
