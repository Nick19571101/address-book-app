import React from 'react'
import s from './CreateContactForm.module.css'

const CreateContactForm = ({ onCreateContact }) => {
	const handleSubmit = event => {
		event.preventDefault()
		const formData = new FormData(event.target)
		const obj = Object.fromEntries(formData)
		const contact = {
			...obj,
			id: Date.now(),
		}
		onCreateContact(contact)
	}
	return (
		<form className={s.contactForm} onSubmit={handleSubmit}>
			<div className={s.item_form}>
				<label htmlFor='firstName' className={s.form_label}>
					First Name
				</label>
				<input type='text' name='firstName' className={s.form_input} required />
			</div>
			<div className={s.item_form}>
				<label htmlFor='lastName' className={s.form_label}>
					Last Name
				</label>
				<input type='text' name='lastName' className={s.form_input} required />
			</div>
			<div className={s.item_form}>
				<label htmlFor='birthdayData' className={s.form_label}>
					Birthday
				</label>
				<input
					type='text'
					name='birthdayData'
					className={s.form_input}
					required
				/>
			</div>
			<div className={s.item_form}>
				<label htmlFor='email' className={s.form_label}>
					Email
				</label>
				<input type='email' name='email' className={s.form_input} required />
			</div>
			<div className={s.item_form}>
				<label htmlFor='phone' className={s.form_label}>
					Phone
				</label>
				<input type='tel' name='phone' className={s.form_input} required />
			</div>
			<button type='submit' className={s.btn}>
				Створити
			</button>
		</form>
	)
}

export default CreateContactForm
