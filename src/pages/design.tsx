import React from 'react';
import { motion } from 'framer-motion';
import { Palette, Layout, Image, Video, Share, ArrowRight } from 'lucide-react';
import ContactSection from '../components/Contact/ContactSection';
import chart from '../images/themeviewer/cosmetic.png';
import { Paragraph, Subtitle, Title } from '../components/Typography';

const Design: React.FC = () => {
  const services = [
    {
      icon: Palette,
      title: 'Logo Design',
      description: 'Une identité visuelle unique et mémorable pour votre marque. Conception sur-mesure adaptée à votre vision.',
      color: '#F6D663',
      features: ['Recherche', 'Conception', 'Formats adaptés', 'Charte graphique']
    },
    {
      icon: Image,
      title: 'Réseaux Sociaux',
      description: 'Contenu visuel engageant pour dynamiser votre présence sur les réseaux sociaux.',
      color: '#2e0f84',
      features: ['Posts', 'Stories', 'Bannières', 'Templates']
    },
    {
      icon: Layout,
      title: 'Web Design',
      description: 'Interfaces web modernes et intuitives pour une expérience utilisateur optimale.',
      color: '#F6D663',
      features: ['Maquettes', 'Design système', 'Prototypes', 'UI/UX']
    }
  ];

  return (
    <div className="">
      {/* Hero Section */}
      <section className=" min-h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#2e0f84]/50 to-black" />
          <motion.div
            className="absolute inset-0"
            animate={{
              background: [
                "radial-gradient(circle at 50% 50%, #2e0f84 0%, transparent 50%)",
                "radial-gradient(circle at 60% 40%, #2e0f84 0%, transparent 50%)",
                "radial-gradient(circle at 40% 60%, #2e0f84 0%, transparent 50%)",
                "radial-gradient(circle at 50% 50%, #2e0f84 0%, transparent 50%)"
              ]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.div>

        <div className="relative w-full z-10 mx-auto px-4 py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-16"
          >
            <div className="flex-1 space-y-8">
              <motion.h1 
                className="text-6xl md:text-8xl leading-none font-bold text-white"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                Design<br />
                <span className="text-[#F6D663]">Créatif</span>
              </motion.h1>
              <motion.p 
                className="text-xl text-gray-300 max-w-xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                Transformez votre vision en réalité avec nos services de design créatifs et professionnels
              </motion.p>
              <motion.button
                className="px-8 py-3 bg-[#F6D663] text-[#2e0f84] rounded-full font-medium text-lg
                        hover:bg-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Découvrir nos services
              </motion.button>
            </div>
            <motion.div 
              className="flex-1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div 
                className='h-[450px] overflow-hidden'
                animate={{ 
                  y: [0, 20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              >
                <img 
                  src={chart} 
                  alt="Design" 
                  className="rounded-2xl w-full h-full object-cover over shadow-2xl"
                />
                <div className="absolute inset-0 rounded-2xl shadow-[0_0_100px_rgba(246,214,99,0.3)]" />
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 px-4">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Title className="text-4xl font-bold  mb-4">Nos Services Design</Title>
            <Subtitle className="text-gray-400">Découvrez notre gamme complète de services créatifs</Subtitle>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                className="bg-black/30 backdrop-blur-sm rounded-2xl p-8 hover:text-black hover:bg-[#F6D663] group transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <service.icon className="w-12 h-12 text-[#F6D663] mb-6 group-hover:text-black" />
                <h3 className="text-2xl font-bold group-hover:text-black text-white mb-4">{service.title}</h3>
                <Paragraph className="text-gray-400 group-hover:text-black pantonlight mb-6">{service.description}</Paragraph>
                <ul className="space-y-3">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex bg-gray-200/10 group-hover:bg-black/10  px-4 p-1 w-max rounded-full items-center group-hover:text-black text-gray-300">
                      <span className="w-1.5 h-1.5  bg-[#F6D663] group-hover:bg-black rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
          </section>
      {/* Portfolio Preview */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Notre Portfolio</h2>
            <p className="text-gray-400">Une sélection de nos meilleures réalisations</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                className="group relative aspect-square rounded-xl overflow-hidden"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <img 
                  src={chart} 
                  alt={`Portfolio ${item}`}
                  className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2e0f84] to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-2">Projet {item}</h3>
                    <p className="text-gray-200 mb-4">Description courte du projet</p>
                    <button className="px-6 py-2 rounded-full bg-[#F6D663] text-[#2e0f84] font-medium hover:bg-white transition-colors duration-300">
                      Voir plus
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-white mb-4">Notre Processus</h2>
            <p className="text-gray-400">Comment nous donnons vie à vos projets</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {['Découverte', 'Conception', 'Création', 'Livraison'].map((step, index) => (
              <motion.div
                key={step}
                className="text-center group hover:scale-105 transition-transform duration-300"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="w-16 h-16 rounded-full bg-[#F6D663] flex items-center justify-center text-[#2e0f84] text-2xl font-bold mx-auto mb-6 group-hover:shadow-[0_0_20px_rgba(246,214,99,0.3)] transition-shadow duration-300">
                  {index + 1}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step}</h3>
                <p className="text-gray-400">
                  {index === 0 && "Analyse de vos besoins et objectifs"}
                  {index === 1 && "Élaboration des concepts créatifs"}
                  {index === 2 && "Réalisation de votre projet"}
                  {index === 3 && "Finalisation et optimisation"}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section avec une transition douce */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <ContactSection />
      </motion.div>
    </div>
  );
};

export default Design;