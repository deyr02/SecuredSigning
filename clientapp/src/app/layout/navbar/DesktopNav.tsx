import * as React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import NavOptions from './NavOptions';

export default function DestopNav(){
    return(
       <Menu fixed='top' id="desktop-nav">
                <Container className = "desktop-nav-expand">
                    <NavOptions/>
                </Container>
            </Menu>
    )
}