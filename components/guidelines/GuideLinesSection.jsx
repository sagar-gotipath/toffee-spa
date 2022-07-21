import CenterWrapper from "../shared/CenterWrapper";
import Title from "../shared/Title";
import VerticalContainer from "../shared/VerticalContainer";

export default function GuideLinesSection({
    title,
    description,
    guideLines = [],
}) {
    return (
        <VerticalContainer>
            <CenterWrapper>
                <section>
                    <Title>{title}</Title>
                    <p className="mb-10 text-center lg:w-4/6 lg:mx-auto">
                        {description}
                    </p>
                </section>
                <section className="grid grid-cols-1 gap-6 lg:grid-cols-3">
                    {guideLines.map((item, index) => {
                        return (
                            <div
                                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer bg-pink-50 group"
                                key={index}
                            >
                                <article className="p-5">
                                    <h4 className="mb-3">{item.title}</h4>
                                    <p className="mb-3 lg:mb-14">
                                        {item.description}
                                    </p>
                                </article>
                                <section className="bg-white absolute inset-0 opacity-100 group-hover:opacity-0 group-hover:z-[0] transition-all duration-300">
                                    <img
                                        src={item.coverImage}
                                        alt="guideline cover image"
                                        className="w-full "
                                    />
                                    <h4 className="p-5">{item.title}</h4>
                                </section>
                            </div>
                        );
                    })}
                </section>
            </CenterWrapper>
        </VerticalContainer>
    );
}
