import "./Contact.css"
import Header from "../components/login-header";
import { useNavigate } from "react-router-dom";


export default function Contact() {
    let navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <body>
                <Header />
                <div className="contact-container">
                    <h1>Contact Us</h1>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">Your Name:</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />

                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />

                        <label htmlFor="message">Your Message:</label>
                        <textarea id="message" name="message" placeholder="Your Message" rows="4" required />

                        <button className="button" type="submit">
                            Submit
                        </button>
                    </form>
                </div>
            </body>
        </>
    );
}
