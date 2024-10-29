import React from 'react';
import theme from '../images/themeviewer/artiste.png'
import arrow from '../images/arrow.png'
import responsive from '../images/responsive.svg'
import security from '../images/security.svg'
import agenda from '../images/agenda.svg'
import chat from '../images/chatia.svg'
import ContactSection from '../components/Contact/ContactSection';
import ImageSlider from '../components/ImageSlider';
import artiste from '../images/themeviewer/artiste.png'
import batiment from '../images/themeviewer/batiment.png'
import cosmetic from '../images/themeviewer/cosmetic.png'


const SurMesure: React.FC = () => {
      const images = [
    artiste,
    batiment,
    cosmetic,
  ];
  
  const titles = [
    'Couvreur/Zingueur',
    'Charpentier',
    'Maçon',
  ];
  return (
    <div>
         <div className='flex  mt-24'>
      <div className='w-[60%]'>
        <div>
          <span className='text-white text-lg  tracking-widest'>Faites la différence avec votre</span>
          <div className='flex gap-6 justify-start -mt-2 items-center w-full'>
            <h4 className='text-6xl text-[#F6D663]  font-bold '>SITE WEB</h4>
            <div className='shadow-xl w-fit  bg-[#4ABB28] font-bold rotate-6 text-xl p-2.5 px-12 text-white rounded-full'>
    SUR-MESURE
          </div>
          </div>
          
        </div>
                <p className='text-white/80 text-xs tracking-widest w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna ut dui accumsan blandit. Curabitur et neque vel nisi pharetra posuere sit amet vel ipsum. Sed eu leo mollis, consequat urna quis, aliquet lorem. Proin eget tortor turpis. Etiam euismod eleifend tincidunt. Suspendisse dignissim euismod nulla, in pretium dui feugiat vel. Aenean non pulvinar augue, ut varius risus. Suspendisse sed odio sed felis laoreet scelerisque eget sit amet metus. Quisque gravida fringilla diam nec faucibus.</p>

      </div>
                <ImageSlider images={images} titles={titles} />


      </div>
      <div className='bg-[#00000030] justify-around p-10 rounded-3xl mt-10 text-white flex items-center justify-center hover:bg-[#00000040] transition-all duration-300'>
        <div className=' text-center '>
          <img src={agenda} alt='' className='h-14 w-auto  mb-2 mx-auto' />
          <span className='text-[10px]'>Acessible de n'importe où<br />(mobile, tablette, ordinateur)</span>
        </div>
        <div className=' text-center'>
          <img src={security} alt='' className='h-14 w-auto mx-auto mb-2' />
          <span className='text-[10px]'>Acessible de n'importe où<br />(mobile, tablette, ordinateur)</span>
        </div>
        <div className=' text-center '>
          <img src={responsive} alt='' className='h-14 w-auto  mb-2 mx-auto' />
          <span className='text-[10px]'>Acessible de n'importe où<br />(mobile, tablette, ordinateur)</span>
        </div>
        <div className=' text-center '>
          <img src={chat} alt='' className='h-14 w-auto  mb-2 mx-auto' />
          <span className='text-[10px]'>Acessible de n'importe où<br />(mobile, tablette, ordinateur)</span>
        </div>
      </div>
      <div className='py-14 w-full'>
      <div className='flex gap-20 justify-center'>
          <div className='w-3/5'>
            <span className='text-white text-xl'>
      Votre vitrine en ligne accessible facilement.
    </span>
    <p className='text-white pt-2'>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </p>
  </div>
  <div className='w-2/5 flex text-lg text-white flex-col gap-4'>
            <div className='card-bg h-1/3 p-4 px-8'>
              <span className=''>Lorem ipsum dolor sit amet</span>
            </div>
    <div className='card-bg h-1/3 p-4 px-8'>
              <span className=''>Lorem ipsum dolor sit amet</span>
            </div>
      <div className='card-bg h-1/3 p-4 px-8'>
              <span className=''>Lorem ipsum dolor sit amet</span>
            </div>
  </div>
</div>




      </div>
      <ContactSection/>
    </div>
 
  );
};

export default SurMesure;