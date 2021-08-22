import './index.css';
import React, { useEffect, useState } from 'react';
import SearchIcon from '../../assets/icons/search.jpeg';

export default function Input({ text, handleValue, Icon }) {
	const [text, setText] = useState('');
	// <input
	//     type="text"
	//     className="input"
	// />

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
