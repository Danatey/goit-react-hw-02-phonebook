import PropTypes from 'prop-types';

const ContactsList = ({ children }) => (
  <ul>{ children }</ul>
);

ContactsList.propTypes = {
  children: PropTypes.node,
};

export default ContactsList;