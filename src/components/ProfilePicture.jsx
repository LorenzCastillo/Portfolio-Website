// Local Imports
import ProfilePictureImage from "../images/ProfilePictureImage.png";
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
			<div className="w-72 h-72">
				<Tilt options={defaultOptions}>
					<img className="rounded-2xl shadow-2xl" src={ProfilePictureImage} alt=""/>
				</Tilt>
			</div>
		</>
	);
};

export default ProfilePicture;