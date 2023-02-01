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

    const { name, email, message } = formDetails

    const [errorMessage, setErrorMessage] = useState("")
    

    const onFormUpdate = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        if (!errorMessage) {
            setFormDetails({ ...formDetails, [e.target.name]: e.target.value });
            console.log('Handle Form', formDetails);
        }
    }



    const handleSubmit = async (e) => {
        e.preventDefault();
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
                                            defaultValue={name}
                                            onBlur={onFormUpdate} />
                                    </Col>
                                    <Col size={12} sm={6} className="px-1">
                                        <input
                                            type="email"
                                            placeholder="Email Address"
                                            name="email"
                                            defaultValue={email}
                                            onBlur={onFormUpdate} />
                                    </Col>
                                    <Col size={12} className="px-1">
                                        <textarea
                                            rows="6"
                                            placeholder="Message"
                                            name="message"
                                            defaultValue={message}
                                            onBlur={onFormUpdate}>
                                        </textarea>
                                        {errorMessage && (
                                            <div>
                                                <p className="error-text">{errorMessage}</p>
                                            </div>
                                        )}
                                        <button type="submit"><span>Send</span></button>
                                    </Col>
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