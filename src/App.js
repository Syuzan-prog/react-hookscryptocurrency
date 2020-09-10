import React, {useState} from 'react';
import {TranslateContext} from './context/translateContext';
import Header from './components/header/Header';


const translateData = {
    CONTEXT: 'context',
    BUTTON: 'button',
    OK: 'ok'
}

const App = () => {
    console.log(useState(10),'ustate')
    const [value,setvalue] = useState(10)
    return(
        <button onClick={ ()=>setvalue(value+1)}></button>
        <TranslateContext.Provider value={translateData}>
            App
           <Header />
        </TranslateContext.Provider> 
        
    )
};

export default App;

//context