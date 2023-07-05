// Local Imports
import NavigationBar from "../components/NavigationBar";
import ProfilePicture from "../components/ProfilePicture";
import FirstLayer from "../images/1st-Layer.png";
import SecondLayer from "../images/2nd-Layer.png";
import ThirdLayer from "../images/3rd-Layer.png";
import FourthLayer from "../images/4th-Layer.png";
import FifthLayer from "../images/5th-Layer.png";
import SunAndMountain from "../images/SunAndMountain.png";
import Background from "../images/Gradient-Lighting.png";
import LinkedinLogo from "../images/Linkedin-Logo.png";
import GithubLogo from "../images/Github-Logo.png";
import EmailLogo from "../images/Email-Logo.png";
// 3rd Party Imports
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

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
				{/* Background */}
				<div className="relative">
					<img className="fixed w-screen object-cover z-[-50]" src={Background} />
					<img className="fixed w-[80rem] object-cover z-[-50] translate-y-20" src={SunAndMountain} />
					<img className="fixed bottom-0 w-full object-cover z-[-50] translate-y-8" src={FifthLayer}/>
					<img className="fixed bottom-0 w-screen object-cover z-[-50] translate-y-8" src={FourthLayer} />
					<img className="fixed bottom-0 w-screen object-cover z-[-50] translate-y-8" src={ThirdLayer} />
					<img className="fixed bottom-0 w-screen object-cover z-[-50] translate-y-8" src={SecondLayer} />
					<img className="fixed bottom-0 w-screen object-cover z-[-50] translate-y-8" src={FirstLayer} />
				</div>

				{/* <div className="relative top-0 left-0 w-full z-[-10] object-cover">
					<img className="fixed" src={Background} />
				</div> */}


				{/* Navigation Bar */}
				<div className="relative">
					<NavigationBar isHomePage={true}/>
				</div>

				<div className="relative mx-[12%] h-[85%] top-[5%]">
					<div className="flex flex-col gap-10">
						{/* Flex row containing first line deco, text and the image */}
						<div className="flex flex-row flex-1 items-center">
							{/* Line decoration 1 (Disappears in mobile view)*/}
							<div className="hidden lg:flex h-[32rem] w-1 rounded-full bg-custom-red" />
							{/* Flex column of the text content */}
							<div className="flex flex-col lg:ml-10 flex-1 lg:mt-12">
								<h1 className="font-alte-bold text-[5rem] text-white leading-none">Hello</h1>
								<h1 className="font-alte-bold text-[5rem] text-white leading-none">
									<span>I{"'"}m Lorenz</span>
									<span className="text-custom-red"> Castillo</span>
								</h1>

								{/* Flex row of the lines which is a divider for my title and subtitle*/}
								<div className="flex flex-row gap-2 mt-4">
									<div className="h-1 w-32 rounded-full bg-custom-red" />
									<div className="h-1 w-12 rounded-full bg-custom-red" />
									<div className="h-1 w-2 rounded-full bg-custom-red" />
								</div>

								<h1 className="font-alte-bold text-4xl text-white mt-6 leading-none">I am into Software / Web Development</h1>

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