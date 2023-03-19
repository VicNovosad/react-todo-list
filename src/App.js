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
    margin: 0;
    background-color: #edf0f1;
    width: 100vw;
    height: 100vh;
`