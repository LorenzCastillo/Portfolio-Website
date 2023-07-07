/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
// Local Imports
import AppContext from "../AppContext";
// 3rd Party Imports
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useContext } from "react";

const NavigationBar = () => {

	const [toggle, setToggle] = useState(true);
	const [displayStatus, setDisplayStatus] = useState("hidden");
	const [animateState, setAnimateState] = useState("");
	const [displayNavigation, setDisplayNavigation] = useState("");
	const [displayHamburger, setDisplayHamburger] = useState("");
	const { setAnimateCState1, setAnimateCState2, opacityCState, setOpacityCState, resetValues } = useContext(AppContext);
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
				setAnimateCState2("");
				navigate("/home");

				setTimeout(() => {
					setAnimateCState1("animate-fadeInSlide");
					setOpacityCState("opacity-100");

					setTimeout(() => {
						resetValues();
					}, "700");
				}, "200");
			}, "700");
		}
		// Projects / Contact to Home Page
		else if (location.pathname == "/projects" || location.pathname == "/contact") {
			setAnimateCState1("animate-fadeOutSlide");
			setAnimateCState2("animate-backgroundUpTransition");
			setOpacityCState("opacity-0");

			setTimeout(() => {
				setAnimateCState1("");
				setAnimateCState2("");
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
		// Home to About Page
		if (location.pathname == "/" || location.pathname == "/home") {
			setAnimateCState1("animate-fadeOutSlide");

			setTimeout(() => {
				setOpacityCState("opacity-0");
				setAnimateCState1("");
				navigate("/about");

				setTimeout(() => {
					setAnimateCState1("animate-fadeInSlide");
					setOpacityCState("opacity-100");

					setTimeout(() => {
						resetValues();
					}, "700");
				}, "200");
			}, "700");
		}
		// Projects / Contact to About Page
		else if (location.pathname == "/projects" || location.pathname == "/contact") {
			setAnimateCState1("animate-fadeOutSlide");
			setAnimateCState2("animate-backgroundUpTransition");
			setOpacityCState("opacity-0");

			setTimeout(() => {
				setAnimateCState1("");
				setAnimateCState2("");
				navigate("/about");

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

	const handleProjectsPageTransition = () => {
		// Home / About to Projects Page
		if (location.pathname == "/" || location.pathname == "/home" || location.pathname == "/about") {
			setAnimateCState1("animate-fadeOutSlide");
			setAnimateCState2("animate-backgroundDownTransition");

			setTimeout(() => {
				setOpacityCState("opacity-0");
				setAnimateCState1("");
				setAnimateCState2("");
				navigate("/projects");

				setTimeout(() => {
					setAnimateCState1("animate-fadeInSlide");
					setOpacityCState("opacity-100");

					setTimeout(() => {
						resetValues();
					}, "700");
				}, "200");
			}, "1500");
		}
		// Contact to Projects Page
		else if (location.pathname == "/contact") {
			setAnimateCState1("animate-fadeOutSlide");
			setOpacityCState("opacity-0");

			setTimeout(() => {
				setAnimateCState1("");
				navigate("/projects");

				setTimeout(() => {
					setAnimateCState1("animate-fadeInSlide");
					setOpacityCState("opacity-100");

					setTimeout(() => {
						resetValues();
					}, "700");
				}, "200");
			}, "700");
		}
	};

	const handleContactPageTransition = () => {
		// Home / About to Contact Page
		if (location.pathname == "/" || location.pathname == "/home" || location.pathname == "/about") {
			setAnimateCState1("animate-fadeOutSlide");
			setAnimateCState2("animate-backgroundDownTransition");

			setTimeout(() => {
				setOpacityCState("opacity-0");
				setAnimateCState1("");
				setAnimateCState2("");
				navigate("/contact");

				setTimeout(() => {
					setAnimateCState1("animate-fadeInSlide");
					setOpacityCState("opacity-100");

					setTimeout(() => {
						resetValues();
					}, "700");
				}, "200");
			}, "1500");
		}
		// Projects to Contact Page
		else if (location.pathname == "/projects") {
			setAnimateCState1("animate-fadeOutSlide");
			setOpacityCState("opacity-0");

			setTimeout(() => {
				setAnimateCState1("");
				navigate("/contact");

				setTimeout(() => {
					setAnimateCState1("animate-fadeInSlide");
					setOpacityCState("opacity-100");

					setTimeout(() => {
						resetValues();
					}, "700");
				}, "200");
			}, "700");
		}
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
				<div className={`${displayNavigation} flex flex-1`}>
					<h1 className="font-alte-bold text-3xl">Lorenz Castillo</h1>
				</div>

				{location.pathname != "/about" &&
					<div className="lg:flex hidden flex-row ml-16 gap-8">
						<button onClick={handleHomePageTransition}>
							<p className="font-alte-bold text-lg border-2 px-4 py-2">Home</p>
						</button>
						<button onClick={handleAboutPageTransition}>
							<p className="font-alte-bold text-lg border-2 px-4 py-2">About</p>
						</button>
						<button onClick={handleProjectsPageTransition}>
							<p className="font-alte-bold text-lg border-2 px-4 py-2">My Work</p>
						</button>
						<button onClick={handleContactPageTransition}>
							<p className="font-alte-bold text-lg border-2 px-4 py-2">Contact</p>
						</button>
					</div>
				}

				{/* Hamburger Icon */}
				<div className={`${displayHamburger} flex`}>
					<button onClick={() => handlePopupMenu()}>
						<FontAwesomeIcon icon={faBars} size="2xl" />
					</button>
				</div>
			</div>

			{/* Pop up menu */}
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
								<h1 className="flex items-start font-alte-bold text-4xl mb-3 w-40">Home</h1>
								<div className="h-1.5 w-56 bg-custom-red" />
							</button>
						</div>
					) : (
						<button onClick={handleHomePageTransition} className="hover:animate-menuItemHover hover:w-56 group">
							<h1 className="flex items-start font-alte-bold text-4xl mb-3 w-40">Home</h1>
							<div className="h-1.5 bg-custom-red group-hover:opacity-100 opacity-0" />
						</button>
					)}

					{location.pathname == "/about" ? (
						<div>
							<button onClick={handleAboutPageTransition}>
								<h1 className="flex items-start font-alte-bold text-4xl mb-3 w-40">About</h1>
								<div className="h-1.5 w-56 bg-custom-red" />
							</button>
						</div>
					) : (
						<div className="hover:animate-menuItemHover hover:w-56 group">
							<button onClick={handleAboutPageTransition} className="hover:animate-menuItemHover hover:w-56 group">
								<h1 className="flex items-start font-alte-bold text-4xl mb-3 w-40">About</h1>
								<div className="h-1.5 bg-custom-red group-hover:opacity-100 opacity-0" />
							</button>
						</div>
					)}

					{location.pathname == "/projects" ? (
						<div>
							<button onClick={handleProjectsPageTransition} className="hover:animate-menuItemHover hover:w-56 group">
								<h1 className="flex items-start font-alte-bold text-4xl mb-3 w-40">My Work</h1>
								<div className="h-1.5 w-56 bg-custom-red" />
							</button>
						</div>
					) : (
						<div onClick={handleProjectsPageTransition} className="hover:animate-menuItemHover hover:w-56 group">
							<button className="hover:animate-menuItemHover hover:w-56 group">
								<h1 className="flex items-start font-alte-bold text-4xl mb-3 w-40">My Work</h1>
								<div className="h-1.5 bg-custom-red group-hover:opacity-100 opacity-0" />
							</button>
						</div>
					)}

					{location.pathname == "/contact" ? (
						<div>
							<button onClick={handleContactPageTransition} className="hover:animate-menuItemHover hover:w-56 group">
								<h1 className="flex items-start font-alte-bold text-4xl mb-3 w-40">Contact</h1>
								<div className="h-1.5 w-56 bg-custom-red" />
							</button>
						</div>
					) : (
						<div onClick={handleContactPageTransition} className="hover:animate-menuItemHover hover:w-56 group">
							<button className="hover:animate-menuItemHover hover:w-56 group">
								<h1 className="flex items-start font-alte-bold text-4xl mb-3 w-40">Contact</h1>
								<div className="h-1.5 bg-custom-red group-hover:opacity-100 opacity-0" />
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default NavigationBar;