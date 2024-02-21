import React, { Component } from "react";
import ValidationSample from "./ValidationSample";
import MoveBox from "./MoveBox";

class App extends Component {
	render() {
		return (
			<>
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
			</>
		);
	}
}

export default App;
