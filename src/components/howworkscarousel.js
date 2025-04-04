// src/components/howworkscarousel.js
import React from 'react';
import { Carousel, Container, Row, Col } from 'react-bootstrap';
import "./howworkscarousel.css"

import Recipe from '../images/Recipe.png'
import Mealplan from '../images/MealPlan.png'
import Budget from '../images/Budget.png'


const features = [
  {
    title: 'Create and Share Recipes',
    text: 'Share your favorite meals with friends and family in one click.',
    image: Recipe,
  },
  {
    title: 'Meal Planning',
    text: 'Plan your weekly meals and shop smarter with guided suggestions. And keep track of your daily intake to achieve your health goals.',
    image: Mealplan, 
  },
  {
    title: 'Budgeting',
    text: 'Set and track your grocery budget to save money every month.',
    image: Budget,
  },
];

const HowItWorksCarousel = () => {
  return (
    <Container>
      <h2 className="text-center mb-4">Your Recipe for Success</h2>
      <Carousel>
        {features.map((feature, index) => (
          <Carousel.Item key={feature.title}>
            <Row className="align-items-center g-0">
              {index === 0 ? (
                // For the second feature, text on the left, image on the right.
                <>
                  <Col md={6} className="d-flex flex-column justify-content-center adjusttext">
                    <h3 className="mt-3 mt-md-0">{feature.title}</h3>
                    <p>{feature.text}</p>
                  </Col>
                  <Col md={5} className="text-center">
                    <img
                      className="carousel-img img-fluid rounded"
                      src={feature.image}
                      alt={feature.title}
                    />
                  </Col>
                </>
              ) : (
                // For the other features, image on the left, text on the right.
                <>
                  <Col md={6} className="text-center">
                    <img
                      className="carousel-img img-fluid rounded"
                      src={feature.image}
                      alt={feature.title}
                    />
                  </Col>
                  <Col md={4}>
                    <h3 className="mt-3 mt-md-0">{feature.title}</h3>
                    <p>{feature.text}</p>
                  </Col>
                </>
              )}
            </Row>
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default HowItWorksCarousel;
