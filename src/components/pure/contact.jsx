import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class'

const ContactComponent = ({contact}) => {
    return (
        <div>
            <h2>
                Nombre: { contact.nombre }
            </h2>
            <h3>
                Apellido: { contact.apellido }
            </h3>
            <h3>
                Email: { contact.email }
            </h3>
            <h3>
                Conectado: { contact.conectado ? 'Contacto en línea' : 'Contacto no disponible' }
            </h3>
            
        </div>
    );
};


ContactComponent.propTypes = {

    contact: PropTypes.instanceOf(Contact)

};


export default ContactComponent;
