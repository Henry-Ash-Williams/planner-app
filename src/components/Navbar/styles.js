import styled from 'styled-components';

const NavbarDiv = styled.div`
    
    *{
        margin-left: 0;
        margin-right: 0;
        margin-bottom: 0;
        margin-top: 0;    
        padding: 0;
    }
    

    
    height: 55px;
    background-color: #2196F3;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
    

    button {
        margin: 0;
        padding: 0;
        border: none;
        cursor: pointer;
        width: 55px;
        height: 55px;
        background-color: transparent;
    }

    .Navbar button .Open-Nav-Drawer {
        margin: 0;
        padding: 0;
        width: auto;
        font-size: 30px;
        color: #FFFFFF;
    }

    #Menu-Icon {
        margin: 0;
        padding: 0;
        color: #FFFFFF;
    }
`;

export default NavbarDiv;