import PropTypes from 'prop-types';

import './style.scss';

export default function PeopleCard({ name }) {
	return (
		<>
			<div className="people-card-showcase">
				<h3>{name}</h3>
			</div>
		</>
	);
}

PeopleCard.propTypes = {
	name: PropTypes.string
};
