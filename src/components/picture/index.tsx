import { FC } from 'react';

export const Picture: FC<{
    src: string;
    alt?: string;
    caption?: string;
}> = ({ src, alt = '', caption }) => (
    <figure>
        <source className="picture" />
        <picture>
            {src ? <source srcSet={src} /> : null}
            <img
                src="https://placehold.jp/150x150.png"
                alt={alt || 'デフォルトの画像'}
            />
        </picture>
        {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
);
