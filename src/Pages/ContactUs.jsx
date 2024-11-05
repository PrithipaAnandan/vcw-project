import { useState } from "react";
import TagLine7 from "../Components/TagLine/Content/TagLine7";
import Footer from "./Footer";
import Header from "./Header";

function ContactUs() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        subject: '',
        message: '',
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        if (!formData.firstName) newErrors.firstName = 'First Name is required';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.subject) newErrors.subject = 'Subject is required';
        if (!formData.message) newErrors.message = 'Message is required';

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            console.log("Form submitted", formData);

            setFormData({
                firstName: '',
                lastName: '',
                email: '',
                subject: '',
                message: '',
            });
        }
    };

    return (
        <>
            <div className="md:mb-40 sm:mb-20 md:mx-20 sm:mx-5 mx-3">
                <Header />
                <TagLine7 />

                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mx-5 sm:mx-10 md:mx-20 text-center md:text-left">
                    Get In Touch
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-9 py-9">
                    {/* Office Information Section */}
                    <div className="mx-5 sm:mx-10 md:mx-20 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-11 text-center md:text-left">
                        <div>
                            <span className="font-bold">Headquarters – Puducherry</span><br />
                            <span>171/3, Omshakthi Avenue, Puducherry – 605008.</span>
                        </div>
                        <div>
                            <span className="font-bold">Branch Office – Chennai</span><br />
                            <span>38, Ramakrishna Street, Rajaji Road, Tambaram West, Tambaram, Chennai,
                                Tamil Nadu 600045. Landmark: Near National Theatre</span>
                        </div>
                        <div>
                            <span className="font-bold">Branch Office – Bangalore</span><br />
                            <span>First floor, No.890, MSR Square, 2nd Main Rd, B Block, AECS Layout, Singasandra, 
                                Bengaluru, Karnataka 560068</span>
                        </div>
                        <div>
                            <span className="font-bold">Sales Office – Canada</span><br />
                            <span>1, Fourth Street, Balmertown, ON POV 2MO</span>
                        </div>
                    </div>

                    {/* Contact Form Section */}
                    <div className="space-y-3 mx-5 sm:mx-10 md:mx-14">
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    placeholder="First Name"
                                    className={`border px-4 w-full max-w-[500px] outline-none py-3 rounded-xl ${errors.firstName ? 'border-red-500' : 'border-gray-400'}`}
                                />
                                {errors.firstName && <p className="text-red-500">{errors.firstName}</p>}
                            </div>

                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    placeholder="Last Name"
                                    className={`border px-4 w-full max-w-[500px] outline-none py-3 rounded-xl ${errors.lastName ? 'border-red-500' : 'border-gray-400'}`}
                                />
                                {errors.lastName && <p className="text-red-500">{errors.lastName}</p>}
                            </div>

                            <div className="mb-4">
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="Email"
                                    className={`border px-4 w-full max-w-[500px] outline-none py-3 rounded-xl ${errors.email ? 'border-red-500' : 'border-gray-400'}`}
                                />
                                {errors.email && <p className="text-red-500">{errors.email}</p>}
                            </div>

                            <div className="mb-4">
                                <input
                                    type="text"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    placeholder="Subject"
                                    className={`border px-4 w-full max-w-[500px] outline-none py-3 rounded-xl ${errors.subject ? 'border-red-500' : 'border-gray-400'}`}
                                />
                                {errors.subject && <p className="text-red-500">{errors.subject}</p>}
                            </div>

                            <div className="mb-4">
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Message"
                                    className={`border px-4 py-2 w-full max-w-[500px] outline-none rounded-xl ${errors.message ? 'border-red-500' : 'border-gray-400'}`}
                                    rows="4"
                                ></textarea>
                                {errors.message && <p className="text-red-500">{errors.message}</p>}
                            </div>

                            <div className="mb-4 flex justify-center">
                                <button
                                    type="submit"
                                    className="border px-9 text-white py-2 rounded-md max-w-[500px] bg-blue-400 hover:bg-blue-500">
                                    Submit
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default ContactUs;
