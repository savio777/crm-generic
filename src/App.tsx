import { RouterProvider } from "react-router-dom";

import { Routes } from "./routes/Routes";

function App() {
  return (
    <div className="w-full h-dvh bg-white">
      <RouterProvider router={Routes} />
    </div>
  );
}

export default App;
