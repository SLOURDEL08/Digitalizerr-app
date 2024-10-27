import React, { useState, useRef } from 'react';
import starProcessus from '../images/starprocessus.png';
import starImage from '../images/star.png';
import arrowRight from '../images/arrow.png';
import { ChevronRight, CheckCircle2, Star, Zap, Shield, Globe2, Search, Share2, Bell, BarChart4, Settings, Cloud, Paintbrush, Sparkles, MessageCircle, Lock, ChartNoAxesCombined } from 'lucide-react';
import chart from '../images/chart.png'
import puzzle from '../images/plug.png'
import reviewpouce from '../images/reviewpouce.png'
import bubble from '../images/bubble.png'
import { Paragraph, Title } from './Typography';


interface Plugin {
  id: number;
  name: string;
  description: string;
  icon: React.ReactNode;
  category: string;
  popularity: number;
}

const plugins: Plugin[] = [
  {
    id: 1,
    name: "Advanced Analytics Pro",
    description: "Suivez vos performances en temps réel avec des analyses détaillées et des rapports personnalisés.",
    icon: <ChartNoAxesCombined className='w-6 h-6' />,
    category: "Boutique",
    popularity: 98
  },
  {
    id: 2,
    name: "Security Shield Plus",
    description: "Protection avancée contre les menaces et système de surveillance 24/7.",
    icon: <Shield className="w-6 h-6" />,
    category: "Mailing",
    popularity: 95
  },
  {
    id: 3,
    name: "SEO Booster Elite",
    description: "Optimisez votre référencement avec des outils professionnels et des suggestions intelligentes.",
    icon: <Search className="w-6 h-6" />,
    category: "Tracking",
    popularity: 92
  },
  {
    id: 4,
    name: "Social Media Hub",
    description: "Intégrez tous vos réseaux sociaux et gérez votre présence en ligne depuis une seule interface.",
    icon: <Share2 className="w-6 h-6" />,
    category: "Mailing",
    popularity: 90
    },
   {
    id: 5,
    name: "Social Media Hub",
    description: "Intégrez tous vos réseaux sociaux et gérez votre présence en ligne depuis une seule interface.",
    icon: <Share2 className="w-6 h-6" />,
    category: "Réservation",
    popularity: 90
  },
];

const PluginSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [activePluginIndex, setActivePluginIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const categories = ['all', ...Array.from(new Set(plugins.map(plugin => plugin.category)))];

  const filteredPlugins = plugins.filter(plugin => 
    selectedCategory === 'all' || plugin.category === selectedCategory
  );

  const ghostSteps = Array(3).fill(null);

  const CARD_WIDTH = 400;
  const GAP_WIDTH = 32;

  const scrollToPlugin = (index: number) => {
    if (scrollContainerRef.current) {
      const scrollPosition = index * (CARD_WIDTH + GAP_WIDTH);
      scrollContainerRef.current.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const handlePluginClick = (index: number) => {
    setActivePluginIndex(index);
    scrollToPlugin(index);
  };

  const handleNextPlugin = () => {
    const nextIndex = (activePluginIndex + 1) % filteredPlugins.length;
    setActivePluginIndex(nextIndex);
    scrollToPlugin(nextIndex);
  };

  return (
    <div className=" text-white max-md:py-20 py-40">
      <div className="relative mx-auto">
        {/* Header Section */}
        <div className="text-center w-4/5 z-30 mb-10 max-lg:mb-4 relative mx-auto ">
          <img 
            src={puzzle} 
            alt="star" 
            className="absolute w-24 -right-14 max-md:w-14 max-md:-right-0 max-md:top-10 -top-14" 
          />

          <Title className='text-white mb-8 max-md:mb-8'>Plugins Premium</Title>
          <Paragraph className="mb-4  max-md:mb-10 leading-loose">
            Enrichissez votre site avec notre collection de plugins premium soigneusement sélectionnés pour optimiser chaque aspect de votre présence en ligne.
          </Paragraph>
        </div>

        <div className='gap-6 sm:gap-8 lg:gap-10 space-y-10 max-md:space-y-12  w-full'>
          {/* Categories */}
          <div className="w-full !z-50 px-4 sm:px-0">
            <div className="overflow-x-auto noscrollbar -mx-4 sm:mx-0 px-4 sm:px-0">
              <div className="flex max-lg:gap-4 noscrollbar h-full justify-start sm:justify-center gap-6   min-w-max sm:min-w-0">
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setActivePluginIndex(0);
                      scrollToPlugin(0);
                    }}
                    className={`px-6  py-2.5 max-lg:px-4  text-left rounded-lg transition-all whitespace-nowrap ${
                      selectedCategory === category
                        ? 'bg-[#F6D663] text-black'
                        : 'bg-[#00000020] hover:bg-[#ffffff10]'
                    }`}
                  >
                    <span className="text-base  max-lg:text-sm">
                      {category.charAt(0).toUpperCase() + category.slice(1)}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Plugins Horizontal Scroll */}
          <div className="w-full relative px-4 sm:px-0">
            <div 
              ref={scrollContainerRef}
              className="flex overflow-x-hidden scroll-smooth -mx-4 sm:mx-0"
            >
              <div className="flex gap-4 sm:gap-6 lg:gap-8 px-4 sm:px-0">
                {filteredPlugins.map((plugin, index) => (
                  <div
                    key={plugin.id}
                    className={`w-[280px] sm:w-[340px] lg:w-[400px] transition-transform duration-300 ${
                      activePluginIndex === index ? 'scale-100' : 'scale-95'
                    }`}
                    onClick={() => handlePluginClick(index)}
                  >
                    <div
                      className={`min-h-[200px] sm:min-h-[220px] flex flex-col gap-4 justify-between rounded-xl p-4 sm:p-6 transition-all group cursor-pointer relative overflow-hidden
                        ${activePluginIndex === index 
                          ? 'bg-[#F6D663] text-black' 
                          : 'bg-[#00000020] hover:bg-[#00000040]'
                        }`}
                    >
                      <div className='space-y-3 sm:space-y-4'>
                        <div className="flex items-center gap-3 sm:gap-4">
                          <div className={`p-2 sm:p-3 rounded-xl ${
                            activePluginIndex === index 
                              ? 'bg-black text-[#F6D663]' 
                              : 'bg-[#F6D663] text-black'
                          }`}>
                            {plugin.icon}
                          </div>
                          <h3 className="text-lg sm:text-xl font-semibold">{plugin.name}</h3>
                        </div>
                        <p className={`text-sm sm:text-base font-rubik font-light ${
                          activePluginIndex === index 
                            ? 'text-black' 
                            : 'text-gray-300'
                        }`}>
                          {plugin.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Ghost Steps */}
                {ghostSteps.map((_, index) => (
                  <div
                    key={`ghost-${index}`}
                    className="w-[280px] sm:w-[340px] lg:w-[400px] opacity-0 pointer-events-none"
                  >
                    <div className="min-h-[200px] sm:min-h-[220px] rounded-xl"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation Arrow */}
            <button
              onClick={handleNextPlugin}
              className="absolute -right-2 sm:right-4 z-30 top-1/2 pb-4 transform -translate-y-1/2 rounded-full hover:scale-110 transition-transform"
            >
              <img 
                src={arrowRight} 
                className='w-16 sm:w-20 lg:w-24 hover:opacity-100 opacity-60 scale-95 hover:scale-105 invert transition-transform duration-300'
                alt=''
              />
            </button>
          </div>
        </div>
        <div className="absolute pointer-events-none inset-0 bg-gradient-to-r from-transparent from-60% to-[#2e0f84] to-100% z-10" />
      </div>
    </div>
  );
};

export default PluginSection;