import React, { useRef, useState, useEffect } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import '../styles/dashboard.css';

import RomilShah from '../assets/RomilShah.jpeg';


// --- Core Entity --- //
import JayInt from '../assets/MainCompanies/CoreEntities/JayInternational.png'
import RioAura from '../assets/MainCompanies/CoreEntities/RioAura.jpeg'
import RioResources from '../assets/MainCompanies/CoreEntities/RioResources.png'

// --- Logos ---
import Abbott from '../assets/MainCompanies/Abbott_Logo.png';
import Aditya from '../assets/MainCompanies/Aditya_Birla_Logo.png';
import Bosch from '../assets/MainCompanies/Bosch_Logo.png';
import Colgate from '../assets/MainCompanies/Colgate_Logo.png';
import Conrad from '../assets/MainCompanies/Conrad_Logo.png';
import Fairmont from '../assets/MainCompanies/Fairmont_Logo.png';
import Ferrero from '../assets/MainCompanies/Ferrero_Logo.png';
import Ginger from '../assets/MainCompanies/Ginger_Logo.png';
import HP from '../assets/MainCompanies/HP_Logo.png';
import HU from '../assets/MainCompanies/HU_Logo.png';
import Hyatt from '../assets/MainCompanies/Hyatt_Logo.png';
import HyattPlace from '../assets/MainCompanies/Hyatt_Place_Logo.png';
import ITC from '../assets/MainCompanies/ITC_Logo.png';
import Lalit from '../assets/MainCompanies/Lalit_Logo.png';
import Leela from '../assets/MainCompanies/Leela_Logo.png';
import Lodhi from '../assets/MainCompanies/Lodhi_Logo.png';
import Marriott from '../assets/MainCompanies/Marriott_Logo.png';
import Novotel from '../assets/MainCompanies/Novotel_Logo.png';
import Oberoi from '../assets/MainCompanies/Oberoi_Logo.png';
import Radisson from '../assets/MainCompanies/Radisson_Logo.png';
import Regis from '../assets/MainCompanies/Regis_Logo.png';
import RoyalOrchid from '../assets/MainCompanies/Royal_Orchid_Logo.png';
import Saifee from '../assets/MainCompanies/Saifee_Logo.png';
import TajHotel from '../assets/MainCompanies/Taj_Hotel_Logo.png';
import TajPalace from '../assets/MainCompanies/Taj_Palace_Logo.png';
import Vivanta from '../assets/MainCompanies/Vivanta_Logo.png';
import Westin from '../assets/MainCompanies/Westin_Logo.png';
import Zuri from '../assets/MainCompanies/Zuri_Logo.png';

const logoList = [
  { name: "Abbott", src: Abbott },
  { name: "Aditya Birla", src: Aditya },
  { name: "Bosch", src: Bosch },
  { name: "Colgate", src: Colgate },
  { name: "Conrad", src: Conrad },
  { name: "Fairmont", src: Fairmont },
  { name: "Ferrero", src: Ferrero },
  { name: "Ginger", src: Ginger },
  { name: "HP", src: HP },
  { name: "HU", src: HU },
  { name: "Hyatt", src: Hyatt },
  { name: "Hyatt Place", src: HyattPlace },
  { name: "ITC", src: ITC },
  { name: "Lalit", src: Lalit },
  { name: "Leela", src: Leela },
  { name: "Lodhi", src: Lodhi },
  { name: "Marriott", src: Marriott },
  { name: "Novotel", src: Novotel },
  { name: "Oberoi", src: Oberoi },
  { name: "Radisson", src: Radisson },
  { name: "Regis", src: Regis },
  { name: "Royal Orchid", src: RoyalOrchid },
  { name: "Saifee", src: Saifee },
  { name: "Taj Hotel", src: TajHotel },
  { name: "Taj Palace", src: TajPalace },
  { name: "Vivanta", src: Vivanta },
  { name: "Westin", src: Westin },
  { name: "Zuri", src: Zuri }
];

