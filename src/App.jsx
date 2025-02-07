import { useState } from 'react'
import ContactsList from './components/ContactsList'
import './App.css'
import CreateContactForm from './components/contactForm/CreateContactForm'
import ContactDetails from './components/ContactDetails'
import EditContactForm from './components/editContact/EditContactForm'

function App() {
	const [contactList, setContactList] = useState([])
	const [appState, setAppState] = useState('default')
	const [activeContactId, setActiveContactId] = useState(null)

	const handleAddNewClick = () => {
		setAppState('create_contact')
		setActiveContactId(null)
	}
	const handleCreateContact = contactData => {
		setContactList([...contactList, contactData])
		setAppState('default')
	}
	const handleContactClick = contactId => {
		setAppState('view_contact')
		setActiveContactId(contactId)
	}
	const activeContact = contactList.find(
		contact => contact.id === activeContactId,
	)
	const handleEditContact = () => {
		setAppState('edit_contact')
	}
	const handleCancelEditContact = () => {
		setAppState('view_contact')
	}
	const handleUpdateContact = updatedContact => {
		const newContactsList = contactList.map(contact => {
			if (contact.id === updatedContact.id) {
				return updatedContact
			} else {
				return contact
			}
		})
		setContactList(newContactsList)
		setAppState('view_contact')
	}

	return (
		<>
			<div className='address__book'>
				<div className='address__book_left'>
					{/* Header (в майбутньому сюди додамо ще search input) */}
					<button className='btn btn-primary' onClick={handleAddNewClick}>
						Add new
					</button>
					<ContactsList
						contacts={contactList}
						onContactClick={handleContactClick}
						activeContactId={activeContactId}
					/>
				</div>
				<div className='address__book_right'>
					{appState === 'create_contact' && (
						<CreateContactForm onCreateContact={handleCreateContact} />
					)}
					{appState === 'view_contact' && (
						<ContactDetails
							contact={activeContact}
							onEditContact={handleEditContact}
						/>
					)}
					{appState === 'edit_contact' && (
						<EditContactForm
							contact={activeContact}
							onCansel={handleCancelEditContact}
							onUpdateContact={handleUpdateContact}
						/>
					)}
				</div>
			</div>
		</>
	)
}

export default App
