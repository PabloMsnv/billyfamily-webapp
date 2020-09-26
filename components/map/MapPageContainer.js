// React & Hooks
import React, { useState } from "react";
// Libraries
import PropTypes from "prop-types";
// Components
import MemberSelector from "../memberSelector/MemberSelector";
import MapComponent from "./mapComponent/MapComponent";

/**
 * MapPageContainer - Container correspondant à la page "map" de l'application
 */
const MapPageContainer = (props) => {
    const {
        membersData,
        membersId
    } = props;

    const [selectedMembers, setSelectedMembers] = useState(membersData);

    const getSelectedMembersId = (arrayFromSelector) => {
        if (Array.isArray(arrayFromSelector) && arrayFromSelector.length) {
            let tmpArray = [];
            membersData.forEach((member) => {
                arrayFromSelector.includes(member.id) &&
                tmpArray.push(member);
            })
            setSelectedMembers(tmpArray);
        } else {
            setSelectedMembers([]);
        }
    }

    return(
        <div className={"map-page-container h-100 px-2 border-bottom"}>
            <div className={"page-title-container mt-3 w-100 d-flex justify-content-center"}
                 style={{ height: "45px", marginBottom: "15px" }}
            >
                <h3 className={"page-title border-bottom"}><strong>{"The Billy Map"}</strong></h3>
            </div>
            <div className={"map-content-container px-4"}>
                <div className={"map-searchbar-container w-100 mb-3 py-1"} style={{ height: "50px" }}>
                    <MemberSelector
                        membersData={membersData}
                        membersId={membersId}
                        getSelectedMembersId={getSelectedMembersId}
                    />
                </div>
                <div className={"map-container w-100"} style={{ height: "550px" }}>
                    <MapComponent selectedMembers={selectedMembers}/>
                </div>
            </div>
        </div>
    )
}

export default MapPageContainer;

MemberSelector.propTypes = {
    membersData: PropTypes.array.isRequired,
    membersId: PropTypes.arrayOf(PropTypes.number).isRequired
}