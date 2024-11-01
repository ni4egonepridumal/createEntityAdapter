import { useEffect } from "react";
import { useGetPostsQuery } from "./features/aipi";
import { store } from "./store";

function App() {
  const { data } = useGetPostsQuery();
  console.log("steyt", store.getState().users);
  useEffect(() => {}, [data]);
  console.log("data", data);
  return (
    <div>
      <button>Получить посты в консоль</button>
      Hello world
    </div>
  );
}

export default App;
