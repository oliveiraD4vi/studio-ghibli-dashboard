import { useState, useEffect } from 'react';
import { Menu, Dropdown, Button, Space } from 'antd';
import { MenuOutlined } from '@ant-design/icons/lib/icons';

import PropTypes from 'prop-types';
import axios from 'axios';

import './style.scss';

export default function FilmCard({ id }) {
	const [item, setItem] = useState([]);
	const menu = (
		<Menu>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href={item.people}>
					People
				</a>
			</Menu.Item>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href={item.species}>
					Species
				</a>
			</Menu.Item>
			<Menu.Item>
				<a target="_blank" rel="noopener noreferrer" href={item.locations}>
					Locations
				</a>
			</Menu.Item>
		</Menu>
	);

	useEffect(() => {
		async function fetchData () {
			const { data } = await axios.get(`https://ghibliapi.herokuapp.com/films/${id}`);

			setItem(data);
		};
		
		fetchData();
	}, [id]);
	
	return (
		<>
			<div className="title">
				<h2>{item.title}</h2>
				<h4>{item.original_title_romanised}</h4>
				<h5>{item.original_title}</h5>
			</div>

			<div className="info">
				<div className="info-synopses">
					<p>{item.description}</p>
				</div>

				<div className="info-adictional">
					<p>Director: {item.director}</p>
					<p>Producer: {item.producer}</p>
					<p>Release: {item.release_date}</p>
				</div>
			</div>

			<div className="menu">
				<Space direction="vertical">
					<Space wrap>
						<Dropdown overlay={menu} placement="topCenter" trigger={['click']}>
							<Button><MenuOutlined /> Options</Button>
						</Dropdown>
					</Space>
				</Space>
			</div>
		</>
	);
}

FilmCard.propTypes = {
	id: PropTypes.string
};
