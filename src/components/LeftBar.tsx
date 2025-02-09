import Link from 'next/link';
import { FaXTwitter } from 'react-icons/fa6';
import { Image_Component } from '.';

// menu list items data
const menuListItems = [
    {
        id: 1,
        name: 'Homepage',
        link: '/',
        icon: 'home.svg',
    },
    {
        id: 2,
        name: 'Explore',
        link: '/',
        icon: 'explore.svg',
    },
    {
        id: 3,
        name: 'Notification',
        link: '/',
        icon: 'notification.svg',
    },
    {
        id: 4,
        name: 'Messages',
        link: '/',
        icon: 'message.svg',
    },
    {
        id: 5,
        name: 'Bookmarks',
        link: '/',
        icon: 'bookmark.svg',
    },
    {
        id: 6,
        name: 'Jobs',
        link: '/',
        icon: 'job.svg',
    },
    {
        id: 7,
        name: 'Communities',
        link: '/',
        icon: 'community.svg',
    },
    {
        id: 8,
        name: 'Premium',
        link: '/',
        icon: 'logo.svg',
    },
    {
        id: 9,
        name: 'Profile',
        link: '/',
        icon: 'profile.svg',
    },
    {
        id: 10,
        name: 'More',
        link: '/',
        icon: 'more.svg',
    },
];

export default function LeftBar() {
    return (
        <div className='h-screen sticky top-0 flex flex-col justify-between pt-1 pb-2'>
            {/* Top */}
            <div className='flex flex-col text-lg 2xl:text-xl items-center 2xl:items-start'>
                {/* Logo */}
                <Link href='/' className='p-3 rounded-full hover:bg-[#181818]'>
                    <FaXTwitter className='text-3xl' />
                </Link>

                {/* Menu items */}
                <div className='flex flex-col gap-1 2xl:mb-4'>
                    {menuListItems.map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            className='p-3 rounded-full hover:bg-[#181818] transition-colors 
                            duration-150 flex items-center gap-4'
                        >
                            <Image_Component
                                path={`icons/${item.icon}`}
                                alt={item.name}
                                width={24}
                                height={24}
                            />
                            <span className='hidden 2xl:inline'>{item.name}</span>
                        </Link>
                    ))}
                </div>

                {/* Button create post */}
                <Link
                    href='/'
                    className='bg-white text-black rounded-full w-12 h-12 flex items-center justify-center 2xl:hidden'
                >
                    <Image_Component
                        path='icons/post.svg'
                        alt='Button_Create_Post'
                        width={24}
                        height={24}
                    />
                </Link>
                <Link
                    href='/'
                    className='hidden 2xl:block bg-white hover:bg-gray-200 text-black rounded-full 
                    font-bold py-2 2xl:w-[220px] text-center'
                >
                    Post
                </Link>
            </div>

            {/* Bottom */}
            <div
                className='flex items-center justify-between cursor-pointer hover:bg-[#181818] 
            2xl:w-[245px] px-2 py-2 2xl:py-2 2xl:px-3 rounded-full mb-2'
            >
                {/* Left */}
                <div className='flex items-center gap-3'>
                    {/* Avatar */}
                    <div className='w-10 h-10 relative rounded-full overflow-hidden'>
                        <Image_Component
                            path='/general/cr7.png'
                            alt='Avatar_User'
                            width={100}
                            height={100}
                            transformations={true}
                        />
                    </div>

                    {/* User info */}
                    <div className='hidden 2xl:flex flex-col'>
                        <span className='font-bold'>Nguyễn Đức Huy</span>
                        <span className='text-sm text-textGray'>@DucHuy_2102</span>
                    </div>
                </div>

                {/* Right */}
                <div className='hidden 2xl:block text-lg font-bold cursor-pointer mb-1'>...</div>
            </div>
        </div>
    );
}
