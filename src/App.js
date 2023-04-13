import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Landing from "./pages/Landing";
import ScrollToTop, { ScrollTop } from "./style/js/globalFuns";

function App() {
  return (
    <Router>
      <Fragment>
        {/* <ScrollToTop /> */}
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </Fragment>
      <ScrollTop />
    </Router>
  );
}

export default App;
