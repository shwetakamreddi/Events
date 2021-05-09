import React from 'react'
import { Button, Container, Menu } from 'semantic-ui-react'
import logo from "../../Course Assets/assets/logo.png"

function NavBar({ setFormOpen }) {
    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item header>
                    <img style={{ marginRight: '15px' }} src={logo} alt="logo" />
                    Re-vents
                </Menu.Item>
                <Menu.Item name="Events" />
                <Menu.Item>
                    <Button onClick={() => setFormOpen(true)} positive inverted content='Create Event' />
                </Menu.Item>
                <Menu.Item position='right'>
                    <Button basic inverted content='Login' />
                    <Button basic inverted content='Register' style={{ marginLeft: "0.5em" }} />
                </Menu.Item>
            </Container>
        </Menu>
    )
}

export default NavBar
