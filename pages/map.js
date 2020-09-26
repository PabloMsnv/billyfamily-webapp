// React
import React from "react";
// Libraries
import fetch from "isomorphic-unfetch";
// Components
import AppLayout from "../components/AppLayout";
import MapPageContainer from "../components/map/MapPageContainer";

/**
 * MapPage - Page correspondant à la map
 * Prend en paramètres les props retournés par la méthode getStaticProps pour ensuite les passer au container
 */
const MapPage = ({ membersData, membersIdArray }) => {
    return(
        <AppLayout pageTitle={"Billy Map"}>
            <MapPageContainer
                membersData={membersData}
                membersId={membersIdArray}
            />
        </AppLayout>
    )
}

/**
 * getStaticProps - Méthode permettant de requêter les données au chargement de la page
 * Utile ici pour charger les données concernant les membres de la billy family ainsi que leurs ids
 */
export async function getStaticProps() {

    let membersData = [
        {
            id: 1,
            firstName: "Pablo",
            lastName: "Maisonnave",
            location: {
                city: "Brest",
                zipCode: "29200",
                position: [48.4068403, -4.495359]
            },
            activity: {
                type: "studies",
                details: "M1 Ingénieur \"Génie Logiciel\"",
                establishment: "ISEN Brest",
                establishmentUrl: "http://isen-brest.fr/",
                city: "Brest",
                zipCode: "29200",
                position: [48.4068403, -4.495359]
            },
            alternance: {
                status: true,
                type: "job",
                details: "Développeur Web",
                establishment: "OUI SNCF",
                establishmentUrl: "http://oui.sncf/",
                city: "Nantes",
                zipCode: "44000",
                position: [47, -1.7]
            },
            photo: ""
        },
        {
            id: 2,
            firstName: "Ludivine",
            lastName: "Grignon",
            location: {
                city: "Nantes",
                zipCode: "44000",
                position: [47.1944885,-1.5490329]
            },
            activity: {
                type: "studies",
                details: "L3 Infirmière",
                establishment: "IFSI Nantes",
                establishmentUrl: "http://ifsi-nantes.fr/",
                city: "Nantes",
                zipCode: "44000",
                position: [47.1944885,-1.5490329]
            },
            alternance: {
                status: false
            },
            photo: ""
        },
        {
            id: 3,
            firstName: "Teddy",
            lastName: "Thirion",
            location: {
                city: "Nantes",
                zipCode: "44000",
                position: [47.234939931073,-1.5566158842267996]
            },
            activity: {
                type: "studies",
                details: "M1 Info Gestion",
                establishment: "Université de Nantes",
                establishmentUrl: "http://univ-nantes.fr/",
                city: "Nantes",
                zipCode: "44000",
                position: [47.234939931073,-1.5566158842267996]
            },
            alternance: {
                status: false
            },
            photo: ""
        }
    ]

    // let apiMembersDataUrl = process.env.api_membersData_url;
    // let res = await fetch(apiMembersDataUrl);
    // let membersData = await res.json();

    let membersIdArray = [];
    membersData.forEach((member) => {
        membersIdArray.push(member.id)
    })

    return {
        props: {
            membersData,
            membersIdArray,
        }
    }
}

export default MapPage;