const Dashboard = () => {

  const scrollRef = useRef(null);
const [paused, setPaused] = useState(false);

useEffect(() => {
  const container = scrollRef.current;
  let animationFrame;

  const autoScroll = () => {
    if (!paused) {
      container.scrollLeft += 0.5; // speed control

      // Reset when half scrolled (true infinite loop)
      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }

    animationFrame = requestAnimationFrame(autoScroll);
  };

  animationFrame = requestAnimationFrame(autoScroll);

  return () => cancelAnimationFrame(animationFrame);
}, [paused]);

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <Header />

      <main className="flex-grow-1">

        {/* HERO */}
        <section className="hero-section text-white d-flex align-items-center py-5">
          <Container>
            <Row className="align-items-center">
              <Col lg={7}>
                <h6 className="text-uppercase fw-bold mb-3">
                  The Vision of <span className="ephesis-regular fs-1">Romil Shah</span>
                </h6>
                <h1 className="display-2 fw-bold mb-4">
                  Building Excellence <br /> Through Diversity.
                </h1>
                <p className="lead mb-5">
                  A strategic portfolio of independent companies united by quality.
                </p>
                <div className="d-flex gap-3">
                  <Button variant="light" size="lg" className="text-danger fw-bold shadow">
                    Our Companies
                  </Button>
                  <Button variant="outline-light" size="lg" className="fw-bold">
                    Contact Group
                  </Button>
                </div>
              </Col>

              {/* Change the LG-5 column to include d-flex and justify-content-center */}
<Col lg={5} className="d-none d-lg-flex justify-content-center align-items-center">
  <div className="hero-placeholder">
    <img src={RomilShah} alt="Romil Shah" className="hero-image" />
  </div>
</Col>
            </Row>
          </Container>
        </section>

        {/* LOGO MARQUEE */}
<section className="py-5 bg-light border-bottom">
  <Container fluid className="overflow-hidden">

    <p className="text-center text-muted small fw-bold text-uppercase mb-4">
      Trusted Partners & Global Clients
    </p>

    <div className="overflow-hidden">
      <div className="d-flex align-items-center marquee-track">
        {[...logoList, ...logoList].map((item, i) => (
          <div key={i} className="mx-5 flex-shrink-0" style={{ height: "90px" }}>
            <img
              src={item.src}
              alt={item.name}
              className="h-100"
              style={{ objectFit: "contain", opacity: 0.85 }}
            />
          </div>
        ))}
      </div>
    </div>

  </Container>
</section>

{/* CORE ENTITIES */}
<section className="py-5 bg-light">
  <Container>

    <div className="mb-5 text-center">
      <h2 className="fw-bold display-5">Core Entities</h2>
      <p className="text-muted">
        Independent verticals unified by governance, discipline, and long-term strategy.
      </p>
      <div className="mx-auto bg-danger mt-3" style={{ width: "80px", height: "4px" }} />
    </div>

    {[
      {
        name: "Jay International",
        logo: JayInt,
        desc: "Global import-export and procurement leadership serving hospitality and enterprise sectors."
      },
      {
        name: "Rio Aura",
        logo: RioAura,
        desc: "Premium hospitality experiences crafted for luxury destinations and high-value clientele."
      },
      {
        name: "Rio Resources",
        logo: RioResources,
        desc: "Industrial sourcing and supply chain optimization delivering operational scale."
      }
    ].map((company, i) => (
      <Row key={i} className="align-items-center py-5 entity-row">

        {/* Alternate Layout */}
        <Col lg={6} className={i % 2 !== 0 ? "order-lg-2" : ""}>
          <div className="entity-logo-wrapper d-flex justify-content-center">
            <img
              src={company.logo}
              alt={company.name}
              className="img-fluid entity-logo"
            />
          </div>
        </Col>

        <Col lg={6}>
          <div className="px-lg-4">

            <div className="bg-danger mb-3" style={{ width: "50px", height: "3px" }} />

            <h3 className="fw-bold mb-3">
              {company.name}
            </h3>

            <p className="text-muted mb-4">
              {company.desc}
            </p>

            <Button variant="danger" className="fw-bold px-4">
              Explore Entity
            </Button>

          </div>
        </Col>

      </Row>
    ))}

  </Container>
</section>

      </main>

      <Footer />
    </div>
  );
};

export default Dashboard;