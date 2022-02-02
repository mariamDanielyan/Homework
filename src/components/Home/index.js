import {useEffect, useState} from "react";

const Home = () =>{
    const [messages, setMessages] = useState([])

    useEffect(() => {
        fetch('/db.json')
            .then(res => res.json())
            .then(res => setMessages(res.messages))
            .catch(e => console.log('error from messagesContext', e))
    },[])

    return (
        <>
            <div className={'home-container'}>
                {
                    messages.map(item =>(
                        <div
                            key={item.id}
                            className={'carts'}
                        >
                            <p>Name: {item.name}</p>
                            <p>Date: {item.date}</p>
                            <p>Text: {item.text}</p>

                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Home