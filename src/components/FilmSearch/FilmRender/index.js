import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

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
						<Card 
							key={uuidv4()}
							title={item.title}
							id={item.id}
						/>
					))
				}
			</div>
		</>
	);
}