import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

// --- IMPORT ICONS ---
import { BsCheckCircle, BsPlayCircle, BsEmojiSmile, BsJournalRichtext, BsHeadset } from 'react-icons/bs';
import { FaUsers, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// --- IMPORT IMAGES ---
import aboutImg from '../assets/img/about.jpg';
import team1 from '../assets/img/team/team-1.jpg';
import team2 from '../assets/img/team/team-2.jpg';
import team3 from '../assets/img/team/team-3.jpg';
import team4 from '../assets/img/team/team-4.jpg';
import team5 from '../assets/img/team/team-5.jpg';
import team6 from '../assets/img/team/team-6.jpg';

// --- Reusable Animated Stat Item ---
const StatItem = ({ icon, end, label, color }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });
  return (
    <div ref={ref} className="flex items-center">
      <div className={`text-4xl ${color} flex-shrink-0`}>{icon}</div>
      <div className="ml-4">
        {inView && <CountUp end={end} duration={2.5} suffix={label.includes('%') || label.includes('+') ? '' : ''} prefix={label.includes('+') ? '+' : ''} className="text-4xl font-bold text-gray-800" />}
        <p className="text-gray-600">{label}</p>
      </div>
    </div>
  );
};

// --- Reusable Team Member Card ---
const TeamMember = ({ image, name, role, description, socials }) => (
    <motion.div 
        className="text-center group"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5 }}
    >
        <div className="relative overflow-hidden rounded-lg mb-6 shadow-lg">
            <img src={image} alt={name} className="w-full h-auto" />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                {socials.map(social => (
                    <a key={social.name} href={social.url} className="text-white hover:text-red-400 transition-colors p-2 bg-black/20 rounded-full">
                        <social.icon size={20} />
                    </a>
                ))}
            </div>
        </div>
        <h4 className="text-xl font-bold text-gray-800">{name}</h4>
        <span className="block text-sm text-gray-500 mb-2">{role}</span>
        <p className="text-sm text-gray-600 mt-2 px-4">{description}</p>
    </motion.div>
);

const AboutComponent = () => {
    const teamData = [
      { image: team1, name: 'Andreas Keller', role: 'Founder & Lead Civil Engineer', description: 'With 15 years of field-proven experience, Andreas leads every project with precision and a commitment to excellence.', socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'twitter', icon: FaTwitter, url: '#'}] },
      { image: team2, name: 'Lena Bauer', role: 'Project Coordinator', description: 'Lena ensures seamless communication and coordination between all stakeholders, from subcontractors to authorities.', socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'facebook', icon: FaFacebookF, url: '#'}] },
      { image: team3, name: 'Markus Wolf', role: 'Site Manager', description: 'Markus expertly oversees all on-site operations, guaranteeing quality, safety, and adherence to the project schedule.', socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'instagram', icon: FaInstagram, url: '#'}] },
      { image: team4, name: 'Anja Weber', role: 'Lead Architect', description: 'Anja translates vision into reality, ensuring architectural integrity and design excellence throughout the build process.', socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'twitter', icon: FaTwitter, url: '#'}] },
      { image: team5, name: 'Stefan Koch', role: 'Financial Controller', description: 'Stefan manages project finances with meticulous care, providing transparent budget tracking and invoice control.', socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'facebook', icon: FaFacebookF, url: '#'}] },
      { image: team6, name: 'Jonas Richter', role: 'Safety & Compliance Officer', description: 'Jonas is dedicated to maintaining the highest safety standards and ensuring full regulatory compliance on every job site.', socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'instagram', icon: FaInstagram, url: '#'}] },
  ];

  return (
    <>
      {/* Our Story Section */}
      <section id="about" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                <motion.img 
                    src={aboutImg} alt="Construction site" 
                    className="w-full h-full object-cover rounded-lg shadow-xl" 
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7 }}
                />
            </div>
            <div className="relative lg:ml-auto lg:w-1/2 lg:pl-12">
              <motion.div 
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="bg-white p-8 lg:p-12 shadow-2xl rounded-lg"
              >
                <h2 className="text-3xl font-bold text-gray-800 mb-4">Forged by 15 Years of Engineering Excellence.</h2>
                <div className="our-story">
                  <h3 className="text-red-500 font-bold text-2xl mb-3">Our Story</h3>
                  <p className="text-gray-600 mb-4">I founded Titanium Engineering Project Management with a single, clear vision: to be the strongest link in the construction chain. The name "Titanium" represents not only strength but also the high-performance, corrosion-resistant nature of our management process. We don't just oversee projects; we protect them.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start"><BsCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" /><span>Unwavering commitment to project timelines.</span></li>
                    <li className="flex items-start"><BsCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" /><span>Transparent communication with all stakeholders.</span></li>
                    <li className="flex items-start"><BsCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" /><span>Meticulous budget and quality control.</span></li>
                  </ul>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-red-600 hover:text-red-800 transition-colors group">
                    <BsPlayCircle className="text-4xl mr-3" />
                    <span className="group-hover:underline">Watch Our Company Video</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Counter Section */}
      <section id="stats-counter" className="py-16 lg:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-gray-800">Our Track Record</h2>
            <p className="text-lg text-gray-600 mt-2">Proven results and a commitment to excellence.</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatItem icon={<BsEmojiSmile />} end={15} label="Years of Experience" color="text-red-500" />
            <StatItem icon={<BsJournalRichtext />} end={50} label="Projects Completed+" color="text-red-500" />
            <StatItem icon={<BsHeadset />} end={99} label="Client Satisfaction (%)" color="text-red-500" />
            <StatItem icon={<FaUsers />} end={6} label="Core Team Members" color="text-red-500" />
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-bold text-gray-800">Meet Our Team</h2>
                <p className="text-lg text-gray-600 mt-2">The dedicated professionals behind our success.</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
                {teamData.map((member, index) => <TeamMember key={index} {...member} />)}
            </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;