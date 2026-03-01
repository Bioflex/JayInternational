import React from 'react';
import { Container } from 'react-bootstrap';
import Header from '../components/shared/Header';
import Footer from '../components/shared/Footer';
import '../styles/customers.css';

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

const Customers = () => {
  return (
    <div className="d-flex flex-column min-vh-100 bg-light">
      <Header />

      <main className="flex-grow-1">

        {/* HERO */}
        <section className="customers-hero text-white d-flex align-items-center">
          <Container>
            <h1 className="display-3 fw-bold mb-3">
              Our <span className="fw-light">Customers</span>
            </h1>
            <p className="lead mb-0">
              Trusted by leading hospitality brands and global enterprises.
            </p>
          </Container>
        </section>

        {/* LOGO GRID */}
        <section className="py-5 bg-white">
          <Container>

            <div className="customers-grid">
              {logoList.map((logo, index) => (
                <div key={index} className="customer-card">
                  <img
                    src={logo.src}
                    alt={logo.name}
                    className="customer-logo"
                  />
                </div>
              ))}
            </div>

          </Container>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Customers;