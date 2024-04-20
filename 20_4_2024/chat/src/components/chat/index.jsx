import './index.css'

const Form = () => {
    const handleSubmit = (e) => {
      console.log(e);
    }
  
    return (
      <form onSubmit={handleSubmit()}>
        <button type="submit">Submit</button>
      </form>
    );
}

export const Chat = () => {

    return (
        <>
            <h1> Vítej v chatu </h1>
            <br />
            <Form />
        </>
    )
}
