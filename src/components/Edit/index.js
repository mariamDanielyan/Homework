import {FILTER_OPTIONS} from "../../helpers/constants";
import {COLORS} from "../../helpers/constants";
import {useEffect, useState} from "react";


const Edit = () =>{
    const [value, setValue] = useState(FILTER_OPTIONS[0])
    const [color, setColor] = useState(COLORS[0])

    useEffect(()=>{

    },[value,color])

    const getValue = (e) => {
      setValue(e.target.value)
    }
    console.log(value)

    const getColor = (e) => {
        setColor(e.target.value)
    }
    console.log(color)
    return (
        <>
            <div className={'edit-container'}>
                <select onChange={getValue} className={'select'}>
                    <option value={"Choose"}>Choose</option>
                    {
                        FILTER_OPTIONS.map(item => (
                        <option key={item} value={item}>{item}</option>
                    ))
                    }
                </select>
                <select onChange={getColor} className={'select'}>
                <option value={"Colors"}>Colors</option>
                {
                    COLORS.map(item => (
                        <option key={item} value={item}>{item}</option>
                    ))
                }
            </select>
            </div>
        </>
    )
}

export default Edit