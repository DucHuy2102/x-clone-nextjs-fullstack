'use server';

import { imagekit } from './utils';

export const shareAction = async (
    formData: FormData,
    settings: {
        type: 'original' | 'wide' | 'square';
        sensitive: boolean;
    }
) => {
    const desc = formData.get('post_Description') as string;
    const file = formData.get('post_Media') as File;

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const transformation = `w-600, ${
        settings.type === 'square' ? 'ar-1-1' : settings.type === 'wide' ? 'ar-16-9' : ''
    }`;

    imagekit.upload(
        {
            file: buffer,
            fileName: file.name,
            folder: '/posts',
            transformation: {
                pre: transformation,
            },
            customMetadata: {
                sensitive: settings.sensitive,
            },
        },
        function (error, result) {
            if (error) console.log(error);
            else console.log(result);
        }
    );
};
