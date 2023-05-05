import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ITodoTypes, todoState } from "../atom";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC = () => {
    const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todoState);

    const onDelete = (id: string) => {
        setTodos(todos.filter((todo: ITodoTypes) => todo.id !== id))
    }

    const onComplete = (id: string): void => {
        setTodos(
            todos.map((todo: ITodoTypes) => {
                return todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo;
            })
        );
    };

    return (
        <TodoListContainer>
            

            

        </TodoListContainer>
    )
}

const TodoListContainer = styled.div`
  overflow: auto;
  .no-list {
    margin: 20px;
    text-align: center;
  }
`;
export default TodoList;