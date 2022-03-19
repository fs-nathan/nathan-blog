import Image from "next/image";
import Link from "next/link";

type Props = {
    title: string;
    src: string;
    slug?: string;
};

const Thumbnail: React.FC<Props> = ({ title, src, slug }: Props) => {
    const image = (
        <Image src={src} alt={title} width="100%" height="100%" layout="responsive" objectFit="contain"/>

    );
    return (
        <>
            {slug ? (
                <Link href={`/posts/${slug}`}>
                    <a aria-label={title}>{image}</a>
                </Link>
            ) : (
                image
            )}
        </>
    );
};

export default Thumbnail;
