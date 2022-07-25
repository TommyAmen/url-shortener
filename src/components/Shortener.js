import mobile from "../images/bg-shorten-mobile.svg"
import desktop from "../images/bg-shorten-desktop.svg"
import { useEffect, useState } from "react"

// https://api.shrtco.de/v2/shorten?url=

const getLocalLinks = () => {
    let links = localStorage.getItem('link')

    if (links) {
        return JSON.parse(localStorage.getItem('link'))
    } else 
    return []
}


export default function Shortener() {
    const [text, setText] = useState("")
    const [link, setLink] = useState(getLocalLinks)
    const [buttonText, setButtonText] = useState('copy')
    const [errorP, setErrorP] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault()

        const errorBorder = text === "" ? "border-red-500" : "border-none";
        document.querySelector("input").classList.add(errorBorder);

        const errorPlaceholder = text === "" ? "placeholder-red-300" : "placeholder-gray-300";
        document.querySelector("input").classList.add(errorPlaceholder);

        if(text === ""){
            setErrorP(true)
        } else {
            setErrorP(false)
        }

        if (!text) {
            // alert("Text is empty")
        } else {
            const shorten = async () => {
                const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${text}`)
                const data = await res.json()
                setLink(data.result)
                console.log(data.result)
                setText('')
            }

            shorten()
        }
    }

    const handleChange = (e) => {
        setText(e.target.value)
       console.log(text);
    }

    const handleCopy = () => {
        navigator.clipboard.writeText(link.short_link)
        setButtonText('copied!')
    }

    useEffect(() => {
        localStorage.setItem('link', JSON.stringify(link))
    }, [link])

  return (
    <>
        <section className="max-width shorten relative">
            <picture>
                <source media="(min-width: 768px )" srcSet={desktop} />
                <img src={mobile} alt="" />
            </picture>

            <form className="form" onSubmit={handleSubmit}>
                <div className="flex flex-col md:flex-row ">
                    <div className="w-full flex flex-col">
                        <input type="url" 
                            placeholder="Shorten a link here..." 
                            className="w-full py-4 px-6 rounded-lg mb-2 md:mb-0 border-solid border-2 outline-none"
                            value={text}
                            onChange={(e) => handleChange(e)}
                            />
                        {errorP && <p className="text-red-500 text-xs -mt-2 md:mt-0  mb-3 md:mb-0"><em>Please add a link</em></p>}
                    </div>
                    <button className="w-full btn rounded-xl my-auto md:w-60 md:ml-5 h-14" type="submit" onClick={handleSubmit}>Shorten It!</button>
                </div>
            </form>

            <div className="bg-white flex flex-col justify-center items-center md:flex-row md:justify-between mt-5 p-3 rounded-xl shadow-sm">
                <article className="border-b w-full md:border-b-0">
                    <h6 className="mb-3 md:mb-0 text-center md:text-left">{link.original_link}</h6>
                </article>

                <article>
                    <ul className="md:flex items-center mt-4 md:mt-0">
                        <li className="text-center mb-2 md:mb-0"><button className="md:mr-5 text-cyan-500">{link.short_link}</button></li>
                        <li><button className="btn rounded-lg w-80 md:w-full focus:bg-slate-700" onClick={handleCopy}>{buttonText}</button></li>
                    </ul>
                </article>
            </div>
        </section>
    </>
  )
}

