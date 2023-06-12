"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
	const [search, setSearch] = useState("");
	const router = useRouter();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setSearch("");
		router.push(`/${search}/`);
	};

	return (
		<form
			className='w-50 flex justify-center md:justify-between'
			onSubmit={handleSubmit}
		>
			<input
				type='text'
				className='bg-white p-2 w-80 text-xl rounded-xl'
				placeholder='Search...'
				value={search}
				onChange={(e) => setSearch(e.target.value)}
			/>
			<button
				type='submit'
				className='p-2 text-xl rounded-xl bg-slate-300 ml-2 font-bold'
			>
				🚀
			</button>
		</form>
	);
}