import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion, AnimatePresence } from 'framer-motion'
import './usecasesection.css'

import MobileImg from '../images/mobile.png';
import WebImg from '../images/web.png';
import PaperImg from '../images/paper.png';

const useCases = [
  {
    key: 'mobile',
    title: 'Mobile',
    subtitle: 'Seamless Mobile Integration',
    text: 'Plan your meals, post your favorite dishes, and check calorie counts on the go. Whether you’re at the store or in the kitchen, everything you need is right in your pocket.',
    image: MobileImg,
  },
  {
    key: 'web',
    title: 'Web',
    subtitle: 'A Powerful Web Dashboard',
    text: 'Enjoy a bigger workspace for serious planning. Browse, share, and organize recipes with ease — perfect for meal preppers and multitaskers alike.',
    image: WebImg,
  },  
  {
    key: 'paper',
    title: 'Hard Copy',
    subtitle: 'Return To Tradition',
    text: 'Prefer the old-school charm of pen and paper? Print out meal plans, shopping lists, or shareable recipes for the fridge, the binder, or your grandma’s cookbook.',
    image: PaperImg,
  },
];

const UseCaseSection = () => {
  const [selectedCase, setSelectedCase] = useState('mobile');
  const currentCase = useCases.find((u) => u.key === selectedCase);

  const textVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
  };

  const imageVariants = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.9 },
  };

  const transitionSettings = {
    duration: 0.4,
    ease: "easeInOut",
  };

  return (
    <Container className="my-5 use-case-section">
      <h1 className="text-center mb-4 usecasetitle">Flexible by Design</h1>
      {/* Button Group for Use Case Selection */}
      <div className="d-flex justify-content-center mb-4">
        <div className="btn-group usecasebutton" role="group" aria-label="Use case toggle">
          {useCases.map((uc) => (
            <React.Fragment key={uc.key}>
              <input
                type="radio"
                className="btn-check"
                name="usecase"
                id={`btnradio-${uc.key}`}
                autoComplete="off"
                checked={selectedCase === uc.key}
                onChange={() => setSelectedCase(uc.key)}
              />
              <label className="btn btn-outline-primary" htmlFor={`btnradio-${uc.key}`}>
                {uc.title}
              </label>
            </React.Fragment>
          ))}
        </div>
      </div>
      
      {/* Row for Image and Text*/}
      {/* FIX ME: FIX THE BOX BEHIND THE IMAGE THAT HANDLES THE TRANSITION. I NEED TO FILL IT OUT WITH THE IMAGE */}
      <Row className="align-items-center justify-content-center">
        {/*Animated Image*/} 
        <Col md={6} className="text-center mb-4 mb-md-0 usecaseimage">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentCase.key + '-image'} // Unique key is crucial for AnimatePresence
              src={currentCase.image}
              alt={currentCase.subtitle}
              variants={imageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={transitionSettings}
              className="img-fluid usecaseimage"
            />
          </AnimatePresence>
        </Col>
      {/* Animated Text Column with Transition */}
        <Col md={6} className="usecasetext">
          <div className="text-container">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentCase.key + '-text'} // Unique key is crucial
                variants={textVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={transitionSettings}
                className="use-case-text-content" // Added class for styling
              >
                <h3>{currentCase.subtitle}</h3>
                <p>{currentCase.text}</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default UseCaseSection;