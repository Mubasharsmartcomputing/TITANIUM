import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next'; // 1. Import hook

// --- IMPORT ICONS ---
import { BsCheckCircle, BsPlayCircle, BsEmojiSmile, BsJournalRichtext, BsHeadset } from 'react-icons/bs';
import { FaUsers, FaTwitter, FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

// --- IMPORT IMAGES ---
import aboutImg from '../assets/img/about.png';

// 2. Data for non-translatable content. The order MUST match the JSON.
// const staticTeamData = [
//   { image: team1, socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'twitter', icon: FaTwitter, url: '#'}] },
//   { image: team2, socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'facebook', icon: FaFacebookF, url: '#'}] },
//   { image: team3, socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'instagram', icon: FaInstagram, url: '#'}] },
//   { image: team4, socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'twitter', icon: FaTwitter, url: '#'}] },
//   { image: team5, socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'facebook', icon: FaFacebookF, url: '#'}] },
//   { image: team6, socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'instagram', icon: FaInstagram, url: '#'}] },
// ];


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



const AboutComponent = () => {
    const { t } = useTranslation(); // 3. Initialize hook

       const storyListItems = t('pages.about.story.listItems', { returnObjects: true });

  return (
    <>
      {/* Our Story Section */}
      <section id="about" className="py-16 bg-gray-200 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="relative">
            <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:left-0 lg:w-1/2">
                <motion.img 
                    src={aboutImg} alt="Construction site" 
                    className="w-full h-full object-cover rounded-4xl shadow-xl " 
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
                className="bg-white p-8 lg:p-12 rounded-4xl shadow-xl"
              >
                {/* 6. Use translated text */}
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{t('pages.about.story.title')}</h2>
                <div className="our-story">
                  <h3 className="text-[#B49562] font-bold text-2xl mb-3">{t('pages.about.story.subtitle')}</h3>
                  <p className="text-gray-600 mb-4">{t('pages.about.story.paragraph')}</p>
                  <ul className="space-y-2 mb-6">
                    {storyListItems.map((item, index) => (
                      <li key={index} className="flex items-start"><BsCheckCircle className="text-[#B49562] mr-3 mt-1 flex-shrink-0" /><span>{item}</span></li>
                    ))}
                  </ul>
                  {/*  */}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      
    </>
  );
};

export default AboutComponent;
