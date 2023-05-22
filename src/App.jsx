/* eslint-disable no-unused-vars */

// Local Imports
import background from "./images/background.png";
import ProfilePicture from "./components/ProfilePicture/ProfilePicture";
import NavigationBar from "./components/NavigationBar/NavigationBar";
// 3rd Party Imports

const App = () => {
	return (
		<>
			<div className="relative">
				<img className="absolute w-screen" src={background}/>

				<div className="relative">
					<NavigationBar/>
				</div>

				<div className="w-screen relative right-40 top-40">
					<ProfilePicture/>
				</div>
			</div>

			<h1 className="text-3xl font-coolvetica-compressed font-bold underline">
        Hello world!
			</h1>

		</>
	);
};

export default App;


// import { Tilt } from 'react-tilt'

// const defaultOptions = {
// 	reverse:        false,  // reverse the tilt direction
// 	max:            35,     // max tilt rotation (degrees)
// 	perspective:    1000,   // Transform perspective, the lower the more extreme the tilt gets.
// 	scale:          1.1,    // 2 = 200%, 1.5 = 150%, etc..
// 	speed:          1000,   // Speed of the enter/exit transition
// 	transition:     true,   // Set a transition on enter/exit.
// 	axis:           null,   // What axis should be disabled. Can be X or Y.
// 	reset:          true,    // If the tilt effect has to be reset on exit.
// 	easing:         "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
// }

// const App = () => {
//   return (
//     <Tilt options={defaultOptions} style={{ height: 250, width: 250 }}>
//       <div>👽</div>
//     </Tilt>
//   )
// }