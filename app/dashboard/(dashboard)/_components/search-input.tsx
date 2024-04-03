"use client";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";
import { useDebounceValue } from "usehooks-ts";

import { Input } from "@/components/ui/input";
import queryString from "query-string";

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState(" ");
  const [debouncedValue] = useDebounceValue(value, 500);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    const url = queryString.stringifyUrl(
      {
        url: "/dashboard",
        query: {
          search: debouncedValue || undefined,
        },
      },
      { skipEmptyString: true, skipNull: true }
    );

    router.push(url);
  };

  // useEffect(() => {
  //   const url = queryString.stringifyUrl(
  //     {
  //       url: "/",
  //       query: {
  //         search: debouncedValue || undefined,
  //       },
  //     },
  //     { skipEmptyString: true, skipNull: true }
  //   );

  //   router.push(url);
  // }, [debouncedValue, router]);

  return (
    <div className="w-full relative">
      <Search className="absolute top-1/2 left-3 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search here...."
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchInput;
