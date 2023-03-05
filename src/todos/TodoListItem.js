import React from 'react';
import styled from 'styled-components';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <TodoItemContainer createdAt={todo.createdAt}>
        <h3>{todo.text}</h3>
        {/* <p>
            Created at:&nbsp;
            {(new Date(todo.createdAt)).toLocaleDateString()}
        </p> */}
        <ButtonsContainer>
            {todo.isCompleted
                ? <CompletedInactiveButton>Completed</CompletedInactiveButton>
                : <CompletedButton
                    onClick={() => onCompletedPressed(todo.text)}
                    >Mark As Completed</CompletedButton>}
            <RemoveButton
                onClick={() => onRemovePressed(todo.text)}
                >Remove</RemoveButton>
        </ButtonsContainer>
    </TodoItemContainer>
);

export default TodoListItem;

const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 8px;
    /* border-bottom: ${ props => (new Date(props.createdAt)) > new Date(Date.now() - 8640000 * 5)
        ? 'none' 
        : '2px solid red'}; */
    margin-top: 8px;
    padding: 16px;
    position: relative;
    box-shadow: 0 4px 8px grey;
`;
    
const ButtonsContainer = styled.div`
    position: absolute;
    right: 12px;
    bottom: 12px;
`
const Button = styled.button`
    font-size: 16px;
    padding: 8px;
    border: none;
    border-radius: 8px;
    outline: none;
    cursor: pointer;
    display: inline-block;
`
const RemoveButton = styled(Button)`
    background-color: #ee2222;
    margin-left: 8px;
`
const CompletedButton = styled(Button)`
    background-color: #22ee22;
`

const CompletedInactiveButton = styled(Button)`
    background-color: #eee;
`
