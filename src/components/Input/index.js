import './index.scss';
import React from 'react';

export default function Input({ text, handleValue, Icon }) {
	return (
		<div className="input-div">
			<input
				type='text'
				placeholder={text}
				onChange={handleValue}
				className={Icon ? 'input-icon' : 'input'}
			/>
			{Icon &&
				<Icon className='icon' />
			}
		</div>
	)
}
