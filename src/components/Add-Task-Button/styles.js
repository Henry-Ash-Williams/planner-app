import styled from 'styled-components';

const AddTaskButtonDiv = styled.div`
    .Add-Task-Button {
        cursor: pointer;
        box-shadow: 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12);
        border: none;
        position: absolute;
        right:    10px;
        bottom:   10px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
        background-color: #FF5252;
    }

    i {
        color: #FFFFFF;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -12px;
        margin-left: -12px;
        user-select: none;
    }`;

export default AddTaskButtonDiv;