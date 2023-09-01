import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import styles from 'styles/common/Pagination.module.scss'
import { Box, Pagination, Stack } from '@mui/material';


type Props = {
  page: number | null;
  total_pages: number | null;
  total_data: number | null;
  next_page: number | null;
  previous_page: number | null;
}

function CustomPagination({ page, total_pages, total_data, next_page, previous_page , handleChange}) {
  const total = Math.ceil(total_data / 10)

  return (
    <Box
      className={styles.pagination_container}
    >
      <Pagination
        page={Number(page) || 1}
        count={total}
        color="primary"
        disabled={total <= 1 || false}
        onChange={handleChange}
      />
    </Box>
  );
}

export default CustomPagination
