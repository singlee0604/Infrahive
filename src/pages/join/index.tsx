import FooterPage from 'components/landingpage/Footer';
import React from 'react';
import AppBar from 'ui-component/extended/AppBar';

const index = () => {
  return (
    <div className="bg-[#0E0C15]">
      <AppBar background={'transparent'} />
      <div className="mx-auto max-w-2xl py-24 text-white">
        <h1 className="mx-8 text-5xl text-infra-yellow">join us</h1>
        <p className="mx-8 mt-12 text-xl leading-relaxed">
          As a member of our dynamic team, you'll have the chance to shape the future of AI infrastructure and make a tangible impact on
          industries worldwide. With our cutting-edge technologies, collaborative environment, and emphasis on creativity, we provide the
          perfect platform for you to unleash your potential.
          <br />
          <br />
          Join us in building the next generation of AI solutions, pushing the boundaries of what is possible, and driving positive change.
          <br />
          <br />
          We're on the lookout for individuals with a diverse range of talents, from insane engineering skills to street-smart business
          acumen. If you're a master of code, a wizard with algorithms, or a tech genius who thrives on solving complex problems, we want
          you.
          <br />
          <br />
          Join our team of brilliant engineers, where you'll have the opportunity to push the boundaries of AI infrastructure and develop
          groundbreaking solutions.
          <br />
          <br />
          <span className="text-plat-yellow">Frontend Engineer</span> — Someone who can weave magic with pixels, making our platform a
          delight to use for every user. <br />
          <br />
          <span className="text-plat-yellow">BackEnd Engineer</span> — Calling all BackEnd gurus with a knack for handling LLMs (Large
          Language Models) and wielding the power of Vector Databases! Passionate about optimizing performance, ensuring scalability, and
          crafting robust backend solutions, then this is the perfect opportunity for you. Join us and let's build a poowerful backend that
          is going to server thousands AI applications and milions of users! <br />
          <br />
          <span className="text-plat-yellow">AI Engineer</span> — Should be champion of AI Marvels - Classification, Annotation, Image
          Processing, and Beyond. Your mission will be to bring cutting-edge AI capabilities to life by building and deploying AI Models,
          working with other Engineers to integrate these onto the platform
          <br />
          <br />
          Just drop me hello out at contact@infrahive.io 😉
        </p>
      </div>
      <FooterPage />
    </div>
  );
};

export default index;
