// Local Imports
import HomePage from "./pages/HomePage";
import AboutMePage from "./pages/AboutMePage";
import MyProjectsPage from "./pages/MyProjectsPage";
import ContactPage from "./pages/ContactPage";
// 3rd Party Imports
import { useRoutes } from "react-router-dom";

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
		{
			path: "/projects",
			element: <MyProjectsPage/>
		},
		{
			path: "/contact",
			element: <ContactPage/>
		},
	]);

	return route;
}

export default App;