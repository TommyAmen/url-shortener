import bgDesktop from "../images/bg-boost-desktop.svg"
import bgMobile from "../images/bg-boost-mobile.svg"

export default function Boost() {
    return (
    <>
        <section className='boost relative'>
            <picture>
                <source media="(min-width: 768px )" srcSet={bgDesktop} />
                <img src={bgMobile} alt="" />
            </picture>
            <div className="flex items-center justify-center flex-col boost-middle">
                <h2 className="mb-5 text-2xl md:text-4xl text-white font-bold text-center w-full">Boost your links today</h2>
                <button className="btn rounded-full">Get Started</button>
            </div>
        </section>
    </>
    )
}
