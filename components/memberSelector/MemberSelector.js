// React & Hooks
import React, { useState } from 'react';
// Styles
import { Button, Modal, ToggleButtonGroup, ToggleButton, Row, Col, Image } from "react-bootstrap";
import { BsCheckCircle } from 'react-icons/bs';
import { ImCheckboxChecked, ImCheckboxUnchecked } from 'react-icons/im';
import { MdPersonPinCircle, MdLocationOn } from 'react-icons/md';
// Libraries
import PropTypes from 'prop-types';

/**
 * MemberSelector - Component permettant de sélectionner des membres de la BillyFamily
 * Ce component permet notamment de filtrer les membres à afficher
 */
const MemberSelector = (props) => {
    const {
        membersData,
        membersId,
        getSelectedMembersId
    } = props;

    const [modalShow, setModalShow] = useState(false);
    const [selectedMembersId, setSelectedMembersId] = useState(membersId);
    const [membersDisplayed, setMembersDisplayed] = useState(membersId);

    const handleShow = () => {
        setModalShow(true);
    }

    const handleClose = () => {
        setTimeout(() => {
            setModalShow(false);
            setSelectedMembersId(membersDisplayed);
        }, 100)
    }

    const handleValidation = () => {
        setTimeout(() => {
            getSelectedMembersId(selectedMembersId);
            setMembersDisplayed(membersId);
            setModalShow(false);
        }, 100)
    }

    const handleUncheckAll = () => {
        setSelectedMembersId([]);
    }

    const handleCheckAll = () => {
        setSelectedMembersId(membersId);
    }

    return (
        <div className={"billy-selector-component w-100 h-100"}>
            {
                modalShow === false ? (
                    <button className={"billy-selector-button w-100 h-100"} onClick={handleShow}>
                        <MdPersonPinCircle/>
                        {" Choisir un billy"}
                    </button>
                ) : (
                    <Modal show={modalShow} onHide={handleClose}>
                        <Modal.Body>
                            <ToggleButtonGroup className={"modal-group-toggle w-100"} type={"checkbox"} value={selectedMembersId} onChange={setSelectedMembersId} vertical>
                                {
                                    membersData.map((member) =>
                                        <ToggleButton
                                            className={"modal-toggle-button mb-3 py-3"}
                                            key={member.id}
                                            value={member.id}
                                            variant={"light"}
                                        >
                                            <Row>
                                                <Col xs={4}>
                                                    <Image
                                                        className={"profile-pic shadow"}
                                                        src={"/images/profilePics/" + (member.firstName + "-" + member.lastName).toLowerCase() + ".jpg"}
                                                        alt={"profile-pic"}
                                                        height="50"
                                                        rounded
                                                    />
                                                </Col>
                                                <Col>
                                                    <Row>
                                                        <span><strong>{" " + member.firstName + " " + member.lastName}</strong></span>
                                                    </Row>
                                                    <Row className={"d-flex align-items-center"}>
                                                        <MdLocationOn />
                                                        {" " + member.location.city}
                                                    </Row>
                                                </Col>
                                                {
                                                    selectedMembersId.includes(member.id) && (
                                                        <Col xs={2} className={"d-flex align-items-center"}>
                                                            <BsCheckCircle
                                                                className={"w-auto"}
                                                                style={{ color: "#28a745", height: "30px" }}
                                                            />
                                                        </Col>
                                                    )
                                                }
                                            </Row>
                                        </ToggleButton>
                                    )
                                }
                            </ToggleButtonGroup>
                        </Modal.Body>
                        <Modal.Footer>
                            <Row className={"w-100 border-bottom mb-2 pb-3"}>
                                <Col className={"d-flex align-items-center"} style={{ paddingLeft: 0 }}>
                                    <Button
                                        className={"w-100 default-box-shadow"}
                                        variant={"light"}
                                        onClick={handleUncheckAll}
                                        disabled={ selectedMembersId.length === 0 }
                                    >
                                        <small>
                                            <ImCheckboxUnchecked />
                                            <span className={"ml-2"}>{"Tout Décocher"}</span>
                                        </small>
                                    </Button>
                                </Col>
                                <Col style={{ paddingRight: 0 }}>
                                    <Button
                                        className={"w-100 default-box-shadow"}
                                        variant={"light"}
                                        onClick={handleCheckAll}
                                        disabled={ selectedMembersId.length === membersId.length }
                                    >
                                        <small>
                                            <ImCheckboxChecked />
                                            <span className={"ml-2"}>{"Tout Cocher"}</span>
                                        </small>
                                    </Button>
                                </Col>
                            </Row>
                            <Row className={"w-100 mb-2"}>
                                <Button
                                    className={"w-100 border default-box-shadow"}
                                    variant={"success"}
                                    onClick={handleValidation}
                                >
                                    <strong>{"Confirmer"}</strong>
                                </Button>
                            </Row>
                            <Row className={"w-100"}>
                                <Button className={"w-100 default-box-shadow"} variant={"light"} onClick={handleClose}>
                                    {"Annuler"}
                                </Button>
                            </Row>
                        </Modal.Footer>
                    </Modal>
                )
            }
        </div>
    )
}

export default MemberSelector;

MemberSelector.propTypes = {
    membersData: PropTypes.array.isRequired,
    membersId: PropTypes.arrayOf(PropTypes.number).isRequired,
    getSelectedMembersId: PropTypes.func.isRequired
}