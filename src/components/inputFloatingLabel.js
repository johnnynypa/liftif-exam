// @flow
//Dependencies
import React from 'react';
import classNames from 'classnames';

import '../styles/inputFloatingLabel.css';

type Props = {
	placeholder: string,
    type: string,
    id: string,
    isDisabled: boolean,
    onChange: Function,
	value: string,
	name: string
}

type State = {
	hasValue : boolean,
	hasError : boolean
}

class FloatingLabel extends React.Component<Props, State> {


	static defaultProps = {
		type: 'text',
		isDisabled: false,
		placeholder: 'name'
	};

	constructor(props:Props) {
		super(props)
		this.state = { hasValue: false, hasError: false };
		const self: any = this;
		self.onBlur = this.onBlur.bind(this);
	}

	onBlur(event:any) {
		this.setState({ hasValue: Boolean(event.currentTarget.value) });
	}

	render() {
		const { id, isDisabled, placeholder, type, name, value, onChange } = this.props;
		const { hasValue, hasError } = this.state;

		const inputClasses = classNames('fl-input', { 'fl-valid': hasValue && !hasError }, { 'fl-invalid': hasValue && hasError });

		return (
			<div className='fl-input-container'>
				<input
					className={inputClasses}
					disabled={isDisabled}
					id={id}
					onBlur={this.onBlur}
					onChange={onChange}
					type={type}
					name={name}
					value={value}
				/>
				<label className='fl-input-label' htmlFor={id}>{placeholder}</label>
				<span className='fl-input-bar'></span>
			</div>
		);
	}
}

export default FloatingLabel;