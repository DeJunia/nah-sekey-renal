"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { images } from "@/constants";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import ScrollAnimation from "@/components/scrollAnimations";
import { FaBuilding } from "react-icons/fa6";
import { BsMicrosoftTeams } from "react-icons/bs";
import { GiTeamIdea } from "react-icons/gi";
import { FaEarthAfrica } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";

type StatItemProps = {
  value: number;
  label: string;
};

const StatItem = ({ value, label }: StatItemProps) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -100px 0px" });

  useEffect(() => {
    const animateCount = async () => {
      await controls.start({ opacity: 1 });

      for (let i = 0; i <= value; i++) {
        setCount(i);
        await new Promise(resolve => setTimeout(resolve, 20));
      }
    };

    if (inView) {
      animateCount();
    }
  }, [inView, value, controls]);

  return (
    <div ref={ref} className="text-center">
      <motion.h3
        className="text-3xl font-bold text-primary"
        initial={{ opacity: 0 }}
        animate={controls}
      >
        {count.toFixed(0)}
        {label.includes("%") || label.includes("/") ? "" : "+"}
      </motion.h3>
      <p className="text-sm mt-1 text-primary">{label}</p>
    </div>
  );
};


export default function Home() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-20% 0px" });
  const [readyToAnimate, setReadyToAnimate] = useState(false);

  useEffect(() => {
    if (isInView) setReadyToAnimate(true);
  }, [isInView]);

  

  const data = [
    {
      id: "1",
      image: FaBuilding,
      title: "Ultra Modern Dialysis Facility",
    },
    {
      id: "2",
      image: BsMicrosoftTeams,
      title: "Best Clinical Care",
    },
    {
      id: "3",
      image: FaEarthAfrica,
      title: "International / U.S. Standard Care",
    },
    {
      id: "4",
      image: GiTeamIdea,
      title: "Top Nephrologists supporting Sahel",
    }
  ]

  const services = [
    {
      id: "1",
      image: images.imgd1,
      title: "Hemodialysis Treatment",
      href: "/serve"
    },
    {
      id: "2",
      image: images.imgd4,
      title: "CKD Clinic",
      href: "/serve/treat1"
    },
    {
      id: "3",
      image: images.imgd3,
      title: "Access Surgical and Procedures",
      href: "/serve/treat2"
    },
    {
      id: "4",
      image: images.imgd2,
      title: "Kidney Transplant",
      href: "/serve/treat3"
    },
  ]

  return (
    <div className="w-full max-w-full flex flex-col overflow-x-hidden">
      <section className="h-[100vh] overflow-hidden relative" ref={ref}>
        <Image
          src={images.bg2}
          className="w-full h-full object-cover"
          alt="bg1"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 flex flex-col items-center justify-center pt-30 pb-5">
          <motion.h1
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-white text-center"
            initial={{ x: -200, opacity: 0 }}
            animate={readyToAnimate ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.17, 0.55, 0.55, 1] }}
            
          >
            Your Dialysis Partner
          </motion.h1>
          <motion.p
            className="text-sm sm:text-xl md:text-2xl mt-4  text-gray-200"
            initial={{ x: -200, opacity: 0 }}
            animate={readyToAnimate ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.9, ease: [0.17, 0.55, 0.55, 1] }}
            // style={{
            //   transform: readyToAnimate ? "none" : "translateX(-200px)",
            //   opacity: readyToAnimate ? 1 : 0,
            //   transition:
            //     "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            // }}
          >
            Premium Kidney Care by Amarobby Clinic.
          </motion.p>
          <Link
            href="/appointment"
            style={{
              transform: readyToAnimate ? "none" : "translateX(-200px)",
              opacity: readyToAnimate ? 1 : 0,
              transition:
                "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
            }}
          >
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-lg sm:text-lg px-6 py-3 md:text-xl md:px-6 md:py-3 inline-block mt-4 sm:mt-6 md:mt-6 bg-white text-primary font-semibold rounded-full hover:bg-gray-100 shadow-md"
            >
              Book Appointment
            </motion.li>
          </Link>
        </div>
      </section>
      <section className="">
        <div className="relative max-w-6xl mx-auto text-center px-0 md:px-5 mdCombo mt-24">
        <video
          src="https://ghana.sahelhealth.com/images/videos/sahel-video.mp4"
          className="w-full object-cover md:rounded-2xl"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="absolute top-0 left-0 z-1 w-full h-full md:px-5">
            <div className="bg-black/40 w-full h-full md:rounded-2xl">

            </div>
        </div>
        <div className="absolute z-2 top-0 left-0 w-full flex justify-center">
          <div className="bg-white px-5 py-2 text-xl font-bold text-primary rounded-b-xl">
            OUR COMPANY
          </div>
        </div>

        <div className="absolute z-2 bottom-0 left-0 p-5 pl-5 md:pl-10 ">
          <ScrollAnimation animation="slideLeft" delay={100} distance={300} duration={2}>
            <div className="text-start">
            <p className="text-white">Welcome to</p>
            <p className="text-2xl font-bold text-primary">Amarobby Clinic</p>
            <p className="text-white max-w-100 text-sm">Ammarobby Renal Ghana Limited is a partnership between Sahel Health LLC, based in New York, and a local entrepreneur, Richard S. A. Arkutu, aimed at improving the private renal care sector in Ghana. </p>
            <Link
            href="/appointment"
            
          >
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-lg sm:text-lg px-6 mt-2 py-3 md:text-xl md:px-6 md:py-3 inline-block bg-white text-primary font-semibold rounded-2xl hover:bg-gray-100 shadow-md"
            >
              Read more
            </motion.li>
          </Link>

            </div>
            
          </ScrollAnimation>
          
        </div>
        </div>
        <div className="relative max-w-6xl mx-auto text-center px-5 mt-12 ">
          <ScrollAnimation animation="slideRight" delay={10} distance={300} duration={2}>
          <div className="bg-white py-2 text-xl font-bold text-primary rounded-b-xl smCombo">
            OUR COMPANY
          </div>
          </ScrollAnimation>
          
          <div className="sm:px-5">
            <ScrollAnimation animation="slideUp" delay={10} distance={300} duration={2}>
              <div className="w-full bg-primary mt-6 rounded-2xl p-5">   
                <h1 className="text-xl font-bold text-white">The <span className="text-black">Amarobby</span> Advantage</h1>

                <div className="grid grid-cols-2 gap-4 md:grid-cols-4 mt-6 sm:mt-4">
                  {
                    data.map((item) => (
                      <div key={item.id} className="w-full hover:scale-105 transition-all duration-300 ease-in-out rounded-2xl sm:p-3">
                        <div className="flex flex-col justify-start items-center h-full gap-3">
                          <item.image className="text-6xl text-white" />
                          <p className="text-white text-clamp-2 ellipsis">{item.title}</p>
                        </div>
                      </div>
                    ))
                  }
                </div>         
              </div>
            </ScrollAnimation>
          </div>
          </div>
        <div className="relative max-w-6xl mx-auto text-center px-0 md:px-5 smCombo flex-col mt-5">
        <ScrollAnimation animation="slideRight" delay={100} distance={200} duration={2}>
          <video
            src="https://ghana.sahelhealth.com/images/videos/sahel-video.mp4"
            className="w-full object-cover md:rounded-2xl"
            autoPlay
            loop
            muted
            playsInline
          />
        </ScrollAnimation>
        <div className=" z-2 bottom-0 left-0 p-5 pl-5 md:pl-10">
          <ScrollAnimation animation="slideLeft" delay={10} distance={200} duration={2} threshold={0.3}>
            <div className="text-start">
            <p className="text-black">Welcome to</p>
            <p className="text-2xl font-bold text-primary">Amarobby Clinic</p>
            <p className="text-black max-w-100 text-sm">Ammarobby Renal Ghana Limited is a partnership between Sahel Health LLC, based in New York, and a local entrepreneur, Richard S. A. Arkutu, aimed at improving the private renal care sector in Ghana. </p>
            <Link
            href="/appointment"
            
          >
            <motion.li
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              className="text-lg sm:text-lg px-6 mt-2 py-3 md:text-xl md:px-6 md:py-3 inline-block bg-white text-primary font-semibold rounded-2xl hover:bg-gray-100 shadow-md"
            >
              Read more
            </motion.li>
          </Link>

            </div>
            
          </ScrollAnimation>
          
        </div>
        </div>
         
      </section>
      <section className="bg-gray-50 py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex flex-col justify-center items-center gap-5">
            <p className="text-sm">What we do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-primary ">Our Services</h2>
            <hr className="w-36 h-0.5 mx-auto bg-primary border-0 rounded"/>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 text-left mt-12 px-5 md:px-0">

            {
              services.map((item, index) => (
                <ScrollAnimation key={item.id} animation="slideUp" delay={0.5} distance={100} duration={2}>
                <div className="relative group w-full aspect-square md:aspect-9/12  rounded-2xl overflow-hidden ">
                  <Image src={item.image} alt={item.title} className="w-full h-full object-cover rounded-2xl  group-hover:scale-105 transition-all duration-700 ease-in-out" />
                  <div className="absolute bottom-0 left-0 bg-gradient-to-b from-cyan-500/10 to-primary/90 w-full h-full">
                    <Link href={item.href} >
                    <li className="h-full w-full flex flex-col justify-end p-5 group-hover:scale-80 transition-all duration-700 ease-in-out">
                    <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                    <FaArrowRight className="text-white size-6"/>
                    </li>
                    </Link>
                  </div>
                  
                </div>
                </ScrollAnimation>
              ))
            }

          </div>

          
        </div>
      </section>
      <section className="bg-white py-20 px-6 md:px-20 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-primary mb-10">Our Impact</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
              <StatItem value={15} label="Years of Experience" />
              <StatItem value={500} label="Patients Treated" />
              <StatItem value={98} label="Patient Satisfaction" />
              <StatItem value={24} label="Support Available (hrs)" />
            </div>
      </div>
      </section>

      <section className="bg-gray-50 py-20 px-6 md:px-20 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-10">What Our Patients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="text-gray-700 italic mb-3">&ldquo;The level of care and attention I received was unmatched. Dr. Sekey truly cares about his patients.&rdquo;</p>
              <p className="font-semibold text-blue-800">- Michael A.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
              <p className="text-gray-700 italic mb-3">&ldquo;I was nervous about dialysis, but this clinic made it feel manageable and safe. So grateful!&rdquo;</p>
              <p className="font-semibold text-blue-800">- Grace O.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-200 pt-16 z-1">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between md:px-4 ">

        <ScrollAnimation animation="slideLeft" delay={100} distance={300} duration={2} threshold={0} className="w-full">
            <div className="relative w-full h-120 overflow-hidden flex justify-end">
              <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center pt-12 px-8">
                <p>Book an</p>
                <p className="text-3xl sm:text-5xl font-bold text-primary">Appointment for <br></br>Consultation</p>
                <p>with our expert Nephrologist</p>
                <Link
                  href="/appointment"
            
                >
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-lg sm:text-lg px-6 mt-2 py-3 md:text-xl md:px-6 md:py-3 inline-block bg-white text-primary font-semibold rounded-2xl hover:bg-gray-100 shadow-md"
                  >
                    Read more
                  </motion.li>
          </Link>
              </div>
              <div>
                <Image src={images.nurse} alt="nurse" width={500} height={500}/>
              </div>
            </div>
        </ScrollAnimation>
       
        <ScrollAnimation animation="slideRight" delay={100} distance={300} duration={2} threshold={0} className="w-full">
          <div className="flex-1 bg-primary text-white p-6 py-8 rounded-3xl w-full max-w-3xl shadow-lg mb-[-20px] lg:max-w-lg md:mt-12">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-3xl font-semibold">FAQs</h3>
                <Link
                    href="/appointment"
                  >
                  <motion.li
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                    className="text-lg sm:text-lg px-6 mt-2 py-3 md:text-xl md:px-6 md:py-3 inline-block bg-white text-primary font-semibold rounded-2xl hover:bg-gray-100 shadow-md"
                  >
                    View All
                  </motion.li>
                </Link>
              </div>
              <ul className="space-y-2">
                {[
                  "Am I awake while undergoing dialysis treatment?",
                  "How does dialysis work?",
                  "Can dialysis help my kidneys recover their function?",
                  "What is the typical duration of a hemodialysis treatment?",
                  "Are home-based dialysis treatments available at Amarobby?",
                  "What is the fee for seeing a kidney specialist?",
                ].map((question, index) => (
                  <li
                    key={index}
                    className={`p-2 rounded-lg ${
                      index % 2 === 0 ? "bg-primary/60" : ""
                    }`}
                  >
                    <span className="text-base text-black hover:text-white cursor-pointer">›  {question}</span>
                  </li>
                ))}
              </ul>
          </div>
        </ScrollAnimation>
        
      </div>
    </section>
     
      {/* <section className="bg-blue-900 py-20 px-6 md:px-20 lg:px-32 text-white ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Kidney Health?</h2>
          <p className="text-lg mb-8">Book a consultation today and experience world-class care tailored to you.</p>
          <Link href="/appointment">
            <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
              Book Appointment
            </button>
          </Link>
        </div>
      </section> */}
      <section className="bg-blue-200 text-white py-16 px-6 md:px-20 lg:px-32 z-0">         
      </section>
    </div>
  );
}
