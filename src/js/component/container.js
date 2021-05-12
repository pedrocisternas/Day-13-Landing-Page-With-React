import React from "react";
import { Jumbotron } from "./jumbotron.js";
import { Card1 } from "./card1.js";
import { Card2 } from "./card2.js";
import { Card3 } from "./card3.js";
import { Card4 } from "./card4.js";

export let Container = () => {
	return (
		<div className="container">
			<Jumbotron />
			<div className="d-flex flex-row bd-highlight mb-3">
				<div className="col-3">
					<Card1 />
				</div>
				<div className="col-3">
					<Card2 />
				</div>
				<div className="col-3">
					<Card3 />
				</div>
				<div className="col-3">
					<Card4 />
				</div>
			</div>
		</div>
	);
};
