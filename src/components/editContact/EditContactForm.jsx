import React from 'react'
import s from './EditContactForm.module.css'

const EditContactForm = ({ contact, onUpdateContact, onCansel }) => {
	const handleSubmit = event => {
		event.preventDefault()
		const formData = new FormData(event.target)
		const obj = Object.fromEntries(formData)
		const updatedContact = {
			...obj,
			id: contact.id,
		}
		onUpdateContact(updatedContact)
	}
	return (
		<div>
			<form className={s.contactForm} onSubmit={handleSubmit}>
				<div className={s.item_form}>
					<label htmlFor='firstName' className={s.form_label}>
						First Name
					</label>
					<input
						type='text'
						name='firstName'
						className={s.form_input}
						defaultValue={contact.firstName}
					/>
				</div>
				<div className={s.item_form}>
					<label htmlFor='lastName' className={s.form_label}>
						Last Name
					</label>
					<input
						type='text'
						name='lastName'
						className={s.form_input}
						defaultValue={contact.lastName}
					/>
				</div>
				<div className={s.item_form}>
					<label htmlFor='birthdayData' className={s.form_label}>
						Birthday
					</label>
					<input
						type='text'
						name='birthdayData'
						className={s.form_input}
						defaultValue={contact.birthdayData}
					/>
				</div>
				<div className={s.item_form}>
					<label htmlFor='email' className={s.form_label}>
						Email
					</label>
					<input
						type='email'
						name='email'
						className={s.form_input}
						defaultValue={contact.email}
					/>
				</div>
				<div className={s.item_form}>
					<label htmlFor='phone' className={s.form_label}>
						Phone
					</label>
					<input
						type='tel'
						name='phone'
						className={s.form_input}
						defaultValue={contact.phone}
					/>
				</div>
				<div className={s.btns}>
					<button type='submit' className={s.btn}>
						Редагувати
					</button>
					<button type='button' className={s.btn_sec} onClick={onCansel}>
						Відмінити
					</button>
				</div>
			</form>
		</div>
	)
}

export default EditContactForm
