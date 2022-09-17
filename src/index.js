import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from "react-helmet-async"
import "./style.sass"
import "./slide.css"
import { lazy } from 'react';
import LoadingWrap1 from './Component/Loading/LoadingWrap1';
const App= lazy(()=> import("./App"))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <HelmetProvider>
        <Suspense fallback={<LoadingWrap1 />}>
            <App />
        </Suspense>
    </HelmetProvider>
);

