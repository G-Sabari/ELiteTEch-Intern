import Aboutimg from '../assets/about.png';

export default function About(){
        const config = {
            subtitle:'Hello , My name is SABARI , Im a Front-end developer ! I built beautiful websites with React.js and Tailwindcss I have a solid foundation in frontend design, enhanced by my knowledge of tools like Figma, enabling me to translate concepts into pixel-perfect designs. I am always eager to collaborate in teams, exchange ideas, and contribute to innovative projects'
        }

    return <section className='md:flex bg-secondary px-5 py-5'id='about'>
        <div className='md:w-1/2'>
            <img src={Aboutimg}/>
        </div>
        <div className='py-5 px-10 md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center'>
                <h1 className='text-4xl text-white border-b-4 border-primary mb-3 font-bold w-[175px]'>About me</h1>
                <p className='text-white text-justify px-2 py-7'>Hello , My name is SABARI , Im a Front-end developer ! I built beautiful websites with React.js and Tailwindcss
                I have a solid foundation in frontend design, enhanced by my knowledge of tools like Figma, enabling me to translate concepts into pixel-perfect designs. I am always eager to collaborate in teams, exchange ideas, and contribute to innovative projects.
                </p>
            </div>
            
        </div>

    </section>
}  