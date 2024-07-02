import { styled } from '@mui/material/styles';
import ArrowLeftPagination from "../assets/arrow-left-pagination.png";
import ArrowRightPagination from "../assets/arrow-right-pagination.png";
import workSans from '@/libs/FontWorkSans';
import Image from "next/image";
import React, { useState } from 'react';
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import Stack from '@mui/material/Stack';

const Paginations = ({totalItems,itemsPerPage,currentPage,onPageChange}) => {

      const totalPages = Math.ceil(totalItems / itemsPerPage);

      const [page, setPage] = useState(1);

      const handleChange = (event, value) => {
            setPage(value);
      };
        
      const ArrowBackIcon = () => (
            <Image alt='arrow-left-pagination' width={16} height={16} src={ArrowLeftPagination} />
      );

        
      const ArrowForwardIcon = () => (
            <Image alt='arrow-right-pagination' width={16} height={16} src={ArrowRightPagination} />
      );

      const backgroundColor = (item) => {
            if ( item.type === 'page' ) {
                  return '#E3E5E6'
            } else {
                  return '#17181C'
            }
      }

      const handleColor = (item) => {
            if ( item.type === 'page' ) {
                  return '#17181C'
            } else {
                  return 'white'
            }
      }

      return (

            <div style={workSans.style}>

                  <Stack spacing={3}>
                        <Pagination
                              size="large"
                              shape="rounded"
                              color="error"
                              count={totalPages}
                              page={currentPage}
                              onChange={onPageChange}
                              renderItem={(item) => {

                                    return (
                                          <PaginationItem
                                                sx={{ 
                                                      color: handleColor(item),
                                                      borderRadius: "4px",
                                                      paddingX: "20px",
                                                      paddingY: "16px",
                                                      fontFamily: 'Work Sans',
                                                      backgroundColor: backgroundColor(item),
                                                }}
                                                slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
                                                {...item}
                                          />
                                    )
                              }}
                        />
                  </Stack>

            </div>

      )
}

export default Paginations