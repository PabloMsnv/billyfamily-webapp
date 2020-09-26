/**
 * Fichier de config de l'application
 * Permet notamment de gérer les variables d'environnement
 */

module.exports = {
    env : {
        api_membersData_url: process.env.NODE_ENV === "development" ? "http://localhost:3000/api/billyMembersData" : "http://url/api/billyMembersData",
    }
}