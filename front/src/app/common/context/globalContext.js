import React from 'react';

const DadJokeContext = React.createContext();

function reducer(state, action) {
    switch (action.type) {
        case 'SET_DAD_JOKE':
            return {
                ...state,
                dadJoke: action.payload
            };
        default:
            return new Error();
    }
}

export function DadJokeProvider({ children }) {
    const [state, dispatch] = React.useReducer(reducer, { dadJoke: 'test' });

    function fetchDadJoke() {
        // console.log(data);

        dispatch({
            type: 'SET_DAD_JOKE',
            payload: 'new value'
        });
    }

    const actions = {
        fetchDadJoke
    };

    return (
        <DadJokeContext.Provider value={{ state, actions }}>
            {children}
        </DadJokeContext.Provider>
    );
}

export function useDadJokeState() {
    return React.useContext(DadJokeContext).state;
}

export function useDadJokeActions() {
    return React.useContext(DadJokeContext).actions;
}
