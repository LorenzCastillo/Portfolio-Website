// 3rd Party Imports
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
// Local Imports
import NavigationBar from "../components/NavigationBar";
import Background from "../images/Background.png";

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
			</div>
		</>
	);
};



export default AboutMePage;