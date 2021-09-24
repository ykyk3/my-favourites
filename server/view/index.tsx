import { FC, ReactChild } from 'react';

export const View: FC = (children) => {
    console.log('render: View');
    return (
        <html lang="ja">
            <body>{children}</body>
        </html>
    );
};
