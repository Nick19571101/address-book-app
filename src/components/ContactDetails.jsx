import React from 'react'

const ContactDetails = ({ contact, onEditContact }) => {
	return (
		<>
			<div className='row align-items-center mb-3'>
				<div className='col-4'>
					<h2>Contact Details:</h2>
				</div>
			</div>
			<ol className='list-group'>
				<li className='list-group-item d-flex justify-content-between align-items-start'>
					<div className='ms-2 me-auto'>
						<div className='fw-bold'>First Name:</div>
						{contact.firstName}
					</div>
				</li>
				<li className='list-group-item d-flex justify-content-between align-items-start'>
					<div className='ms-2 me-auto'>
						<div className='fw-bold'>Last name:</div>
						{contact.lastName}
					</div>
				</li>
				<li className='list-group-item d-flex justify-content-between align-items-start'>
					<div className='ms-2 me-auto'>
						<div className='fw-bold'>Birthday:</div>
						{contact.birthdayDate}
					</div>
				</li>
				<li className='list-group-item d-flex justify-content-between align-items-start'>
					<div className='ms-2 me-auto'>
						<div className='fw-bold'>Email:</div>
						{contact.email}
					</div>
				</li>
				<li className='list-group-item d-flex justify-content-between align-items-start'>
					<div className='ms-2 me-auto'>
						<div className='fw-bold'>Phone:</div>
						{contact.phone}
					</div>
				</li>
			</ol>
			<button type='button' onClick={onEditContact} className='btn'>
				Редагувати
			</button>
		</>
	)
}

export default ContactDetails
