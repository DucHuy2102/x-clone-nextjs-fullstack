import Image from 'next/image';
import React from 'react';
import { IoArrowBack } from 'react-icons/io5';

type ImageEditorProps = {
    onClose: () => void;
    previewMedia: string;
    settings: {
        type: 'original' | 'wide' | 'square';
        sensitive: boolean;
    };
    setSettings: React.Dispatch<
        React.SetStateAction<{
            type: 'original' | 'wide' | 'square';
            sensitive: boolean;
        }>
    >;
};

export default function ImageEditor({
    onClose,
    previewMedia,
    settings,
    setSettings,
}: ImageEditorProps) {
    const handleChangeSensitive = (sensitive: boolean) => {
        setSettings((prev) => ({ ...prev, sensitive }));
    };

    const handleChangeType = (type: 'original' | 'wide' | 'square') => {
        setSettings((prev) => ({ ...prev, type }));
    };

    return (
        <div
            className='w-screen h-screen fixed left-0 top-0 
        bg-black bg-opacity-75 flex items-center justify-center z-10'
        >
            <div className='bg-black rounded-xl p-12 flex flex-col gap-4'>
                {/* Top section */}
                <div className='flex items-center justify-between'>
                    <div className='flex items-center gap-4'>
                        <button className='rounded-full p-1.5 hover:bg-zinc-900 transition-colors duration-200'>
                            <IoArrowBack onClick={onClose} className='cursor-pointer text-xl' />
                        </button>
                        <h1 className='font-bold text-xl'>Media Settings</h1>
                    </div>
                    <button
                        onClick={onClose}
                        className='px-4 py-2 rounded-full bg-white text-black font-bold'
                    >
                        Save
                    </button>
                </div>

                {/* Image section */}
                <div className='w-[600px] h-[600px] flex items-center'>
                    <Image
                        src={previewMedia}
                        alt='Media_Settings'
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
                </div>

                {/* Settings section */}
                <div className='flex items-center justify-between text-sm'>
                    <div className='flex items-center gap-8'>
                        <div
                            className='flex items-center gap-2 cursor-pointer'
                            onClick={() => handleChangeType('original')}
                        >
                            <svg width={24} viewBox='0 0 24 24'>
                                <path
                                    className={`${
                                        settings.type === 'original'
                                            ? 'fill-iconBlue'
                                            : 'fill-[#e7e9aa]'
                                    }`}
                                    d='M3 7.5C3 6.119 4.119 5 5.5 5h13C19.881 5 21 6.119 21 7.5v9c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 19 3 17.881 3 16.5v-9zM5.5 7c-.276 0-.5.224-.5.5v9c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-9c0-.276-.224-.5-.5-.5h-13z'
                                />
                            </svg>
                            Original
                        </div>
                        <div
                            className='flex items-center gap-2 cursor-pointer'
                            onClick={() => handleChangeType('wide')}
                        >
                            <svg width={24} viewBox='0 0 24 24'>
                                <path
                                    className={`${
                                        settings.type === 'wide'
                                            ? 'fill-iconBlue'
                                            : 'fill-[#e7e9aa]'
                                    }`}
                                    d='M3 9.5C3 8.119 4.119 7 5.5 7h13C19.881 7 21 8.119 21 9.5v5c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 17 3 15.881 3 14.5v-5zM5.5 9c-.276 0-.5.224-.5.5v5c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-5c0-.276-.224-.5-.5-.5h-13z'
                                />
                            </svg>
                            Wide
                        </div>
                        <div
                            className='flex items-center gap-2 cursor-pointer'
                            onClick={() => handleChangeType('square')}
                        >
                            <svg width={24} viewBox='0 0 24 24'>
                                <path
                                    className={`${
                                        settings.type === 'square'
                                            ? 'fill-iconBlue'
                                            : 'fill-[#e7e9aa]'
                                    }`}
                                    d='M3 5.5C3 4.119 4.119 3 5.5 3h13C19.881 3 21 4.119 21 5.5v13c0 1.381-1.119 2.5-2.5 2.5h-13C4.119 21 3 19.881 3 18.5v-13zM5.5 5c-.276 0-.5.224-.5.5v13c0 .276.224.5.5.5h13c.276 0 .5-.224.5-.5v-13c0-.276-.224-.5-.5-.5h-13z'
                                />
                            </svg>
                            Square
                        </div>
                    </div>
                    <div
                        className={`cursor-pointer rounded-full py-1 px-4 text-black ${
                            settings.sensitive ? 'bg-red-500' : 'bg-white'
                        }`}
                        onClick={() => handleChangeSensitive(!settings.sensitive)}
                    >
                        Sensitive
                    </div>
                </div>
            </div>
        </div>
    );
}
