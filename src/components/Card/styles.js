import styled from 'styled-components';

const screenWidth = window.screen.availWidth
console.log(screenWidth);

const widthChecker = screenWidth => {
    if (screenWidth < 425) {
        return '95%'
    } else {
        return '500px'
    }
};

const CardDiv = styled.div`
    width: ${widthChecker(screenWidth)};
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
        display: block;
        margin-left: 0;
        color: #757575;
        font-family: "Roboto", sans-serif;
        font-weight: 300;
        font-size: 25px;
        padding: 5px;
        list-style-type: none;   
    }
    li:before{
        padding-right: 5px;
        content: "\\2022";
    }
    li:after{
        content: "\";
        white-space: pre;
    }
    
`;

export default CardDiv;