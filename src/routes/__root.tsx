import { createRootRoute, Link, Outlet } from "@tanstack/react-router";

export const Route = createRootRoute({
	component: () => (
		<>
			<div className="p-2 flex gap-2">
				<Link to="/" className="[&.active]:font-bold">
					Home
				</Link>{" "}
				<Link to="/api" className="[&.active]:font-bold">
					api
				</Link>{" "}
				<Link to="/api/items" className="[&.active]:font-bold">
					api/items
				</Link>{" "}
			</div>
			<div className="p-2 flex gap-2">IN /</div>
			<hr />
			<Outlet />
		</>
	),
});
