import "./Admin.scss";

const stats = [
	{
		title: "New Orders",
		value: "12",
		icon: "🧁",
	},

	{
		title: "Custom Requests",
		value: "5",
		icon: "✨",
	},

	{
		title: "Products",
		value: "24",
		icon: "🍪",
	},

	{
		title: "Seasonal Items",
		value: "8",
		icon: "🍂",
	},
];

const recentOrders = [
	{
		customer: "Emily R.",
		item: "Wedding Cookie Set",
		date: "June 18",
		status: "Pending",
	},

	{
		customer: "Sarah M.",
		item: "Birthday Cake",
		date: "June 22",
		status: "Confirmed",
	},

	{
		customer: "Jessica T.",
		item: "Cupcake Box",
		date: "June 25",
		status: "Completed",
	},
];

function Admin() {
	return (
		<main className="admin-page">
			<section className="admin-header">
				<span>✦ Bakery Dashboard ✦</span>
				<h1>Sweet Mystic Admin</h1>
				<p>Manage orders, products, and bakery updates.</p>
			</section>

			<section className="stats-grid">
				{stats.map((stat, index) => (
					<article key={index} className="stat-card">
						<div>{stat.icon}</div>

						<h2>{stat.value}</h2>

						<p>{stat.title}</p>
					</article>
				))}
			</section>

			<section className="admin-content">
				<div className="admin-panel">
					<div className="panel-header">
						<h2>Recent Orders</h2>

						<button>View All</button>
					</div>

					<table>
						<thead>
							<tr>
								<th>Customer</th>
								<th>Order</th>
								<th>Date</th>
								<th>Status</th>
							</tr>
						</thead>
						<tbody>
							{recentOrders.map((order, index) => (
								<tr key={index}>
									<td>{order.customer}</td>
									<td>{order.item}</td>
									<td>{order.date}</td>
									<td>
										<span className={order.status.toLowerCase()}>
											{order.status}
										</span>
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>

				<div className="quick-actions">
					<h2>Quick Actions</h2>
					<button>+ Add Product</button>
					<button>+ Create Seasonal Item</button>
					<button>View Custom Requests</button>
					<button>Manage Gallery</button>
				</div>
			</section>
		</main>
	);
}

export default Admin;
