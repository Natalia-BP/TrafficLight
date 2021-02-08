import React from "react";
import { StopLight } from "./StopLight";

//create your first component
export function Home() {
	return (
		<div className="d-flex justify-content-center">
			<StopLight />
		</div>
	);
}
