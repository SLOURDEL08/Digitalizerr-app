import React from 'react';
import responsive from '../images/responsive.svg'
import security from '../images/security.svg'
import agenda from '../images/agenda.svg'
import chat from '../images/chatia.svg'
import ContactSection from '../components/ContactSection';
import ImageSlider from '../components/ImageSlider';
import artiste from '../images/themeviewer/artiste.png'
import batiment from '../images/themeviewer/batiment.png'
import cosmetic from '../images/themeviewer/cosmetic.png'
import PluginSection from '../components/PluginSection';
import { Paragraph, Subtitle, Title } from '../components/Typography';



const Boutique: React.FC = () => {

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
         <div className='flex max-md:flex-wrap max-md gap-10 mt-32'>
      <div className='w-[55%] max-md:w-full'>
        <div className='mb-6 w-max relative'>
               <div className='-top-8  -right-14 shadow-xl absolute z-10  w-fit bg-[#F95E5E] font-bold rotate-6 text-lg max-lg:px-8 max-sm:px-6 max-sm:right-4 max-sm:py-2 max-sm:-top-6 max-lg:text-base max-md:text-sm max-sm:text-xs p-2.5 px-12 text-white rounded-full'>
    BOUTIQUE
          </div>  
            <Title className='mb-4'>SITE WEB</Title>
         
                    <Subtitle>Faites la différence avec votre</Subtitle>

        </div>
                <Paragraph className='max-lg:w-[90%] max-md:w-full w-[80%]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna ut dui accumsan blandit. Curabitur et neque vel nisi pharetra posuere sit amet vel ipsum. Sed eu leo mollis, consequat urna quis, aliquet lorem. Proin eget tortor turpis. Etiam euismod eleifend tincidunt. Suspendisse dignissim euismod nulla, in pretium dui feugiat vel. Aenean non pulvinar augue, ut varius risus. Suspendisse sed odio sed felis laoreet scelerisque eget sit amet metus. Quisque gravida fringilla diam nec faucibus.</Paragraph>

      </div>
          <ImageSlider     images={images} titles={titles} />
     

      </div>
      <div className='card-bg p-10 my-20 max-md:p-0 max-md:bg-transparent max-md:hover:bg-transparent max-md:grid max-md:grid-cols-2 flex max-md:gap-6 max-md:my-14 gap-4'>
        <div className='max-md:bg-[#00000030] max-md:hover:bg-[#00000040] transition duration-500 max-md:text-left max-md:w-full text-center max-md:p-6 rounded-3xl'>
          <img src={agenda} alt='' className='h-14 w-auto max-md:text-left max-md:m-0 max-md:mb-2 max-md:w-10 mb-2 mx-auto' />
          <Subtitle type='primary' className='!text-xs max-md:!text-base max-sm:!text-xs max-md:leading-8 max-sm:leading-6'>Acessible de n'importe où (mobile, tablette, ordinateur)</Subtitle>
        </div>
        <div className='max-md:bg-[#00000030] max-md:hover:bg-[#00000040] transition duration-500 max-md:w-full max-md:text-left  text-center max-md:p-6 rounded-3xl'>
          <img src={security} alt='' className='h-14 w-auto max-md:text-left max-md:m-0 max-md:mb-2 max-md:w-9 mx-auto mb-2' />
          <Subtitle type='primary' className='!text-xs max-md:!text-base max-sm:!text-xs max-md:leading-8 max-sm:leading-6'>Acessible de n'importe où (mobile, tablette, ordinateur)</Subtitle>
        </div>
        <div className='max-md:bg-[#00000030] max-md:hover:bg-[#00000040] transition duration-500 max-md:w-full max-md:text-left text-center max-md:p-6 rounded-3xl'>
          <img src={responsive} alt='' className='h-14 w-auto max-md:text-left max-md:m-0 max-md:mb-2 max-md:w-12 mb-2 mx-auto' />
          <Subtitle type='primary' className='!text-xs max-md:!text-base max-sm:!text-xs max-md:leading-8 max-sm:leading-6'>Acessible de n'importe où (mobile, tablette, ordinateur)</Subtitle>
        </div>
        <div className='max-md:bg-[#00000030] max-md:hover:bg-[#00000040] transition duration-500 max-md:w-full max-md:text-left text-center max-md:p-6 rounded-3xl'>
          <img src={chat} alt='' className='h-14 w-auto max-md:text-left max-md:m-0 max-md:mb-2 max-md:w-12 mb-2 mx-auto' />
          <Subtitle type='primary' className='!text-xs max-md:!text-base max-sm:!text-xs max-md:leading-8 max-sm:leading-6'>Acessible de n'importe où (mobile, tablette, ordinateur)</Subtitle>
        </div>
      </div>
      <div className=' w-full'>
      <div className='flex max-lg:flex-wrap max-lg:gap-10 gap-20 justify-center'>
          <div className='w-3/5 max-lg:w-full'>
            <Subtitle className='mb-2 max-md:mb-4  !text-2xl'>
      Votre vitrine en ligne accessible facilement.
    </Subtitle>
    <Paragraph>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Paragraph>
         
  </div>
  <div className='w-2/5 max-lg:w-full flex text-base text-white flex-col gap-4'>
            <div className='card-bg flex max-md:gap-3 items-center gap-2 h-1/3 max-md:px-6 p-4 px-8'>
              <img src={chat} alt='' className='h-8 max-md:h-10' />
              <Subtitle className='max-md:text-sm'>Lorem ipsum dolor sit amet</Subtitle>
            </div>
            <div className='card-bg flex max-md:gap-3 items-center gap-2 h-1/3 max-md:px-6 p-4 px-8'>
              <img src={chat} alt='' className='h-8 max-md:h-10' />
              <Subtitle className='max-md:text-sm'>Lorem ipsum dolor sit amet</Subtitle>
            </div>
            <div className='card-bg flex max-md:gap-3 items-center gap-2 h-1/3 p-4 max-md:px-6 px-8'>
              <img src={chat} alt='' className='h-8 max-md:h-10' />
              <Subtitle className='max-md:text-sm'>Lorem ipsum dolor sit amet</Subtitle>
            </div>
  </div>
</div>




      </div>
        
         <PluginSection />
      <ContactSection/>
    </div>
 
  );
};

export default Boutique;