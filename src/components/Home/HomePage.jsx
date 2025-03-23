import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom"; 
import heroImage from "../../assets/heroImage.jpg";
import { getAllEmployees } from "../../Api/apis";


const Home = () => {
    const navigate = useNavigate();
    const getEmployee = async()=>{
        const getData = await getAllEmployees();
        console.log(getData);
    }

    return (
        <div className="overflow-x-hidden bg-[#EEEEEE]">
            {/* Navbar */}
            <nav className="bg-[#7D0A0A] text-white py-4 px-8 flex justify-between items-center shadow-md w-full fixed top-0 z-10">
                <h1 className="text-2xl font-bold">Secure Employee Portal</h1>
                <div className="space-x-6">
                    <Link to="/adminLogin?role=Admin" className="hover:text-[#EAD196] transition duration-300">
                        Admin Login
                    </Link>
                    <Link to="/employeeLogin?role=Employee" className="hover:text-[#EAD196] transition duration-300">
                        Employee Login
                    </Link>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="min-h-screen w-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-[#7D0A0A] to-[#BF3131] text-white px-8 pt-20">
                <div className="md:w-1/2 text-center md:text-left">
                    <h1 className="text-5xl font-bold mb-6 leading-tight">Welcome to Secure Portal 🚀</h1>
                    <p className="text-lg text-[#EAD196] mb-8">
                        Access your dashboard securely as an <span className="text-[#EEEEEE]">Admin</span> or <span className="text-[#EEEEEE]">Employee</span>.
                    </p>
                    <button
                        onClick={() => navigate("/login")}
                        className="bg-[#EAD196] hover:bg-[#BF3131] text-[#7D0A0A] transition duration-300 font-semibold py-3 px-8 rounded-full text-lg shadow-lg"
                    >
                        Get Started
                    </button>
                    <button
                        onClick={getEmployee}
                        className="bg-[#EAD196] hover:bg-[#BF3131] text-[#7D0A0A] transition duration-300 font-semibold py-3 px-8 rounded-full text-lg shadow-lg"
                    >
                        Get All
                    </button>
                </div>
                <div className="md:w-1/2 flex justify-center">
                    <img src={heroImage} alt="Secure Login" className="w-3/4 max-w-md rounded-lg shadow-lg" />
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-[#BF3131] py-16 text-white text-center">
                <h2 className="text-4xl font-semibold mb-8">Why Choose Us?</h2>
                <div className="grid md:grid-cols-3 gap-8 px-8">
                    {[
                        { title: "Secure Access", text: "Your data is encrypted and protected using advanced security protocols." },
                        { title: "Role-Based Authentication", text: "Different access levels for Admins and Employees." },
                        { title: "User-Friendly Interface", text: "A seamless and intuitive user experience." },
                        { title: "24/7 Support", text: "Our team is available anytime to help you." },
                        { title: "Cloud Backup", text: "Your data is stored securely in the cloud." },
                        { title: "Mobile Friendly", text: "Access from any device, anywhere." }
                    ].map(({ title, text }, index) => (
                        <div key={index} className="w-80 p-6 bg-[#7D0A0A] rounded-lg shadow-lg border-t-4 border-[#EAD196]">
                            <h3 className="text-xl font-bold mb-2">{title}</h3>
                            <p className="text-[#EEEEEE]">{text}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-[#7D0A0A] py-16 text-white text-center">
                <h2 className="text-4xl font-semibold mb-8">What Our Users Say</h2>
                <div className="flex flex-wrap justify-center gap-8 px-8">
                    {[
                        { name: "John Doe", text: "Secure Portal has made our work seamless!", role: "Admin" },
                        { name: "Jane Smith", text: "Easy to use and highly secure!", role: "Employee" },
                        { name: "Robert Brown", text: "Highly recommended for businesses!", role: "Manager" }
                    ].map(({ name, text, role }, index) => (
                        <div key={index} className="w-80 p-6 bg-[#BF3131] rounded-lg shadow-lg">
                            <p className="text-[#EEEEEE] italic">"{text}"</p>
                            <h3 className="mt-4 text-lg font-bold">{name}</h3>
                            <p className="text-sm text-[#EAD196]">{role}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-[#BF3131] py-16 text-white text-center">
                <h2 className="text-4xl font-semibold mb-8">Get in Touch</h2>
                <form className="max-w-lg mx-auto flex flex-col gap-4">
                    <input type="text" placeholder="Your Name" className="p-3 rounded-lg bg-[#7D0A0A] text-white border border-[#EAD196] outline-none" />
                    <input type="email" placeholder="Your Email" className="p-3 rounded-lg bg-[#7D0A0A] text-white border border-[#EAD196] outline-none" />
                    <textarea placeholder="Your Message" rows="4" className="p-3 rounded-lg bg-[#7D0A0A] text-white border border-[#EAD196] outline-none"></textarea>
                    <button className="bg-[#EAD196] hover:bg-[#BF3131] text-[#7D0A0A] transition duration-300 font-semibold py-3 px-8 rounded-full shadow-lg">
                        Send Message
                    </button>
                </form>
            </section>

            {/* Footer */}
            <footer className="bg-[#7D0A0A] text-white py-6 text-center">
                <p className="text-[#EAD196]">&copy; 2025 Secure Portal. All Rights Reserved.</p>
                <div className="flex justify-center space-x-6 mt-4">
                    {[
                        { href: "#", label: "Facebook" },
                        { href: "#", label: "Twitter" },
                        { href: "#", label: "LinkedIn" }
                    ].map(({ href, label }, index) => (
                        <a key={index} href={href} className="hover:text-[#EAD196] transition duration-300">
                            {label}
                        </a>
                    ))}
                </div>
            </footer>
        </div>
    );
};

export default Home;