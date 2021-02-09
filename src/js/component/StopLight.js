import React, { useState } from "react";

export const StopLight = () => {
	const [color, setColor] = useState("yellow");

	return (
		<div>
			{/* Vertical Line */}
			<div className="stickArea">
				<div className="trafficStick"></div>
			</div>

			{/* Container of lights */}
			<div className="trafficMain">
				{/* Red Light */}
				<div
					className="red-light"
					id={color == "red" ? "activeRed" : ""}
					onClick={() => {
						setColor("red");
					}}></div>

				{/* Yellow Light */}
				<div
					className="yellow-light"
					id={color == "yellow" ? "activeYellow" : ""}
					onClick={() => {
						setColor("yellow");
					}}></div>

				{/* Green Light */}
				<div
					className="green-light"
					id={color == "green" ? "activeGreen" : ""}
					onClick={() => {
						setColor("green");
					}}></div>
			</div>
		</div>
	);
};
