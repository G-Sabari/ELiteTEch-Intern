import ResumeImg from '../assets/resume.jpg';

export default function Resume(){

    const config = {
        link: 'https://drive.google.com/file/d/1TSa4Nn6i-19KVKaQE6Tdl1vx5sLk9JS4/view?usp=drivesdk'

    }
    return <section className='flex flex-col md:flex-row bg-secondary  px-5 py-10' id='resume'>
        <div className='py-5 md:w-1/2 flex px-10 justify-center md:justify-end'>
            <img className='w-[300px] rounded-2xl'src={ResumeImg}/>
        </div>
        <div className='md:w-1/2 flex justify-center'>
            <div className='flex flex-col justify-center items-center  text-white'> 
                <h1 className='text-4xl border-b-4 px-1 border-primary mb-4 font-bold w-[145px]'>Resume</h1>
                <p className='text-white text-justify py-7'>You can view my RESUME - <a className='button' href={config.link}>Download</a></p>
            </div>   
        </div>
        
    </section>
}  