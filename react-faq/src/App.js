import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Faq from "./component/Faq";
import AddFaq from "./component/AddFaq";
import EditFaq from "./component/EditFaq";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Faq} />
        <Route exact path="/faqs/create" component={AddFaq} />
        <Route exact path="/faqs/update/:id" component={EditFaq} />
      </Switch>
    </Router>
  );
};

export default App;
