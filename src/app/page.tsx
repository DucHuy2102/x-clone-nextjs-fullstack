import { Feed, Share } from '@/components';
import Link from 'next/link';

export default function Home() {
    return (
        <div className=''>
            <Navbar />
            <Share />
            <Feed />
        </div>
    );
}

const Navbar = () => {
    return (
        <div className='flex items-center justify-between h-12 border-b border-borderGray'>
            <Link
                href='/'
                className='w-1/2 pt-3 h-full flex items-center justify-center hover:bg-[#484848] transition-colors duration-150'
            >
                <span className='pb-2 border-b-4 border-iconBlue'>For you</span>
            </Link>
            <Link
                href='/'
                className='w-1/2 pt-3 h-full flex items-center justify-center hover:bg-[#484848] transition-colors duration-150'
            >
                <span className='pb-2'>Following</span>
            </Link>
        </div>
    );
};
