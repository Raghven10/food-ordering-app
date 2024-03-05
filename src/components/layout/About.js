import Image from 'next/image'
import SectionHeader from './SectionHeader'

const About = () => {
  return (
    <>
    
    <section className='text-center my-16'>
        <SectionHeader subHeader={'our story  '} 
        mainHeader={'About Us'} />
        <div className='text-gray-500 max-w-2xl mx-auto flex-col gap-4'>
            <p>
                lorem ipsum lorem ipsumlorem ipsumlorem 
                ipsumlorem ipsumlorem ipsumlorem ipsum
                lorem ipsumlorem ipsumlorem ipsumlorem 
                ipsumlorem ipsum
            </p>
            <p>
                lorem ipsum lorem ipsumlorem ipsumlorem 
                ipsumlorem ipsumlorem ipsumlorem ipsum
                lorem ipsumlorem ipsumlorem ipsumlorem 
                ipsumlorem ipsum
            </p>
            <p>
                lorem ipsum lorem ipsumlorem ipsumlorem 
                ipsumlorem ipsumlorem ipsumlorem ipsum
                lorem ipsumlorem ipsumlorem ipsumlorem 
                ipsumlorem ipsum
            </p>
        </div>
    </section>
    <section>
        <SectionHeader 
            subHeader={'Don\'t Hesitate'} 
            mainHeader={'Contact Us'}
        />
       <section className="hero">
            <div className="relative py-8 px-8">
                <Image src={'/delivery-guy-1424808_640.png'} alt={'Pizza Images'} layout={'fill'} objectFit={'contain'}/>
            </div>
            <div className="py-8 px-8">
                <h1 className="text-4xl font-semibold">Don't Hesitate&nbsp;
                <br/><span className="text-primary">Just Call Us</span> </h1>
                <p className="my-6 text-gray-500 text-sm">
                    Our services are available 24x7 hrs. Contact us for business opportunity.
                </p>
                <div className="flex gap-4 text-sm">
                    <button className="flex bg-primary uppercase gap-2 items-center rounded-full px-4 py-2 text-white">
                        Enquire Now
                    </button>
                    <div className="gap-2 items-center rounded-full px-4 py-2 text-gray-600 font-semibold ">
                        <p className='text-gray-700'>Ph: +91 9876543210</p>
                        <p className='text-gray-700'>Email: someone@email.com</p>
                        <p className='text-gray-700'>Address: Delhi-110038</p>
                    </div>
                </div>
    
            </div>
        </section>
        <footer className='border-t p-8 text-center text-gray-500'>
            &copy; 2023 All rights reserved
        </footer>
        
    </section>
    </>
  )
}

export default About