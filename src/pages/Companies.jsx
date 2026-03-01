import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import '../styles/companies.css';

// --- Core Entity Logos --- //
import JayInt from '../assets/MainCompanies/CoreEntities/JayInternational.png';
import RioAura from '../assets/MainCompanies/CoreEntities/RioAura.jpeg';
import RioResources from '../assets/MainCompanies/CoreEntities/RioResources.png';

const Companies = () => {

  // ================= ENTITY DATA ================= //
  const companies = [
    {
      category: "Import & Export",
      name: "Jay International",
      logo: JayInt,
      website: "#",
      description:
        "Global import-export and procurement leadership serving hospitality and enterprise sectors.",
      contact: "+91 00000 00000",
      address: "Mumbai, India",
      services: ["Global Sourcing", "Procurement", "Distribution"]
    },
    {
      category: "Hospitality",
      name: "Rio Aura",
      logo: RioAura,
      website: "#",
      description:
        "Premium hospitality experiences crafted for luxury destinations and high-value clientele.",
      contact: "+91 00000 00001",
      address: "Goa, India",
      services: ["Luxury Stays", "Event Hosting", "Concierge Services"]
    },
    {
      category: "Industrial Supply",
      name: "Rio Resources",
      logo: RioResources,
      website: "#",
      description:
        "Industrial sourcing and supply chain optimization delivering operational scale.",
      contact: "+91 00000 00002",
      address: "Delhi, India",
      services: ["Raw Materials", "Logistics", "Supply Chain"]
    }
  ];

  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header />

      <main className="flex-grow-1">

        {/* ================= HERO SECTION ================= */}
        <section className="entities-hero text-white d-flex align-items-center">
          <Container>
            <h1 className="display-3 fw-bold mb-3">
              Our <span className="fw-light">Entities</span>
            </h1>
            <p className="lead mb-0">
              A detailed overview of the individual companies operating under our group umbrella.
            </p>
          </Container>
        </section>

        {/* ================= CONTENT ================= */}
        <Container className="py-5">

          {companies.map((company, index) => (
            <Card
              key={index}
              className="mb-5 border-0 shadow-sm overflow-hidden entity-card"
            >
              <Row className="g-0">

                {/* Logo Section */}
                <Col
                  md={4}
                  className="bg-white d-flex align-items-center justify-content-center p-4 border-end"
                >
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="img-fluid entity-logo"
                  />
                </Col>

                {/* Details Section */}
                <Col md={8}>
                  <Card.Body className="p-4 p-lg-5">

                    <div className="d-flex justify-content-between align-items-start mb-3 flex-wrap gap-3">
                      <div>
                        <Badge bg="danger" className="mb-2 text-uppercase">
                          {company.category}
                        </Badge>
                        <Card.Title className="h2 fw-bold mb-0">
                          {company.name}
                        </Card.Title>
                      </div>

                      <a
                        href={company.website}
                        className="btn btn-outline-danger btn-sm fw-bold"
                      >
                        Official Website
                      </a>
                    </div>

                    <Card.Text className="text-muted mb-4">
                      {company.description}
                    </Card.Text>

                    <Row className="small text-muted">
                      <Col sm={6} className="mb-3">
                        <strong className="text-dark d-block">
                          Contact Number
                        </strong>
                        <span>{company.contact}</span>
                      </Col>

                      <Col sm={6} className="mb-3">
                        <strong className="text-dark d-block">
                          Address
                        </strong>
                        <span>{company.address}</span>
                      </Col>

                      <Col sm={12}>
                        <strong className="text-dark d-block mb-2">
                          Key Services
                        </strong>
                        <div className="d-flex flex-wrap gap-2">
                          {company.services.map((service, i) => (
                            <Badge
                              key={i}
                              pill
                              bg="light"
                              text="dark"
                              className="border"
                            >
                              {service}
                            </Badge>
                          ))}
                        </div>
                      </Col>
                    </Row>

                  </Card.Body>
                </Col>

              </Row>
            </Card>
          ))}

        </Container>
      </main>

      <Footer />
    </div>
  );
};

export default Companies;