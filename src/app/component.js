import React from 'react';
import {
    BrowserRouter as Router, Route
} from 'react-router-dom';
import PropTypes from 'prop-types';

import routes from 'app/common/routes';

import Header from 'app/components/header';
import Footer from 'app/components/footer';
import Home from 'app/pages/home';
import Catalog from 'app/pages/catalog';
import Blog from 'app/pages/blog';

import './index.scss';

const App = (props) => {
    const handleClick = e => {
        const year = +e.currentTarget.innerText;

        props.setYear(year);
    };

    return (
        <Router>
            <div className="application">
                <Header/>

                <main>
                    <div>
                        <h3>Page:</h3>
                        <div>Year {props.page.year}</div>
                        <div>
                            <button onClick={handleClick}>2018</button>
                            <button onClick={handleClick}>2017</button>
                            <button onClick={handleClick}>2016</button>
                            <button onClick={handleClick}>2015</button>
                            <button onClick={handleClick}>2014</button>
                        </div>
                        <hr/>
                    </div>
                    <Route path={routes.home} exact component={Home} />
                    <Route path={routes.catalog} component={Catalog} />
                    <Route path={routes.blog} component={Blog} />
                </main>
                <Footer/>
            </div>
        </Router>
    );
};

App.propTypes = {
    page: PropTypes.object,
    year: PropTypes.string,
    setYear: PropTypes.func
};

export default App;
