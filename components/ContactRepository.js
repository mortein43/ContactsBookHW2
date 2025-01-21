import "react-native-get-random-values";
import { v4 as uuid } from "uuid";

class ContactRepository {
  constructor() {
    this.contacts = [
      {
        name: "Андрій",
        phone: "+380972580102",
        img: "https://fsx1.itstep.org/api/v1/files/sZPKVNraKol83LuteAdWp8zfeSCY9Baq?r=face&h=250&f=webp",
        id: uuid(),
      },
      {
        name: "Олександр Олександрович",
        phone: "Просив не розголошувати",
        img: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcR6FzuiKDM-ZzNWSi0hWDs0nrCzENYul7Uehp1IgbenPqQAhmEs",
        id: uuid(),
      },
    ];
  }

  getAllContacts() {
    return this.contacts;
  }

  addContact(contact) {
    this.contacts.push({ ...contact, id: uuid() });
  }

  updateContact(updatedContact) {
    this.contacts = this.contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
  }

  deleteContact(id) {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
  }
}

export default ContactRepository;
