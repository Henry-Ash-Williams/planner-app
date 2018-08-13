import styled from 'styled-components';

const CardDiv = styled.div`
    width: 500px;
    height: 500px;
    margin: auto;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    margin-top: 50px;

    h1{
        color: #212121;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 60px;
        margin-top: 20px;
        margin-left: 10px;
        margin-bottom: 20px;
    }
    li{
        color: #757575;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 25px;
        padding: 5px;
        list-style-type: none;  
    }
    li:before{
        padding: 0px 5px;
        content: "\\2022";
    }
    
`;

export default CardDiv;