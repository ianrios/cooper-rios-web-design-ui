import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
	return (
		<div>
			<h2>Home</h2>
			<p>We’re a Midwest-based web design firm serving an international suite of medical practitioners, clinics, practices, and brands.</p>
			<p>We strive to create websites and web content that’s human-centered, bringing your clients closer to your business and creating long-term relationships.</p>
			<p>We’re ready to work closely with you on <Link to={"/services"}>designs and ideas</Link>, ultimately crafting a website sure to leave clients with a positive impression and a booked appointment.</p>
		</div>
	)
}

export default Home