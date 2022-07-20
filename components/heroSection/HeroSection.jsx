export default function HeroSection({ title, descriptions, heroImage }) {
    return (
        <section className="flex flex-col lg:flex-row lg:items-center">
            <div className="px-4 lg:px-12 flex-1">
                <article className="w-4/5">
                    <h1>{title}</h1>
                    <p>{descriptions}</p>
                </article>
            </div>
            <div className="flex-1">
                <img
                    src={heroImage || "/assets/images/hero_1.png"}
                    alt="hero section image "
                    className="w-full"
                />
            </div>
        </section>
    );
}
