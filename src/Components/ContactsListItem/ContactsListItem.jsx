// import PropTypes from 'prop-types';

import Button from "../Button";

const ContactsListItem = ({ onDelete, contacts }) => (
  <>
    {contacts.map(({ id, Name, Number }) => {
      return (
        <li key={id}>
          {Name}: {Number}
          <Button btnType="button" btnName="Delete" onClick={() => onDelete(id)}/>
        </li>
      );
    })}
  </>
);

export default ContactsListItem