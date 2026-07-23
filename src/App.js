import { Routes, Route } from "react-router-dom";

import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Menu from "./pages/Menu/Menu";
import Gallery from "./pages/Gallery/Gallery";
import CustomOrders from "./pages/CustomOrders/CustomOrders";
import FAQ from "./pages/FAQ/FAQ";
import Contact from "./pages/Contact/Contact";
import Policies from "./pages/Policies/Policies";
import Privacy from "./pages/Privacy/Privacy";
import Admin from "./pages/Admin/Admin";
import Launch from "./pages/Launch/Launch";
import Allergens from "./pages/Allergens/Allergens";

const SITE_LAUNCHED = true;

function App() {
	return (
		<>
			{SITE_LAUNCHED ? (
				<>
					<Navigation />

					<main>
						<Routes>
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
							<Route path="/allergens" element={<Allergens />} />
						</Routes>
					</main>

					<Footer />
				</>
			) : (
				<Routes>
					<Route path="*" element={<Launch />} />
				</Routes>
			)}
		</>
	);
}

export default App;
