import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const WwwflipkartcombyhtmltodesignFREEversion1208 = React.lazy(() =>
  import("pages/WwwflipkartcombyhtmltodesignFREEversion1208"),
);
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route
            path="/wwwflipkartcombyhtmltodesignfreeversion1208"
            element={<WwwflipkartcombyhtmltodesignFREEversion1208 />}
          />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
