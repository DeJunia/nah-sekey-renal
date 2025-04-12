import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { images } from '@/constants'

const AboutPage = () => {
  return (
    <div className="min-h-screen pt-30 pb-32 px-6 md:px-16 lg:px-32 bg-white">
    {/* Header */}
    <div className="max-w-4xl mx-auto text-center mb-12">
      <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">About Us</h1>
      <p className="text-gray-600 text-lg">
        At Nah-Sekey Renal Institute, we are committed to redefining kidney care with empathy, precision, and global standards.
      </p>
    </div>

    {/* Mission and Vision */}
    <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-20">
      <div>
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to provide exceptional and personalized renal care to every patient by combining modern medical expertise, cutting-edge diagnostics, and a compassionate, human-centered approach.
        </p>
      </div>
      <div>
        <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Vision</h2>
        <p className="text-gray-700 leading-relaxed">
          To become a world-renowned center for kidney care in Africa, setting benchmarks in treatment excellence, medical innovation, and patient satisfaction.
        </p>
      </div>
    </div>

    {/* Image + Doctor Highlight */}
    <div className="flex flex-col md:flex-row gap-10 items-center max-w-6xl mx-auto mb-20">
      <div className="w-full md:w-1/2 h-80 relative rounded-xl overflow-hidden shadow-md">
        <Image
          src={images.doc}
          alt="Dr. Nah Sekey"
          fill
          className="object-cover object-top"
        />
      </div>
      <div className="w-full md:w-1/2">
        <h3 className="text-2xl font-bold text-blue-900 mb-2">Meet Dr. Nah Sekey</h3>
        <p className="text-gray-700 leading-relaxed">
          Dr. Nah Sekey is a highly respected nephrologist with over 15 years of experience in kidney medicine. He combines deep clinical expertise with genuine compassion to help patients manage and overcome complex renal challenges. His holistic approach has made him a trusted figure in the healthcare community across Ghana and beyond.
        </p>
      </div>
    </div>

    {/* Core Values */}
    <div className="max-w-6xl mx-auto mb-20">
      <h2 className="text-2xl font-bold text-blue-900 text-center mb-8">Our Core Values</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6">
        {[
          { title: "Compassion", text: "We treat every patient like family-with dignity and kindness." },
          { title: "Excellence", text: "We uphold the highest standards in every aspect of care." },
          { title: "Integrity", text: "We are transparent, ethical, and always put the patient first." },
          { title: "Innovation", text: "We embrace modern methods and continuous improvement." },
        ].map((value, index) => (
          <div key={index} className="bg-blue-50 p-6 rounded-lg shadow-sm text-center">
            <h4 className="text-lg font-semibold text-blue-800 mb-2">{value.title}</h4>
            <p className="text-gray-600 text-sm">{value.text}</p>
          </div>
        ))}
      </div>
    </div>

    {/* Call to Action */}
    <div className="text-center">
      <h3 className="text-2xl font-semibold text-blue-900 mb-4">Ready to Take Control of Your Kidney Health?</h3>
      <p className="text-gray-600 mb-6">
        We are here to guide you every step of the way. Book an appointment today.
      </p>
      <Link href="/appointment">
        <button className="bg-blue-900 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-800 transition">
          Book Appointment
        </button>
      </Link>
    </div>
  </div>
  )
}

export default AboutPage
