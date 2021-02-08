import React from "react";

export class StopLight extends React.Component {
	render() {
		return (
			<div>
				{/* Vertical Line */}
				<div className="stickArea">
					<div className="trafficStick"></div>
				</div>

				{/* Container of lights */}
				<div className="trafficMain">
					{/* Red Light */}
					<div className="red-light"></div>

					{/* Yellow Light */}
					<div className="yellow-light"></div>

					{/* Green Light */}
					<div className="green-light"></div>
				</div>
			</div>
		);
	}
}
