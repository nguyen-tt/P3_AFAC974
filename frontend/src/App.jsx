import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Gallery from "./pages/Gallery";
import Author from "./pages/Author";
import About from "./pages/About";
import Account from "./pages/Account";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Page404 from "./pages/Page404";
import Mention from "./pages/Mention";

import Footer from "./components/Footer";
import Header from "./components/Header";
import AccountDashboard from "./components/AccountDashboard";
import AdminWorks from "./components/AdminWorks";
import AdminWorksList from "./components/AdminWorksList";
import AdminWorksAdd from "./components/AdminWorksAdd";
import AdminWorksUpdate from "./components/AdminWorksUpdate";
import AdminWorksDelete from "./components/AdminWorksDelete";
import AdminUsers from "./components/AdminUsers";
import AdminUsersList from "./components/AdminUsersList";
import AdminUsersAdd from "./components/AdminUsersAdd";
import AdminUsersUpdate from "./components/AdminUsersUpdate";
import AdminUsersDelete from "./components/AdminUsersDelete";
import AdminAuthors from "./components/AdminAuthors";
import AdminAuthorsList from "./components/AdminAuthorsList";
import AdminAuthorsAdd from "./components/AdminAuthorsAdd";
import AdminAuthorsDelete from "./components/AdminAuthorsDelete";
import UserUpdate from "./components/UserUpdate";

import { CurrentUserProvider } from "./contexts/CurrentUser";

import "./styles.scss";

function App() {
  return (
    <div className="App">
      <CurrentUserProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/author" element={<Author />} />
            <Route path="/about" element={<About />} />
            <Route path="/account" element={<Account />}>
              <Route index element={<AccountDashboard />} />
              <Route path="info" element={<UserUpdate />} />
              <Route path="works" element={<AdminWorks />}>
                <Route index element={<AdminWorksList />} />
                <Route path="add" element={<AdminWorksAdd />} />
                <Route path=":id" element={<AdminWorksUpdate />} />
                <Route path="delete/:id" element={<AdminWorksDelete />} />
              </Route>
              <Route path="users" element={<AdminUsers />}>
                <Route index element={<AdminUsersList />} />
                <Route path="add" element={<AdminUsersAdd />} />
                <Route path=":id" element={<AdminUsersUpdate />} />
                <Route path="delete/:id" element={<AdminUsersDelete />} />
              </Route>
              <Route path="authors" element={<AdminAuthors />}>
                <Route index element={<AdminAuthorsList />} />
                <Route path="add" element={<AdminAuthorsAdd />} />
                <Route path="delete/:id" element={<AdminAuthorsDelete />} />
              </Route>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/mention" element={<Mention />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </Router>
      </CurrentUserProvider>
    </div>
  );
}

export default App;
