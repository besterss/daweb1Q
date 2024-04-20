import { render } from '@czechitas/render';
import '../global.css';
import './index.css';

// Řešení č.1: 

const response_data = await fetch('http://localhost:4000/api/workshops/0');
const data = await response_data.json();


// Řešení č.2:

const Venue = (props) => {
  return (
    <>
      <strong>{props.venue}</strong>
    </>
  )
}

const Instructor = (props) => {
  
  return (
    <>
      <strong>{props.instructor}</strong>
    </>
  )
}

const WorkshopInfo = (props) => {
  console.log(props)

  return (
    <>
      <ul>
        <li className="title">{props.title}</li>
        <li><strong>{props.price}</strong></li>
        <li>{props.description}</li>
      </ul>
    </>
  )
}

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <h1>Řešení č.1.</h1><br />
    <br />
    <strong>{data.data.title}</strong>
    <strong>{data.data.description}</strong><br />
    <br />
    <strong style={{color: "red"}}>Výsledná cena je: {data.data.price} Kč</strong>

    <hr />
    <h2>Řešení č.2:</h2>
    <WorkshopInfo title={data.data.title} description={data.data.description} price={data.data.price} dalsi="ahoj"/>
  </div>
);
