function ContactsList({ contacts, onContactClick, activeContactId }) {
	return (
		<>
			<ul className='list-group'>
				{contacts.map(contact => (
					<li
						key={contact.id}
						className={`list-group-item ${
							contact.id === activeContactId ? 'active' : ''
						}`}
						onClick={() => onContactClick(contact.id)}>
						<p>{contact.firstName}</p>
						<p>{contact.lastName}</p>
					</li>
				))}
				<li className='list-group-item'>
					<a href='#'>John Doe</a>
				</li>
				<li className='list-group-item'>
					<a href='#'>Will Smith</a>
				</li>
			</ul>
		</>
	)
}

export default ContactsList
