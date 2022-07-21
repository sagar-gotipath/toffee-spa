export default function HeroSection({ title, descriptions, heroImage }) {
    return (
        <section className="flex flex-col lg:flex-row lg:items-center mt-14 lg:mt-0">
            <div className="flex-1 px-4 mb-5 lg:mb-0 lg:px-12">
                <article className="w-4/5">
                    <h1>{title}</h1>
                    <p>{descriptions}</p>
                </article>
            </div>
            <div className="flex-1">
                <img
                    src={heroImage || "/assets/images/Vector.gif"}
                    alt="hero section image "
                    className="w-full bg-clip-padding"
                />
            </div>
        </section>
    );
}
