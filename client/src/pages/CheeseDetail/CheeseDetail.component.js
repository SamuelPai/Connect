import React from 'react';
import CheeseApi from '../../utils/API';


export class CheeseDetail extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			cheese: {
				name: 'No Cheese',
				price: 0,
				description: 'loading...'
			},
		};
	}

	componentDidMount() {
		const {
			id
		} = this.props.match.params;
		if (id) {
			CheeseApi.getCheeseById(id)
				.then(res => {
					console.log('cheese', res.data)
					this.setState({
						cheese: res.data,
					});
				})
				.catch(err => {
					console.log(`ERR - Could not load cheese id: ${id}`, err);
					this.setState({
						cheese: {
							name: "Smelly Cheese",
							price: 1000,
							description: "The stinkiest of sinky cheese",
						}
					});
				});
		}
		
	}

	render() {
		return (
			<div>
				<h1>Welcome to CheeseDetail {this.props.match.params.id || "Unknown"}</h1>
				<h2>{ this.state.cheese.name } - ${this.state.cheese.price / 100}</h2>
				<p>{ this.state.cheese.description }</p>
			</div>
		);
	}
}











