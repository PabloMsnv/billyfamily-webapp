/**
 * {appUrl}/api/billyMembersData
 * JSON contenant les différentes informations, utiles à l'app, à propos des membres de la Billy Fam'
 */

const membersDataJSON = [
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

export default (req, res) => {
    res.status(200).json(membersDataJSON);
}