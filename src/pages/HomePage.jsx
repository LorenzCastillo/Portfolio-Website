// Local Imports
import NavigationBar from "../components/NavigationBar";
import ProfilePicture from "../components/ProfilePicture";
import background from "../images/background.png";

const HomePage = () => {
	return (
		<>
			<div className="h-screen">
				<img className="absolute w-screen h-screen object-cover" src={background} />

				{/* Navigation Bar */}
				<div className="relative">
					<NavigationBar />
				</div>

				<div className="relative mx-[12%] h-[85%] items-center top-[5%]">
					<div className="flex flex-row items-center">

						{/* Flex column of the lines on the left side of the screen */}
						<div className="flex flex-col">
							{/* Lines on the right side of the screen */}
							<div className="h-[32rem] w-1 rounded-full bg-custom-red" />
							<div className="h-16 mt-6 w-1 rounded-full bg-custom-red" />
						</div>

						{/* Flex column of the text */}
						<div className="flex flex-col ml-10 flex-1">
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
						</div>

						{/* Flex column of my image */}
						<div className="flex flex-col">
							<ProfilePicture />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default HomePage;