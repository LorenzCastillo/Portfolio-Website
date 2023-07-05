/* eslint-disable react-hooks/exhaustive-deps */
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
	const [animateState, setAnimateState] = useState("");

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
			setAnimateState("animate-popUpMenuIn");
		} else {
			setAnimateState("animate-popUpMenuOut");
			setTimeout(() => {
				setDisplayStatus("hidden");
			}, "300");
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

			<div className={`${displayStatus} fixed w-80 h-screen bg-custom-dark-blue top-0 right-0 text-white z-50 ${animateState}`}>
				<div className="flex flex-col items-end m-8">
					<button onClick={() => handlePopupMenu()}>
						<FontAwesomeIcon icon={faXmark} size="2xl"/>
					</button>
				</div>
				<div className="flex flex-col items-start m-8 gap-10">
					{props.isHomePage ? (
						<div>
							<Link to={"/home"}>
								<h1 className="font-alte-bold text-4xl mb-3">Home</h1>
								<div className="h-1.5 w-56 bg-custom-red" />
							</Link>
						</div>
					) : (
						<div className="hover:animate-menuItemHover animate-menuItemHoverOut hover:w-56 group">
							<Link to={"/home"}>
								<h1 className="font-alte-bold text-4xl mb-3 w-40">Home</h1>
								<div className="h-1.5 bg-custom-red group-hover:opacity-100 opacity-0" />
							</Link>
						</div>
					)}

					{props.isAboutPage ? (
						<div>
							<Link to={"/about"}>
								<h1 className="font-alte-bold text-4xl mb-3">About</h1>
								<div className="h-1.5 w-56 bg-custom-red" />
							</Link>
						</div>
					) : (
						<div className="hover:animate-menuItemHover hover:w-56 group">
							<Link to={"/about"}>
								<h1 className="font-alte-bold text-4xl mb-3 w-40">About</h1>
								<div className="h-1.5 bg-custom-red group-hover:opacity-100 opacity-0" />
							</Link>
						</div>
					)}

					{props.isProjectsPage ? (
						<div>
							<Link to={"/projects"}>
								<h1 className="font-alte-bold text-4xl mb-3">My Work</h1>
								<div className="h-1.5 w-56 bg-custom-red" />
							</Link>
						</div>
					) : (
						<div className="hover:animate-menuItemHover hover:w-56 group">
							<Link to={"/projects"}>
								<h1 className="font-alte-bold text-4xl mb-3 w-40">My Work</h1>
								<div className="h-1.5 bg-custom-red group-hover:opacity-100 opacity-0" />
							</Link>
						</div>
					)}

					{props.isContactPage ? (
						<div>
							<Link to={"/contact"}>
								<h1 className="font-alte-bold text-4xl mb-3">Contact</h1>
								<div className="h-1.5 w-56 bg-custom-red" />
							</Link>
						</div>
					) : (
						<div className="hover:animate-menuItemHover hover:w-56 group">
							<Link to={"/contact"}>
								<h1 className="font-alte-bold text-4xl mb-3 w-40">Contact</h1>
								<div className="h-1.5 bg-custom-red group-hover:opacity-100 opacity-0" />
							</Link>
						</div>
					)}

				</div>
			</div>
		</>
	);
};

export default NavigationBar;