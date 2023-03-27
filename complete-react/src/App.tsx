import { useState, lazy, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AdoptedPetContext from "./AdoptedPetContext";
import { Pet } from "./APIResponseTypes";

const Details = lazy(() => import("./Details"));
const SearchParams = lazy(() => import("./SearchParams"));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});

const App = () => {
  const adoptedPet = useState(null as Pet | null);

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AdoptedPetContext.Provider value={adoptedPet}>
          <Suspense
            fallback={
              <div className="loading-pane">
                <h2 className="loader">...</h2>
              </div>
            }
          >
            <header>
              <Link to="/">Adopt Me!</Link>
            </header>
            <Routes>
              <Route path={`/details/:id`} element={<Details />} />
              <Route path="/" element={<SearchParams />} />
            </Routes>
          </Suspense>
        </AdoptedPetContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
};

const container = document.getElementById("root");
if (!container) {
  throw new Error("container not exist");
}

const root = createRoot(container);

root.render(<App />);

// return React.createElement("div", {}, [
//   React.createElement("h1", {}, "Adopt Me!"),
//   React.createElement(Pet, {
//     animal: "Dog",
//     name: "Luna",
//     breed: "Havanese",
//   }),
//   React.createElement(Pet, {
//     animal: "Dog",
//     name: "Luna",
//     breed: "Havanese",
//   }),
//   React.createElement(Pet, {
//     animal: "Dog",
//     name: "Luna",
//     breed: "Havanese",
//   }),
// ]);
