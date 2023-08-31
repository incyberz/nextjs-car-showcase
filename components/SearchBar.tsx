"use client";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { SearchButtonProps } from "@/types";
import SearchButton from "./SearchButton";

const SearchBar = () => {
  const handleSearch = () => {};
  const [manufacturer, setManufacturer] = useState("");

  return (
    <form onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="zzzsm:hidden" />
      </div>
    </form>
  );
};

export default SearchBar;
