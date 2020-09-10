import React from 'react';
import {TranslateContext} from '../../context/translateContext';

class Navigation extends React.Component {
    render(){
        return(
            <TranslateContext.Consumer>
                {
                    (context) =>{
                        // console.log(context)
                        return (
                            <div>
                                <h2>Navigation</h2>
                            </div>
                        )
                    }
                }
            </TranslateContext.Consumer>       
        )
    }    
};
 
export default Navigation;