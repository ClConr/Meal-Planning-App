import * as React from "react"
import { Container, Row, Col } from "react-bootstrap"

import Layout from "../components/Layout"

import logo from '../images/PlateItUpLogo.png'
import HowItWorksCarousel from "../components/howworkscarousel"
import QAaccordion from "../components/QAaccordian"
import UseCaseSection from "../components/usecasesection"


export default function HomePage() {
  return (
    <>
    <Layout>
    {/* <Hero /> */}
    <section className="hero-section">
      <Container fluid className="p-5">
        <Row className="align-items-center">
          <Col md={6} className="text-section">
            <h1 className="mb-4">PlateItUp</h1>
            <h3 className="mb-4">Plan, Plate, Post, Prosper</h3>     
            <p className="mb-4">Plan your meals. Keep your recipes. Share with friends. Reach your goals. All with PlateItUp.</p>
          </Col>
          <Col md={6}>
            <img src={logo} alt="Logo" className="hero-image" />
          </Col>
        </Row>
      </Container>
    </section>
    {/* How It Works/Features Section */}
    <section className="how-it-works-carousel">
    <HowItWorksCarousel />
    </section>
    {/* Use Case Section */}
    <section className="usecasesection">
    <UseCaseSection />
    </section>
    {/* Q&A Section */}
    <QAaccordion />
    {/* Mission Statement Section */}
    <section className="mission-statement">
      <Container>
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <h2>Our Mission</h2>
            <p>
            Our mission is to bring people together through the joy of food. We empower everyday cooks to plan meals with ease, share recipes with flair, and stay mindful of health and budget—all in one playful, community-driven platform. With every post, plate, and plan, we help people connect, create, and prosper around the table.
            </p>
          </Col>
        </Row>
      </Container>  
    </section>
    </Layout>
    </>
  );
}

//export const Head = () => <Seo title="Home" />
