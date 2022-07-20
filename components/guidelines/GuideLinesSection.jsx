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
                    <p className="text-center lg:w-4/6 lg:mx-auto mb-10">
                        {description}
                    </p>
                </section>
                <section className="grid grid-cols-3 gap-6 ">
                    {guideLines.map((item, index) => {
                        return (
                            <div
                                className="shadow-md bg-pink-50 rounded-lg relative  overflow-hidden group cursor-pointer"
                                key={index}
                            >
                                <article className="p-5">
                                    <h4 className="mb-3">{item.title}</h4>
                                    <p className="mb-14">{item.description}</p>
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
