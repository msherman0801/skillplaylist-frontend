
import React, { Component } from 'react'
import styled from 'styled-components';
import CenteredTabs from './Tabs'
import { ClickAwayListener } from '@material-ui/core';

export default function MegaMenu(props) {

    const Content = styled.div`
    display: block;
    position: absolute;
    background-color: #f9f9f9;
    width: 100%;
    left: 0;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 2;

    .header {
        padding: 0;
    }
    `

    return (
        <ClickAwayListener onClickAway={props.clickAway}>
            <Content>
                <CenteredTabs />
            </Content>
        </ClickAwayListener>
    )
}