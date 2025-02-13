'use client';

import React, { useState } from 'react';
import { Image_Component } from '.';
import Image from 'next/image';
import ImageEditor from './ImageEditor';
import { IoMdClose } from 'react-icons/io';
import { shareAction } from '@/actions';

export default function Share() {
    const [media, setMedia] = useState<File | null>(null);
    const [clickedEditMedia, setClickedEditMedia] = useState(false);
    const [settings, setSettings] = useState<{
        type: 'original' | 'wide' | 'square';
        sensitive: boolean;
    }>({
        type: 'original',
        sensitive: false,
    });

    // function to handle media change event
    const handleMediaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setMedia(e.target.files[0]);
        }
    };

    // preview media (image or video)
    const previewMedia = media ? URL.createObjectURL(media) : null;

    // function to handle post event (submit form)
    const handlePost = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!media) {
            console.log('No media selected');
            return;
        }
        const formData = new FormData();
        formData.append('post_Media', media);

        try {
            const res = await shareAction(formData, settings);
            console.log('Upload media success!', res);
        } catch (error) {
            console.log('Upload media failed!', error);
        }
    };

    return (
        <form className='p-4 flex gap-4' onSubmit={handlePost}>
            {/* Avatar */}
            <div className='relative w-10 h-10 rounded-full overflow-hidden'>
                <Image_Component
                    path='general/cr7.png'
                    alt='Avatar_User'
                    width={100}
                    height={100}
                    transformations={true}
                />
            </div>

            {/* Others */}
            <div className='flex flex-col flex-1 gap-4'>
                {/* Description */}
                <input
                    type='text'
                    name='post_Description'
                    placeholder='What is happening?!'
                    className='bg-transparent text-xl h-10 outline-none placeholder:text-textGray'
                />

                {/* Preview image */}
                {media?.type.includes('image') && previewMedia && (
                    <div className='overflow-hidden rounded-xl relative'>
                        <Image
                            src={previewMedia}
                            alt='Media_Preview'
                            width={600}
                            height={600}
                            className={`w-full ${
                                settings.type === 'original'
                                    ? 'h-full object-contain'
                                    : settings.type === 'square'
                                    ? 'object-cover aspect-square'
                                    : 'object-cover aspect-video'
                            }`}
                        />
                        <button
                            onClick={() => setClickedEditMedia(true)}
                            className='absolute top-2 left-2 bg-black bg-opacity-50 
                        text-white py-1.5 px-4 rounded-full font-bold text-sm'
                        >
                            Edit
                        </button>
                        <button
                            onClick={() => setMedia(null)}
                            className='absolute top-2 right-2 bg-black bg-opacity-50 
                        text-white p-2 rounded-full font-bold text-sm'
                        >
                            <IoMdClose />
                        </button>
                    </div>
                )}

                {/* Preview video */}
                {media?.type.includes('video') && previewMedia && (
                    <div>
                        <video src={previewMedia} controls />
                        <button
                            onClick={() => setMedia(null)}
                            className='absolute top-2 right-2 bg-black bg-opacity-50 
                        text-white p-2 rounded-full font-bold text-sm'
                        >
                            <IoMdClose />
                        </button>
                    </div>
                )}

                {/* Image editor */}
                {clickedEditMedia && previewMedia && (
                    <ImageEditor
                        onClose={() => setClickedEditMedia(false)}
                        previewMedia={previewMedia}
                        settings={settings}
                        setSettings={setSettings}
                    />
                )}

                {/* Buttons */}
                <div className='flex flex-wrap gap-4 items-center justify-between'>
                    <div className='flex flex-wrap gap-3'>
                        <input
                            type='file'
                            name='post_Media'
                            onChange={handleMediaChange}
                            className='hidden'
                            id='btnClickFile'
                            accept='image/*, video/*'
                        />
                        <label htmlFor='btnClickFile'>
                            <Image_Component
                                path='icons/image.svg'
                                alt=''
                                width={20}
                                height={20}
                                className='cursor-pointer'
                            />
                        </label>
                        <Image_Component
                            path='icons/gif.svg'
                            alt=''
                            width={20}
                            height={20}
                            className='cursor-pointer'
                        />
                        <Image_Component
                            path='icons/poll.svg'
                            alt=''
                            width={20}
                            height={20}
                            className='cursor-pointer'
                        />
                        <Image_Component
                            path='icons/emoji.svg'
                            alt=''
                            width={20}
                            height={20}
                            className='cursor-pointer'
                        />
                        <Image_Component
                            path='icons/schedule.svg'
                            alt=''
                            width={20}
                            height={20}
                            className='cursor-pointer'
                        />
                        <Image_Component
                            path='icons/location.svg'
                            alt=''
                            width={20}
                            height={20}
                            className='cursor-pointer'
                        />
                    </div>
                    <button className='rounded-full px-5 py-2 bg-white text-black font-bold'>
                        Post
                    </button>
                </div>
            </div>
        </form>
    );
}
