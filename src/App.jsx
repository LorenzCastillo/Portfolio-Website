// Local Imports
import { useRoutes } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
	const route = useRoutes([
		{
			path: "/",
			element: <HomePage/>
		},
		{
			path: "/home",
			element: <HomePage/>
		}
	]);

	return route;
}

export default App;