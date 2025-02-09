'use client';

import { IKImage } from 'imagekitio-next';

type ImageProps = {
    path: string;
    width?: number;
    height?: number;
    alt: string;
    className?: string;
    transformations?: boolean;
};

const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;

export default function Image({
    path,
    width,
    height,
    alt,
    className,
    transformations,
}: ImageProps) {
    return (
        <IKImage
            urlEndpoint={urlEndpoint}
            path={path}
            alt={alt}
            className={className}
            {...(transformations
                ? {
                      transformation: [
                          {
                              height: `${height}`,
                              width: `${width}`,
                          },
                      ],
                  }
                : { width: width, height: height })}
        />
    );
}
