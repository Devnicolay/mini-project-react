import React, { useEffect, useState } from "react";
import MoviesPage from "./pages/MoviesPage";

function App() {
  const [isDisplayed, setIsDisplayed] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setIsDisplayed(true);
    }, 1200);
  }, []);

  return (
    <div className="App">
      {isDisplayed && (
        <>
          <MoviesPage />
        </>
      )}
    </div>
  );
}

export default App;
