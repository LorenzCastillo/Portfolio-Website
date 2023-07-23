/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const ProjectCard = (props) => {
	return (
		<>
			<div className="flex flex-col">
				<div className="w-96 h-64 bg-white">
					<a href={props.url} target={"_blank"} rel="noreferrer">
						<img src={props.image} className="w-full h-full object-cover"/>
					</a>
				</div>

				<h1 className="text-white font-alte-bold text-3xl mt-4">{props.title}</h1>

				<div className="flex flex-wrap w-96 mt-2">
					<p className="text-white font-alte-rg">{props.description}</p>
					<div className="flex gap-4">
						{props.stacks.map((stack) => {
							return (
								<div className="shadow-custom-box-dark-blue rounded-md px-3 py-2 text-white font-alte-bold mt-2">
									<p>{stack}</p>
								</div>
							);
						})}
					</div>
				</div>

				<a href={props.url} target={"_blank"} rel="noreferrer">
					<div className="flex w-28 h-10 rounded-xl bg-custom-red hover:bg-custom-red-hover text-white font-alte-bold text-lg mt-4 justify-center items-center">
						<p>Visit</p>
					</div>
				</a>
			</div>
		</>
	);
};

export default ProjectCard;