<script>
	import { ShowDates } from '$lib/data/shows/showdates.ts';
</script>

<svelte:head>
	<title>Con-Crete Upcoming Shows</title>
	<meta
		name="description"
		content="See Con-Crete's upcoming shows, dates, venues, and ticket info."
	/>
</svelte:head>
:
<main class="showPage">
	<article>
		<h1>Shows</h1>

		<table class="centered">
			<caption>Upcoming Con-Crete Shows</caption>
			<thead>
				<tr>
					<th>Place</th>
					<th>City</th>
					<th>Date</th>
					<th>Time</th>
					<th>Tickets</th>
				</tr>
			</thead>
			<tbody>
				{#each ShowDates as d}
					<tr>
						<td><a href={d.venueUrl}>{d.location}</a></td>
						<td>{d.city}</td>
						<td><time datetime={d.date}>{d.date}</time></td>
						<td><time datetime={d.time}>{d.time}</time></td>
						<td><a href={d.ticketsUrl}>Tickets: {d.price}</a></td>
					</tr>
				{/each}
			</tbody>
		</table>
	</article>
</main>

<!--svelte-ignore css_unused_selector -->
<style>
	h1 {
		margin-top: 0;
	}

	.showPage {
		min-height: 100vh;
		height: 100%;
		background-image: url('$lib/Images/con8.jpg');
		background-size: cover;
		background-position: center;
	}

	table.centered {
		width: 100%;
		margin: auto;
		border-collapse: collapse;
		table-layout: fixed;
		background-color: var(--hallow);
		border: var(--bord);
		backdrop-filter: blur(8px);
		--webkit-backdrop-filter: blur(1.5px);

		a {
			font-size: var(--size-5);
		}

		@media only screen and (min-width: 1024px) {
			width: 70%;
		}
	}
	th,
	td {
		text-align: center;
		padding: 12px;
		font-size: var(--size-3);

		@media only screen and (min-width: 768px) {
			font-size: var(--size-4);
		}
	}
	thead {
		background: var(--color-active);
	}
	th {
		border-bottom: var(--bord);
	}
	tbody td {
		border-bottom: var(--bord-2);
	}
	tr:hover {
		background: var(--bg-2);
	}
	a {
		color: var(--accent-2);
		font-weight: bold;
	}
</style>
