import React, {useState} from 'react';

const BoxForm = () => {

    let [colorInput, setColorInput] = useState("");
    let [boxList, setBoxList] = useState([]);
    
    const boxHandler = (e) => {
        e.preventDefault();
        let newBox = {colorInput}
        setBoxList([...boxList, newBox])
        setColorInput("")


    }

    return(
        <>
            <form className='form-control border-0' onSubmit={boxHandler}>
                <label htmlFor="">Color</label>
                <input className='m-1' type="text" onChange={(e) => setColorInput(e.target.value)} value = {colorInput} />
                <input type="submit" value="Add"/>
            </form>
            <div className='flex'>
            {
                boxList.map( box => {
                    return <div className='box-style m-3' style={{backgroundColor: box.colorInput}}>
                        </div>
                    }
                )
            }
            </div>
            
        </>
        
    )
}

export default BoxForm;