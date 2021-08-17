import { observer } from 'mobx-react-lite';
import { Container, Menu } from 'semantic-ui-react';
import { useStore } from '../../stores/store';
import NavOptions from './NavOptions';

export default observer( function MobileNav(){
    
    const {employeeStore}= useStore();
    return (
        <div id="mobile-nav"> 
            <Menu fixed='top' >
                <Container>
                    <Menu.Item as ="h2" onClick={()=> employeeStore.toggleMenuOption()}>
                        <i className="bars icon" ></i>
                    </Menu.Item>
                </Container>
            </Menu>
            {
              employeeStore.isMenuvisible && ( <Container  className= "mobile-nav-expand">
                    <NavOptions hideMenuOption={employeeStore.toggleMenuOption}></NavOptions>
                </Container>)
            }
          
        </div>
         
    )
})