import Button from "../Button";

const ContactsListItem = ({ onDelete, contacts }) => (
  <>
    {contacts.map(({ id, name, number }) => {
      return (
        <li key={id}>
          {name}: {number}
          <Button btnType="button" btnName="Delete" onClick={() => onDelete(id)}/>
        </li>
      );
    })}
  </>
);

export default ContactsListItem