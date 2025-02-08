import { useState } from 'react'
import ContactsList from './components/ContactsList'
import './App.css'
import CreateContactForm from './components/contactForm/CreateContactForm'
import ContactDetails from './components/ContactDetails'
import EditContactForm from './components/editContact/EditContactForm'
import SearchInput from './components/searchContact/SearchInput'

const filterContacts = (contacts, filteredValue) =>
	contacts.filter(
		contact =>
			contact.firstName.toLowerCase().includes(filteredValue.toLowerCase()) ||
			contact.lastName.toLowerCase().includes(filteredValue.toLowerCase()),
	)

function App() {
	const [contactList, setContactList] = useState([])
	const [appState, setAppState] = useState('default')
	const [searchValue, setSearchValue] = useState('')
	const [activeContactId, setActiveContactId] = useState(null)

	const activeContact = contactList.find(
		contact => contact.id === activeContactId,
	)
	const filteredContacts = filterContacts(contactList, searchValue)
	const isEmptySearch = searchValue.length > 0 && filteredContacts.length === 0

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
	const handleSearchChange = event => {
		setSearchValue(event.target.value)
	}

	return (
		<>
			<div className='address__book'>
				<div className='address__book_left'>
					<div className='search_input'>
						<SearchInput value={searchValue} onChange={handleSearchChange} />
					</div>
					<button className='btn btn-primary' onClick={handleAddNewClick}>
						Add new
					</button>
					<ContactsList
						contacts={filteredContacts}
						onContactClick={handleContactClick}
						activeContactId={activeContactId}
					/>
				</div>
				{isEmptySearch ? (
					<h2>Empty search results</h2>
				) : (
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
				)}
			</div>
		</>
	)
}

export default App
