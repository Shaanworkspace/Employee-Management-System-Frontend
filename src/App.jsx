
import { Route, Routes } from 'react-router'
import './App.css'
import Login from './components/Auth/Login.jsx'
import Header from './components/others/Header.jsx'
import AdminDashboard from './components/DashBoard/AdminDashboard.jsx'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard.jsx'
import Home from './components/Home/HomePage.jsx'


function App() {
	return (
		<>
		<Routes>
			<Route path='*' element={<Home/>}/>
			<Route path='/login' element={<Login/>}/>
			<Route path='/admin' element={<AdminDashboard/>}/>
			<Route path='/employee' element={<EmployeeDashboard/>}/>
		</Routes>
		</>
	)
}

export default App
