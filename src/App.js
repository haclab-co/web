import React, { useEffect, useState } from "react";
import "./styles/App.scss";
import Header from "./Components/Header";
import gsap from "gsap";
import { Route, Switch } from "react-router-dom";
import Navigation from "./Components/Navigation";

//pages
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Work from "./Pages/Work";
import Shop from "./Pages/Shop";

const routes = [
  { path: '/', name: 'Home', Component: Home },
  { path: '/about', name: 'About', Component: About },
  { path: '/contact', name: 'Contact', Component: Contact },
  { path: '/work', name: 'Work', Component: Work },
  { path: '/services', name: 'Our Services', Component: Shop },
]

function debounce(fn, ms) {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null
      fn.apply(this, arguments)
    }, ms);
  }
}

const App = () => {

  //prevent flashing
  gsap.to('body', .5, { css: { visibility: 'visible' } })


  const [dimensions, setDimensions] = useState({
    height: window.innerHeight,
    width: window.innerWidth
  })
  useEffect(() => {

    let vh = dimensions.height * .01
    document.documentElement.style.setProperty('--vh', `${vh}px`)

    const debouncedHandleResize = debounce(function () {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth
      })
    }, 1000)
    window.addEventListener('resize', debouncedHandleResize)

    return () => {
      window.removeEventListener('resize', debouncedHandleResize)
    }
  }, [dimensions])

  return (
    <>
      <Header className='headerComponent' dimensions={dimensions} />
      {
        console.log(dimensions)

      }
      <div className='App'>
        <Switch>
          {
            routes.map(({ path, Component }) =>
              <Route key={path} exact path={path}>
                <Component />
              </Route>)
          }
        </Switch>
      </div>
      <Navigation />
    </>
  );
}

export default App;
