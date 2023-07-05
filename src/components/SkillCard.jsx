/* eslint-disable react/prop-types */

const SkillCard = (props) => {
	return (
		<>
			<div className="flex items-center justify-center font-alte-bold text-xl text-white bg-custom-light-blue px-5 py-2 rounded-xl">
				<p>{props.skill}</p>
			</div>
		</>
	);
};

export default SkillCard;