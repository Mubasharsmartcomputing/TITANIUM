import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from 'react-i18next'; // 1. Import hook

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

// 2. Data for non-translatable content. The order MUST match the JSON.
const staticTeamData = [
  { image: team1, socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'twitter', icon: FaTwitter, url: '#'}] },
  { image: team2, socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'facebook', icon: FaFacebookF, url: '#'}] },
  { image: team3, socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'instagram', icon: FaInstagram, url: '#'}] },
  { image: team4, socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'twitter', icon: FaTwitter, url: '#'}] },
  { image: team5, socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'facebook', icon: FaFacebookF, url: '#'}] },
  { image: team6, socials: [{name: 'linkedin', icon: FaLinkedinIn, url: '#'}, {name: 'instagram', icon: FaInstagram, url: '#'}] },
];


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
            <img src={image} alt={name} className="w-full h-auto rounded-4xl shadow-xl " />
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-4xl shadow-xl  flex items-center justify-center space-x-4">
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
    const { t } = useTranslation(); // 3. Initialize hook

    // 4. Dynamically create team data by merging static info with translated text
    const teamData = t('pages.about.team.members', { returnObjects: true }).map((member, index) => ({
      ...staticTeamData[index], // Gets image, socials
      ...member, // Gets name, role, description from JSON
    }));

    // 5. Get the list items for the story section
    const storyListItems = t('pages.about.story.listItems', { returnObjects: true });

  return (
    <>
      {/* Our Story Section */}
      <section id="about" className="py-16 lg:py-24">
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
                  <h3 className="text-red-500 font-bold text-2xl mb-3">{t('pages.about.story.subtitle')}</h3>
                  <p className="text-gray-600 mb-4">{t('pages.about.story.paragraph')}</p>
                  <ul className="space-y-2 mb-6">
                    {storyListItems.map((item, index) => (
                      <li key={index} className="flex items-start"><BsCheckCircle className="text-red-500 mr-3 mt-1 flex-shrink-0" /><span>{item}</span></li>
                    ))}
                  </ul>
                  <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center font-bold text-red-600 hover:text-red-800 transition-colors group">
                    <BsPlayCircle className="text-4xl mr-3" />
                    <span className="group-hover:underline">{t('pages.about.story.videoLinkText')}</span>
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
            <h2 className="text-4xl font-bold text-gray-800">{t('pages.about.stats.title')}</h2>
            <p className="text-lg text-gray-600 mt-2">{t('pages.about.stats.subtitle')}</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatItem icon={<BsEmojiSmile />} end={15} label={t('pages.about.stats.items.experience')} color="text-red-500" />
            <StatItem icon={<BsJournalRichtext />} end={50} label={t('pages.about.stats.items.projects')} color="text-red-500" />
            <StatItem icon={<BsHeadset />} end={99} label={t('pages.about.stats.items.satisfaction')} color="text-red-500" />
            <StatItem icon={<FaUsers />} end={6} label={t('pages.about.stats.items.teamMembers')} color="text-red-500" />
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section id="team" className="py-16 lg:py-24 ">
        <div className="container mx-auto px-4">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
                <h2 className="text-4xl font-bold text-gray-800">{t('pages.about.team.title')}</h2>
                <p className="text-lg text-gray-600 mt-2">{t('pages.about.team.subtitle')}</p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-8 lg:gap-12">
                {/* 7. Map over the new merged and translated data */}
                {teamData.map((member, index) => <TeamMember key={index} {...member} />)}
            </div>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;