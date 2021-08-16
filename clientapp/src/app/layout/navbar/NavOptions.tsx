import * as React from 'react';
import { Link } from 'react-router-dom';
import { List } from 'semantic-ui-react';

export default function NavOptions(){
    return (
        <List size= "large" link>
            <List.Item as ={Link} to = {'/'} active >Home</List.Item>
            <List.Item as ={Link} to = {'/employee'} active >Employee</List.Item>
            <List.Item as ={Link} to = {'/create'} active >Create Employee</List.Item>
            <List.Item as ={Link} to = {'/about'} active >About</List.Item>
        </List>
    )
}