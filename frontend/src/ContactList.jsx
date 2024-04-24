import React from "react";
import './App.css'

const ContactList = ({ contacts, updateContact, updateCallback }) => {

    const onDelete = async (id) => {
        try {
            const url = `http://127.0.0.1:5000/delete_contact/${id}`
            const option = {
                method: "DELETE"
            }
            const response = await fetch(url, option)
            if (response.status === 200) {
                updateCallback()
            } else {
                console.error("fail to delete");
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h2 className="title">Contacts</h2>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map((contact) => {
                        return (
                            <tr key={contact.id}>
                                <td>{contact.firstName}</td>
                                <td>{contact.lastName}</td>
                                <td>{contact.email}</td>
                                <td>
                                    <button onClick={() => { updateContact(contact) }}>Update</button>
                                    <button onClick={() => { onDelete(contact.id) }}>Delete</button>
                                </td>
                            </tr>)
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ContactList