import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { main } from "../styles/theme";
import { ITodoTypes } from "../atom";
import { SetterOrUpdater } from "recoil";
import TodoModal from "./TodoModal";

interface TodoListItemProps {
    id: string;
    contents: string;
    isCompleted: boolean,
    todos: ITodoTypes[];
    setTodo: SetterOrUpdater<ITodoTypes[]>;
    onDelete: (id: string) => void;
    onComplete: (id: string) => void;
}

