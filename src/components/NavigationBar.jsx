// 3rd Party Imports
import { Link } from "react-router-dom";

const NavigationBar = () => {
	return (
		<>
			<div className="flex flex-row mx-[12%] items-center text-white h-28">
				<h1 className="font-rg text-4xl text-white">Lorenz Castillo</h1>

				<div className="flex flex-row ml-20 gap-8">
					<Link to={"/home"}>
						<p className="font-rg text-2xl border-2 px-4 py-2 cursor-pointer">Home</p>
					</Link>
					<Link>
						<p className="font-rg text-2xl border-2 px-4 py-2">About</p>
					</Link>
					<Link>
						<p className="font-rg text-2xl border-2 px-4 py-2">My Work</p>
					</Link>
					<Link>
						<p className="font-rg text-2xl border-2 px-4 py-2">Contact</p>
					</Link>
				</div>
			</div>
		</>
	);
};

export default NavigationBar;