import * as React from 'react';
import { Container, Menu } from 'semantic-ui-react';
import DestopNav from './DesktopNav';
import MobileNav from './MobileNav';

export default function Navbar(){
    return(
        <>
           <MobileNav/>
            <DestopNav/>
        </>
    );
}