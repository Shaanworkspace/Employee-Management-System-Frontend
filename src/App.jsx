import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/DashBoard/EmployeeDashboard.jsx'
import AdminDashboard from './components/DashBoard/AdminDashboard.jsx'
import { setLocalStorage ,getLocalStorage } from './utils/localStorage.jsx'
import { AuthConstent } from './context/AuthProvider.jsx'


function App() {
	let [user,setUser] = useState(null);
	const [loggedInUserData,setLoggedInUserData] = useState(null);
	const Authdata = useContext(AuthConstent);	
	return (
    <>
		{!user ? (<Login identifyUser={identifyUser} />) : user === "admin" ? (<AdminDashboard changeUser={setUser} data={loggedInUserData} />) : <EmployeeDashboard  changeUser={setUser}  data={loggedInUserData}/>}
    </>
	)
}

export default App
