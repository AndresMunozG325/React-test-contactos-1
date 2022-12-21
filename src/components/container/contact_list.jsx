import React from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/contact';


const ContactListComponent = () => {

    const defaultContact = new Contact('Florencia', 'Muñoz', 'fmunoz@gmail.com', true)


    return (
        <div>
            <h1>
                Tus contactos:
            </h1>
            <ContactComponent contact= { defaultContact }></ContactComponent>
        </div>
    );
};


export default ContactListComponent;
