import FilmRender from './FilmRender';

import './style.scss';

export default function FilmSearch() {
	return (
		<>
			<div className="component-title">
				<h2>Studio Ghibli Productions</h2>
			</div>

			<FilmRender />
		</>
	);
}
