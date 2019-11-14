import React from 'react';
import { Alert } from 'reactstrap';

export const Home = props => {
	return (
		<Alert color="primary">
			This is a alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
		</Alert>
	);
};