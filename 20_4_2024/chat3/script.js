const sendFormElement = document.querySelector('#send');
const messageElement = document.querySelector('#message');
const nameElement = document.querySelector('#name');

const handleSendMessage = (event) => {
  event.preventDefault();
  if (nameElement.value === '') {
    alert('Musíte vyplnit jméno!')
  }else if (messageElement.value === '') {
    alert('Musíte vyplnit zprávu!')
  }else{
    console.log(nameElement.value)
    console.log(messageElement.value)
    fetch('https://czechichat.deno.dev/api/send-message', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: nameElement.value,
        message: messageElement.value
      }),
    }).then((response) => {
      if (response.status === 200) {
        messageElement.value = '';
        nameElement.value = '';
      } else {
        alert(`Odeslání zprávy se nezdařilo.\n${response.statusText}`);
      }
    });
  }
};

sendFormElement.addEventListener('submit', handleSendMessage);


// BONUS 

const messagesElement = document.querySelector('#messages');

const zobrazChat = (data) => {
  messageElement.innerHTML = ''
  data.messages.forEach(message => {
    messagesElement.innerHTML += `
    <strong>${message.name}</strong> <br/>
    <span style="font-style: italic">${message.date}</span> 
    <span style="display: block; margin-left:20px">${message.message}</span>
    `
  });
}

const nactiChat = () => {
  fetch('https://czechichat.deno.dev/api/list-messages')
    .then((response) => response.json())
    .then(zobrazChat);
}

setInterval(nactiChat,3000)
nactiChat()