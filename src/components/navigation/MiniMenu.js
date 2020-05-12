
import React, { Component } from 'react'
import styled from 'styled-components';
import CenteredTabs from './Tabs'
import { ClickAwayListener } from '@material-ui/core';
import { Link } from 'react-router-dom'

export default function MiniMenu(props) {

    const { toggle } = props;

    const Content = styled.div`
    position: fixed;
    color: black;
    background-color: #f9f9f9;
    width: 100%;
    height: 100%;
    left: 0;
    
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);

    .header {
        padding: 0;
    }
    `

    const Btn = styled.div`
    display: block;
    height: 50px;
    font-size: 40px;
    borderBottom: 1px solid black;
    text-align: center;
    padding: 20px;

    &:hover {
        background-color: #e0e0e0;
    }
    `

    const Nav = styled.div`
    position: relative;
    `

    return (
        <div>
            <Content>
                <Nav>
                <Link to="/home"><Btn>Home</Btn></Link>
                <Btn>Articles</Btn>
                <Btn onClick={toggle}>Playlists</Btn>
                </Nav>
            </Content>
        </div>
    )
}