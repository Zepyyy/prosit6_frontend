import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../../components/card";

export const Route = createFileRoute("/_api/_items/api/items")({
	component: Items,
});

interface Item {
	_id: string;
	name: string;
	email: string;
	age: string;
}

function Items() {
	const [items, setItems] = useState([] as Item[]);

	const fetchItems = () => {
		axios
			.get("http://localhost:5001/api/items")
			.then((res) => {
				setItems(res.data);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	useEffect(() => {
		fetchItems();
	}, []);

	const handleAddItem = () => {
		axios
			.post("http://localhost:5001/api/items", {
				name: "test",
				email: "test@test.com",
				age: "test",
			})
			.then(() => {
				// Fetch items again after adding a new one
				fetchItems();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleDeleteItem = (id: string) => {
		axios
			.delete(`http://localhost:5001/api/items/${id}`)
			.then(() => {
				fetchItems();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	return (
		<>
			<div className="p-2 flex gap-2 flex-row">
				{items.map((item) => (
					<div key={item._id}>
						<Card props={item} onDelete={handleDeleteItem} />
					</div>
				))}
			</div>
			<div className="p-2 flex gap-2">
				<button
					type="button"
					className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 rounded"
					onClick={handleAddItem}
				>
					Add
				</button>
			</div>
		</>
	);
}

export default Items;
