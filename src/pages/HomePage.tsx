import React, { useEffect, useState } from "react";
import { useGetusersBySearchQuery } from "../api/github";
import Cards from "../components/cards/Cards";
import PaginationComponent from "../components/pagination/PaginationComponent";
import Search from "../components/search/Search";
import Head from "../helpers/Head";
import useDebounce from "../hooks/useDebounce";
import { searchParams } from "../types/types";

const HomePage = () => {
  const [searchTerm, setsearchTerm] = useState<searchParams>({
    page: 1,
    per_page: 10,
    search: "",
    sort: "followers",
  });
  const debouncedText = useDebounce(searchTerm.search, 500);
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

  const handleChange = (event: any) => {
    setsearchTerm({ ...searchTerm, [event.target.name]: [event.target.value] });
  };
  // pagination

  const handleChangePanination = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  const pagesCount = data && data.total_count && Math.ceil(data.total_count / searchTerm.per_page);
  const isData = !!data;
  const isSearchEmpty = !debouncedText[0];

  return (
    <React.Fragment>
      <Head title="Hithub finder" description="With github finder you find users data and repos " />

      {/* Search  Component */}
      <Search handleChange={handleChange} searchTerm={searchTerm} />
      {/* Pagination Component */}
      <PaginationComponent
        pagesCount={pagesCount}
        page={page}
        handleChangePanination={handleChangePanination}
        isData={isData}
        isSearchEmpty={isSearchEmpty}
      />
      {/* cards component  */}
      <Cards isFetching={isFetching} isError={isError} data={data} isSearchEmpty={isSearchEmpty} />
      {/* Pagination Component */}
      <PaginationComponent
        pagesCount={pagesCount}
        page={page}
        handleChangePanination={handleChangePanination}
        isData={isData}
        isSearchEmpty={isSearchEmpty}
      />
    </React.Fragment>
  );
};

export default HomePage;
