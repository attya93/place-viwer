import React, { useState, useContext } from 'react'

import Modal from '../../shared/components/UIElement/Modal';
import Card from '../../shared/components/UIElement/Card';
import Button from '../../shared/components/FormElementd/Button';
import Map from '../../shared/components/UIElement/Map';
import { AuthContext } from '../../shared/context/auth-context';
import './PlaceItem.css';


const PlaceItem = (props) => {
    const auth = useContext(AuthContext);
    const [showMap, setShowMap] = useState(false);
    const [showConfirmModal, setShowConfirmModal] = useState(false);

    const showMapHandler = () => setShowMap(true);
    const closeShowMap = () => setShowMap(false);

    const showDeleteHandler = () => {
        setShowConfirmModal(true);
    }

    const cancelDeleteHandler = () => {
        setShowConfirmModal(false);
    }
    const confirmDeleteHandler = () => {
        console.log('Deleting.....');
    }

    return (
        <React.Fragment>
            <Modal show={showMap}
                onCancel={closeShowMap}
                header={props.address}
                contentClass="place-item_nodal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={closeShowMap}>Close</Button>}
            >
                <div className="map-container">
                    <Map center={props.coordinates} zoom={16} />
                </div>
            </Modal>
            <Modal
                show={showConfirmModal}
                onCancel={cancelDeleteHandler}
                header="Are you Sure?"
                footerClass="place-item__modal-actions"
                footer={
                    <React.Fragment>
                        <Button inverse onClick={cancelDeleteHandler}>Cancel</Button>
                        <Button danger onClick={confirmDeleteHandler}>Delete</Button>
                    </React.Fragment>
                }
            >
                <p>Do you want to proceed and Delete this place? Pleace note that it can't be undone thereafter</p>
            </Modal>
            <li className="place-item">
                <Card className='place-item__content'>
                    <div className="place-item__image">
                        <img src={props.imgs} alt={props.title} />
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__action">
                        <Button inverse onClick={showMapHandler}>View On MAP</Button>
                        {auth.isLoggedIn && <Button to={`/places/${props.id}`}>Edit</Button>}
                        {auth.isLoggedIn && <Button danger onClick={showDeleteHandler}>Delete</Button>}
                    </div>
                </Card>
            </li>
        </React.Fragment >
    );
}

export default PlaceItem;