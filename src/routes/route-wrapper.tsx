import Loading from "@/components/Layout/Loading";
import TopBar from "@/components/Layout/TopBar";
import { TopBarProps } from "@/components/Layout/TopBar/types";
import { useAuth } from "@/hooks/useAuth";
import { RootState } from "@/redux/store";
import { Box } from "@mui/material";
import React, { ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

interface RouteWrapperProps extends TopBarProps {
  element: ReactNode;
}
const RouteWrapper: React.FC<RouteWrapperProps> = ({
  element,
  placeHolderFilter,
  titlePage,
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();
  const { isLoading } = useSelector(
    (rootState: RootState) => rootState.loadingReducer
  );

  useEffect(() => {
    if (!isAuthenticated && location.pathname !== "/") {
      navigate("/");
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <>
        <Loading isLoading={isLoading} />
        {element}
      </>
    );
  }

  return (
    <Box padding={"0 20px"}>
      <Loading isLoading={isLoading} />
      <TopBar placeHolderFilter={placeHolderFilter} titlePage={titlePage} />
      <>{element}</>
    </Box>
  );
};

export default RouteWrapper;
