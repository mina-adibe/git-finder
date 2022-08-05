import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Pagination from "@mui/material/Pagination";
import { PaginationProps } from "../../types/types";

const PaginationComponent = ({ pagesCount, page, handleChangePanination }: PaginationProps) => {
  return (
    <React.Fragment>
      <Stack spacing={2} sx={{ display: "flex", alignItems: "center", width: "60%" }}>
        <Typography>Page: {page}</Typography>
        <Pagination count={pagesCount} page={page} onChange={handleChangePanination} />
      </Stack>
    </React.Fragment>
  );
};

export default PaginationComponent;
