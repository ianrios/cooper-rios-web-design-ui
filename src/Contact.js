import React from 'react'
import { Link } from 'react-router-dom'

export default function Contact() {
	return (
		<div>
			<h2>Contact Us</h2>
			<p>If you are interested in a quote for any of our <Link to={"/services"}>services</Link>, don’t hesitate to send us an email via the form below.</p>
			<p>We’ll be happy to discuss options, designs, and content that will bring in more customers.</p>
		</div>
	)
}
