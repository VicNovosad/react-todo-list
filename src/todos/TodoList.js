import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import NewTodoForm from './NewTodoForm';
import TodoListItem from './TodoListItem';
import { removeTodo, markTodoAsCompleted } from './actions';

const TodoList = ({ todos = [], onRemovePressed, onCompletedPressed }) => (
    <ListWrapper>
        <NewTodoForm />
        {todos.map((todo, index) => <TodoListItem
            key={index}
            todo={todo}
            onRemovePressed={onRemovePressed}
            onCompletedPressed={onCompletedPressed}/>)}
    </ListWrapper>
);

const mapStateToProps = state => ({
    todos: state.todos,
});

const mapDispatchToProps = dispatch => ({
    onRemovePressed: text => dispatch(removeTodo(text)),
    onCompletedPressed: text => dispatch(markTodoAsCompleted(text)),
});

export default connect(mapStateToProps, mapDispatchToProps) (TodoList);

const ListWrapper = styled.div`
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;