//Dependencies
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import '../styles/inputFloatingLabel.css';

class FloatingLabel extends React.Component {
	
	_bind(...methods) {
		methods.map(method => this[method] = this[method].bind(this));
	}
	constructor(props) {
		super(props)
		this.state = { hasValue: false, hasError: false };
		this._bind('onBlur');
	}

	onBlur(event) {
		this.setState({ hasValue: Boolean(event.currentTarget.value) });
	}

	render() {
		const { errorMsg, id, isDisabled, pattern, placeholder, type, name, value, onChange } = this.props;
		const { hasValue, hasError } = this.state;

		const inputClasses = classNames('fl-input', { 'fl-valid': hasValue && !hasError }, { 'fl-invalid': hasValue && hasError });
		const errMsgClasses = classNames({ 'fl-error-msg': errorMsg }, { 'fl-error-show': (hasError && hasValue) && (errorMsg && pattern) });

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
				{errorMsg && <span className={errMsgClasses}>{errorMsg}</span>}
			</div>
		);
	}
}

FloatingLabel.PropTypes = {
    placeholder: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired
}

FloatingLabel.defaultProps = {
	type: 'text',
	isDisabled: false,
	placeholder: 'name'
};

export default FloatingLabel;