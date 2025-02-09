'use client';

import {
    AiOutlineComment,
    AiOutlineRetweet,
    AiOutlineHeart,
    AiOutlineBarChart,
} from 'react-icons/ai';
import { FiBookmark, FiShare } from 'react-icons/fi';

export default function PostInteraction() {
    return (
        <div className='flex items-center justify-between my-2 gap-4 lg:gap-16 text-textGray'>
            <div className='flex flex-1 items-center justify-between'>
                {/* Comment */}
                <div className='flex items-center cursor-pointer group'>
                    <div className='group-hover:bg-iconBlue/20 rounded-full p-2 transition-colors duration-200'>
                        <AiOutlineComment className='text-lg text-textGray group-hover:text-iconBlue transition-colors duration-200' />
                    </div>
                    <span className='group-hover:text-iconBlue text-sm transition-colors duration-200'>
                        1.5K
                    </span>
                </div>

                {/* Repost */}
                <div className='flex items-center cursor-pointer group'>
                    <div className='group-hover:bg-iconGreen/50 rounded-full p-1.5 transition-colors duration-200'>
                        <AiOutlineRetweet className='text-lg text-textGray group-hover:text-iconGreen transition-colors duration-200' />
                    </div>
                    <span className='group-hover:text-iconGreen text-sm transition-colors duration-200'>
                        2.3K
                    </span>
                </div>

                {/* Like */}
                <div className='flex items-center cursor-pointer group'>
                    <div className='group-hover:bg-iconPink/50 rounded-full p-2 transition-colors duration-200'>
                        <AiOutlineHeart className='text-lg text-textGray group-hover:text-iconPink transition-colors duration-200' />
                    </div>
                    <span className='group-hover:text-iconPink text-sm transition-colors duration-200'>
                        19K
                    </span>
                </div>

                {/* View */}
                <div className='flex items-center cursor-pointer group'>
                    <div className='group-hover:bg-iconBlue/20 rounded-full p-2 transition-colors duration-200'>
                        <AiOutlineBarChart className='text-lg text-textGray group-hover:text-iconBlue transition-colors duration-200' />
                    </div>
                    <span className='group-hover:text-iconBlue text-sm transition-colors duration-200'>
                        128M
                    </span>
                </div>
            </div>
            <div className='flex items-center'>
                <div className='flex items-center cursor-pointer group'>
                    <div className='group-hover:bg-iconBlue/20 rounded-full p-2 transition-colors duration-200'>
                        <FiBookmark className='font-bold text-textGray group-hover:text-iconBlue transition-colors duration-200' />
                    </div>
                </div>
                <div className='flex items-center cursor-pointer group'>
                    <div className='group-hover:bg-iconBlue/20 rounded-full p-2 transition-colors duration-200'>
                        <FiShare className='font-bold text-textGray group-hover:text-iconBlue transition-colors duration-200' />
                    </div>
                </div>
            </div>
        </div>
    );
}
