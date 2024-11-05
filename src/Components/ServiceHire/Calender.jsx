import { useState } from 'react';

const Calendar = () => {
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [timeSlots, setTimeSlots] = useState([]);
    const [isAppointmentFixed, setIsAppointmentFixed] = useState(false); 
    const [showToast, setShowToast] = useState(false); 
    const [email, setEmail] = useState(""); 
    const [message, setMessage] = useState(""); 
    const [isSubmitted, setIsSubmitted] = useState(false); 

    const today = new Date();
    const month = today.getMonth();
    const year = today.getFullYear();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const allTimeSlots = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '2:00 PM', '3:00 PM', '4:00 PM'];

    const handleDateClick = (day) => {
        if (isAppointmentFixed) return; 
        const dateString = `${day} ${month + 1}/${year}`;
        setSelectedDate(dateString);
        setTimeSlots(allTimeSlots);
        setSelectedTime(null);
    };

    const handleTimeClick = (time) => {
        if (isAppointmentFixed) return; 
        setSelectedTime(time);
        setIsAppointmentFixed(true); 
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(true); 
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    const renderCalendar = () => {
        const weeks = [];
        let day = 1;
        let currentDayOfWeek = firstDay;

        let week = Array(7).fill(null);
        for (let i = firstDay; i < 7 && day <= daysInMonth; i++) {
            if (i === 6) {
                week[i] = null;
            } else {
                week[i] = day++;
            }
        }
        weeks.push(week);

        while (day <= daysInMonth) {
            week = Array(7).fill(null);
            for (let i = 0; i < 7 && day <= daysInMonth; i++) {
                if (i === 6) {
                    week[i] = null;
                } else {
                    week[i] = day++;
                }
            }
            weeks.push(week);
        }

        return weeks.map((week, index) => (
            <tr key={index}>
                {week.map((day, idx) => (
                    <td
                        key={idx}
                        className={`border border-gray-300 p-4 text-center ${
                            day === null ? 'bg-gray-100' : 'cursor-pointer hover:bg-blue-100'
                        } ${isAppointmentFixed ? 'opacity-50 cursor-not-allowed' : ''}`} 
                        onClick={() => !isAppointmentFixed && day !== null && handleDateClick(day)}
                    >
                        {day}
                    </td>
                ))}
            </tr>
        ));
    };

    return (
        <div className="p-6 mx-auto max-w-screen-lg flex flex-col lg:flex-row">
            <div className="w-full lg:w-2/3">
                <h2 className="text-3xl lg:text-5xl font-bold mb-9 text-left">Appointment Scheduler</h2>

                {showToast && (
                    <div className="fixed top-0 left-0 w-full bg-green-500 text-white text-center p-2">
                        Appointment successfully scheduled on {selectedDate} at {selectedTime}
                    </div>
                )}

                <table className="table-auto w-full border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2">Mon</th>
                            <th className="border border-gray-300 p-2">Tue</th>
                            <th className="border border-gray-300 p-2">Wed</th>
                            <th className="border border-gray-300 p-2">Thu</th>
                            <th className="border border-gray-300 p-2">Fri</th>
                            <th className="border border-gray-300 p-2">Sat</th>
                            <th className="border border-gray-300 p-2">Sun</th>
                        </tr>
                    </thead>
                    <tbody>{renderCalendar()}</tbody>
                </table>
            </div>

            {selectedDate && (
                <div className="w-full lg:w-1/3 mt-8 lg:mt-0 lg:pl-8">
                    <h3 className="text-lg lg:text-xl font-bold">Available time slots for {selectedDate}:</h3>
                    <div className="flex flex-wrap gap-4 mt-2">
                        {timeSlots.map((time, index) => (
                            <button
                                key={index}
                                className={`w-full lg:w-auto px-4 py-2 border rounded ${
                                    selectedTime === time ? 'bg-blue-500 text-white' : 'bg-gray-200 hover:bg-gray-300'
                                } ${isAppointmentFixed ? 'opacity-50 cursor-not-allowed' : ''}`}
                                onClick={() => !isAppointmentFixed && handleTimeClick(time)}
                            >
                                {time}
                            </button>
                        ))}
                    </div>

                    {selectedTime && !isSubmitted && (
                        <form onSubmit={handleFormSubmit} className="mt-6">
                            <label className="block text-lg font-semibold mb-2">Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full p-2 border border-gray-300 rounded mb-4"
                            />
                            
                            <label className="block text-lg font-semibold mb-2">Message:</label>
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Add a message"
                                className="w-full p-2 border border-gray-300 rounded mb-4"
                            />

                            <button
                                type="submit"
                                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                            >
                                Confirm Appointment
                            </button>
                        </form>
                    )}

                    {isSubmitted && (
                        <p className="text-green-600 text-lg mt-4">
                            Appointment confirmed! We have received your details.
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default Calendar;
