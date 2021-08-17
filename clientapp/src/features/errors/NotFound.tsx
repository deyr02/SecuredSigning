import { Header, Icon, Segment } from 'semantic-ui-react';

export default function NotFound() {
    
    return (
        <Segment placeholder>
            <Header icon>
                <Icon name='search' />
                Oops - we've looked everywhere and could not find this.
            </Header>
            <Segment.Inline>
                {/* <Button as={Link} to='/list' secondary>
                    Return to Card List
                </Button> */}
            </Segment.Inline>
        </Segment>
    )
}