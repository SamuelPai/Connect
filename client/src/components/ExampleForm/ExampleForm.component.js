import React from 'react';
import { ExampleFormProps } from './ExampleForm.propTypes';
import { FormGroup, Label, Input, FormFeedback, Col } from 'reactstrap';

function ExampleForm(props) {
    
    return (
        
	<FormGroup>
		<Col {...props.colWidth}>
		<Label for="exampleText">{props.title}</Label>
		<Input
			name={props.name}
			type={props.inputType}
			value={props.content}
			onChange={props.changeFunc}
			onBlur={props.blurFunc}
			onFocus={props.focusFunc}
			placeholder={props.placeholder}
		 	valid={props.valid} />
			<FormFeedback>{props.feedback}</FormFeedback>
		</Col>
	</FormGroup>
    );
};

ExampleForm.propTypes = ExampleFormProps.propTypes;
ExampleForm.defaultProps = ExampleFormProps.defaultProps;

export default ExampleForm;