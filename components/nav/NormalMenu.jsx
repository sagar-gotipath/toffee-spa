import Link from "next/link";

export default function NormalMenu({ title, href }) {
    return (
        <>
            {href && (
                <Link href={href}>
                    <a className="items-center block py-3 transition duration-150 lg:inline-flex lg:h-12 lg:px-0 lg:py-0 hover:opacity-80 text-sm font-bold lg:text-base capitalize">
                        {title}
                    </a>
                </Link>
            )}
        </>
    );
}
