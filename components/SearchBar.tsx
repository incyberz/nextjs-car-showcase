"use client";
import { useState } from "react";
import SearchManufacturer from "./SearchManufacturer";
import Image from "next/image";
import { SearchButtonProps } from "@/types";
import SearchButton from "./SearchButton";

const SearchBar = () => {
  const handleSearch = () => {};
  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  return (
    <form onSubmit={handleSearch} className="searchbar debug">
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>

      <div className="searchbar__item">
        <Image
          src={"/model-icon.png"}
          width={25}
          height={25}
          className="absolute w-[20px] h-[20px] ml-4"
          alt="car model icon"
        />

        <input
          type="text"
          name="model"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input debug-blue"
        />
        <SearchButton otherClasses="sm:hidden debug-yellow" />
      </div>
      <SearchButton otherClasses="max-sm:hidden debug" />
    </form>
  );
};

export default SearchBar;
