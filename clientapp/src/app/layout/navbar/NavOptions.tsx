import * as React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

interface Props{
 hideMenuOption?:()=> void
}

export default function NavOptions({hideMenuOption}:Props){
    return (
        <List size= "large" link>
            <List.Item as ={Link} to = {'/'} active onClick={hideMenuOption} >Home</List.Item>
            <List.Item as ={Link} to = {'/employee'} onClick={hideMenuOption} >Employee</List.Item>
            <List.Item as ={Link} to = {'/create'} onClick={hideMenuOption} >Create Employee</List.Item>
            <List.Item as ={Link} to = {'/about'} onClick={hideMenuOption} >About</List.Item>
        </List>
    )
}