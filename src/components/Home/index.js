import {useCallback, useEffect, useState} from "react";
import {memo} from "react";
import Messages from "../Messages";

const Home = ({edit}) =>{

    return (
        <>
            <div className={'home-container'}>
                <Messages edit={edit}  />
            </div>
        </>
    )
}

export default memo(Home)