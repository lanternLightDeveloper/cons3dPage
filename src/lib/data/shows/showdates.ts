export type ShowDate = {
	date: string;
	time: string;
	location: string;
	city: string;
	venueUrl: string;
	ticketsUrl: string;
	description: string;
	price: number;
};

export const ShowDates = [
	{
		date: '01-10-2026',
		time: '7:00 PM',
		location: 'El Corazon',
		city: 'Seattle, WA',
		venueUrl: 'https://www.elcorazonseattle.com/',
		ticketsUrl: 'https://www.elcorazonseattle.com/shows/for-the-love-invitational-10-jan',
		description: 'Join us for an unforgettable night of music and art at El Corazon in Seattle!',
		price: 'FREE'
	}
];
