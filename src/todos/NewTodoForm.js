import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createTodo } from './actions'
import styled from 'styled-components';
import "./NewTodoForm.css";


const NewTodoForm = ( { todos, onCreatePressed } ) => {
    const [inputValue, setInputValue] = useState('');

    return (
        <FormContainer>
            <NewTodoInput
                className='todo-input'
                type="text"
                placeholder="Type your new todo here"
                placeholderTextColor="white"
                value={inputValue}
                onChange={e => setInputValue(e.target.value)} />
            <NewTodoButton
                onClick={() => {
                    const isDuplicateText = 
                        todos.some(todo => todo.text === inputValue);
                    if (!isDuplicateText){
                        onCreatePressed(inputValue);
                        setInputValue('');
                    }
                }}>
                <AddSVG/>
            </NewTodoButton>
        </FormContainer>
    );
};

function AddSVG() {
    return (
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 16 16"
            className='add-img' style={{ enableBackground: "new 0 0 16 16" }} xmlSpace="preserve"><g><path fill="currentColor" d="M16,8c0,0.5-0.5,1-1,1H9v6c0,0.5-0.5,1-1,1s-1-0.5-1-1V9H1C0.5,9,0,8.5,0,8s0.5-1,1-1h6V1c0-0.5,0.5-1,1-1s1,0.5,1,1v6h6C15.5,7,16,7.5,16,8z"/></g></svg>
    );
}

const mapStateToProps = state => ({
    todos: state.todos,
 });
const mapDispatchToProps = dispatch => ({
    onCreatePressed: text => dispatch(createTodo(text)),
});

export default connect(mapStateToProps, mapDispatchToProps) (NewTodoForm);

const FormContainer = styled.div`
    border-radius: 8px;
    text-align: center;
    width: 90%;
    margin-top: 10px;
    padding: 15px;
    top: 0;
    left: 0;
    z-index: 5;
    background: #25b99a;
    box-shadow: 0px 2px 4px rgba(44, 62, 80, 0.15);
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    display: flex;
    justify-content: space-between;
    position: relative;
`
const NewTodoInput = styled.input`
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    padding: 8px;
    border: none;
    border-bottom: 2px solid #ddd;
    border-radius: 8px;
    flex-grow: 1;
    outline: none;

    height: 50px;
    color: #fff;
    font-weight: 400;
    text-indent: 18px;
    padding: 0 60px 0 0;
    background: rgba(255, 255, 255, 0.2);
    border-radius: 5px 25px 25px 5px;
    border: 0px;
    box-shadow: none;
    outline: none;
    -webkit-appearance: none;
`

const NewTodoButton = styled.button`
    display: flex !important;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border: none;
    border-radius: 100%;
    outline: none;
    cursor: pointer;
    margin-left: 8px;
    color: #25b99a;
    background-color: white;
    white-space: nowrap;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translate(-25%, -50%);
    width: 50px;
    height: 50px;
    z-index: 2;
    box-shadow: none;
    outline: none;
    cursor: pointer;
    -webkit-appearance: none;
`