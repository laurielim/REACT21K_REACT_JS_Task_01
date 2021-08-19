import Header from "./components/Header.js";
import Main from "./components/Main.js";
import Footer from "./components/Footer.js";
import "./App.css";

import { AuthProvider } from "./contexts/AuthContext";

function App() {
	return (
		<AuthProvider>
			<div className='flow'>
				<Header />
				<Main />
				<Footer />
			</div>
		</AuthProvider>
	);
}

export default App;
