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
				<div className="title-menu">
					<h2>{item.title}</h2>
					<div className="menu">
						<Space direction="vertical">
							<Space wrap>
								<Dropdown overlay={menu} placement="bottomCenter" trigger={['click']}>
									<Button><MenuOutlined /></Button>
								</Dropdown>
							</Space>
						</Space>			
					</div>
				</div>
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


			<div className="rodape">
				<p>by</p>
				<a href = "https://github.com/oliveiraD4vi" rel="noreferrer" target="_blank">
					<img alt="link to github" src="https://img.shields.io/static/v1?label=Overview&message=Davi&color=f8efd4&style=for-the-badge&logo=GitHub"></img>
				</a>
			</div>
		</>
	);
}

FilmCard.propTypes = {
	id: PropTypes.string
};
