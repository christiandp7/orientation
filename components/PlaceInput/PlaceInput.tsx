import React, { FC, useState } from 'react'
import cn from 'classnames'
import s from './PlaceInput.module.css'

import PlacesAutocomplete, {
	geocodeByAddress,
	getLatLng,
} from 'react-places-autocomplete'

const PlaceInput = () => {
	const [address, setaddress] = useState('')

	const handleChange = (addr: string) => {
		setaddress(addr)
	}

	const handleSelect = (addr: string) => {
		geocodeByAddress(addr)
			.then(results => getLatLng(results[0]))
			.then(latLng => console.log('Success', latLng))
			.catch(error => console.error('Error', error))
	}

	return (
		<div className={s.root}>
			<div className={s.labels}>
				<p>kote</p>
				<p>locación</p>
				<p>emplacement</p>
				<p>location</p>
			</div>
			<PlacesAutocomplete
				value={address}
				onChange={handleChange}
				onSelect={handleSelect}>
				{({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
					<div className={s.inputContainer}>
						<input
							{...getInputProps({
								placeholder: 'ciudad, país',
								className: s.inputBox,
							})}
						/>
						<div className={s.dropdownContainer}>
							{loading && <div>Loading...</div>}
							{suggestions.map(suggestion => {
								const className = suggestion.active
									? cn(s.suggestion, s.suggestionActive)
									: s.suggestion
								// inline style for demonstration purpose
								const style = suggestion.active
									? { backgroundColor: '#fafafa', cursor: 'pointer' }
									: { backgroundColor: '#ffffff', cursor: 'pointer' }
								return (
									<div
										{...getSuggestionItemProps(suggestion, {
											className,
											key: suggestion.id,
											style,
										})}>
										<span>{suggestion.description}</span>
									</div>
								)
							})}
						</div>
					</div>
				)}
			</PlacesAutocomplete>
		</div>
	)
}

export default PlaceInput
