// 3rd Party Imports
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// Local Imports
import NavigationBar from "../components/NavigationBar";
import ProfilePicture from "../components/ProfilePicture";
import Background from "../images/Background.png";
import LinkedinLogo from "../images/Linkedin-Logo.png";
import GithubLogo from "../images/Github-Logo.png";
import EmailLogo from "../images/Email-Logo.png";

const HomePage = () => {
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

				{/* Navigation Bar */}
				<div className="relative">
					<NavigationBar />
				</div>

				<div className="relative mx-[12%] h-[85%] top-[5%]">
					<div className="flex flex-col gap-10">
						{/* Flex row containing first line deco, text and the image */}
						<div className="flex flex-row flex-1 items-center">
							{/* Line decoration 1 (Disappears in mobile view)*/}
							<div className="hidden lg:flex h-[32rem] w-1 rounded-full bg-custom-red" />
							{/* Flex column of the text content */}
							<div className="flex flex-col lg:ml-10 flex-1 lg:mt-12">
								<h1 className="font-rg text-[5rem] text-white leading-none">Hello</h1>
								<h1 className="font-rg text-[5rem] text-white leading-none">
									<span>I{"'"}m Lorenz</span>
									<span className="text-custom-red"> Castillo</span>
								</h1>

								{/* Flex row of the lines which is a divider for my title and subtitle*/}
								<div className="flex flex-row gap-2 mt-4">
									<div className="h-1 w-32 rounded-full bg-custom-red" />
									<div className="h-1 w-12 rounded-full bg-custom-red" />
									<div className="h-1 w-2 rounded-full bg-custom-red" />
								</div>

								<h1 className="font-rg text-4xl text-white mt-6 leading-none">I am into Software / Web Development</h1>

								{/* MOBILE VIEW: My Portrait Photo */}
								<div className="lg:hidden flex flex-row mt-10">
									<Link to={"https://www.linkedin.com/in/lorenzcastillo/"} className="self-center">
										<img src={LinkedinLogo} alt="" width={50} className="self-center"/>
									</Link>
									<Link to={"https://github.com/LorenzCastillo"} className="self-center">

										<img src={GithubLogo} alt="" width={50} className="self-center ml-8"/>
									</Link>
									<Link className="self-center">

										<img src={EmailLogo} alt="" width={50} className="self-center ml-8"/>
									</Link>
								</div>

								{/* My Portrait Photo */}
								<div className="lg:hidden flex flex-col mt-12 items-center">
									<ProfilePicture />
								</div>
							</div>

							{/* MOBILE VIEW: My Portrait Photo */}
							<div className="lg:flex hidden flex-col">
								<ProfilePicture />
							</div>
						</div>

						{/* Flex row containing second line deco and logos */}
						<div className="flex flex-row">
							{/* Line decoration 2 (Disappears in mobile view)*/}
							<div className="hidden lg:flex h-24 w-1 rounded-full bg-custom-red" />
							{/* Logos */}
							<Link to={"https://www.linkedin.com/in/lorenzcastillo/"} className="self-center">
								<img src={LinkedinLogo} alt="" width={50} className="hidden lg:inline ml-10"/>
							</Link>
							<Link to={"https://github.com/LorenzCastillo"} className="self-center">
								<img src={GithubLogo} alt="" width={50} className="hidden lg:inline ml-8"/>
							</Link>
							<Link className="self-center">
								<img src={EmailLogo} alt="" width={50} className="hidden lg:inline ml-8"/>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;