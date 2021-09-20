import { useState, useEffect } from 'react';
import axios from 'axios';

import './style.scss';

export default function FilmCard() {
	const [item, setItem] = useState();

	useEffect(() => {
		const func = async () => {
			const e = await axios.get('https://ghibliapi.herokuapp.com/films/');
			console.log(e);

			setItem(e.data[0]);
		};

		func();
	});

	return (
		<>
			<div className="film-image"></div>

			<div className="info">
				<div className="info-title">
					<span>{item.title}</span>
				</div>

				<div className="info-synopses">
					<span>{item.description}</span>
				</div>

				<div className="info-elements"></div>
			</div>
		</>
	);
}
