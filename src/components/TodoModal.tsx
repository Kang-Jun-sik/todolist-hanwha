import React, {
    ChangeEvent,
    Dispatch,
    SetStateAction,
    KeyboardEvent,
} from "react";
import styled from "styled-components";
import { BsFillPencilFill } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import { main } from "../styles/theme";

interface TodoModalProps{
    setIsModal : Dispatch<SetStateAction<Boolean>>;
    modifyContents : string;
    setModifyContents : Dispatch<SetStateAction<string>>;
    modifyTodo : () => void;
}

const TodoModal: React.FC<TodoModalProps> = ({

}) => {

}

const TodoModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 2;

  .modal {
    border: 1px solid ${main};
    width: 40%;
    height: 40%;
    background-color: white;
    border-radius: 10px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      display: flex;
      text-align: center;
      margin: 10px;
    }
    .contents {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      margin-top: 30px;
      input {
        width: 250px;
        border: none;
        border-bottom: 1px solid ${main};
        margin: 30px;
        &:focus {
          outline: none;
        }
      }
      button {
        background-color: ${main};
        color: white;
        font-weight: 900;
        border: none;
        padding: 10px;
        cursor: pointer;
        &:active {
          box-shadow: inset -0.3rem -0.1rem 1.4rem #fbfbfb,
            inset 0.3rem 0.4rem 0.8rem #bec5d0;
          cursor: pointer;
        }
      }
    }
    .close-btn {
      position: relative;
      top: -30px;
      right: -190px;
      cursor: pointer;
    }
  }
`;

export default TodoModal;