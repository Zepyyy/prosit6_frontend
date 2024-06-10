import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: () => (
		<div className="p-2">
			<h3>Welcome to HOME!</h3>
		</div>
	),
});
