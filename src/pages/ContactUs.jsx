import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import '../styles/contactus.css';

const Contact = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header />

      <main className="flex-grow-1">

        {/* ================= HERO ================= */}
        <section className="contact-hero text-white d-flex align-items-center">
          <Container>
            <h1 className="display-3 fw-bold mb-3">
              Get In <span className="fw-light">Touch</span>
            </h1>
            <p className="lead mb-0">
              For partnerships, procurement, or general inquiries, connect with our team.
            </p>
          </Container>
        </section>

        {/* ================= CONTENT ================= */}
        <section className="py-5 bg-white">
          <Container>
            <Row className="g-5">

              {/* LEFT SIDE – CONTACT DETAILS */}
              <Col lg={5}>
                <div className="contact-info">
                  <h4 className="fw-bold mb-4">Corporate Office</h4>

                  <div className="mb-4">
                    <h6 className="text-muted mb-1">Address</h6>
                    <p className="mb-0">
                      123 Business Avenue<br />
                      Corporate District<br />
                      Mumbai, India
                    </p>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-muted mb-1">Phone</h6>
                    <p className="mb-0">+91 00000 00000</p>
                  </div>

                  <div className="mb-4">
                    <h6 className="text-muted mb-1">Email</h6>
                    <p className="mb-0">info@yourcompany.com</p>
                  </div>

                  <div className="contact-divider mt-4"></div>

                  <p className="text-muted mt-4 small">
                    Our team typically responds within 24–48 business hours.
                  </p>
                </div>
              </Col>

              {/* RIGHT SIDE – FORM */}
              <Col lg={7}>
                <div className="contact-form-wrapper">
                  <Form>

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Label>Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                      </Col>

                      <Col md={6} className="mb-3">
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type="email" placeholder="Enter your email" />
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control type="text" placeholder="Enter company name" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control type="text" placeholder="Subject of inquiry" />
                    </Form.Group>

                    <Form.Group className="mb-4">
                      <Form.Label>Message</Form.Label>
                      <Form.Control
                        as="textarea"
                        rows={5}
                        placeholder="Write your message here..."
                      />
                    </Form.Group>

                    <Button variant="danger" size="lg" className="fw-bold px-5">
                      Submit Inquiry
                    </Button>

                  </Form>
                </div>
              </Col>

            </Row>
          </Container>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Contact;