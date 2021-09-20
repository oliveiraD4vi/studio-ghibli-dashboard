import PropTypes from 'prop-types';

import './style.scss';

export default function Card({ title }) {
	return (
		<>
			<div className="card-showcase">
				<h3>{title}</h3>
			</div>
		</>
	);
}

Card.propTypes = {
	title: PropTypes.string
};
