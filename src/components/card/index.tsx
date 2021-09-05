import { FC } from 'react';
import { Picture } from '../picture';
import './index.scss';
import cx from 'classnames';

const Title: FC<{ text: string }> = ({ text }) => (
    <p className="card__title">{text}</p>
);

interface Image {
    src: string;
    alt?: string;
    caption?: string;
}
interface Props {
    title: string;
    url: string;
    image: Image;
}
export const Card: FC<Props> = ({ title,url, image }) => (
    <a href={url} className={cx('card','card--anchor')}>
        <Title text={title} />
        <Picture {...image} />
    </a>
);
