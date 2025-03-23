
import { Route, Routes } from 'react-router'
import './App.css'
import EmployeeLogin from './components/Auth/EmployeeLogin.jsx'
import AdminLogin from './components/Auth/AdminLogin.jsx'
import Header from './components/others/Header.jsx'
import AdminDashboard from './components/DashBoard/AdminDashboard.jsx'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard.jsx'
import Home from './components/Home/HomePage.jsx'


function App() {
	return (
		<>
		<Routes>
			<Route path='*' element={<Home/>}/>
			<Route path='/employeeLogin' element={<EmployeeLogin/>}/>
			<Route path='/adminLogin' element={<AdminLogin/>}/>
			<Route path='/admin' element={<AdminDashboard/>}/>
			<Route path='/employee' element={<EmployeeDashboard/>}/>
		</Routes>
		</>
	)
}

export default App
