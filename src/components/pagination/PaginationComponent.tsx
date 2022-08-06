import { Stack, Typography } from "@mui/material";
import React from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationProps } from "../../types/types";

const PaginationComponent = ({
  pagesCount,
  page,
  handleChangePanination,
  isData,
  isSearchEmpty,
}: PaginationProps) => {
  return (
    <React.Fragment>
      {isData && !isSearchEmpty && (
        <Stack spacing={2} sx={{ display: "flex", alignItems: "center" }}>
          <Typography>Page: {page}</Typography>
          <Pagination count={pagesCount} page={page} onChange={handleChangePanination} />
        </Stack>
      )}
    </React.Fragment>
  );
};

export default PaginationComponent;
