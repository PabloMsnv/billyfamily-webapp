// React & NextJS
import React from "react";
import Head from "next/head";
// Libraries
import PropTypes from 'prop-types';
// Components
import Header from "./layouts/Header";

/**
 * AppLayout Component
 * Layout utilisé pour chaque page de l'application
 * Contient également le style (CSS) global de l'application
 */
const AppLayout = (props) => {
    const {
        pageTitle,
        children
    } = props;

    return(
        <div className={"app-container"}>
            <Head>
                <title>{pageTitle || "BillyFam' App"}</title>
                <link rel="icon" href="/favicon.ico" />
                {/* Google font 'Montserrat' : */}
                <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap"
                      rel="stylesheet"
                />
                {/* Leaflet imports : */}
                <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
                      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
                      crossOrigin=""
                />
                <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
                        integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
                        crossOrigin=""
                />
            </Head>
            <main className={"app-container"}>
                <div className={"header-container"} style={{ height: "70px" }}>
                    <Header />
                </div>
                <div className={"page-content-container"} style={{ height: "600px" }}>
                    { children }
                </div>
            </main>
            <style jsx global>{`
                html,
                body {
                  padding: 0;
                  margin: 0;
                  height: 100vh;
                  font-family: 'Montserrat', sans-serif;
                }
                #__next, .app-container {
                  height: 100%;
                }
                .default-box-shadow {
                  border-radius: 10px;
                  box-shadow: 0 3px 6px rgba(0,0,0,0.16);
                }
                .default-box-shadow:active, .default-box-shadow:disabled {
                  box-shadow: none;
                }
                .billy-selector-button {
                  background-color: #fff;
                  border: none;
                  border-radius: 10px;
                  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.08);                
                }
                .billy-selector-button:active {
                  border: 1px solid #ddd;
                  border-radius: 10px;
                  outline: none;
                  box-shadow: none;
                }
                .billy-selector-button:focus{
                  outline: none;
                }
                .modal-toggle-button {
                  color: #000;
                  background-color: #fff;
                  border: none;
                  border-radius: 10px;
                  box-shadow: 0px 2px 6px rgba(0,0,0,0.16), 0 2px 6px rgba(0,0,0,0.08);
                }
                .modal-group-toggle .btn-light.focus {
                  background-color: #fff;
                  outline: none !important;
                }
                .modal-group-toggle .btn-light.active  {
                  background-color: #eee !important;
                  transition: 0.5s ease;
                  border: none;
                  box-shadow: none;
                }
                .map-component {
                  border-radius: 10px;
                }
              `}
            </style>
        </div>
    )
}

export default AppLayout;

AppLayout.propTypes = {
    pageTitle: PropTypes.string,
}
