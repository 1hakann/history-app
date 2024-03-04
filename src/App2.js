import { useRoutes } from 'react-router-dom';

export default function App() {
    const routes = useRoutes([
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/eras",
        element: <Eras />,
        children: [
          {
            path: "medieval",
            element: <MedievalEra />,
          },
          {
            path: "digital",
            element: <DigitalEra />,
          },
          {
            path: ":type",
            element: <EraType />,
          },
        ],
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ]);
   
    return (
      <>
        <Nav />
        {routes}
      </>
    );
   }