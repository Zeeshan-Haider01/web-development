import { useState } from "react";

function ContactList() {
    let [name, setName] = useState("");
    let [phone, setPhone] = useState("");
    let [contacts, setContacts] = useState([]);

    function addContact() {
        let newContact = {
            name: name,
            phone: phone
        }
        setContacts((prevContacts) => {
            return [...prevContacts, newContact]
        })
        // setContacts([...contacts, newContact])
        setName("")
        setPhone("")
    }

    function handleDelete(index) {
        let newContacts = contacts.filter((_, i) => i !== index)
        setContacts(newContacts)
    }

    function handleEdit(index) {
        let newContacts = [...contacts]
        let newName = prompt("Enter new name", newContacts[index].name)
        let newPhone = prompt("Enter new phone", newContacts[index].phone)
        if (newName !== null && newPhone !== null) {
            newContacts[index].name = newName
            newContacts[index].phone = newPhone
            setContacts(newContacts)
        }
    }

    return (
        <>
            <input
                type="text"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />
            <input
                type="text"
                placeholder="Enter phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
            />
            <button onClick={addContact}> Add Contact </button>
            {
                contacts.map(function(contact, index) {
                    return (
                        <div key={index}>
                            <p> Name: {contact.name} </p>
                            <p> Phone: {contact.phone} </p>
                            <button onClick={() => handleEdit(index)}> Edit </button>
                            <button onClick={() => handleDelete(index)}> Delete </button>
                            <hr />
                        </div>
                    )
                })
            }
        </>
    )
}

export default ContactList;