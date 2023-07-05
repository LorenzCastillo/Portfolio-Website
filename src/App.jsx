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
	const [animateCState, setAnimateCState] = useState("");
	const [opacityCState, setOpacityCState] = useState("");

	const route = useRoutes([
		{
			path: "/",
			element:
			<AppContext.Provider value={{
				animateCState, setAnimateCState, opacityCState, setOpacityCState
			}}>
				<HomePage/>
			</AppContext.Provider>
		},
		{
			path: "/home",
			element:
			<AppContext.Provider value={{
				animateCState, setAnimateCState, opacityCState, setOpacityCState
			}}>
				<HomePage/>
			</AppContext.Provider>
		},
		{
			path: "/about",
			element:
			<AppContext.Provider value={{
				animateCState, setAnimateCState, opacityCState, setOpacityCState
			}}>
				<AboutMePage/>
			</AppContext.Provider>

		},
		{
			path: "/projects",
			element:
			<AppContext.Provider value={{
				animateCState, setAnimateCState, opacityCState, setOpacityCState
			}}>
				<MyProjectsPage/>
			</AppContext.Provider>
		},
		{
			path: "/contact",
			element:
			<AppContext.Provider value={{
				animateCState, setAnimateCState, opacityCState, setOpacityCState
			}}>
				<ContactPage/>
			</AppContext.Provider>
		},
	]);

	return route;
}

export default App;