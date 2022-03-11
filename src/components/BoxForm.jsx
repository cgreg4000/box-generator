import React, {useState} from 'react';

const BoxForm = () => {

    let [colorInput, setColorInput] = useState("");
    let [sizeInput, setSizeInput] = useState("")
    let [boxList, setBoxList] = useState([]);
    
    const boxHandler = (e) => {
        e.preventDefault();
        let newBox = {colorInput, sizeInput}
        setBoxList([...boxList, newBox])
        setColorInput("")
        setSizeInput("")
    }

    return(
        <>
            <form className='form-control border-0' onSubmit={boxHandler}>
                <div className='row justify-content-center mt-3'>
                    <label className='col-1'>Color</label>
                    <input className='col-2' type="text" onChange={(e) => setColorInput(e.target.value)} value = {colorInput} />
                </div>
                <div className='row justify-content-center mt-3'>
                    <label className='col-1'>Size</label>
                    <input className='col-2' type="number" onChange={(e) => setSizeInput(parseInt(e.target.value))} value = {sizeInput} />
                </div>
                <div className='row justify-content-center mt-3'>
                    <input className='btn btn-primary col-1' type="submit" value="Add"/>
                </div>
            </form>
            <div className='flex'>
            {
                boxList.map( box => {
                    return <div className='m-3' style={{backgroundColor: box.colorInput, height: box.sizeInput, width: box.sizeInput}}>
                        </div>
                    }
                )
            }
            </div>
        </>
    )
}

export default BoxForm;