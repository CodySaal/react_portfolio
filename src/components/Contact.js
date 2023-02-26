import { useState } from "react"
import { Container, Row, Col } from "react-bootstrap"
import { validateEmail } from "../utils/helpers"


function Contact() {
    const formInitialDetails = {
        name: '',
        email: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails);

    const [buttonText, setButtonText] = useState("Send");

    const [status, setStatus] = useState({});


    const [errorMessage, setErrorMessage] = useState("")
    

    // const onFormUpdate = (e) => {
    //     if (e.target.name === 'email') {
    //         const isValid = validateEmail(e.target.value);
    //         if (!isValid) {
    //             setErrorMessage('Your email is invalid.');
    //         } else {
    //             setErrorMessage('');
    //         }
    //     } else {
    //         if (!e.target.value.length) {
    //             setErrorMessage(`${e.target.name} is required.`);
    //         } else {
    //             setErrorMessage('');
    //         }
    //     }
    //     if (!errorMessage) {
    //         setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
    //         console.log('Handle Form', formDetails);
    //     }
    // }

    const onFormUpdate = (category, value) => {
        setFormDetails({
            ...formDetails,
            [category]: value
        })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        setButtonText("Sending...");
        let response = await fetch("http://localhost:3001/contact", {
            method: "POST",
            headers: {
                "Content-type": "Application/json;charset=utf-8",
            },
            body: JSON.stringify(formDetails),
        });
        setButtonText("Send");
        let result = await response.json();
        setFormDetails(formInitialDetails);
        if (result.code === 200) {
            console.log(result)
            setStatus({ success: true, message: "Message sent successfully"});
        } else {
            console.log(result.PromiseResult.code)
            setStatus({ success: false, message: "Something went wrong, please try again later."})
        }
        if (!errorMessage) {
            console.log("Submit Form", formDetails)
        }
        setFormDetails({
            name: "",
            email: "",
            message: ""
        });
    };

    return (
        <section className="contact" id="connect">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={6}>

                        <div>
                            <h2>Get In Touch</h2>
                            <form onSubmit={handleSubmit}>
                                <Row>
                                    <Col size={12} sm={6} className="px-1">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            name="name"
                                            value={formDetails.name}
                                            onChange={(e) => onFormUpdate("name", e.target.value)} />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            name="email"
                                            value={formDetails.email}
                                            onChange={(e) => onFormUpdate("email", e.target.value)} />
                                    </Col>
                                    <Col size={12} className="px-1">
                                        <textarea
                                            rows="6"
                                            placeholder="Message"
                                            name="message"
                                            value={formDetails.message}
                                            onChange={(e) => onFormUpdate("message", e.target.value)}>
                                        </textarea>
                                        {errorMessage && (
                                            <div>
                                                <p className="error-text">{errorMessage}</p>
                                            </div>
                                        )}
                                        <button type="submit"><span>{buttonText}</span></button>
                                    </Col>
                                    {
                                        status.message &&
                                        <Col>
                                            <p className={status.succes === false ? "danger" : "success"}>{status.message}</p>
                                        </Col>
                                    }
                                </Row>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact