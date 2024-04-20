import './index.css'

const InputArea = () => {

    const nickname = ''
    const message = ''

    const handleSubmit = (event) => {
        console.log(event)
    }

    const changeNickname = () => {
        console.log(this)
    }

    return (
        <>
            <div>
                
            </div>
        </>
    )
}

export const Chat = () => {

    return (
        <>
            <h1> Vítej v chatu </h1>
            <br />
            <InputArea />
        </>
    )
}
