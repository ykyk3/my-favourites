import { FC } from 'react';
import './index.scss';

export const Picture: FC<{
    src: string;
    alt?: string;
    caption?: string;
}> = ({ src, alt = '', caption }) => (
    <figure className="picture">
        <picture>
            {src ? <source srcSet={src} /> : null}
            <img
                src="https://placehold.jp/150x150.png"
                alt={alt || 'デフォルトの画像'}
            />
        </picture>
        {caption ? <figcaption className="picture__caption">{caption}</figcaption> : null}
    </figure>
);
