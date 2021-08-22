import './index.scss';
import React from 'react';

export default function TextInput({ placeholder, handleValue, Icon }) {
	return (
		<div className="input-div">
			<input
				type='text'
				placeholder={placeholder}
				onChange={handleValue}
				className={Icon ? 'input input-icon' : 'input'}
			/>
			{Icon &&<Icon className='icon' />}
		</div>
	)
}
