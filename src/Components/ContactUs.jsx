import { BiLogoInstagramAlt } from "react-icons/bi";
import { FaEnvelope, FaFacebook, FaPhone, FaXTwitter } from "react-icons/fa6";
import { TbWorld } from "react-icons/tb";
import { RiMapPin2Fill } from "react-icons/ri";
import { useContext } from "react";
import { ContactForm } from "./ContactForm";
import { UserContext } from "../context/userContext";

export const ContactUs = () => {
  const { resumeData } = useContext(UserContext);

  if (!resumeData) {
    return (
      <div className="text-center py-10 text-neutral-500">Loading contact details...</div>
    );
  }

  const { contact_info, name } = resumeData;

  const contactDetails = [
    {
      icon: <RiMapPin2Fill color="#FA614F" size={30} />,
      heading: "Address",
      detail: contact_info?.address || "Not Provided",
    },
    {
      icon: <FaEnvelope color="#FA614F" size={30} />,
      heading: "Email",
      detail: contact_info?.email || "Not Provided",
    },
    {
      icon: <FaPhone color="#FA614F" size={30} />,
      heading: "Phone Number",
      detail: contact_info?.phone || "Not Provided",
    },
    {
      icon: <TbWorld color="#FA614F" size={30} />,
      heading: "Website",
      detail: contact_info?.portfolio || "www.myportfolio.com",
    },
  ];

  return (
    <div className="text-white bg-neutral-950 py-16 px-6 md:px-12 lg:px-24 flex flex-col items-center">
      <div className="max-w-5xl w-full space-y-10">
        {/* --- Header --- */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold">
            Contact <span className="text-primary">Us</span>
          </h1>
          <p className="text-neutral-400">
            Get in touch with <span className="text-primary">{name}</span> for
            collaboration or opportunities.
          </p>
        </div>

        {/* --- Contact Info --- */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {contactDetails.map((curr, index) => (
            <div
              key={index}
              className="bg-neutral-900 rounded-2xl p-5 flex items-start gap-4 hover:bg-neutral-800 transition-all"
            >
              <div>{curr.icon}</div>
              <div>
                <p className="text-sm text-neutral-400">{curr.heading}</p>
                <p className="text-base font-medium">{curr.detail}</p>
              </div>
            </div>
          ))}
        </div>

        {/* --- Social Links --- */}
        <div className="text-center mt-10">
          <p className="text-neutral-400 mb-3">Share on Social Media</p>
          <div className="flex justify-center gap-5 text-white">
            <FaFacebook size={24} className="hover:text-primary cursor-pointer" />
            <BiLogoInstagramAlt size={24} className="hover:text-primary cursor-pointer" />
            <FaXTwitter size={24} className="hover:text-primary cursor-pointer" />
            <TbWorld size={24} className="hover:text-primary cursor-pointer" />
          </div>
        </div>

        {/* --- Contact Form --- */}
        <div className="mt-12">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};
