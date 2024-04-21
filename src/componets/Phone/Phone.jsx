import React from 'react'
import { useState } from 'react';

import styles from './Phone.module.css'
import Icons from '../icons/Icons';

// import {
//     createBrowserRouter,
//     RouterProvider,
//   } from "react-router-dom";
  
//   const router = createBrowserRouter([
//     {
//       path: "/",
//       element: <App/>
//     },
//     {
//       path: "/aboutus",
//       element: <AboutUs/>,
//     },
//   ]);
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(
//     <React.StrictMode>
//       <RouterProvider router={router} />
//     </React.StrictMode>
//   );

const Phone = () => {
    const appRow = [ styles.app, styles.app_2_row , styles.app_3_row , styles.app_4_row]
    const [app, setApp] = useState(false);

    const handleApp = () => {
        setApp(!app)
    }
    return (
        <div className={styles.iphone}>
            <div className={styles.screen}>
                <div className={styles.notch}></div>
                <div className={styles.icons}>
                    <div className={styles.widget}></div>
                </div>
                <button className={app ? styles.dontLiked : styles.liked} onClick={handleApp}></button>
                {appRow.map(icon => <Icons cN={icon}/>)}
            </div>
        </div>
    );
}



export default Phone

//rafce