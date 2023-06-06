import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../hooks";
import { useEffect } from "react";
import { getMovies } from "../store/slice/Movies/actions";

const Main = () => {

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch])

  return (
    <main className="mt-14">
      <Outlet />
    </main>
  );
};

export default Main;
