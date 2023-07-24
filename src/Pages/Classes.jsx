import React from "react";
import "../styles/classes.css";
import PJX_MT from "../assets/PJX_MT.png";
import PJX_BJJ from "../assets/PJX_BJJ.png";
import PJX_MMA from "../assets/PJX_MMA.png";
import PJX_SNC from "../assets/PJX_S&C.png";
import PJX_KID from "../assets/PJX_KID.png";
import PJX_NAK from "../assets/PJX_NAK.png";

const Classes = () => {
  return (
    <div className="classes-container">
      <h1 className="classes-title">Classes</h1>

      <div className="classes-grid">
        <div className="class-card">
          <img className="class-image" src={PJX_MT} alt="Class 1" />{" "}
          <div className="class-content">
            <h2 className="class-name">Muay Thai</h2>
            <p className="class-description">
              Experience the power and precision of authentic Muay Thai at our
              gym. Our classes offer a thrilling blend of striking techniques
              using punches, kicks, knees, and elbows. Led by expert
              instructors, you'll engage in dynamic training sessions that
              improve your strength, endurance, and flexibility. Discover the
              artistry and tradition of Muay Thai while developing discipline,
              focus, and self-defense skills. Join our community of passionate
              individuals and embark on a journey of physical fitness and
              personal growth. Unleash your inner warrior and embrace the spirit
              of Muay Thai today.
            </p>
            <a href="/class1" className="class-button">
              More Info
            </a>
          </div>
        </div>

        <div className="class-card">
          <img className="class-image" src={PJX_BJJ} alt="Class 2" />{" "}
          <div className="class-content">
            <h2 className="class-name">Grappling</h2>
            <p className="class-description">
              Step into the world of Submission Grappling/Brazilian Jiu-Jitsu
              (BJJ) at our academy. Our classes offer a thrilling exploration of
              ground-based martial arts and self-defense techniques. Led by
              experienced instructors, you'll learn the art of submissions,
              joint locks, and positional control. Develop strength,
              flexibility, and mental agility as you navigate the intricacies of
              grappling. Join a supportive community of passionate individuals
              and discover the transformative power of Submission Grappling/BJJ.
              Whether you're a beginner or an experienced practitioner, our
              classes provide a dynamic and rewarding journey of growth and
              personal development. Unlock your potential on the mat and embrace
              the art of Submission Grappling/Brazilian Jiu-Jitsu today.
            </p>
            <a href="/class2" className="class-button">
              More Info
            </a>
          </div>
        </div>

        <div className="class-card">
          <img className="class-image" src={PJX_MMA} alt="Class 2" />{" "}
          <div className="class-content">
            <h2 className="class-name">MMA</h2>
            <p className="class-description">
              Immerse yourself in the thrilling world of Mixed Martial Arts
              (MMA) at our gym. Our MMA classes combine various martial arts
              disciplines, including striking, grappling, and submissions, to
              create a comprehensive and dynamic training experience. Led by
              skilled instructors, you'll learn striking techniques from
              disciplines like Muay Thai and Boxing, as well as grappling and
              submission skills from Brazilian Jiu-Jitsu and Wrestling. Develop
              strength, agility, and mental fortitude as you master the
              techniques and strategies of MMA. Join a supportive community of
              like-minded individuals and embark on a journey that encompasses
              all aspects of martial arts. Discover the power, versatility, and
              excitement of MMA at our gym and unleash your true potential in
              the realm of combat sports..
            </p>
            <a href="/class3" className="class-button">
              More Info
            </a>
          </div>
        </div>
        <div className="class-card">
          <img className="class-image" src={PJX_SNC} alt="Class 4" />{" "}
          <div className="class-content">
            <h2 className="class-name">Strength And Conditioning </h2>
            <p className="class-description">
              Elevate your fitness to new heights with our Strength and
              Conditioning Circuits classes. Designed to optimize your physical
              performance, our circuits blend strength training, cardiovascular
              exercises, and functional movements for a comprehensive workout
              experience. Led by expert trainers, you'll engage in a series of
              high-intensity exercises and challenging circuits that target
              different muscle groups and improve overall conditioning. Build
              strength, increase endurance, and enhance agility through a
              variety of exercises, including weightlifting, bodyweight
              movements, plyometrics, and more. Join our supportive community
              and take your fitness to the next level with our invigorating
              Strength and Conditioning Circuits classes. Get ready to push your
              limits, achieve your goals, and unleash your full athletic
              potential.
            </p>
            <a href="/class3" className="class-button">
              More Info
            </a>
          </div>
        </div>
        <div className="class-card">
        <img className="class-image" src={PJX_NAK} alt="Class 5" />{" "}
          <div className="class-content">
            <h2 className="class-name">Fighters Class</h2>
            <p className="class-description">
              Step into the realm of elite training with our Fighters Class.
              Designed for dedicated individuals seeking to enhance their combat
              skills, this class is tailored for fighters of all levels. Led by
              experienced coaches, you'll embark on a specialized training
              program that focuses on refining technique, improving strength and
              conditioning, and honing mental fortitude. Our Fighters Class
              incorporates a combination of striking, grappling, and
              high-intensity conditioning exercises to elevate your performance
              inside the ring or cage. You'll learn advanced techniques, develop
              fight strategies, and engage in intense sparring sessions to
              sharpen your skills. Under the guidance of our knowledgeable
              instructors, you'll receive personalized attention and tailored
              training plans to meet your specific goals. Whether you're a
              professional fighter or aspiring to compete, our Fighters Class
              will push you to your limits and help you reach new levels of
              success.
            </p>
            <a href="/class3" className="class-button">
              More Info
            </a>
          </div>
        </div>
        <div className="class-card">
        <img className="class-image" src={PJX_KID} alt="Class 6" />{" "}

          <div className="class-content">
            <h2 className="class-name">Kids Class</h2>
            <p className="class-description">

Designed for young warriors seeking to enhance their combat skills, this class is tailored for kids of all levels. Led by experienced coaches, your child will embark on a specialized training program that focuses on refining technique, improving strength and conditioning, and honing mental fortitude. Our Kids Class incorporates a combination of striking, grappling, and high-energy conditioning exercises to elevate their performance and confidence.

Your child will learn advanced techniques, develop strategic thinking, and engage in exciting sparring sessions to sharpen their skills. Under the guidance of our knowledgeable instructors, they will receive personalized attention and tailored training plans to meet their specific goals.

Whether your child is looking to explore martial arts or has aspirations to compete, our Kids Class will encourage them to push their boundaries and achieve new levels of success while fostering camaraderie and discipline in a safe and supportive environment.
            </p>
            <a href="/class3" className="class-button">
              More Info
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Classes;
