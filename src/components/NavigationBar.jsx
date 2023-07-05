/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// Local Imports
import AppContext from "../AppContext";
// 3rd Party Imports
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";

const NavigationBar = () => {

	const [toggle, setToggle] = useState(true);
	const [displayStatus, setDisplayStatus] = useState("hidden");
	const [animateState, setAnimateState] = useState("");
	const [displayNavigation, setDisplayNavigation] = useState("");
	const [displayHamburger, setDisplayHamburger] = useState("");
	const { animateCState1, setAnimateCState1, animateCState2, setAnimateCState2, opacityCState, setOpacityCState, resetValues } = useContext(AppContext);
	const location = useLocation();
	const navigate = useNavigate();

	const handleHomePageTransition = () => {
		// About to Home Page
		if (location.pathname == "/about") {
			setAnimateCState1("animate-fadeOutSlide");
			setOpacityCState("opacity-0");

			if (!toggle) {
				setAnimateState("animate-fadeOutSlide");
			}

			setTimeout(() => {
				setAnimateCState1("");
				navigate("/home");

				setTimeout(() => {
					setAnimateCState1("animate-fadeInSlide");
					setOpacityCState("opacity-100");

					setTimeout(() => {
						resetValues();
					}, "700");
				}, "200");
			}, "1000");
		}
		// Projects to Home Page
		else if (location.pathname == "/projects") {
			setAnimateCState1("animate-backgroundUpTransition");
			setAnimateCState2("animate-fadeOutSlide");
			setOpacityCState("opacity-0");

			setTimeout(() => {
				setAnimateCState1("");
				navigate("/home");

				setTimeout(() => {
					setAnimateCState1("animate-fadeInSlide");
					setOpacityCState("opacity-100");

					setTimeout(() => {
						resetValues();
					}, "700");
				}, "200");
			}, "1500");
		}

		// Contact to Home Page
		else if (location.pathname == "/contact") {
			setAnimateCState1("animate-backgroundUpTransition");
			setAnimateCState2("animate-fadeOutSlide");
			setOpacityCState("opacity-0");

			setTimeout(() => {
				setAnimateCState1("");
				navigate("/home");

				setTimeout(() => {
					setAnimateCState1("animate-fadeInSlide");
					setOpacityCState("opacity-100");

					setTimeout(() => {
						resetValues();
					}, "700");
				}, "200");
			}, "1500");
		}
	};

	const handleAboutPageTransition = () => {

	};

	const handleProjectsPageTransition = () => {

	};

	const handleContactPageTransition = () => {

	};

	useEffect(() => {
		if (location.pathname != "/about") {
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

				{location.pathname != "/about" &&
					<div className="lg:flex hidden flex-row ml-16 gap-8">
						<button onClick={handleHomePageTransition}>
							<p className="font-alte-bold text-lg border-2 px-4 py-2 cursor-pointer">Home</p>
						</button>
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

			<div className={`${displayStatus} ${animateState} ${opacityCState} fixed w-80 h-screen bg-custom-dark-blue top-0 right-0 text-white z-50`}>
				<div className="flex flex-col items-end m-8">
					<button onClick={() => handlePopupMenu()}>
						<FontAwesomeIcon icon={faXmark} size="2xl"/>
					</button>
				</div>
				<div className="flex flex-col items-start m-8 gap-10">
					{location.pathname == "/" || location.pathname == "/home" ? (
						<div>
							<button onClick={handleHomePageTransition}>
								<h1 className="flex items-start font-alte-bold text-4xl mb-3">Home</h1>
								<div className="h-1.5 w-56 bg-custom-red" />
							</button>
						</div>
					) : (
						<button onClick={handleHomePageTransition} className="hover:animate-menuItemHover hover:w-56 group">
							<h1 className="flex items-start font-alte-bold text-4xl mb-3">Home</h1>
							<div className="h-1.5 bg-custom-red group-hover:opacity-100 opacity-0" />
						</button>
					)}

					{location.pathname == "/about" ? (
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

					{location.pathname == "/projects" ? (
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

					{location.pathname == "/contact" ? (
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