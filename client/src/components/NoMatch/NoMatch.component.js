import React from 'react';
import { Jumbotron, Container } from 'reactstrap';

export const NoMatch = props => {
	return (
		<div>
			<Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">404 - Can't sit here!</h1>
          <p className="lead">Seat's taken :(</p>
        </Container>
      </Jumbotron>
		</div>
	);
};