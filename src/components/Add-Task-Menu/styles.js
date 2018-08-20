import styled from 'styled-components';

const AddTaskMenuDIv = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000 !important;
    width: 100%;
    height: 100%;
    background-color: #fff;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    h1 {
        
        
        font-weight: 300;
        font-size: 2em;
    }
    button {
        top: 20px;
        left: 10px;
        position: fixed;
        color: #000;
        border: none;
        background-color: transparent;
        .material-icons{
            color: #000;
            font-size: 2.963em;
        }
    }
    .InfiniteCalendar{
        width: 400px;
        margin: auto;
        user-select: none;
    }
`

export default AddTaskMenuDIv;