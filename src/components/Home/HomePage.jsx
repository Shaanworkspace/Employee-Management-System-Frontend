import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import heroImage from "../../assets/heroImage.jpg"

const Home = () => {
    const navigate = useNavigate();

    return (
        <>
            {/* Header */}
            <nav className="bg-gray-900 text-white py-4 px-8 flex justify-between items-center shadow-md w-full fixed top-0 z-10">
                {/* Logo */}
                <h1 className="text-2xl font-bold">Secure Employee Portal</h1>

                {/* Navigation Links */}
                <div className="space-x-6">
                    <Link to="/login?role=admin" className="hover:text-blue-400 transition duration-300">
                        Admin Login
                    </Link>
                    <Link to="/login?role=employee" className="hover:text-green-400 transition duration-300">
                        Employee Login
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <div className="h-screen w-screen flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-gray-900 to-black text-white px-8">
                {/* Text Content */}
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl font-bold mb-6">Welcome to Secure Portal 🚀</h1>
                    <p className="text-lg text-gray-300 mb-8">
                        Access your dashboard securely as an <span className="text-blue-400">Admin</span> or <span className="text-green-400">Employee</span>.
                    </p>

                    <button
                        onClick={() => navigate("/login")}
                        className="bg-blue-600 hover:bg-blue-500 transition duration-300 text-white font-semibold py-3 px-8 rounded-full text-lg"
                    >
                        Get Started
                    </button>
                </div>

                {/* Image Section */}
                <div className="md:w-1/2 flex justify-center">
                    <img src={heroImage} alt="Secure Login" className="w-3/4 max-w-md rounded-lg shadow-lg" />
                </div>
            </div>

            {/* Features Section */}
            <section className="bg-gray-800 py-16 text-white text-center">
                <h2 className="text-4xl font-semibold mb-8">Why Choose Us?</h2>
                <div className="flex flex-wrap justify-center gap-8 px-8">
                    {/* Feature 1 */}
                    <div className="w-80 p-6 bg-gray-900 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Secure Access</h3>
                        <p className="text-gray-400">Your data is encrypted and protected using advanced security protocols.</p>
                    </div>

                    {/* Feature 2 */}
                    <div className="w-80 p-6 bg-gray-900 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">Role-Based Authentication</h3>
                        <p className="text-gray-400">Different access levels for Admins and Employees.</p>
                    </div>

                    {/* Feature 3 */}
                    <div className="w-80 p-6 bg-gray-900 rounded-lg shadow-lg">
                        <h3 className="text-xl font-bold mb-2">User-Friendly Interface</h3>
                        <p className="text-gray-400">A seamless and intuitive user experience.</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-6 text-center">
                <p className="text-gray-400">&copy; 2025 Secure Portal. All Rights Reserved.</p>
            </footer>
        </>
    );
};

export default Home;
