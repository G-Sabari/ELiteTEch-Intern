import Heroimg from '../assets/hero.png';
import { AiOutlineTwitter , AiOutlineLinkedin , AiOutlineInstagram , AiOutlineFacebook} from "react-icons/ai";

export default function Hero() {
    const config = {
        subtitle:'I am a Front-end developer and Designer !',
        social: {
            twitter: 'https://x.com/rohitsabari045?t=XBjO4sTB52jvrG8L8SWArg&s=09',
            linkdin:'https://www.linkedin.com/in/sabari-g-348848307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
            instagram:'https://www.instagram.com/rohit__sabarii?igsh=MXN3a3RmNDc0eDFzdA==',
            facebook:'https://www.facebook.com/profile.php?id=100027075068496&mibextid=ZbWKwL'
        }
    }


    return <section className='flex flex-col md:flex-row px-5 md:py-32 bg-primary justify-center'>
        <div className='md:w-1/2 flex flex-col'>
            <h1 className='text-white mt-20 text-4xl font-hero-font'>Hello , <br/> I'm SABARI
            <p className='text-2xl text-black'>{config.subtitle}</p>
            </h1>

            <div className='flex py-8'>
                <a href={config.social.twitter} className='pr-4 hover:text-white'><AiOutlineTwitter size={40}/></a>
                <a href={config.social.linkdin} className='pr-4 hover:text-white'><AiOutlineLinkedin size={40}/></a>
                <a href={config.social.instagram} className='pr-4 hover:text-white'><AiOutlineInstagram size={40}/></a>
                <a href={config.social.facebook} className='pr-4 hover:text-white'><AiOutlineFacebook size={40}/></a>
            </div>
        </div>
     
        <img className='md:w-1/3' src={Heroimg}/>
    </section>
}