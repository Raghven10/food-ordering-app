import Image from "next/image"
import MenuItem from "./MenuItem"
import SectionHeader from "./SectionHeader"

const HomeMenu = () => {
  return (
    <section className='py-8 px-8 max-auto'>
        {/* <div className="absolute h-full w-full right-0 justify-start">
            <div className="absolute h-48 w-48 text-left left-8 -z-10">
                <Image src={'/cook-1773658_640.png'} alt={'Salad'} objectFit={'contain'} 
                layout={'fill'}/>
            </div>
            <div className="absolute  h-48 w-48 right-8">
                <Image src={'/salad-575436_1280.png'} alt={'Salad'} 
                objectFit={'contain'} 
                layout={'fill'}/>
            </div>

        </div> */}
      
        <SectionHeader subHeader={'Check out'} mainHeader={'Menu'} />

        <div className="grid grid-cols-3 gap-4">
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
            <MenuItem/>
        </div>
    </section>
  )
}

export default HomeMenu