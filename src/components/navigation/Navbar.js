import React, { Component } from 'react'
import logo from '../../_assets/logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components';
import { userActions } from '../../_actions/user.action'
import MegaMenu from './MegaMenu'
import MiniMenu from './MiniMenu'
class Navbar extends Component {

    constructor() {
        super()
        this.state = {
            displayMegaMenu: false,
            displayMiniMenu: false
        }
    }

    enableMegaMenu = () => {
        this.setState({ displayMegaMenu: !this.state.displayMegaMenu })
    }

    disableMegaMenu = () => {
        this.setState({ displayMegaMenu: false })
    }

    toggleMiniMenu = () => {
        this.setState({ displayMiniMenu: !this.state.displayMiniMenu })
    }

    render() {

        const { user }= this.props

        const Main = styled.div`
            @media (max-width: 800px) {
                display: none;
            }
        `

        const Alt = styled.div`
            position: relative;
            display: none;
            float: right;

            i {
                width: 50px;
            }

            &:hover {
                cursor: pointer;
            }
            @media (max-width: 800px) {
                display: block;
            }
        `

        const Navbar = styled.div`
            overflow: hidden;
            background-color: #293241;
            font-family: Arial;
        `

        const NavBrand = styled.img`
            float: left;
            padding: 4px 10px;
            width: 150px;
        `

        const Dropdown = styled.div`
            overflow: hidden;
        `
        
        const UserBtn = styled.div`
            float: right;
            font-weight: bold;
        `

        const NavBtn = styled.button`
            height: 100%;
            font-size: 16px !important;
            border: none;
            outline: none;
            color: white;
            padding: 14px 16px;
            background-color: inherit;
            position: relative;
            font: inherit;
            margin: 0; 

            &:hover {
                background-color: #010E23;
                cursor: pointer;
            }
        `
        
        return (
            <div>
                <Navbar>
                    <Link to="/home"><NavBrand src={logo} /></Link>
                    <Main>
                        <Link to="/home"><NavBtn><i className="fa fa-fw fa-home"></i> Home</NavBtn></Link>
                        <Link to="/articles"><NavBtn><i className="fa fa-fw fa-edit"></i> Articles</NavBtn></Link>
                        <NavBtn onClick={this.enableMegaMenu}><i className="fa fa-fw fa-list"></i> Playlists</NavBtn>
                        <UserBtn>
                            {user &&
                            <Link to="/user/panel">
                            <NavBtn>
                                
                                    <i className="fa fa-fw fa-user"></i>
                                
                            </NavBtn></Link>}
                            {user && <Link to="/user/playlists"><NavBtn>My Playlists</NavBtn></Link>}
                            {user && <NavBtn onClick={e => this.props.dispatch(userActions.logout())}>Logout</NavBtn>}
                            {!user &&
                            <Link to="/user/login">
                                <NavBtn>
                                    Login
                                </NavBtn>
                            </Link>}
                        </UserBtn>
                    </Main>
                    <Alt>
                        <NavBtn onClick={this.toggleMiniMenu}>
                            {/* <i className="fa fa-times"></i> */}
                            <i className="fa fa-bars"></i>
                        </NavBtn>
                        {this.state.displayMiniMenu &&
                        <MiniMenu toggle={this.enableMegaMenu} />}
                    </Alt>
                    <Dropdown>
                        {this.state.displayMegaMenu &&
                        <MegaMenu clickAway={this.disableMegaMenu} />}
                    </Dropdown>
                    
                </Navbar>
            </div>
        )
    }
}

export default Navbar