import React from 'react';
import theme from '../images/themeviewer/artiste.png'
import arrow from '../images/arrow.png'
import responsive from '../images/responsive.svg'
import security from '../images/security.svg'
import agenda from '../images/agenda.svg'
import chat from '../images/chatia.svg'
import ContactSection from '../components/ContactSection';



const Vitrine: React.FC = () => {
  return (
    <div>
         <div className='flex  mt-24'>
      <div className='w-[60%]'>
        <div>
          <span className='text-white text-lg  tracking-widest'>Faites la différence avec votre</span>
          <div className='flex gap-6 justify-start -mt-2 items-center w-full'>
            <h4 className='text-6xl text-[#F6D663]  font-bold '>SITE WEB</h4>
            <div className='shadow-xl w-fit  bg-[#4084EA] font-bold rotate-6 text-xl p-2.5 px-12 text-white rounded-full'>
    VITRINE
          </div>
          </div>
          
        </div>
                <p className='text-white/80 text-xs tracking-widest w-2/3'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id magna ut dui accumsan blandit. Curabitur et neque vel nisi pharetra posuere sit amet vel ipsum. Sed eu leo mollis, consequat urna quis, aliquet lorem. Proin eget tortor turpis. Etiam euismod eleifend tincidunt. Suspendisse dignissim euismod nulla, in pretium dui feugiat vel. Aenean non pulvinar augue, ut varius risus. Suspendisse sed odio sed felis laoreet scelerisque eget sit amet metus. Quisque gravida fringilla diam nec faucibus.</p>

      </div>
      <div className=' w-[40%] overflow-hidden relative bg-[#00000030] hover:bg-[#00000040] transition-all p-8 px-10 rounded-3xl'>
        <div className='flex overflow-hidden   justify-center p-4  items-center absolute inset-0 w-full h-full'>
          <div className='w-full h-full overflow-hidden rounded-2xl relative'>
            <img src={theme} className='w-full relative  h-full object-cover  object-top absolute :inset-0' alt='' />
            <div className='  rounded-2xl  w-full h-full absolute inset-0'></div>
            
            </div>
        </div>
        <div className='relative h-full flex items-end '>
          
        
                            <p className='w-fit mx-auto text-sm text-center te  px-6 tracking-widest p-2 rounded-full bg-gradient-to-t bg-black/60 text-[#F6D663] shadow-xl border-white backdrop-blur-sm'>Couvreur/Zingueur</p>
            <img src={arrow} className='h-14 w-auto absolute -bottom-2 left-0 rotate-180 scale-100 hover:scale-110 transition-all duration-300 opacity-80 hover:opacity-100' alt='' />
            <img src={arrow} className='h-14 w-auto absolute -bottom-2 right-0 opacity-80 scale-100 hover:scale-110 transition-all duration-300 hover:opacity-100' alt=''/>
        </div>

        
</div>

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

export default Vitrine;