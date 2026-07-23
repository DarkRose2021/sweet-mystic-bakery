import { Routes, Route, BrowserRouter } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Gallery from "./pages/Gallery";
import CustomOrders from "./pages/CustomOrders";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Policies from "./pages/Policies";
import Privacy from "./pages/Privacy";
import Admin from "./pages/Admin/Admin";
import Launch from "./pages/Launch/Launch";

const SITE_LAUNCHED = false;

function App() {
	return (
		<>
			<Routes>
				{SITE_LAUNCHED ? (
					<>
						<Navigation />

						<main>
							
								<Route path="/" element={<Launch />} />
								<Route path="/" element={<Home />} />
								<Route path="/about" element={<About />} />
								<Route path="/menu" element={<Menu />} />
								<Route path="/gallery" element={<Gallery />} />
								<Route path="/custom-orders" element={<CustomOrders />} />
								<Route path="/faq" element={<FAQ />} />
								<Route path="/contact" element={<Contact />} />
								<Route path="/policies" element={<Policies />} />
								<Route path="/privacy" element={<Privacy />} />
								<Route path="/admin" element={<Admin />} />
						</main>

						<Footer />
					</>
				) : (
						<Route path="*" element={<Launch />} />
				)}
			</Routes>
		</>
	);
}

export default App;
