import Link from "next/link";
import clsx from "clsx";
import CenterWrapper from "../shared/CenterWrapper";
import VerticalContainer from "../shared/VerticalContainer";

export default function FeatureOneWrapper({
    image,
    title,
    description,
    btnText,
    btnLink,
    isReversed,
    isFile,
    icon,
}) {
    return (
        <VerticalContainer>
            <CenterWrapper>
                <div
                    className={clsx(
                        "flex items-center space-x-10 ",
                        isReversed && "flex-row-reverse space-x-reverse"
                    )}
                >
                    <div className="">
                        <img
                            src={image}
                            alt="feature image"
                            className="w-full "
                        />
                    </div>
                    <article className="flex-1">
                        <img src={icon} alt="" className="w-14 mb-4" />
                        <h3 className="mb-4">{title}</h3>
                        <p className="mb-4">{description}</p>
                        {isFile ? (
                            <form action="yourScript">
                                <input
                                    type="file"
                                    id="myFile"
                                    name="filename"
                                />
                                <input type="submit" />
                            </form>
                        ) : (
                            <Link href={btnLink}>
                                <a className="text-white bg-pink-400 rounded-full w-16 px-8 py-2">
                                    {btnText}
                                </a>
                            </Link>
                        )}
                    </article>
                </div>
            </CenterWrapper>
        </VerticalContainer>
    );
}
