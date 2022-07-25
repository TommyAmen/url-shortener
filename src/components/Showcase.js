import illustration from "../images/illustration-working.svg"

export default function Showcase() {
    return (
    <>
        <section className="py-10 lg:py-20">
            <div className="max-width grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-10 md:place-items-center">
                <article className="text-center md:text-left lg:text-left md:order-first order-last">
                    <h1 className="heading text-5xl lg:text-6xl font-bold mb-5 text-slate-800 ">More than just shorter links</h1>
                    <p className="text-slate-400 mb-7 ">Build your brand's recognition and get detailed insights on how your links are performing.</p>
                    <button className="btn rounded-full">Get Started</button>
                </article>

                <article>
                    <img src={illustration} alt="" className="md:order-last order-first mb-10 md:mb-0"/>
                </article>
            </div>
        </section>
    </>
    )
}
