// Local Imports
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import MyProjectsPage from "./pages/MyProjectsPage";
import ContactPage from "./pages/ContactPage";
import AppContext from "./AppContext";
// 3rd Party Imports
import { useRoutes } from "react-router-dom";
import { useState } from "react";

function App() {
	const [animateCState1, setAnimateCState1] = useState("");
	const [animateCState2, setAnimateCState2] = useState("");
	const [opacityCState, setOpacityCState] = useState("");
	const [isIntroDone, setIsIntroDone] = useState(false);

	const resetValues = () => {
		setAnimateCState1("");
		setAnimateCState2("");
		setOpacityCState("");
	};

	const route = useRoutes([
		{
			path: "/",
			element:
			<AppContext.Provider value={{
				animateCState1,
				setAnimateCState1,
				animateCState2,
				setAnimateCState2,
				opacityCState,
				setOpacityCState,
				resetValues,
				isIntroDone,
				setIsIntroDone
			}}>
				<HomePage/>
			</AppContext.Provider>
		},
		{
			path: "/home",
			element:
			<AppContext.Provider value={{
				animateCState1,
				setAnimateCState1,
				animateCState2,
				setAnimateCState2,
				opacityCState,
				setOpacityCState,
				resetValues,
				isIntroDone,
				setIsIntroDone
			}}>
				<HomePage/>
			</AppContext.Provider>
		},
		{
			path: "/about",
			element:
			<AppContext.Provider value={{
				animateCState1, setAnimateCState1, animateCState2, setAnimateCState2, opacityCState, setOpacityCState, resetValues
			}}>
				<AboutMePage/>
			</AppContext.Provider>

		},
		{
			path: "/projects",
			element:
			<AppContext.Provider value={{
				animateCState1, setAnimateCState1, animateCState2, setAnimateCState2, opacityCState, setOpacityCState, resetValues
			}}>
				<MyProjectsPage/>
			</AppContext.Provider>
		},
		{
			path: "/contact",
			element:
			<AppContext.Provider value={{
				animateCState1, setAnimateCState1, animateCState2, setAnimateCState2, opacityCState, setOpacityCState, resetValues
			}}>
				<ContactPage/>
			</AppContext.Provider>
		},
	]);

	return route;
}

export default App;