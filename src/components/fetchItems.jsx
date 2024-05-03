import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsActions } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/FetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;

    dispatch(fetchStatusActions.markFetchingStarted());
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((products) => {
        dispatch(fetchStatusActions.markFetchDone());

        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsActions.addInitialItems(products));
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      <div>
        Fetch Done: {fetchStatus.fetchDone}
        Currently Fetching : {fetchStatus.currentlyFetching}
      </div>
    </>
  );
};
export default FetchItems;
