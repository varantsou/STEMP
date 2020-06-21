import React, { useState } from 'react';
import {
    BrowserRouter as Router, Route
} from 'react-router-dom';

import {
    DadJokeProvider
} from 'app/common/context/globalContext';

import routes from 'app/common/routes';

import Header from 'app/components/header';
import PopupSlider from 'app/components/popup-slider';

import Home from 'app/pages/home';

import './index.scss';

const baseClassName = 'application';
const getClassNames = () => {
    return {
        component: baseClassName
    };
};

const App = () => {
    const classNames = getClassNames();

    const [opened, setOpened] = useState(false);

    const handleButtonMenuClick = () => {
        setOpened(true);
    };

    const handleClose = () => {
        setOpened(false);
    };

    const render = () => (
        <Router>
            <DadJokeProvider>
                <div className={classNames.component}>
                    <Header onClick={handleButtonMenuClick} />
                    <main className="main">
                        <Route path={routes.home} exact component={Home} />
                    </main>
                    <PopupSlider opened={opened} onClose={handleClose} />
                </div>
            </DadJokeProvider>
        </Router>
    );

    return render();
};

export default App;
