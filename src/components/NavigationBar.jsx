/* eslint-disable react/prop-types */
// 3rd Party Imports
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";

const NavigationBar = (props) => {

	const [toggle, setToggle] = useState(true);
	const [displayStatus, setDisplayStatus] = useState("hidden");
	const [displayNavigation, setDisplayNavigation] = useState("");
	const [displayHamburger, setDisplayHamburger] = useState("");

	useEffect(() => {
		if (!props.isAboutPage) {
			setDisplayNavigation("lg:flex-none");
			setDisplayHamburger("lg:hidden");
		}

		window.addEventListener("resize", handleWindowChange); // Attach event listener on window resize

		return () => {
			window.removeEventListener("resize", handleWindowChange); // Wait for the EventListener to mount before dismounting
		};
	}, []);

	const handlePopupMenu = () => {
		if (toggle) {
			setDisplayStatus("inline");
		} else {
			setDisplayStatus("hidden");
		}
		setToggle(!toggle);
	};

	const handleWindowChange = () => {
		// For some reason this works...
		if (toggle) {
			setDisplayStatus("hidden");
			setToggle(toggle);
		}
	};

	return (
		<>
			<div className="flex flex-row mx-[12%] items-center text-white h-28">
				<div className={`flex flex-1 ${displayNavigation}`}>
					<h1 className="font-alte-bold text-3xl">Lorenz Castillo</h1>
				</div>

				{!props.isAboutPage &&
					<div className="lg:flex hidden flex-row ml-16 gap-8">
						<Link to={"/home"}>
							<p className="font-alte-bold text-lg border-2 px-4 py-2 cursor-pointer">Home</p>
						</Link>
						<Link to={"/about"}>
							<p className="font-alte-bold text-lg border-2 px-4 py-2">About</p>
						</Link>
						<Link to={"/projects"}>
							<p className="font-alte-bold text-lg border-2 px-4 py-2">My Work</p>
						</Link>
						<Link to={"/contact"}>
							<p className="font-alte-bold text-lg border-2 px-4 py-2">Contact</p>
						</Link>
					</div>
				}

				{/* Hamburger Icon */}
				<div className={`${displayHamburger} flex`}>
					<button onClick={() => handlePopupMenu()}>
						<FontAwesomeIcon icon={faBars} size="2xl" />
					</button>

				</div>
			</div>

			<div className={`${displayStatus} fixed z-10 w-80 h-screen bg-custom-dark-blue top-0 right-0 text-white`}>
				<div className="flex flex-col items-end m-8">
					<button onClick={() => handlePopupMenu()}>
						<FontAwesomeIcon icon={faXmark} size="2xl"/>
					</button>
				</div>
				<div className="flex flex-col items-start m-8 gap-10">
					<div>
						<Link to={"/home"}>
							<h1 className="font-alte-bold text-4xl mb-3">Home</h1>
						</Link>
						{props.isHomePage && (
							<div className="h-1.5 w-56 bg-custom-red" />
						)}
					</div>
					<div>
						<Link to={"/about"}>
							<h1 className="font-alte-bold text-4xl mb-3">About</h1>
						</Link>
						{props.isAboutPage && (
							<div className="h-1.5 w-56 bg-custom-red" />
						)}
					</div>
					<div>
						<Link to={"/projects"}>
							<h1 className="font-alte-bold text-4xl mb-3">My Work</h1>
						</Link>
						{props.isProjectsPage && (
							<div className="h-1.5 w-56 bg-custom-red" />
						)}
					</div>
					<div>
						<Link to={"/contact"}>
							<h1 className="font-alte-bold text-4xl mb-3">Contact</h1>
						</Link>
						{props.isContactPage && (
							<div className="h-1.5 w-56 bg-custom-red" />
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default NavigationBar;