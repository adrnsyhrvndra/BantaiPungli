import usePagination from '@mui/material/usePagination';
import { styled } from '@mui/material/styles';
import ArrowLeftPagination from "../assets/arrow-left-pagination.png";
import ArrowRightPagination from "../assets/arrow-right-pagination.png";
import workSans from '@/libs/FontWorkSans';
import Image from "next/image";

const Pagination = () => {
      const List = styled('ul')({
            listStyle: 'none',
            padding: 0,
            margin: 0,
            display: 'flex',
            gap: '16px',
            alignItems: 'center',

      });


      const { items } = usePagination({
            count: 4,
      });

      const handleTypePagination = (type) => {
            if (type === 'next') {
                  return (
                        <Image
                              src={ArrowRightPagination}
                              alt="Arrow Right Pagination"
                              width={16}
                              height={16}
                        />
                  );
            } else {
                  return (
                        <Image
                              src={ArrowLeftPagination}
                              alt="Arrow Left Pagination"
                              width={16}
                              height={16}
                        />
                  );
            }
      }

      const handleActivePagination = (selected) => {
            if (selected) {
                  return 'bg-primary text-white';
            } else {
                  return 'bg-[#E3E5E6] text-[#0A0D15]';
            }
      }

      return (
            <List>

                  {items.map(({ page, type, selected, ...item }, index) => {

                        let children = null;

                        if (type === 'start-ellipsis' || type === 'end-ellipsis') {

                              children = '…';

                        } else if (type === 'page') {

                              children = (
                                    <button 
                                          className={`px-5 py-3 ${handleActivePagination(selected)} rounded-lg font-medium text-base`}
                                          type="button" 
                                          style={workSans.style}
                                          {...item}
                                    >
                                          {page}
                                    </button>
                              );

                        } else {
                              children = (
                                    
                                    <button 
                                          className='px-5 py-4 bg-black text-white rounded-lg' 
                                          type="button" {...item}
                                    >
                                          { handleTypePagination(type) }
                                    </button>
                              );
                        }

                        return <li key={index}>{children}</li>;
                  })}
                  
            </List>
      )
}

export default Pagination