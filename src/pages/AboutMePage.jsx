// 3rd Party Imports
import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
// Local Imports
import Background from "../images/Background.png";
import NavigationBar from "../components/NavigationBar";
import SkillCard from "../components/SkillCard";

const AboutMePage = () => {
	const containerRef = useRef(null);

	const handleScrollChange = () => {
		if (containerRef.current) {
			containerRef.current.scrollTop = 0; // Reset the scroll position to top
		}
	};

	useEffect(() => {
		window.addEventListener("resize", handleScrollChange); // Attach event listener on window resize

		return () => {
			window.removeEventListener("resize", handleScrollChange); // Wait for the EventListener to mount before dismounting
		};
	}, []);

	return (
		<>
			<div ref={containerRef} className="h-screen overflow-y-scroll">
				<img className="absolute w-screen h-screen object-cover" src={Background} />
				<div className="absolute h-screen w-[42rem] bg-custom-extra-dark-blue"/>
				<div className="absolute max-md:hidden">
					<div className="flex h-screen	w-[47rem] items-center justify-end">
						<div className="flex h-40 w-40 bg-custom-extra-dark-blue rounded-full items-center justify-end pr-7">
							<FontAwesomeIcon icon={faChevronRight} size="4x" style={{ color: "#ffffff", }} />
						</div>
					</div>
				</div>

				{/* Navigation Bar */}
				<div className="relative">
					<NavigationBar isAboutPage={true}/>
				</div>

				<div className="relative mx-[7%]">
					<div className="flex flex-row">
						<div className="flex flex-col mt-8 mr-[5%]">
							<div className="hidden sm:flex h-16 w-1 rounded-full bg-custom-red mb-6"/>
							<div className="hidden sm:flex h-[30rem] w-1 rounded-full bg-custom-red"/>
						</div>

						<div className="flex flex-col mt-8">
							<h1 className="font-rg text-6xl mb-6">
								<span className="text-white">About</span>
								<span className="text-custom-red"> Me</span>
							</h1>
							<p className="text-white sm:w-96 lg:w-[28rem] w-72 font-rg text-2xl mb-6">
								I am a second-year computer science
								student at Vancouver Community College
								with 2 years of experience with website
								development and design who is looking to
								start a career in becoming a software / web
								developer
							</p>

							<h1 className="text-white font-rg text-4xl mb-4">My Skills</h1>

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

			</div>
		</>
	);
};



export default AboutMePage;