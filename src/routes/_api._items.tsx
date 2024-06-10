import { Outlet, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_api/_items")({
	component: () => (
		<>
			<div className="p-2">
				<h3>IN /API/ITEMS</h3>
			</div>
			<hr />
			<Outlet />
		</>
	),
});
