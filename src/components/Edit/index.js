import {FILTER_OPTIONS} from "../../helpers/constants";
import {COLORS} from "../../helpers/constants";
import {useCallback, useEffect, useState} from "react";
import {memo} from "react";
import React from "react";


const Edit = ({handleEdit}) =>{
    const [value, setValue] = useState(null)
    const [color, setColor] = useState(null)


    useEffect(()=>{
        handleEdit({value, color})
    },[value ,color])

    const getValue = (e) => {
      setValue(e.target.value)
    }

    const getColor = (e) => {
        setColor(e.target.value)
    }

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


export default memo(Edit)