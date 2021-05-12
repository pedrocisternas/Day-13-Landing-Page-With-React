import React from "react";

export let Card1 = () => {
	return (
		<div className="card h-100">
			<img
				src="http://www.sirve.cl/sirve2018/wp-content/uploads/2017/04/estadio-nacional.jpg"
				className="card-img-top"
			/>
			<div className="card-body">
				<h5 className="card-title">Estadio Nacional</h5>
				<p className="card-text">
					Stadium of the chilean national team.
				</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
