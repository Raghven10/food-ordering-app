import Image from "next/image"
import RightArrow from "./icons/RightArrow"

export default function Hero(){
  return (
    <section className="hero" >
        <div className="py-8">
            <h1 className="text-4xl font-semibold">Everything <br/>is better <br/> with a &nbsp;
             <br/><span className="text-primary">Pizza</span> </h1>
            <p className="my-6 text-gray-500 text-sm">
                Pizza is missing piece that makes everyday complete, a simple yet delicious joy in life.
            </p>
            <div className="flex gap-4 text-sm">
                <button className="flex bg-primary uppercase gap-2 items-center rounded-full px-4 py-2 text-white">
                    Order Now
                    <RightArrow />
                </button>
                <button className="flex gap-2 items-center rounded-full px-4 py-2 text-gray-600 font-semibold ">
                    Learn more
                    <RightArrow />
                    
                </button>

            
            </div>

        </div>
        
    
        <div className="relative">
            <Image src={'/fizza-1.png'} alt={'Pizza Images'} layout={'fill'} objectFit={'contain'}/>
        </div>
       
    </section>
  )
}
