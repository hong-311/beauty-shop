import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const HeaderBlock = styled.div`
    margin: 15px;
    font-size: 15px;
`;

function Header() {
    return (
    <HeaderBlock>
        <Link to='/'><h1>B.Boutique</h1></Link>
    </HeaderBlock>
    );
}

export default Header;