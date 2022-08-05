import { Paper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useGetusersBySearchQuery } from "../api/github";
import Cards from "../components/cards/Cards";
import PaginationComponent from "../components/pagination/PaginationComponent";
import Search from "../components/search/Search";
import useDebounce from "../hooks/useDebounce";
import { searchParams } from "../types/types";

const HomePage = () => {
  const [searchTerm, setsearchTerm] = useState<searchParams>({
    page: 1,
    per_page: 10,
    search: "",
    sort: "followers",
  });
  const debouncedText = useDebounce(searchTerm.search, 2000);
  const [page, setPage] = React.useState(1);

  const { isFetching, isError, data } = useGetusersBySearchQuery(
    {
      search: debouncedText,
      sort: searchTerm.sort,
      per_page: searchTerm.per_page,
      page: page,
    },
    { skip: debouncedText === "" ? true : false || debouncedText[0] === "" }
  );

  useEffect(() => {
    console.log("dataaaaa", data);
  }, [data]);

  const handleChange = (event: any) => {
    setsearchTerm({ ...searchTerm, [event.target.name]: [event.target.value] });
  };
  // pagination

  const handleChangePanination = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  let pagesCount = data && data.total_count && Math.ceil(data.total_count / searchTerm.per_page);

  return (
    <React.Fragment>
      {/* Search  Component */}
      <Search handleChange={handleChange} searchTerm={searchTerm} />
      {/* Pagination Component */}
      <PaginationComponent
        pagesCount={pagesCount}
        page={page}
        handleChangePanination={handleChangePanination}
      />
      {/* cards component  */}
      <Paper sx={{ mx: "auto", width: "60%", my: "40px", p: "15px" }}>
        <Cards isFetching={isFetching} isError={isError} data={data} />
      </Paper>
    </React.Fragment>
  );
};

export default HomePage;
