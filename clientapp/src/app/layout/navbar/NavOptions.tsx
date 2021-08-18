import { NavLink, useHistory } from 'react-router-dom';
import { List } from 'semantic-ui-react';

interface Props{
 hideMenuOption?:()=> void
}

export default function NavOptions({hideMenuOption}:Props){
    const history = useHistory();
    function reload(){
        history.push('/create');
        window.location.reload();
    }
    return (
        <List size= "large" link>
            <List.Item as ={NavLink} to = {'/'}  onClick={hideMenuOption} >Home</List.Item>
            <List.Item as ={NavLink} to = {'/employees'} onClick={hideMenuOption} >Employee</List.Item>
          
            <List.Item as ={NavLink} to = {'/create'} onClick={reload} >Create Employee</List.Item>
            <List.Item as ={NavLink} to = {'/about'} onClick={hideMenuOption} >About</List.Item>
        </List>
    )
}