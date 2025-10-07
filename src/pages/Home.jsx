import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Project from "../components/Project";
import Education from "../components/Education";
import Skills from "../components/Skills";
import Awards from "../components/Awards";
import Hobbies from "../components/Hobbies";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Particles from "../design/Particles";

const Home = () => {
  return (
    <div className="relative w-full min-h-screen">
      {/* Background Particles */}
      <div className="fixed top-0 left-0 w-full h-full z-0">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Navbar />

        {/* About Section */}
        <motion.section
          id="about"
          className="flex flex-col items-center justify-center py-16 px-4 sm:px-6 lg:px-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-medium underline decoration-2 decoration-blue-400 underline-offset-8 mb- mt-15">
            About Me
          </h2>
          <p className="max-w-2xl text-base sm:text-lg leading-relaxed ">
            Hello! I'm a passionate Computer Science student with experience in
            web development, IoT, and machine learning. I enjoy creating
            efficient and elegant solutions that make a difference.
          </p>
        </motion.section>

        {/* Projects Section */}
        <motion.section
          id="projects"
          className="py-12 px-4 sm:px-6 lg:px-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Project />
        </motion.section>

        {/* Education Section */}
        <motion.section
          id="education"
          className="py-12 px-4 sm:px-6 lg:px-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Education />
        </motion.section>

        {/* Skills Section */}
        <motion.section
          id="skills"
          className="py-12 px-4 sm:px-6 lg:px-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Skills />
        </motion.section>

        {/* Awards Section */}
        <motion.section
          id="awards"
          className="py-12 px-4 sm:px-6 lg:px-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Awards />
        </motion.section>

        {/* Hobbies Section */}
        <motion.section
          id="hobbies"
          className="py-12 px-4 sm:px-6 lg:px-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Hobbies />
        </motion.section>

        {/* Contact Section */}
        <motion.section
          id="contact"
          className="py-12 px-4 sm:px-6 lg:px-20"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Contact />
        </motion.section>

        <Footer />
      </div>
    </div>
  );
};

export default Home;
