import { FC } from 'react';
import { PlayList } from '../playlist/model';

interface Props extends PlayList {}

export const Top: FC<Props> = ({
    next,
    total,
    page: resultsPerPage,
    items,
}) => {
    return <main></main>;
};
