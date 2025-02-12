import { Image_Component, PostInfo } from '.';
import { AiOutlineRetweet } from 'react-icons/ai';
import PostInteraction from './PostInteraction';
import { imagekit } from '@/utils';

interface IFileDetailsResponse {
    width: number;
    height: number;
    filePath: string;
    url: string;
    fileType: string;
    customMetadata?: { sensitive: boolean };
}

export default async function Post() {
    // const getFileDetails = async (fileId: string): Promise<IFileDetailsResponse> => {
    //     return new Promise((resolve, reject) => {
    //         imagekit.getFileDetails(fileId, (error, result) => {
    //             if (error) reject(error);
    //             else resolve(result as IFileDetailsResponse);
    //         });
    //     });
    // };

    // const fileDetails = await getFileDetails('67ab91c2432c476416ba9d69');
    // console.log(fileDetails);

    return (
        <div className='p-4 border-y-[1px] border-borderGray'>
            {/* Type of post */}
            <div className='flex items-center gap-2 text-sm text-textGray mb-2 font-bold'>
                <AiOutlineRetweet className='text-lg' />
                <span>dHuy reposted</span>
            </div>

            {/* Content of post */}
            <div className='flex gap-4'>
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

                {/* Content */}
                <div className='flex-1 flex flex-col gap-2'>
                    {/* Top */}
                    <div className='flex items-center justify-between gap-2'>
                        <div className='flex flex-wrap items-center gap-2'>
                            <h1 className='text-lg font-bold'>Nguyễn Đức Huy</h1>
                            <span className='text-sm text-textGray'>@DucHuy_2102</span>
                            <span className='text-sm text-textGray'>1 day ago</span>
                        </div>
                        <PostInfo />
                    </div>

                    {/* Text & Media */}
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo aliquid,
                        tempore pariatur ad illo accusantium quod voluptatum repellendus cum quis
                        sit magni nesciunt et distinctio omnis. Atque, distinctio quas.
                    </p>
                    <Image_Component
                        path='general/post.jpeg'
                        alt='Post_Image'
                        width={600}
                        height={600}
                    />
                    <PostInteraction />
                </div>
            </div>
        </div>
    );
}
