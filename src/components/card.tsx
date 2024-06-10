interface Item {
	_id: string;
	name: string;
	email: string;
	age: string;
}

export default function Card({
	props,
	onDelete,
}: { props: Item; onDelete: (id: string) => void }) {
	return (
		<div className="flex flex-col p-2 rounded-lg bg-pink shadow-md">
			<div className="flex flex-col justify-center items-start">
				<div className="text-xl">id: {props._id}</div>
				<div className="text-sm">name: {props.name}</div>
				<div className="text-sm">email: {props.email}</div>
				<div className="text-sm">age: {props.age}</div>
			</div>
			<div>
				<button
					type="button"
					onClick={() => onDelete(props._id)}
					className="bg-red-500 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
				>
					Delete
				</button>
			</div>
		</div>
	);
}
