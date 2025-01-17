import Udemyimg from '../assets/Udemy HTML & CSS.jpg';
import Marcelloimg from '../assets/Marcello certificate python express.jpg';
import Fullstackimg from '../assets/Full stack workshop.jpg';

export default function Certificate(){
    const config = {
        certificates : [
            {
                image:Udemyimg,
                description:'Completed in UDEMY PLATFORM',
                link:'https://drive.google.com/file/d/1edjg4nMqar-w8Sv26UHroqYMLgpK01NO/view?usp=drivesdk'
            },
            {
                image:Marcelloimg,
                description:'Completed in Marcello TECH workshop',
                link:'https://drive.google.com/file/d/1Qt5_InlEGqKe4rkOOYHDvwTRxapk71wI/view?usp=drivesdk'
            },
            {
                image:Fullstackimg,
                description:'Completed in NoviTECH workshop',
                link:'https://drive.google.com/file/d/19JVQcknVgRwgjxBYp_b7WRdK2Rg4nMM6/view?usp=drivesdk'
            },
            
            

        ]
    }

    return <section className="flex flex-col py-20 px-5 justify-center bg-primary text-white" id='certificate'>
        <div className='w-full'> 
            <div className="flex flex-col px-10">
                <h1 className='text-4xl font-bold border-b-4 w-[195px] border-secondary'>Certificates</h1>
                <p className='text-1.5xl mt-5'>These are some of my best Certificates Html , Css & Python..Check them out</p>

            </div>
        </div>

        <div className="w-full">
            <div className='flex flex-col md:flex-row px-10 py-5 gap-5'>
                {config.certificates.map((certificates) => (

                    <div className='relative'>
                    <img className='h-[220px] w-[500px] rounded-2xl'src={certificates.image}/>
                    <div className='project-desc'>
                        <p className='text-center  font-bold px-5 py-5 pt-[70px]'>{certificates.description}</p>
                        <div className='flex justify-center pt-0 '>
                            <a className='button' target='_blank' href={certificates.link}>Open  Certificate</a>
                        </div>

                    </div>
                    </div>
                ))}
            </div>
        </div>
    </section>

}