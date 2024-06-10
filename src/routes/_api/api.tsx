import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_api/api")({
	component: () => (
		<div className="p-2">
			<h3>Welcome to API!</h3>
		</div>
	),
});
