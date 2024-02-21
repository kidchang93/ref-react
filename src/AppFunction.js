import React from "react";
import ValidationSample from "./ValidationSample";
import MoveBox from "./MoveBox";

const App = () => {
	return (
		<div>
			<ValidationSample />
			<MoveBox
				ref={(ref) => {
					this.MoveBox = ref;
				}}
			/>
			<button
				onClick={() => {
					this.MoveBox.move(200, 200);
				}}>
				move2
			</button>
		</div>
	);
};

export default App;
