"use client";

import React, { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface ServiceItem {
  title: string;
  description: string;
  services?: string[];
  comingSoon?: boolean;
  image: string;
  bgColor?: string;
}

const services: ServiceItem[] = [
  {
    title: "Salesforce Services",
    description:
      "Comprehensive Salesforce solutions tailored to streamline your sales, marketing, and support processes.",
    services: [
      "Sales Cloud Implementation",
      "Service Cloud Setup",
      "Marketing Cloud Automation",
      "Custom Salesforce Apps",
      "Integration Services",
    ],
    image: "https://via.placeholder.com/500x300?text=Salesforce",
    bgColor: "from-blue-50 to-white", // updated gradient
  },
  {
    title: "AI Services",
    description:
      "Intelligent AI solutions to help your business automate tasks, predict outcomes, and gain actionable insights.",
    services: [
      "Custom AI Model Development",
      "AI Chatbots",
      "Predictive Analytics",
      "Computer Vision Solutions",
      "Natural Language Processing",
    ],
    image: "https://via.placeholder.com/500x300?text=AI+Services",
    bgColor: "from-blue-50 to-white", // updated gradient
  },
  {
    title: "Automation Services",
    description:
      "End-to-end automation solutions to optimize workflows, reduce manual effort, and increase operational efficiency.",
    services: [
      "HR Process Automation",
      "Digital Marketing Automation",
      "Finance & Accounting Automation",
      "Customer Support Automation",
      "Workflow Automation Tools",
    ],
    image: "https://via.placeholder.com/500x300?text=Automation",
    bgColor: "from-blue-50 to-white", // updated gradient
  },
];

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: "easeOut" },
  }),
};

const ServiceDetails: React.FC = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: false, margin: "-50px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) controls.start("visible");
  }, [isInView, controls]);

  return (
    <section
      ref={ref}
      className="bg-gradient-to-b from-blue-50 via-blue-100 to-white py-28 px-6 md:px-12 font-sans"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <motion.h1
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          custom={0}
          className="text-5xl md:text-6xl font-bold text-center text-[#0D3B66] mb-8"
        >
          Our <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Services</span>
        </motion.h1>

        {/* Intro */}
        <motion.p
          initial="hidden"
          animate={controls}
          variants={fadeInUp}
          custom={0.2}
          className="text-center text-gray-700 max-w-4xl mx-auto text-lg md:text-xl mb-24 leading-relaxed"
        >
          Discover how Hajana Technologies is shaping the digital future with
          advanced AI, Salesforce, and automation solutions to streamline
          processes and drive growth.
        </motion.p>

        <div className="flex flex-col gap-28">
          {services.map((service, index) => {
            const delayBase = index * 0.2;
            const isReverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial="hidden"
                animate={controls}
                variants={fadeInUp}
                custom={delayBase}
                className={`flex flex-col md:flex-row items-center gap-12 md:gap-16 ${
                  isReverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Box */}
                <motion.div
                  variants={fadeInUp}
                  custom={delayBase + 0.1}
                  className={`flex-1 rounded-3xl p-8 md:p-10 shadow-xl transition-transform duration-500 hover:scale-[1.02] flex flex-col md:flex-row gap-8 bg-gradient-to-r ${service.bgColor}`}
                >
                  {/* Text Content */}
                  <div className="flex-1">
                    <h2 className="text-3xl md:text-4xl font-semibold text-[#0D3B66] mb-5">
                      {service.title}
                    </h2>
                    <p className="text-gray-800 text-lg md:text-xl mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {service.comingSoon ? (
                      <p className="text-blue-800 font-medium text-lg">
                        Coming Soon
                      </p>
                    ) : (
                      <ul className="space-y-3">
                        {service.services?.map((item, i) => (
                          <motion.button
                            key={i}
                            whileHover={{
                              scale: 1.05,
                              backgroundColor: "rgba(13,59,102,0.1)",
                            }}
                            transition={{ duration: 0.3 }}
                            onClick={() =>
                              (window.location.href = `/services/${item
                                .toLowerCase()
                                .replace(/\s+/g, "-")}`)
                            }
                            className="text-gray-900 bg-white border border-gray-200 hover:border-[#0D3B66] rounded-2xl py-3 px-6 shadow-sm cursor-pointer text-lg md:text-base w-full text-left"
                          >
                            {item}
                          </motion.button>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* Image */}
                  <div className="flex-1">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover rounded-2xl shadow-md"
                    />
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;