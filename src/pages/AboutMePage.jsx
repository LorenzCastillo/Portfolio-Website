// Local Imports
import Background from "../images/Background.png";
import NavigationBar from "../components/NavigationBar";
import SkillCard from "../components/SkillCard";
import ProfilePicture from "../components/ProfilePicture";
import AppContext from "../AppContext";
// 3rd Party Imports
import { useContext, useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const AboutMePage = () => {
	const containerRef = useRef(null);
	const [isAboutPage, setIsAboutPage] = useState(true);
	const [isWhoIAm, setIsWhoIAm] = useState(false);
	const [aboutPageVisibility, setAboutPageVisibility] = useState("");
	const [whoIAmVisibility, setWhoIAmVisibility] = useState("hidden");
	const [opacityState, setOpacityState] = useState("opacity-100");
	const [fadeAnimation, setFadeAnimation] = useState("");
	const [widthAnimation, setWidthAnimation] = useState("");
	const [widthButtonAnimation, setWidthButtonAnimation] = useState("");
	const [windowSize, setWindowSize] = useState(window.innerWidth);
	const { animateCState1, opacityCState } = useContext(AppContext);

	const handleScrollChange = () => {
		if (containerRef.current) {
			containerRef.current.scrollTop = 0; // Reset the scroll position to top
		}
	};

	const handleButtonClick = () => {
		if (isAboutPage) {
			setFadeAnimation("animate-fadeOut");
			setOpacityState("opacity-0");

			setTimeout(() => {
				setFadeAnimation("");
				if (windowSize >= 1280) {
					setWidthAnimation("animate-widthExpandXL");
					setWidthButtonAnimation("animate-widthButtonExpandXL");
				} else if (windowSize >= 1024) {
					setWidthAnimation("animate-widthExpandLG");
					setWidthButtonAnimation("animate-widthButtonExpandLG");
				} else if (windowSize >= 768) {
					setWidthAnimation("animate-widthExpandMD");
				} else if (windowSize >= 640) {
					setWidthAnimation("animate-widthExpandSM");
				} else {
					setWidthAnimation("");
				}

				setIsAboutPage(current => !current);
				setIsWhoIAm(current => !current);

				setTimeout(() => {
					setFadeAnimation("animate-fadeIn");
					setOpacityState("opacity-100");

					setWidthAnimation("");
					setWidthButtonAnimation("");
				}, "600");
			}, "300");
		} else {
			setFadeAnimation("animate-fadeOut");
			setOpacityState("opacity-0");

			setTimeout(() => {
				setFadeAnimation("");
				if (windowSize >= 1280) {
					setWidthAnimation("animate-widthShrinkXL");
					setWidthButtonAnimation("animate-widthButtonShrinkXL");
				} else if (windowSize >= 1024) {
					setWidthAnimation("animate-widthShrinkLG");
					setWidthButtonAnimation("animate-widthButtonShrinkLG");
				} else if (windowSize >= 768) {
					setWidthAnimation("animate-widthShrinkMD");
				} else if (windowSize >= 640) {
					setWidthAnimation("animate-widthShrinkSM");
				} else {
					setWidthAnimation("");
				}

				setIsAboutPage(current => !current);
				setIsWhoIAm(current => !current);

				setTimeout(() => {
					setFadeAnimation("animate-fadeIn");
					setOpacityState("opacity-100");

					setWidthAnimation("");
					setWidthButtonAnimation("");
				}, "600");
			}, "300");
		}
	};

	useEffect(() => {
		const handleResize = () => {
			setWindowSize(window.innerWidth);
		};

		window.addEventListener("resize", handleScrollChange); // Attach event listener on window resize
		window.addEventListener("resize", handleResize); // Attach event listener on window resize

		return () => {
			window.removeEventListener("resize", handleScrollChange); // Wait for the EventListener to mount before dismounting
			window.removeEventListener("resize", handleResize); // Wait for the EventListener to mount before dismounting
		};
	}, []);

	useEffect(() => {
		if (isAboutPage) {
			setAboutPageVisibility("");
		} else {
			setAboutPageVisibility("hidden");
		}

		if (isWhoIAm) {
			setWhoIAmVisibility("");
		} else {
			setWhoIAmVisibility("hidden");
		}
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isAboutPage]);

	return (
		<>
			<div ref={containerRef} className="h-screen overflow-y-scroll overflow-x-hidden">
				<img className="absolute w-screen h-screen object-cover" src={Background} />
				{/* About Me Background */}
				<div className={`${aboutPageVisibility} ${widthAnimation} ${animateCState1} ${opacityCState} absolute h-screen lg:w-[55rem] sm:w-[40rem] w-screen bg-custom-extra-dark-blue transition-all ease-in-out duration-500`}/>
				{/* Who I Am Background */}
				<div className={`${whoIAmVisibility} ${widthAnimation} ${animateCState1} ${opacityCState} absolute h-screen xl:w-[75rem] md:w-[40rem] w-screen bg-custom-extra-dark-blue transition-all ease-in-out duration-500`}/>

				{/* About Me Button */}
				<div className={`${aboutPageVisibility} ${animateCState1} ${opacityCState} absolute max-md:hidden`}>
					<div className={`${widthButtonAnimation} flex h-screen lg:w-[60rem] w-[45rem] items-center justify-end transition-all ease-in-out duration-500`}>
						<button onClick={handleButtonClick} className="z-10">
							<div className="flex h-40 w-40 bg-custom-extra-dark-blue rounded-full items-center justify-end pr-7">
								<FontAwesomeIcon icon={faChevronRight} size="4x" style={{ color: "#ffffff" }} />
							</div>
						</button>
					</div>
				</div>

				{/* Who I Am Button */}
				<div className={`${whoIAmVisibility} ${animateCState1} ${opacityCState} absolute max-md:hidden`}>
					<div className={`${widthButtonAnimation} flex h-screen xl:w-[80rem] sm:w-[45rem] items-center justify-end transition-all ease-in-out duration-500`}>
						<button onClick={handleButtonClick} className="z-10">
							<div className="flex h-40 w-40 bg-custom-extra-dark-blue rounded-full items-center justify-end pr-7">
								<FontAwesomeIcon icon={faChevronLeft} size="4x" style={{ color: "#ffffff" }} />
							</div>
						</button>
					</div>
				</div>

				{/* Navigation Bar */}
				<div className="relative">
					<NavigationBar isAboutPage={true}/>
				</div>

				{/* ABOUT ME */}
				<div className={`${aboutPageVisibility} ${animateCState1} ${opacityCState} relative mx-[7%]`}>
					<div className="flex flex-row">
						<div className="flex flex-col mt-8 mr-[5%]">
							<div className="hidden sm:flex h-16 w-1 rounded-full bg-custom-red mb-10"/>
							<div className="hidden sm:flex h-[34rem] w-1 rounded-full bg-custom-red"/>
						</div>

						<div className="flex flex-col mt-8">
							<h1 className={`font-alte-bold text-6xl mb-10 ${opacityState} ${fadeAnimation}`}>
								<span className="text-white">About</span>
								<span className="text-custom-red"> Me</span>

								<button onClick={handleButtonClick} className="md:hidden ml-8 border-4 px-4 py-2 rounded-full">
									<div className="flex items-center justify-center">
										<FontAwesomeIcon icon={faChevronRight} size="xs" style={{ color: "#ffffff" }} />
									</div>
								</button>
							</h1>
							<p className={`text-white sm:w-[28rem] lg:w-[34rem] font-alte-bold lg:text-3xl text-2xl mb-10 z-20 ${opacityState} ${fadeAnimation}`}>
								I am a second-year computer science
								student at Vancouver Community College
								with 2 years of experience with website
								development and design who is looking to
								start a career in becoming a software / web
								developer
							</p>

							<h1 className={`text-white font-alte-bold text-4xl mb-4 ${opacityState} ${fadeAnimation}`}>My Skills</h1>

							<div className={`flex flex-col gap-2 ${opacityState} ${fadeAnimation}`}>
								<div className="flex flex-wrap gap-2 md:w-[24rem] lg:w-[32rem]">
									<SkillCard skill={"HTML"}/>
									<SkillCard skill={"CSS"}/>
									<SkillCard skill={"TailwindCSS"}/>
									<SkillCard skill={"JavaScript"}/>

									<SkillCard skill={"TypeScript"}/>
									<SkillCard skill={"React.js"}/>
									<SkillCard skill={"Node.js"}/>

									<SkillCard skill={"MongoDB"}/>
									<SkillCard skill={"MySQL"}/>
									<SkillCard skill={"Git"}/>
									<SkillCard skill={"Python"}/>

									<SkillCard skill={"Java"}/>
									<SkillCard skill={"C++"}/>
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* WHO I AM */}
				<div className={`${whoIAmVisibility} ${animateCState1} ${opacityCState} relative mx-[7%]`}>
					<div className="flex flex-row">
						<div className="flex flex-col mt-8 mr-[5%]">
							<div className="hidden md:flex h-16 w-1 rounded-full bg-custom-red mb-10"/>
							<div className="hidden md:flex h-[36rem] w-1 rounded-full bg-custom-red"/>
						</div>

						<div className="flex xl:flex-row flex-col">
							<div className="flex flex-col mt-8">
								<h1 className={`font-alte-bold text-6xl mb-10 ${opacityState} ${fadeAnimation}`}>
									<span className="text-white">Who I</span>
									<span className="text-custom-red"> Am</span>

									<button onClick={handleButtonClick} className="md:hidden ml-8 border-4 px-4 py-2 rounded-full">
										<div className="flex items-center justify-center">
											<FontAwesomeIcon icon={faChevronLeft} size="xs" style={{ color: "#ffffff" }} />
										</div>
									</button>
								</h1>
								<p className={`flex flex-wrap text-white sm:w-[30rem] font-alte-bold xl:text-3xl text-2xl mb-6 z-20 ${opacityState} ${fadeAnimation}`}>
									Born in 2001, I am graduating from Vancouver Community
									College in August 2023 with a 2-year diploma. I currently
									work at Fort Langley in a grocery store called Lee’s
									Market where I work as a Grocery / Produce clerk and
									train new employees. I am interested in becoming a web
									developer or a software developer, and with the
									experience I’ve gained throughout my studies, I am
									eager to get started with designing and / or developing
									applications
								</p>
							</div>

							<div className={`flex xl:items-center xl:h-[36rem] xl:ml-24 z-10 ${opacityState} ${fadeAnimation}`}>
								<ProfilePicture/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default AboutMePage;