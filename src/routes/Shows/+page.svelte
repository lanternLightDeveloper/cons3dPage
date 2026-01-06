<script lang="ts">
	import { ShowDates } from '$lib/data/shows/showdates.ts';

	// Date for show parser
	const parseDate = (str: string) => {
		const [month, day, year] = str.split('-').map(Number);
		return new Date(year, month - 1, day);
	};

	const today = $state(new Date());

	const nextShow = $derived(() => {
		const upcoming = ShowDates.map((d) => ({ ...d, parsed: parseDate(d.date) }))
			.filter((d) => d.parsed.getTime() >= today.getTime())
			.sort((a, b) => a.parsed.getTime() - b.parsed.getTime());
		return upcoming[0] ?? null;
	});
</script>

<svelte:head>
	<title>Con-Crete Upcoming Shows</title>
	<meta
		name="description"
		content="See Con-Crete's upcoming shows, dates, venues, and ticket info."
	/>
</svelte:head>

<main class="showPage">
	<article>
		<h1>Shows</h1>

		{#if nextShow()}
			<table class="centered">
				<thead>
					<tr>
						<th>Place</th>
						<th>City</th>
						<th>Date</th>
						<th>Tickets</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
							<a href={nextShow().venueUrl} target="_blank" rel="noopener">
								{nextShow().location}
							</a>
						</td>
						<td>{nextShow().city}</td>
						<td>{nextShow().date}</td>
						<td>
							<a href={nextShow().ticketsUrl} target="_blank" rel="noopener">
								{nextShow().price} / Tickets
							</a>
						</td>
					</tr>
				</tbody>
			</table>
		{:else}
			<p>No upcoming shows found.</p>
		{/if}
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
