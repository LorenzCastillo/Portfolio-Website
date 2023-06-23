// 3rd Party Imports
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavigationBar = () => {
	return (
		<>
			<div className="flex flex-row mx-[12%] items-center text-white h-28">
				<div className="flex flex-1 lg:flex-none">
					<h1 className="font-rg text-4xl text-white">Lorenz Castillo</h1>
				</div>

				<div className="lg:flex hidden flex-row ml-16 gap-8">
					<Link to={"/home"}>
						<p className="font-rg text-xl border-2 px-4 py-2 cursor-pointer">Home</p>
					</Link>
					<Link>
						<p className="font-rg text-xl border-2 px-4 py-2">About</p>
					</Link>
					<Link>
						<p className="font-rg text-xl border-2 px-4 py-2">My Work</p>
					</Link>
					<Link>
						<p className="font-rg text-xl border-2 px-4 py-2">Contact</p>
					</Link>
				</div>

				<div className="lg:hidden flex">
					<FontAwesomeIcon icon={faBars} size="2xl" />
				</div>
			</div>
		</>
	);
};

export default NavigationBar;