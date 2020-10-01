import React from 'react';

export const handelRespons = response =>{
    return response.json().then( data => {
        if(response.ok){
            return data
        }
        return Promise.reject(data)
    })
}
export const renderChangePercent = changePercennt => {
    if(changePercennt > 0){
        return (
            <span className='percent-raised'>
                {changePercennt}%&uarr;
            </span>
        )
    }else if(changePercennt<0){
        return (
            <span className='percent-fallen'>
                {changePercennt}%&darr;
            </span>
        )
    }else{
        return (
            <span>
                {changePercennt}
            </span>
        )
    }
}