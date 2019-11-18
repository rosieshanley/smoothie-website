import React, { useState } from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Slider from "react-awesome-slider";
import SocialIcons from "./Components/SocialIcons";
import logo from "./assets/images/logo.png";
import startupScreenImage from "./assets/images/initial-carousel-image.png";
import carouselItems from "./assets/images/carousel";
import sliderStyles from "./assets/styles/slider.scss";
import theme from "./theme";
import "./App.scss";

const App = () => {
  let [activeSlide, setActiveSlide] = useState(null);

  const onTransitionEnd = ref => {
    setActiveSlide(ref.currentIndex);
  };

  const navItems = [];
  carouselItems.forEach((item, index) =>
    navItems.push(
      <div
        className="navigation__item"
        key={`navItem-${index}`}
        role="button"
        tabIndex="0"
        onClick={() => {
          setActiveSlide(index);
        }}
      >
        {item[1]}
      </div>
    )
  );

  const ChangeSlideIcon = ({ direction }) => {
    let increment = direction === "left" ? -1 : 1;

    const firstLeftArrow = activeSlide === 0 && direction === "left";
    const lastRightArrow =
      activeSlide === carouselItems.length - 1 && direction === "right";

    const disabled = firstLeftArrow || lastRightArrow;

    return (
      <IconButton
        disabled={disabled}
        onClick={() => {
          setActiveSlide(activeSlide + increment);
        }}
      >
        <i className={`fa fa-arrow-${direction} ${disabled && "disabled"}`}></i>
      </IconButton>
    );
  };

  const MobileNavigation = () => {
    const selectedSlide = carouselItems[activeSlide] || null;

    return (
      selectedSlide && (
        <div className="navigation--mobile">
          <ChangeSlideIcon direction="left" />
          <div className="navigation--mobile__item">{selectedSlide[1]}</div>
          <ChangeSlideIcon direction="right" />
        </div>
      )
    );
  };

  const slides = [];
  carouselItems.forEach((item, index) =>
    slides.push(
      <div className="carousel-slide" key={`carousel-${index}`}>
        <img src={item[0]} alt={`carousel-${index}`} />
      </div>
    )
  );

  const startupScreen = (
    <div className="carousel-slide" key="initial-carousel-image">
      <img src={startupScreenImage} alt="smoothie-music" />
    </div>
  );

  const LearnMore = () => (
    <div
      className="navigation--mobile learn-more"
      key={"learn-more-nav-link"}
      role="button"
      tabIndex="0"
      onClick={() => {
        setActiveSlide(0);
      }}
    >
      Learn More
    </div>
  );
  console.log(activeSlide);
  return (
    <div className="app">
      <MuiThemeProvider theme={theme}>
        <div className="header">
          <img className="logo" src={logo} alt="smoothie music" />
        </div>
        <div className="content">
          <div className="navigation">{navItems}</div>
          {activeSlide !== null ? <MobileNavigation /> : <LearnMore />}
          <Slider
            startup={false}
            startupScreen={startupScreen}
            cssModule={sliderStyles}
            organicArrows={false}
            selected={activeSlide}
            onTransitionEnd={onTransitionEnd}
          >
            {slides}
          </Slider>
          <SocialIcons />
        </div>
      </MuiThemeProvider>
    </div>
  );
};

export default App;
