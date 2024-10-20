import React, { Suspense, useLayoutEffect } from 'react'
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom';

// Preloader
const Preloader = React.lazy(() => import("./components/layouts/Preloader"));

// Pages
const Home = React.lazy(() => import("./components/pages/Home"));
const Hometwo = React.lazy(() => import("./components/pages/Hometwo"));
const Homethree = React.lazy(() => import("./components/pages/Homethree"));
const Roomgrid = React.lazy(() => import("./components/pages/Roomgrid"));
const Roomlist = React.lazy(() => import("./components/pages/Roomlist"));
const Roomdetails = React.lazy(() => import("./components/pages/Roomdetails"));
const Blog = React.lazy(() => import("./components/pages/Blog"));
const Blogstandard = React.lazy(() => import("./components/pages/Blogstandard"));
const Blogdetails = React.lazy(() => import("./components/pages/Blogdetails"));
const Contact = React.lazy(() => import("./components/pages/Contact"));
const About = React.lazy(() => import("./components/pages/About"));
const Gallery = React.lazy(() => import("./components/pages/Gallery"));
const Restaurant = React.lazy(() => import("./components/pages/Restaurant"));
const Places = React.lazy(() => import("./components/pages/Places"));
const Placesdetails = React.lazy(() => import("./components/pages/Placesdetails"));
const Offers = React.lazy(() => import("./components/pages/Offers"));
const Menu = React.lazy(() => import("./components/pages/Menu"));


// Scroll to Top
const ScrollToTop = withRouter(({ children, location: { pathname } }) => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return children || null
})


function App() {
  return (
    <Router>
      <Suspense fallback={<div></div>}>
        <ScrollToTop>
          <Preloader />
          <Route path="/" exact component={Home} />
          <Route path="/home-v2" exact component={Hometwo} />
          <Route path="/home-v3" exact component={Homethree} />
          <Route path="/room-grid" exact component={Roomgrid} />
          <Route path="/room-list" exact component={Roomlist} />
          <Route path="/room-details/:id" exact component={Roomdetails} />
          <Route path="/blog" exact component={Blog} />
          <Route path="/blog/cat/:catId" exact component={props => (<Blog {...props} key={window.location.pathname}/>)} />
          <Route path="/blog/tag/:tagId" exact component={props => (<Blog {...props} key={window.location.pathname}/>)} />
          <Route path="/blog/user/:userId" exact component={props => (<Blog {...props} key={window.location.pathname}/>)} />
          <Route path="/blog-standard" exact component={Blogstandard} />
          <Route path="/blog-details/:id" exact component={Blogdetails} />
          <Route path="/contact" exact component={Contact} />
          <Route path="/about" exact component={About} />
          <Route path="/gallery" exact component={Gallery} />
          <Route path="/restaurant" exact component={Restaurant} />
          <Route path="/places" exact component={Places} />
          <Route path="/places-details/:id" exact component={Placesdetails} />
          <Route path="/offers" exact component={Offers} />
          <Route path="/menu" exact component={Menu} />
        </ScrollToTop>
      </Suspense>
    </Router>
  );
}

export default App;
