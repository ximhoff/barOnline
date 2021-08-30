import './index.scss';
import React from 'react';

export default function Input({ placeholder, handleValue, Icon, className, inputType }) {
	return (
		<div className={"input-div " + className || ""}>
			<input
				type={inputType}
				placeholder={placeholder}
				onChange={handleValue}
				className={Icon ? 'input input-icon' : 'input'}
			/>
			{Icon && <Icon className='icon' />}
		</div>
	)
}
