import { useState, useEffect } from 'react';

import Card from '../Card';
import axios from 'axios';

import './style.scss';

export default function FilmRender() {
	const [items, setItems] = useState([]);

	useEffect(() => {
		async function fetchData () {
			const { data } = await axios.get('https://ghibliapi.herokuapp.com/films/');

			setItems(data);
		};
		
		fetchData();
	});

	return (
		<>
			<div className="card-render">
				{
					items.map((item) => (
						<Card title={item.title} id={item.id} />
					))
				}
			</div>
		</>
	);
}