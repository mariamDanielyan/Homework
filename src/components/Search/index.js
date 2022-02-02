import {TYPE} from "../../helpers/constants";

const Search = () =>{
    return (
        <>
            <div className={'search-container'}>

                   <select className={'search-select'}>
                       <option value={"Choose"}>Choose</option>
                       {
                           TYPE.map((item)=>(
                                <option value={item}>{item}</option>
                           ))
                       }
                   </select>

                    <input type={'text'} placeholder={'Write key for search!'}/>

            </div>
        </>
    )
}

export default Search