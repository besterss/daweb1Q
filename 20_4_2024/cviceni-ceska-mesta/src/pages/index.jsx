import { render } from '@czechitas/render';
import { City } from '../components/city/index.jsx'
import '../global.css';
import './index.css';

const cities = [
  {
    name: 'Praha',
    population: 1324277,
    area: 496.21,
  },
  {
    name: 'Brno',
    population: 381346,
    area: 230.18,
  },
  {
    name: 'Ostrava',
    population: 287968,
    area: 214.23,
  },
  {
    name: 'Plzeň',
    population: 174842,
    area: 137.67,
  },
  {
    name: 'Liberec',
    population: 104802,
    area: 106.09,
  },
  {
    name: 'Olomouc',
    population: 100663,
    area: 103.33,
  },
  {
    name: 'České Budějovice',
    population: 94463,
    area: 55.6,
  },
  {
    name: 'Hradec Králové',
    population: 92939,
    area: 105.69,
  },
  {
    name: 'Ústí nad Labem',
    population: 92716,
    area: 93.97,
  },
  {
    name: 'Pardubice',
    population: 91727,
    area: 82.66,
  },
];

const cityElements = cities.map((city) => `<div className="city">${city.name}</div>`)
console.log(cityElements)

const ShowCities = () => {

  return (
    <>
      {cities.map((city) => {
        return (
          <City key={city.name} name={city.name} population={city.population} area={city.area} />
        )
      })}
    </>
  )
}


document.querySelector('#root').innerHTML = render(
  <div className="container">
    <header>
      <div className="logo"></div>
      <h1>Webová aplikace - Česká města</h1>
    </header>
    <main>
      <ShowCities />
    </main>
    <footer>
      <p>Czechitas, Digitální akademie: Web</p>
    </footer>
  </div>
);
