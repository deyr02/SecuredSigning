import * as React from 'react';
import { Container, Icon, Segment } from 'semantic-ui-react';

export default function Home(){
    return(
        <Segment  textAlign='center' vertical className='welcome-header'>
            <Container text>
                <Icon name='signup'></Icon>
                <h1>Welcome!</h1>
                <h2>Secured Signing Candidate Evalution</h2>
            </Container>
        </Segment>
    )
}