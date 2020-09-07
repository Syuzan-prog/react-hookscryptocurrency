import React from 'react';
import { Header } from './common';
import { List } from './list';
import Detail from './detail/Detail'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NotFound from './notFound/notFound';



const App = () => (
    <>
        <BrowserRouter>
            <Header />
            <Switch>
                <Route path='/' exact component={List} />
                <Route path='/currency/:id' component={Detail} />
                <Route component={NotFound} />            
            </Switch>
        </BrowserRouter>             
    </>
)

export default App;