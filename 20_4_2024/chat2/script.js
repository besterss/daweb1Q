const sendFormElement = document.querySelector('#send');
const messageElement = document.querySelector('#message');
const nameElement = document.querySelector('#name');

const handleSendMessage = (event) => {
  event.preventDefault();
  const apiPayload = {
    message: messageElement.value,
    name: nameElement.value,
  };

  fetch('https://czechichat.deno.dev/api/send-message', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(apiPayload),
  }).then((response) => {
    if (response.status === 200) {
      messageElement.value = '';
      nameElement.value = '';
    } else {
      alert(`Odeslání zprávy se nezdařilo.\n${response.statusText}`);
    }
  });
};

sendFormElement.addEventListener('submit', handleSendMessage);

// -------------- bonus --------------
const messagesElement = document.querySelector('#messages');

const loadMessagesHistory = () => {
  fetch('https://czechichat.deno.dev/api/list-messages')
    .then((response) => response.json())
    .then(showMessagesHistory);
};

const showMessagesHistory = (data) => {
  const messagesHTML = data.messages
    .map(
      (message) =>
        `<li><small>${message.date}</small> <strong>${message.name}</strong>: ${message.message}</li>`
    )
    .join('');
  messagesElement.innerHTML = messagesHTML;
};

loadMessagesHistory(); // zobrazit historii hned po načtení stránky
setInterval(loadMessagesHistory, 3000);