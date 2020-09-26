// React & Hooks
import React from 'react';
// Styles
import { Map, TileLayer, Marker, Popup } from 'react-leaflet-universal';
// Libraries
import PropTypes from 'prop-types';

/**
 * MapComponent - Component correspondant à la map
 * Markers affichés selon les membres sélectionnés (tous sélectionnés par défaut - voir MapPageContainer)
 */
const MapComponent = (props) => {
    const {
        selectedMembers
    } = props;

    const position = [47, 1.7];

    return(
        <Map className={"map-component"} center={position} zoom={5} maxZoom={18} style={{ height: "100%" }}>
            <>
                <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                {
                    selectedMembers.map((member) =>
                        <Marker
                            key={member.id}
                            position={member.location.position}
                        >
                            <Popup>
                                <strong>{member.firstName}</strong><br/>
                                {member.activity.details}<br/>
                                <a href={member.activity.establishmentUrl}>
                                    {member.activity.establishment}
                                </a><br/>
                                {member.location.zipCode}{" "}{member.location.city}
                            </Popup>
                        </Marker>
                    )}
            </>
        </Map>
    )
}

export default MapComponent;

MapComponent.propTypes = {
    selectedMembers: PropTypes.array.isRequired,
}