// Local Imports
import Portrait1 from "../images/Portrait1.jpg";
// 3rd Party Imports
import { Tilt } from "react-tilt";

const defaultOptions = {
	reverse:        true, // reverse the tilt direction
	max:            25, // max tilt rotation (degrees)
	perspective:    700, // Transform perspective, the lower the more extreme the tilt gets.
	scale:          1, // 2 = 200%, 1.5 = 150%, etc..
	speed:          1000, // Speed of the enter/exit transition
	transition:     true, // Set a transition on enter/exit.
	axis:           null, // What axis should be disabled. Can be X or Y.
	reset:          true, // If the tilt effect has to be reset on exit.
	easing:         "cubic-bezier(.03,.98,.52,.99)", // Easing on enter/exit.
};

const ProfilePicture = () => {
	return (
		<>
			<div className="xl:w-96 xl:h-96 w-80 h-80">
				<Tilt options={defaultOptions}>
					<img className="rounded-2xl shadow-2xl object-cover xl:w-96 xl:h-96 w-80 h-80" src={Portrait1} alt=""/>
				</Tilt>
			</div>
		</>
	);
};

export default ProfilePicture;