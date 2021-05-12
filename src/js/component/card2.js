import React from "react";

export let Card2 = () => {
	return (
		<div className="card h-100">
			<img
				src="https://res.cloudinary.com/admsys-storage/image/upload/c_fill,f_auto,g_auto,h_500,q_auto,w_1024/v1/ebco-deploy/projects/4441ebf0ebb61c1c912257dd1cd82d99.jpg"
				className="card-img-top"
			/>
			<div className="card-body">
				<h5 className="card-title">Estadio Monumental</h5>
				<p className="card-text">Stadium of Colo-Colo.</p>
				<a href="#" className="btn btn-primary">
					Go somewhere
				</a>
			</div>
		</div>
	);
};
