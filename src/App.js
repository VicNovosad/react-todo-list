import React from 'react';
import styled from 'styled-components';
import TodoList from './todos/TodoList';
 
const App = () => (
    <AppContainer>
        <TodoList />
    </AppContainer>
);

export default App;

const AppContainer = styled.div`
    padding: 2rem;
    font-family: Arial, Helvetica, sans-serif;
    color: #222222;
    background-color: #fff;
    width: 100vw;
    height: 100vh;
`