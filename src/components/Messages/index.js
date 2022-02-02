import {useEffect, useState} from "react";
import {memo} from "react";

const Messages = ({edit})=>{
    const [messages, setMessages] = useState([])
    const [nameColor, setNameColor] = useState(null)
    const [textColor, setTextColor] = useState(null)

    const getStyle = () =>{
        edit.value === 'name' ? setNameColor(edit.color) : setTextColor(edit.color)
    }
    useEffect(()=>{
        getStyle()
    }, [edit])

    useEffect(()=>{
        fetch('/db.json')
            .then(res => res.json())
            .then(res => setMessages(res.messages))
            .catch(e => console.log('error from messagesContext', e))
    },[])

    return(
        messages.map(item =>(
            <div
                key={item.id}
                className={'carts'}
            >
                <p style={{color: nameColor}}>Name: {item.name}</p>
                <p>Date: {item.date}</p>
                <p style={{color: textColor}}>Text: {item.text}</p>

            </div>
        ))
    )
}

export default memo(Messages)