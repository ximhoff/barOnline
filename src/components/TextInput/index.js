import './index.scss';
import React from 'react';

export default function TextInput({ placeholder, handleValue, Icon, className }) {
	return (
		<div className={"input-div " + className || ""}>
			<input
				type='text'
				placeholder={placeholder}
				onChange={handleValue}
				className={Icon ? 'input input-icon' : 'input'}
			/>
			{Icon && <Icon className='icon' />}
		</div>
	)
}
