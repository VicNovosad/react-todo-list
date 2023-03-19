import React from 'react';
import styled from 'styled-components';

const TodoListItem = ({ todo, onRemovePressed, onCompletedPressed }) => (
    <TodoItemContainer createdAt={todo.createdAt}>
        <TodoText>{todo.text}</TodoText>
        {/* <p>
            Created at:&nbsp;
            {(new Date(todo.createdAt)).toLocaleDateString()}
        </p> */}
        <ButtonsContainer>
            {todo.isCompleted
                ? <CompletedInactiveButton><CompletedSVG/></CompletedInactiveButton>
                : <CompletedButton
                    onClick={() => onCompletedPressed(todo.text)}
                    ><CompleteSVG/>
                </CompletedButton>}
            <RemoveButton
                onClick={() => onRemovePressed(todo.text)}>
                <RemoveSVG />
            </RemoveButton>
        </ButtonsContainer>
    </TodoItemContainer>
);

export default TodoListItem;

function RemoveSVG() {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" 
            className='remove-img' style={{ enableBackground: 'new 0 0 22 22' }} xmlSpace="preserve"> <rect fill='none' width='22' height='22'/> <g><g><path fill='currentColor' d='M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6V18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z'/></g><g><g><path fill='currentColor' d='M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z'/></g><g><path fill='currentColor' d='M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z'/></g><g><path fill='currentColor' d='M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z'/></g></g></g></svg>
    );
}

function CompleteSVG() {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" 
            className='complete-img' style={{ enableBackground: 'new 0 0 22 22' }} xmlSpace="preserve"><rect y="0" fill="none" width="22" height="22"/><g><path fill="currentColor" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>
    );
}

function CompletedSVG() {
    return (
        <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" 
            className='completed-img' style={{ enableBackground: 'new 0 0 22 22' }} xmlSpace="preserve"><rect y="0" fill="none" width="22" height="22"/><g><path fill="currentColor" d="M9.7,14.4L9.7,14.4c-0.2,0-0.4-0.1-0.5-0.2l-2.7-2.7c-0.3-0.3-0.3-0.8,0-1.1s0.8-0.3,1.1,0l2.1,2.1l4.8-4.8c0.3-0.3,0.8-0.3,1.1,0s0.3,0.8,0,1.1l-5.3,5.3C10.1,14.3,9.9,14.4,9.7,14.4z"/></g></svg>
    );
}

const TodoText = styled.p`
    font-family: 'Roboto', sans-serif;
    font-weight: 500;
    font-size: 17px;
    margin: 0;
`
const TodoItemContainer = styled.div`
    background: #fff;
    border-radius: 5px;
    /* border-bottom: ${ props => (new Date(props.createdAt)) > new Date(Date.now() - 8640000 * 5)
        ? 'none' 
        : '2px solid red'}; */
    margin-top: 18px;
    padding: 16px;
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 14px;
    font-weight: 500;
    color: #444;
    box-shadow: 0px 1px 2px rgba(44, 62, 80, 0.10);
    word-break: break-word;
    width: 89%;
`;
    
const ButtonsContainer = styled.div`
    padding: 0;
    height: 22px;
    width: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const Button = styled.button`
    padding: 0px;
    border: none;
    cursor: pointer;
    width: 22px;
    height: 22px;
    display: flex;
    justify-content: center;
    align-items: center;
`
const RemoveButton = styled(Button)`
    background-color: transparent;
    margin-left: 8px;
    padding: 0;
`
const CompletedButton = styled(Button)`
    background: #fff;
    border-radius: 11px;
    border: 1px solid #25b99a;
`

const CompletedInactiveButton = styled(Button)`
    background-color: #25b99a;
    border-radius: 11px;
    border: 1px solid #25b99a;
`
