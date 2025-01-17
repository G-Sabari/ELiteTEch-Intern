import { AiOutlineInstagram, AiOutlineLinkedin, AiOutlineTwitter } from "react-icons/ai"

export default function Contact(){

    const config = {
        email: 'rohitsabari045@gmail.com',
        phone:'8754864826'
    }
    return <section className="flex flex-col md:flex-col bg-primary px-5 py-28" id="contact">

        <div className="flex flex-col items-center text-white">

            <h1 className="text-4xl border-b-4 border-secondary mb-5 w-[135px] font-bold">Contact</h1>
            <p className="text-1xl">If you want to discuss with me , Please contact me </p>
            <p className="py-2"><span className="font-bold px-2">E-Mail :</span>{config.email}</p>
            <p><span className="font-bold px-2">Phone : </span>{config.phone}</p>
        </div>

        <div className="flex justify-center py-5">
            <a className="pr-4 text-blue-900 border-" href="https://x.com/rohitsabari045?t=XBjO4sTB52jvrG8L8SWArg&s=09"><AiOutlineTwitter size={30}/></a>
            <a className="pr-4 text-orange-500" href="https://www.instagram.com/rohit__sabarii?igsh=MXN3a3RmNDc0eDFzdA=="><AiOutlineInstagram size={30}/></a>
            <a  className="text-blue-500" href="https://www.linkedin.com/in/sabari-g-348848307?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><AiOutlineLinkedin size={30}/></a>
        </div>

    </section>
}