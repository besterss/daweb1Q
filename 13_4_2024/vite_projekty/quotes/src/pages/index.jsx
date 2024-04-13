import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { quotes } from './quotes.js';

//sort((a, b) => b[1] - a[1]);
//Math.floor(Math.random() * 10);

let nahodnyIndex = Math.floor(Math.random() * quotes.length)

document.querySelector('#quote').innerHTML = render(
  <div className="quoteExample">
    <p>{ quotes[nahodnyIndex].quote}</p>
  </div>
);
