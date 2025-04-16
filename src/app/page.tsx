"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { images } from "@/constants";
import Link from "next/link";
import { motion, useInView, useAnimation } from "framer-motion";
import ScrollAnimation from "@/components/scrollAnimations";

const StatItem = ({ value, label }: { value: number; label: string }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const animateCount = async () => {
      await controls.start({ opacity: 1 });
      for (let i = 0; i <= value; i++) {
        setCount(i);
        await new Promise(resolve => setTimeout(resolve, 20));
      }
    };
    
    animateCount();
  }, [value, controls]);

  return (
    <div className="text-center">
      <motion.h3
        className="text-3xl font-bold text-blue-900"
        initial={{ opacity: 0 }}
        animate={controls}
      >
        {count.toFixed(0)}
        {label.includes("%") || label.includes("/") ? "" : "+"}
      </motion.h3>
      <p className="text-sm mt-1 text-blue-900">{label}</p>
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
      image: images.img,
      title: "Expert-Led Care",
      contnet: "Led by Dr. Nah Sekey, a top nephrologist dedicated to excellence in kidney health.",
    },
    {
      id: "2",
      image: images.img1,
      title: "Advanced Technology",
      contnet: "Equipped with modern diagnostics and renal treatment tools for precise, effective care.",
    },
    {
      id: "3",
      image: images.img2,
      title: "Personalized Treatment",
      contnet: "Every patient receives a tailored plan, combining medical science with holistic support.",
    },
    {
      id: "4",
      image: images.img3,
      title: "Patient-Centered Mission",
      contnet: "We are committed to compassionate care, improving quality of life at every stage of kidney health.",
    }
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
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center"
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
              className="text-lg sm:text-lg px-6 py-3 md:text-xl md:px-6 md:py-3 inline-block mt-4 sm:mt-6 md:mt-6 bg-white text-primary font-semibold rounded-2xl hover:bg-gray-100 shadow-md"
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
          <ScrollAnimation animation="slideLeft" delay={500} distance={400} duration={2} >
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
          <div className="bg-white py-2 text-xl font-bold text-primary rounded-b-xl smCombo">
            OUR COMPANY
          </div>
            <ScrollAnimation animation="slideUp" delay={600} distance={600} duration={3}>
            <div className="w-full h-20 bg-primary mt-6 rounded-2xl">            
            </div>
            </ScrollAnimation>
          </div>
        <div className="relative max-w-6xl mx-auto text-center px-0 md:px-5 smCombo flex-col mt-5">
        <div className=" z-2 top-0 left-0 w-full flex justify-center">
          
        </div>
        <ScrollAnimation animation="slideRight" delay={600} distance={600} duration={3}>
        <video
          src="https://ghana.sahelhealth.com/images/videos/sahel-video.mp4"
          className="w-full object-cover rounded-t-xl md:rounded-2xl"
          autoPlay
          loop
          muted
          playsInline
        />
        </ScrollAnimation>
        
        
        

        <div className=" z-2 bottom-0 left-0 p-5 pl-5 md:pl-10">
          <ScrollAnimation animation="slideLeft" delay={500} distance={400} duration={2} >
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
          {/* <h2 className="text-3xl md:text-4xl font-bold text-primary mb-10">OUR COMPANY</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4">
              {
                data.map((item, index) => (
                  <div className=" border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden" key={index} >
                    <Image src={item.image} alt="img" className="w-full h-40 object-cover"/>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold text-blue-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">
                        {item.contnet}
                      </p>
                    </div>              
                  </div>
                ))
              }
            </div>
            <p className="mt-8 sm:mt-10 md:mt-14 text-gray-600 text-center">At Sekey Renal Institute, we are committed to delivering advanced, patient-centered care for kidney health. Led by renowned nephrologist Dr. Nah Sekey, our institute combines clinical expertise with state-of-the-art technology to ensure every patient receives the highest standard of diagnosis, treatment, and support. Your health is our priority always.</p>
            <div className="mt-10">
            <Link href="/about">
              <button className="text-sm sm:text-base bg-blue-900 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-blue-800 transition duration-300">
                About Us
              </button>
            </Link>
          </div> */}

        </div>
         
      </section>
      <section className="bg-gray-50 py-16 px-6 md:px-20 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-10">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            
            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Kidney Disease Diagnosis</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive evaluation of kidney function using the latest diagnostic tools and lab testing.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Dialysis Services</h3>
              <p className="text-gray-600 text-sm">
                State-of-the-art hemodialysis and peritoneal dialysis therapies in a comfortable, safe environment.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition duration-300">
              <h3 className="text-xl font-semibold text-blue-800 mb-2">Chronic Kidney Care</h3>
              <p className="text-gray-600 text-sm">
                Personalized long-term care plans for patients managing chronic kidney disease (CKD).
              </p>
            </div>

          </div>

          <div className="mt-10">
            <Link href="/serve">
              <button className="text-sm sm:text-base bg-blue-900 text-white font-medium px-6 py-3 rounded-full shadow hover:bg-blue-800 transition duration-300">
                View All Services
              </button>
            </Link>
          </div>
        </div>
      </section>
      <section className="bg-white py-20 px-6 md:px-20 lg:px-32">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 flex justify-center">
            <Image
              src={images.doc} // Replace with actual image
              alt="Dr. Nah Sekey"
              width={500}
              height={500}
              className="rounded-xl shadow-md object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-blue-900 mb-4 text-center">Meet Dr. Nah Sekey</h2>
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              Dr. Nah Sekey is a renowned nephrologist with over 15 years of experience in kidney care and internal medicine. His passion for personalized treatment and dedication to patient wellbeing led him to found the Nah-Sekey Renal Institute — a clinic built on trust, innovation, and excellence in kidney health.
            </p>
            <p className="text-gray-700 mt-4 text-sm italic">
            &ldquo;I believe in delivering care that sees the whole person - not just the disease.&rdquo;
            </p>
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
      <section className="bg-white py-20 px-6 md:px-20 lg:px-32">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-blue-900 mb-10">Our Impact</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-8">
              <StatItem value={15} label="Years of Experience" />
              <StatItem value={500} label="Patients Treated" />
              <StatItem value={98} label="Patient Satisfaction" />
              <StatItem value={24} label="Support Available (hrs)" />
            </div>
      </div>
      </section>
      <section className="bg-blue-900 py-20 px-6 md:px-20 lg:px-32 text-white ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Control of Your Kidney Health?</h2>
          <p className="text-lg mb-8">Book a consultation today and experience world-class care tailored to you.</p>
          <Link href="/appointment">
            <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
              Book Appointment
            </button>
          </Link>
        </div>
      </section>
      <section className="bg-blue-900 text-white py-16 px-6 md:px-20 lg:px-32">         
      </section>
    </div>
  );
}
