import brand from "../images/icon-brand-recognition.svg"
import detailed from "../images/icon-detailed-records.svg"
import fully from "../images/icon-fully-customizable.svg"

export default function Advanced() {
    return (
        <>
            <section className='bg-gray-100 py-10 lg:py-20'>
                <div className="max-width pt-20 pb-40">
                    <h2 className="text-4xl font-bold text-center text-slate-800 mb-4">Advanced Statistics</h2>
                    <p className="text-center text-slate-400 text-md mb-10">Track how your links are performing across the web with <br /> our advanced statistics dashboard</p>

                    <div className="card grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-40 relative">
                        <div className="ray"></div>
                        <article className="bg-white p-5 rounded relative">
                            <img src={brand} alt="" className="bg-slate-800 p-3 -mt-12 rounded-full"/>
                            <h3 className="text-slate-800 font-bold mb-2 text-lg mt-10">Brand Recognition</h3>
                            <p className="text-slate-400 text-sm pb-5">Boost your brand recognition with each click. Generic links don’t 
                            mean a thing. Branded links help instil confidence in your content.</p>
                        </article>

                        <article className="bg-white p-5 rounded relative">
                            <img src={detailed} alt="" className="bg-slate-800 p-3 -mt-12 rounded-full"/>
                            <h3 className="text-slate-800 font-bold mb-2 text-lg mt-10">Detailed Records</h3>
                            <p className="text-slate-400 text-sm pb-5">  Gain insights into who is clicking your links. Knowing when and where 
                                people engage with your content helps inform better decisions.</p>
                        </article>

                        <article className="bg-white p-5 rounded relative">
                            <img src={fully} alt="" className="bg-slate-800 p-3 -mt-12 rounded-full"/>
                            <h3 className="text-slate-800 font-bold mb-2 text-lg mt-10">Fully Customizable</h3>
                            <p className="text-slate-400 text-sm">Improve brand awareness and content discoverability through customizable 
                                links, supercharging audience engagement</p>
                        </article>
                    </div>
                </div>
                </section> 
        </>
    )
}
