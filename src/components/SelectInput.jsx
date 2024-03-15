export const SelectInput = () => {
	return (
		<select className='select select-primary w-full max-w-xs'>
			<option
				disabled
				selected>
				Nad czego zakupem myślisz?
			</option>
			<option>Elektronika i urządzenia domowe</option>
			<option>Motoryzacja</option>
			<option>Odzież i obuwie</option>
			<option>Sport i rekreacja</option>
            <option>Biżuteria i zegarki</option>
            <option>Dom i ogród</option>
		</select>
	);
};
