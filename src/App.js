import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import Login from './pages/login';
import Home from './pages/home';
import Register from './pages/register';
import BookProvider from "./contexts/bookContext";
import User from "./pages/user";
import UserProvider from "./contexts/userContext";
import Ranking from "./pages/ranking";
import Book from "./pages/book";

export default function App() {
	return (
		<UserProvider>
			<BookProvider>
				<Router>
					<Routes>
						<Route path='/' element={<Login />} />
						<Route path='/auth/register' element={<Register />} />
						<Route path='/home' element={<Home />} />
						<Route path='/user' element={<User />} />
						<Route path='/ranking' element={<Ranking />} />
						<Route path='/book' element={<Book />} />
					</Routes>
				</Router>
				<Toaster />
			</BookProvider>
		</UserProvider>
	);
}