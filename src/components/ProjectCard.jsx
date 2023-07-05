import { useEffect, useState } from "react";

/* eslint-disable react/prop-types */
const ProjectCard = (props) => {

	const [gif, setGif] = useState(null);

	useEffect(() => {
		setGif(props.gif);
	}, []);

	const handleMouseOut = () => {
		setGif(`${gif}?t=${Date.now()}`);
	};

	return (
		<>
			<div className="flex flex-col">
				<div className="w-96 h-64 bg-white" onMouseOut={handleMouseOut}>
					<a href={props.url} target={"_blank"} rel="noreferrer" className="group">
						<img src={props.image} className="w-full h-full object-cover group-hover:hidden"/>
						<img src={gif} className="w-full h-full object-cover hidden group-hover:block"/>
					</a>

				</div>

				<h1 className="text-white font-alte-bold text-3xl mt-4">{props.title}</h1>

				<div className="flex flex-wrap w-96 mt-2">
					<p className="text-white font-alte-rg">{props.description}</p>
				</div>
			</div>
		</>
	);
};

export default ProjectCard;