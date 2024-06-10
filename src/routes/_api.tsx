import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_api")({
	component: () => (
		<>
			<div className="p-2 flex gap-2">IN /API</div>
			<hr />
			<Outlet />
		</>
	),
});
