import React from 'react';
import './Detail.css';
import { API_URL } from '../../config';
import {handelRespons , renderChangePercent} from '../../helpers';
import Loading from '../common/Loading';

class Detail extends React.Component{
    constructor(){
        super();
        this.state = {
            loading: false,
            currency: {},
            error: null,
        }
    }
    fetchCurrency(currencyId){
       this.setState({
            loading: true,
        })
        fetch(`${API_URL}/cryptocurrencies/${currencyId}`)
        .then(resp => handelRespons(resp))
        .then( currency => {
            this.setState({
                loading: false,
                currency
            })
            
        })
        .catch( error =>{
            this.setState({
                loading: false,
                error: error.errorMessage
            })           
        })
    }
    componentDidMount(){
        const currencyId = this.props.match.params.id
        this.fetchCurrency(currencyId);
    }

    componentWillReceiveProps(nextProps){
        const currencyId = nextProps.match.params.id
        this.fetchCurrency(currencyId);
    }

    render(){
        const { currency, loading, error } = this.state;
        if(loading) {
            return (
                <div className='loading-container'>
                    <Loading />
                </div>
            )
        }
        // console.log(currency,'currency')
        if(error){
            return (
                <div className='error'>
                   {error}
                </div>
            )
        }
        return(
            <div className='Detail'>
                <h1 className='Detail-heading'>
                    {currency.name}
                </h1>
                <div className='Detail-container'>
                    <div className='Detail-item'>
                        Price
                        <span className='Detail-value '>
                            ${currency.price}
                        </span>
                    </div>  
                    <div className='Detail-item'>
                        Rank
                        <span className='Detail-value '>
                            ${currency.rank}
                        </span>
                    </div>
                    <div className='Detail-item'>
                        24H Change
                        <span className='Detail-value'>
                            {renderChangePercent(currency.percentChange24h)}
                        </span>
                    </div>
                    <div className='Detail-item'>
                        <span className='Detail-title '>
                            Market cap
                        </span>
                        <span className='Detail-dollar'>
                            $
                        </span>
                        {currency.marketCap}
                    </div>
                    <div className='Detail-item'>
                        <span className='Detail-title '>
                            24H Volume
                        </span>
                        <span className='Detail-dollar'>
                            $
                        </span>
                        {currency.volume24h}
                    </div>
                    <div className='Detail-item'>
                        <span className='Detail-title '>
                            Total supple
                        </span>
                        {currency.totalSupply}
                    </div>
                </div>            
            </div>
        )
    }
}
export default Detail;