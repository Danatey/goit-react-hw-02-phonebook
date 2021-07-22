import PropTypes from 'prop-types';

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

ContactsListItem.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      Name: PropTypes.string.isRequired,
      Number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func,
};

export default ContactsListItem