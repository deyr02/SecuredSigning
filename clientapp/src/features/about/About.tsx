import * as React from 'react';
import { Header, Segment } from 'semantic-ui-react';
export default function About(){
    return (
        <Segment>
            <Header  size='huge'>About this project</Header>
            <Header className="sub-header">Description</Header>
            <p>
                This project is a simple implementation of CURD (Create, Update, Read, Delete) operations. The main aim of this project 
                is to demonstrate skills on client side and server side programming. Basically, it is an exapmple of full stack applciation.
                The stack has been applied as below:
            </p>
            <Header className='sub-header'>Tech Stack</Header>
            <table className="tech-table">
                <tr>
                    <td>Front-end</td>
                    <td>
                        <ul>
                            <li>React.js</li>
                            <li>Typescript</li>
                            <li>Sementic-ui-react: (Styling)</li>
                            <li>Mobex: (Managing application state centrally)</li>
                            <li>Axios: (Intercepter: To make HTTP request)</li>
                            <li>react-router: (route the components in a single page application)</li>
                            <li>Formik: (Form validation)</li>

                        </ul>
                    </td>
                </tr>

                <tr>
                    <td>Back-end</td>
                    <td>
                        <ul>
                            <li>ASP.NET CORE webapi</li>
                            <li>CQRS + Mediatar design pattern</li>
                            <li>SQL (In development)</li>
                            <li>PostgreSQL (In production)</li>
                            <li>Fluent Validation (Server-side validation)</li>
                            <li>AutoMapper (mapping object)</li>

                        </ul>
                    </td>
                </tr>
            </table>
            </Segment>
    )
}