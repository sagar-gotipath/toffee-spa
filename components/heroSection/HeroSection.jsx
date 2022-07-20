export default function HeroSection({ title, descriptions, heroImage }) {
    return (
        <section className="flex flex-col lg:flex-row lg:items-center">
            <article className="px-4 lg:px-12 w-1/2">
                <h1>{title}</h1>
                <p>{descriptions}</p>
            </article>
            <div>
                <img
                    src={heroImage || "/assets/images/hero_1.png"}
                    alt="hero section image"
                />
            </div>
        </section>
    );
}
