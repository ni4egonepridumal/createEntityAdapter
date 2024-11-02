import { useEffect } from "react";
import { useGetPostsQuery } from "./features/aipi";
import { store } from "./store";
import { useSelector } from "react-redux";
import {
  selectAll,
  selectEntities,
  selectIds,
  selectTotal,
} from "./features/test/testSlice";

function App() {
  const { data } = useGetPostsQuery();
  console.log("steyt", store.getState().users);
  useEffect(() => {}, [data]);
  console.log("data", data);
  const hz = useSelector(selectAll);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //@ts-ignore
  const id = useSelector(selectIds);
  const entitues = useSelector(selectEntities);
  const test = useSelector(selectTotal);
  console.log("hz", hz, "entitues", entitues, "id", id, "test", test);
  return (
    <div>
      <button>Получить посты в консоль</button>
      Hello world
    </div>
  );
}

export default App;
