'use client';

import { IKVideo } from 'imagekitio-next';

type ImageProps = {
    path: string;
    className?: string;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Video({ path, className }: ImageProps) {
    return (
        <IKVideo
            urlEndpoint={urlEndpoint}
            path={path}
            controls={true}
            className={className}
            transformation={[{ height: '1080', width: '1920', q: '50' }]}
        />
    );
}
