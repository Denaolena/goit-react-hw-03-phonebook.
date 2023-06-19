import React from 'react';
import style from '../ContactElement/ContactElement.module.css';
import PropTypes from 'prop-types';

const ContactElement = ({ onDeleteContact, contact: { id, name, number } }) => (
  <li className={style.contact__item} key={id}>
    <p className={style.contact__text}>{name}</p>
    <p className={style.contact__tel}>{number}</p>
    <button
      type="button"
      className={style.contact__btn}
      onClick={() => onDeleteContact(id)}
    >
      Delete
    </button>
  </li>
);

export default ContactElement;

ContactElement.propTypes = {
  onDeleteContact: PropTypes.func.isRequired,
  contact: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
