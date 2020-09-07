import React, { Component } from 'react';
import {API_URL} from '../../config';
import Loading from '../common/Loading';
import Table from './Table';
import Pagination from './Pagination';
import {handelRespons} from '../../helpers'


class List extends Component {
    constructor() {
        super();
        this.state = {
            currencies: [],
            loading: false,
            page: 1,
            totalPages: 0,
            perPage: 20,
            error: '',
        }
        this.handelPaginationClick = this.handelPaginationClick.bind(this);
    }

    fatchCurrencies() {
        this.setState({
            loading: true
        })
        const { page , perPage } = this.state;
        fetch(`${API_URL}/cryptocurrencies/?page=${page}&perPage=${perPage}`)
        .then(resp => handelRespons(resp))
        .then(data => {
            const { currencies , totalPages } = data;
            this.setState({
                loading: false,
                currencies,
                totalPages
            })
        })
        .catch( error => {
            this.setState({
                loading: false,
                error: error.errorMessage
            })
        })
    }


    componentDidMount() {
       this.fatchCurrencies();
    }

    handelPaginationClick(direction){
        let nextPage = this.state.page;
        nextPage = direction === 'next' ? nextPage + 1 : nextPage -1;
        this.setState({
            page : nextPage
        }, () => this.fatchCurrencies())
        
    }

    render() {
        const { currencies, loading, error, page, totalPages } = this.state;
        if(loading) {
            return (
                <div className='loading-container'>
                    <Loading />
                </div>
            )
        }
        if(error){
            return (
                <div className='error'>
                   {error}
                </div>
            )
        }
        return (
            <div>
                <Table 
                    currencies={currencies}
                    historyPush={this.props.history.push} />
                <Pagination 
                    page={page} 
                    totalPages={totalPages} 
                    handelPaginationClick={this.handelPaginationClick} 
                />
            </div>
        )
    }
}
export default List