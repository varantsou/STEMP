import React from 'react';
import {
    BrowserRouter as Router, Route
} from 'react-router-dom';

import routes from 'app/common/routes';

import Header from 'app/components/header';
import Footer from 'app/components/footer';
import Home from 'app/pages/home';
import Catalog from 'app/pages/catalog';
import Blog from 'app/pages/blog';
import ComponentsPage from 'app/pages/all-components';

import './index.scss';

const baseClassName = 'application';
const getClassNames = () => {
    return {
        component: baseClassName
    };
};

const App = () => {
    const classNames = getClassNames();

    return (
        <Router>
            <div className={classNames.component}>
                <Header/>
                <main>
                    <Route path={routes.home} exact component={Home} />
                    <Route path={routes.catalog} component={Catalog} />
                    <Route path={routes.blog} component={Blog} />
                    <Route path={routes.allComponents} component={ComponentsPage} />
                </main>
                <Footer/>
            </div>
        </Router>
    );
};

export default App;
