import React from 'react';
import './pagination.css';

const Pagination = (props) =>{
    console.log(props)
    const { handelPaginationClick ,page, totalPages } = props
    return(
        <div className='Pagination'>
           <button 
                className='Pagination-button' 
                onClick={ () => handelPaginationClick('prev') }
                disabled = {page === 1}
                >
                &larr;
           </button>
           <span className='Pagination-info'>
                Page <b>{ page }</b> of <b>{ totalPages }</b>
           </span>
           <button 
                className='Pagination-button'  
                onClick={ () => handelPaginationClick('next') }
                disabled = {page === totalPages}
                >
                &rarr;
           </button>
        </div>
    )
}

export default Pagination;