import Link from 'next/link';
import { useRouter } from 'next/router';

import { category } from '../utils/constants';

const Discover = () => {
  const router = useRouter();
  const { Categories } = router.query;

  const activeCategoryStyle = 'xl:border-2 hover:bg-primary xl:border-[#F51997]  py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-[#F51997]';
  const categoryStyle = 'xl:border-2 hover:bg-primary xl:border-gray-300  py-2 rounded xl:rounded-full flex items-center gap-2 justify-center cursor-pointer text-gray-500';

  return (
    <div className='xl:border-b-2 xl:border-gray-200 pb-6'>
      <p className='text-gray-500 font-semibold  mt-4 hidden xl:block'>
        Popular Categories
      </p>
      <div className='flex gap-3 flex-wrap'>
        {category?.map((item) => (
          <Link href={`/?category=${item.name}`} key={item.name}>
            <div className={Categories === item.name ? activeCategoryStyle : categoryStyle}>
              <span className='font-bold text-[16px] xl:text-md '>
                {item.icon}
              </span>
              <span className={`font-medium text-md hidden xl:block capitalize`}>
                {item.name}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Discover;
