import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderText = styled(NavLink)`
    font-size:20px;
    margin-left:20px;
    text-decoration:none;
    color:black;
    &:hover,
    &:focus{
        color:red
    }`;

export const Container = styled.div`
    padding:30px;
    display:flex;
    border-bottom: 1px solid;`;
