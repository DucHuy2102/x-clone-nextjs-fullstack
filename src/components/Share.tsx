import { Image_Component } from '.';

export default function Share() {
    return (
        <div className='p-4 flex gap-4'>
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
                <input
                    type='text'
                    placeholder='What is happening?!'
                    className='bg-transparent text-xl h-10 outline-none'
                />
                <div className='flex flex-wrap gap-4 items-center justify-between'>
                    <div className='flex flex-wrap gap-4'>
                        <Image_Component
                            path='icons/image.svg'
                            alt=''
                            width={20}
                            height={20}
                            className='cursor-pointer'
                        />
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
        </div>
    );
}
