import './index.css';

export const City = (props) => {
    return(
      <>
        <div className='city'>
          <strong>{props.name}</strong> <br />
          <span>Počet obyvatel: {props.population}</span> <br />
          <span>Rozloha v km2: {props.area}</span> <br />
        </div>
      </>
    )
}