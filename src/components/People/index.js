import PeopleRender from './Render';

import './style.scss';

export default function PeopleSearch() {
	return (
		<div className="people-container">
			<div className="component-title">
				<h2>People</h2>
			</div>

			<PeopleRender />
		</div>
	);
}
