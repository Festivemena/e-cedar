import Link from 'next/link';
import { useRouter } from 'next/router';
import { Bungee, Noto_Sans, Chakra_Petch } from '@next/font/google';
import { category } from '../utils/constants';

const roboto = Chakra_Petch({
  weight: '400',
  style: ['normal'],
  subsets: ['latin'],
  display: 'optional'
})


const Discover = () => {
  const router = useRouter();
  const { Categories } = router.query;

  const activeCategoryStyle = 'xl:border-2 hover:bg-primary xl:border-[#F51997] px-2 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#F51997]';
  const categoryStyle = 'xl:border-2 hover:bg-primary xl:border-gray-300 px-2 py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-gray-500';

  return (
    <div className={roboto.className}>
    <div className='xl:border-b-2 xl:border-gray-200 pb-6'>
      <p className='text-gray-500 font-semibold  mt-4 hidden xl:block'>
        Popular Categories
      </p>
      <div className='flex gap-3 flex-wrap'>
        {category?.map((item) => (
          <Link href={`/?category=${item.name}`} key={item.name}>
            <div className={Categories === item.name ? activeCategoryStyle : categoryStyle}>
              <span className='font-bold text-[18px] lg:text-2xl xl:text-md '>
                {item.icon}
              </span>
              <span className={`font-medium text-[16px] hidden xl:block capitalize`}>
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div></div>
  );
};

export default Discover;
