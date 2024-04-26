import { deleteContact } from "../../services";
import "./style.css";

const ContactItem = (props) => {
  const {
    id,
    full_name,
    phone_number,
    email,
    handleGetContacts,
    handleSetSelected,
  } = props;

  async function handleDelete() {
    await deleteContact(id)
    handleGetContacts()
  }

  async function handleEdit() {
    handleSetSelected(id, full_name, phone_number, email)
  }

  return (
    <div data-cy="item-card" className="contact-item__wrapper">
      <div className="contact-item__first-row">
        <p data-cy="item-name" className="contact-item__name">
          {full_name}
        </p>
        <div className="contact-item__button-wrapper">
          <button className="contact-item__button contact-item__edit-button" data-cy='btn-edit' onClick={handleEdit}>Edit</button>
          <button className="contact-item__button contact-item__delete-button" data-cy='btn-delete' onClick={handleDelete}>Hapus</button>
        </div>
      </div>
      <div className="contact-item__second-row">
        <p className="contact-item__phone-email">
          <span data-cy="item-phone">{phone_number}</span> |&nbsp;
          <span data-cy="item-email">{email}</span>
        </p>
      </div>
    </div>
  );
};

export default ContactItem;
