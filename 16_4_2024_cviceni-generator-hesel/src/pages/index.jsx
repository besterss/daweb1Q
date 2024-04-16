import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

const response_passowrd = await fetch('https://www.psswrd.net/api/v1/password/?length=17&lower=1&upper=0&int=1&special=0');
const data = await response_passowrd.json();
console.log(data)

const strongPassword = (password,length) => {

  return (
    <>
      <strong>{password}</strong>
    </>
  )
}

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <strong>Náhodné silné heslo je: {data.password}</strong>
  </div>
);
