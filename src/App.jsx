// Local Imports
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";

function App() {
	const route = useRoutes([
		{
			path: "/",
			element: <HomePage/>
		},
		{
			path: "/home",
			element: <HomePage/>
		},
		{
			path: "/about",
			element: <AboutMePage/>
		},
	]);

	return route;
}

export default App;