// Local Imports
import NavigationBar from "../components/NavigationBar";
import ProfilePicture from "../components/ProfilePicture";
import Background from "../images/Background.png";
import LinkedinLogo from "../images/LinkedIn-Logo.png";
import GithubLogo from "../images/Github-Logo.png";
import EmailLogo from "../images/Email-Logo.png";
import AppContext from "../AppContext";

// 3rd Party Imports
import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
	const containerRef = useRef(null);
	const { animateCState1, animateCState2, opacityCState, setOpacityCState, resetValues, isIntroDone, setIsIntroDone } = useContext(AppContext);
	const [introAnimation1, setIntroAnimation1] = useState("");
	const [introAnimation2, setIntroAnimation2] = useState("");
	const [opacity, setOpacity] = useState("opacity-0");
	const [backgroundOpacityAnimation, setBackgroundOpacityAnimation] = useState("");
	const [lineWidth, setLineWidth] = useState("w-0");

	const handleScrollChange = () => {
		if (containerRef.current) {
			containerRef.current.scrollTop = 0; // Reset the scroll position to top
		}
	};

	// Intro Animation
	useEffect(() => {
		if (!isIntroDone) {
			setOpacityCState("opacity-0");

			setIntroAnimation1("animate-introFadeIn");
			setOpacity("opacity-100");
			setTimeout(() => {
				setIntroAnimation2("animate-introWidthExpand");
				setLineWidth("w-32");

				setTimeout(() => {
					setIntroAnimation1("animate-introFadeOut");
					setIntroAnimation2("animate-introFadeOut");
					setOpacity("opacity-0");

					setTimeout(() => {
						setOpacityCState("animate-introFadeIn");
						setBackgroundOpacityAnimation("animate-introFadeOut");

						setTimeout(() => {
							setIsIntroDone(true);
							resetValues();
						}, "1000");

					}, "1000");
				}, "1500");
			}, "800");
		}
	}, []);

	// Close pop up menu wwhenever the window resizes
	useEffect(() => {
		window.addEventListener("resize", handleScrollChange); // Attach event listener on window resize

		return () => {
			window.removeEventListener("resize", handleScrollChange); // Wait for the EventListener to mount before dismounting
		};
	}, []);

	return (
		<>
			<div ref={containerRef} className="h-screen overflow-x-hidden">

				{!isIntroDone &&
					<div className={`${backgroundOpacityAnimation} fixed flex flex-col items-center justify-center bg-custom-extra-dark-blue w-screen h-screen`}>
						<h1 className={`${introAnimation1} ${opacity} font-alte-bold text-white text-3xl z-[100]`}>Welcome!</h1>
						<div className={`${introAnimation2} ${lineWidth} ${opacity} h-1.5 mt-2 bg-custom-red`} />
					</div>
				}

				{/* Background */}
				<img className={`${animateCState2} fixed w-screen h-screen object-cover z-[-10]`} src={Background} />

				{/* Navigation Bar */}
				<div className={`${opacityCState} relative`}>
					<NavigationBar isHomePage={true}/>
				</div>

				<div className={`${animateCState1} ${opacityCState} absolute mx-[12%] h-[85%]`}>
					<div className="flex flex-col gap-10 mt-8">
						{/* Flex row containing first line deco, text and the image */}
						<div className="flex flex-row items-center">
							{/* Line decoration 1 (Disappears in mobile view)*/}
							<div className="hidden lg:flex h-[32rem] w-1 rounded-full bg-custom-red" />
							{/* Flex column of the text content */}
							<div className="flex flex-col lg:ml-10 lg:mt-12 lg:mr-32">
								<h1 className="font-alte-bold lg:text-[5rem] text-[4rem] text-custom-white leading-none">Hello</h1>
								<h1 className="font-alte-bold lg:text-[5rem] text-[4rem] text-custom-white leading-none">
									<span>I{"'"}m Lorenz</span>
									<span className="text-custom-red"> Castillo</span>
								</h1>

								{/* Flex row of the lines which is a divider for my title and subtitle*/}
								<div className="flex flex-row gap-2 mt-4">
									<div className="h-1 w-32 rounded-full bg-custom-red" />
									<div className="h-1 w-12 rounded-full bg-custom-red" />
									<div className="h-1 w-2 rounded-full bg-custom-red" />
								</div>

								<h1 className="font-alte-bold lg:text-4xl text-3xl text-custom-white mt-6 leading-none">I am into Software / Web Development</h1>

								{/* MOBILE VIEW: My Portrait Photo */}
								<div className="lg:hidden flex flex-row mt-10">
									<Link to={"https://www.linkedin.com/in/lorenzcastillo/"} className="self-center" target="_blank">
										<img src={LinkedinLogo} alt="" width={50}/>
									</Link>
									<Link to={"https://github.com/LorenzCastillo"} className="self-center" target="_blank">
										<img src={GithubLogo} alt="" width={50} className="ml-8"/>
									</Link>
									<a href="mailto:lorenzcastillo5524@gmail.com" className="self-center">
										<img src={EmailLogo} alt="" width={50} className="ml-8"/>
									</a>
								</div>

								{/* MOBILE VIEW: My Portrait Photo */}
								<div className="lg:hidden flex flex-col mt-12 items-center">
									<ProfilePicture />
								</div>
							</div>

							{/* My Portrait Photo */}
							<div className="lg:flex hidden flex-col">
								<ProfilePicture />
							</div>
						</div>

						{/* Flex row containing second line deco and logos */}
						<div className="flex flex-row">
							{/* Line decoration 2 (Disappears in mobile view)*/}
							<div className="hidden lg:flex h-24 w-1 rounded-full bg-custom-red" />
							{/* Logos */}
							<Link to={"https://www.linkedin.com/in/lorenzcastillo/"} className="self-center" target="_blank">
								<img src={LinkedinLogo} alt="" width={50} className="hidden lg:inline ml-10"/>
							</Link>
							<Link to={"https://github.com/LorenzCastillo"} className="self-center" target="_blank">
								<img src={GithubLogo} alt="" width={50} className="hidden lg:inline ml-8"/>
							</Link>
							<a href="mailto:lorenzcastillo5524@gmail.com" className="self-center">
								<img src={EmailLogo} alt="" width={50} className="hidden lg:inline ml-8"/>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;