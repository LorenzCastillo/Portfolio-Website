// Local Imports
import Background from "../images/Background.png";
import NavigationBar from "../components/NavigationBar";
import SkillCard from "../components/SkillCard";
import ProfilePicture from "../components/ProfilePicture";
// 3rd Party Imports
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";

const AboutMePage = () => {
	const containerRef = useRef(null);
	const [isAboutPage, setIsAboutPage] = useState(true);
	const [isWhoIAm, setIsWhoIAm] = useState(false);
	const [aboutPageVisibility, setAboutPageVisibility] = useState("");
	const [whoIAmVisibility, setWhoIAmVisibility] = useState("hidden");

	const handleScrollChange = () => {
		if (containerRef.current) {
			containerRef.current.scrollTop = 0; // Reset the scroll position to top
		}
	};

	const handleButtonClick = () => {
		setIsAboutPage(current => !current);
		setIsWhoIAm(current => !current);
	};

	useEffect(() => {
		window.addEventListener("resize", handleScrollChange); // Attach event listener on window resize

		return () => {
			window.removeEventListener("resize", handleScrollChange); // Wait for the EventListener to mount before dismounting
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
	}, [isAboutPage]);

	return (
		<>
			<div ref={containerRef} className="h-screen overflow-y-scroll overflow-x-hidden">
				<img className="absolute w-screen h-screen object-cover" src={Background} />
				{/* About Me Background */}
				<div className={`${aboutPageVisibility} absolute h-screen w-[42rem] bg-custom-extra-dark-blue`}/>
				{/* Who I Am Background */}
				<div className={`${whoIAmVisibility} absolute h-screen w-[75rem] bg-custom-extra-dark-blue`}/>

				{/* About Me Button */}
				<div className={`${aboutPageVisibility} absolute max-md:hidden`}>
					<div className="flex h-screen	w-[47rem] items-center justify-end">
						<button onClick={handleButtonClick} className="z-10">
							<div className="flex h-40 w-40 bg-custom-extra-dark-blue rounded-full items-center justify-end pr-7">
								<FontAwesomeIcon icon={faChevronRight} size="4x" style={{ color: "#ffffff" }} />
							</div>
						</button>
					</div>
				</div>

				{/* Who I Am Button */}
				<div className={`${whoIAmVisibility} absolute max-lg:hidden`}>
					<div className="flex h-screen	w-[80rem] items-center justify-end">
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
				<div className={`${aboutPageVisibility} relative mx-[7%]`}>
					<div className="flex flex-row">
						<div className="flex flex-col mt-8 mr-[5%]">
							<div className="hidden sm:flex h-16 w-1 rounded-full bg-custom-red mb-6"/>
							<div className="hidden sm:flex h-[30rem] w-1 rounded-full bg-custom-red"/>
						</div>

						<div className="flex flex-col mt-8">
							<h1 className="font-alte-bold text-6xl mb-6">
								<span className="text-white">About</span>
								<span className="text-custom-red"> Me</span>
							</h1>
							<p className="text-white sm:w-96 lg:w-[28rem] w-72 font-alte-bold text-2xl mb-6 z-20">
								I am a second-year computer science
								student at Vancouver Community College
								with 2 years of experience with website
								development and design who is looking to
								start a career in becoming a software / web
								developer
							</p>

							<h1 className="text-white font-alte-bold text-4xl mb-4">My Skills</h1>

							<div className="flex flex-col gap-2">
								<div className="flex flex-wrap gap-2 sm:w-[24rem] lg:w-[30rem] w-72">
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
				<div className={`${whoIAmVisibility} relative mx-[7%]`}>
					<div className="flex flex-row">
						<div className="flex flex-col mt-8 mr-[5%]">
							<div className="hidden lg:flex h-16 w-1 rounded-full bg-custom-red mb-6"/>
							<div className="hidden lg:flex h-[26rem] w-1 rounded-full bg-custom-red"/>
						</div>

						<div className="flex lg:flex-row flex-col">
							<div className="flex flex-col mt-8">
								<h1 className="font-alte-bold text-6xl mb-6">
									<span className="text-white">Who I</span>
									<span className="text-custom-red"> Am</span>
								</h1>
								<p className="text-white sm:w-96 lg:w-[32rem] w-72 font-alte-bold text-2xl mb-6 z-20">
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

							<div className="flex h-[35rem] items-center ml-24 z-10">
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