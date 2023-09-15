import React, { useState } from "react";
import { Link } from "react-router-dom";
import { styled, alpha } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import InputBase from "@mui/material/InputBase";
import {
  Avatar,
  Checkbox,
  CircularProgress,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { Favorite, FavoriteBorder, SportsBar } from "@mui/icons-material";

import { useBreweries } from "../hooks/breweis";
import { Error } from "./Error";
import Footer from "./Footer";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const ListBrew = () => {
  const { breweries, loading, error, removePrefix } = useBreweries();
  const [searchText, setSearchText] = useState("");

  const filteredBreweries = breweries.filter((brewery) => {
    return brewery.city.toLowerCase().includes(searchText.toLowerCase());
  });

  return (
    <>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          value={searchText}
          name="searchText"
          inputProps={{ "aria-label": "search" }}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </Search>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Logo</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>City</TableCell>
              <TableCell>Street</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          {error && <Error error={error} />}
          <TableBody>
            {loading && <CircularProgress />}

            {filteredBreweries.map((brewery) => (
              <TableRow key={brewery.id}>
                <TableCell>
                  <Avatar sx={{ bgcolor: "purple" }}>
                    <SportsBar />
                  </Avatar>
                </TableCell>
                <TableCell>
                  <Link to={`/brewery/${brewery.id}`}>
                    {removePrefix(brewery.name)}
                  </Link>
                </TableCell>

                <TableCell>{brewery.city}</TableCell>
                <TableCell>{brewery.street}</TableCell>
                <TableCell>
                  <IconButton aria-label="add to favorites">
                    <Checkbox
                      icon={<FavoriteBorder />}
                      checkedIcon={<Favorite sx={{ color: "red" }} />}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Footer />
    </>
  );
};

export default ListBrew;
