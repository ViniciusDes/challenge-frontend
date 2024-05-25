import { Avatar, Box } from "@mui/material";
import React from "react";
import { Typography } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@/components/Input";
import { useForm } from "react-hook-form";
import { TopBarProps } from "./types";
import { useAuth } from "@/hooks/useAuth";
import { useDispatch } from "react-redux";
import { setValueInputSearch } from "@/redux/top-bar/slice";
import { useUsers } from "@/hooks/useUsers";

const TopBar: React.FC<TopBarProps> = ({ placeHolderFilter, titlePage }) => {
  const { control } = useForm();

  const { userAuthenticatedData } = useAuth();
  const { getUsers } = useUsers();
  const dispatch = useDispatch();
  const handleChangeInputSearch = (filter: string) => {
    dispatch(
      setValueInputSearch({
        value: filter,
      })
    );
  };

  return (
    <Box
      padding={"20px 20px"}
      display={"flex"}
      justifyContent={"space-between"}
    >
      <Typography variant="h4" component="h4" fontWeight={"400"}>
        {titlePage}
      </Typography>
      <form onSubmit={(e) => e.preventDefault()}>
        <Box
          width={"30rem"}
          display={"flex"}
          alignItems={"end"}
          flexWrap={"nowrap"}
          gap={"10px"}
        >
          <button type="button" onClick={() => getUsers()}>
            <SearchIcon fontSize="medium" />
          </button>
          <Input
            name="search"
            control={control}
            type="text"
            label=""
            placeholder={placeHolderFilter}
            inputToSearch
            onChangeValue={handleChangeInputSearch}
          />
          <Avatar src="/broken-image.jpg" />
          <Box display={"flex"} flexDirection={"column"} width={"20rem"}>
            <Typography component="strong" fontWeight={"600"}>
              {userAuthenticatedData.userName ?? ""}
            </Typography>

            <Typography component="span" fontSize={"0.8rem"}>
              {userAuthenticatedData.role ?? ""}
            </Typography>
          </Box>
        </Box>
      </form>
    </Box>
  );
};

export default TopBar;
