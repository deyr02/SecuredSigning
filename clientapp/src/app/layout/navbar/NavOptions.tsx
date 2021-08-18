import * as React from 'react';
import { Link, useHistory } from 'react-router-dom';
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
            <List.Item as ={Link} to = {'/'}  onClick={hideMenuOption} >Home</List.Item>
            <List.Item as ={Link} to = {'/employee'} onClick={hideMenuOption} >Employee</List.Item>
          
            <List.Item as ={Link} to = {'/create'} onClick={reload} >Create Employee</List.Item>
            <List.Item as ={Link} to = {'/about'} onClick={hideMenuOption} >About</List.Item>
        </List>
    )
}