
const PageSection = ({ title, descs = [], imgSrc, reverse = false, children }) => {
    return (
        <section className={`page-section flex sec-pd ${reverse ? "justify-start" : "justify-end"}`}>
            <div className={`max-w-4/5 flex ${reverse ? "flex-row-reverse" : ""} `}>
                <div className={`w-[38%] flex flex-col justify-center ${reverse ? "ps-25" : "pe-25"}`}>
                    <h2 className="sec-hd text-start! mb-10">{title}</h2>
                    {descs.map((d) => (
                        <p className="para mb-5!">{d}</p>
                    ))}
                    {children}
                </div>
                <div className="w-[62%]">
                    <img src={imgSrc} alt="our expertise" />
                </div>
            </div>
        </section>
    )
}

export default PageSection
