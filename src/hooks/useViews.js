import { useState } from "react";

export default function useViews(views) {
  const [view, setView] = useState(views[0]);
  const [route, setRoute] = useState("/");

  const error = {
    element: <h1>Error useViews Hook: Wrong Link</h1>,
    link: "/error",
  };

  function goTo(link) {
    setRoute(link);
    let found = false;
    views.forEach((view) => {
      if (link === view.link) {
        setView(view);
        found = true;
      }
    });
    if (!found) {
      setView(error);
    }
  }

  return {
    view: view.element,
    route,
    goTo,
  };
}
