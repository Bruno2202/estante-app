import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import BookProvider from "./contexts/bookContext";
import User from "./pages/user";

export default function App() {
	return (
		<BookProvider>
			<Router>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/auth/register' element={<Register />} />
					<Route path='/home' element={<Home />} />
					<Route path='/user' element={<User />} />
				</Routes>
			</Router>
			<Toaster />
		</BookProvider>

	);
}