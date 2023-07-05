// Local Imports
import NavigationBar from "../components/NavigationBar";
import ProjectCard from "../components/ProjectCard";
import Background from "../images/Background.png";
import Project1 from "../images/Project1.png";
import Project2 from "../images/Project2.png";
// 3rd Party Imports
import { useRef, useEffect } from "react";

const MyProjectsPage = () => {
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
				<img className="absolute w-screen h-screen object-cover bottom-[36rem] z-[-10]" src={Background} />

				{/* Navigation Bar */}
				<div className="relative">
					<NavigationBar isProjectsPage={true}/>
				</div>

				<div className="relative">
					<div className="flex flex-col mt-10">
						<div className="flex justify-center">
							<h1 className="font-alte-bold md:text-6xl text-5xl">
								<span className="text-white">Projects</span>
								<span className="text-custom-red"> Made</span>
							</h1>
						</div>

						<div className="flex justify-center mt-10">
							<div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
								<ProjectCard
									title={"QuizMe"}
									description={"QuizMe is a Quiz web app that I developed with libraries such as React.js, TailwindCSS, Axios and React Router DOM. This project was made for my 'Advanced Internet Programming & Web Apps' midterm"}
									image={Project1}
									url={"https://lorenzcastillo-quizme.vercel.app/"}
								/>
								<ProjectCard
									title={"GiveNGo"}
									description={"GiveNGo is a Web App for my UI/UX Design Course, it's main purpose is to post items to donate to others or to find items that others are donating for free. Made with Next.JS and storing data on the localhost, none of the data on the web app is real"}
									image={Project2}
									url={"https://give-n-go.vercel.app/"}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default MyProjectsPage;