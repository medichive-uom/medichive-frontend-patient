// AppRouter.tsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { getRoutes } from ".";



const AppRouter: React.FC = () => {
  const routes = getRoutes();

  return (   
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Routes>
    
  );
};

export default AppRouter;
