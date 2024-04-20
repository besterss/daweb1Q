import { render } from '@czechitas/render';

import '../global.css';
import './index.css';


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace</h1>
    </header>
    <main>
      <form id="send" method="get">
        <input id="fNickname" type="text" placeholder="Nickname" />
        <br />
        <textarea id="fMessage" placeholder="Message" />
        <br />
        <button type="submit">Send message</button>
      </form>
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);


const sendMessage = () => {
  let nickname = document.getElementById('fNickname').value
  let message = document.getElementById('fMessage').value
  console.log(nickname + message)
}

const sendForm = document.getElementById('send')
sendForm.addEventListener("submit", sendMessage())

