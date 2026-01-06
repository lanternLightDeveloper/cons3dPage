import shirt from '$lib/Images/Warehouse/con40.jpg';
import shirt2 from '$lib/Images/Warehouse/con3.png';
import shirt3 from '$lib/Images/Warehouse/con5.png';
import shirt4 from '$lib/Images/Warehouse/con20.jpg';
import shirt5 from '$lib/Images/Warehouse/con21.jpg';
import shirt6 from '$lib/Images/Warehouse/conShirt.jpg';
import shirt7 from '$lib/Images/Warehouse/conShirt2.jpg';

import hat from '$lib/Images/Warehouse/con38.jpg';

import CD from '$lib/Images/Warehouse/conCD.jpg';
import CD2 from '$lib/Images/Warehouse/conCD2.jpg';
import CD3 from '$lib/Images/Warehouse/conCD3.jpg';
import CD4 from '$lib/Images/Warehouse/conCD4.jpg';
import CD5 from '$lib/Images/Warehouse/conCD5.jpg';
import CD6 from '$lib/Images/Warehouse/conCD6.jpg';
import CD7 from '$lib/Images/Warehouse/conCD7.jpg';
import CD8 from '$lib/Images/Warehouse/conCD8.jpg';
import CD9 from '$lib/Images/Warehouse/conCD9.jpg';

import SceneAlt from '$lib/Assets/SceneAlt.svelte';

export type Cds = {
	id: number;
	name: string;
	price: number;
	img: string;
	url: string;
	description: string;
	sizes: { label: string; productId: string }[];
	provider: string;
	type: string;
};

export type Shirt = {
	id: number;
	name: string;
	price: number;
	img: string;
	model?: { Scene: typeof SceneAlt };
	description: string;
	sizes: { label: string; catalogObjectId: string }[];
	provider: string;
	type: string;
};

export type Hat = {
	id: number;
	name: string;
	price: number;
	img: string;
	model?: { Scene: typeof SceneAlt };
	description: string;
	sizes: { label: string; catalogObjectId: string }[];
	provider: string;
	type: string;
};

export type Sticker = {
	id: number;
	name: string;
	price: number;
	img: string;
	url: string;
	description: string;
	sizes: { label: string; catalogObjectId: string }[];
	provider: string;
};

export const Cds = [
	{
		id: 1,
		name: 'Snapped',
		price: 20,
		currency: 'USD',
		img: CD9,
		alt: 'Album cover for Con-Crete – Snapped',
		url: './cdBaseSnapped.glb',
		description: 'Platinum selling record from Con-Crete, Snapped.',
		brand: 'Con-Crete',
		sku: 'CD-SNPD-1',
		category: 'Music > CDs',
		keywords: ['band merch', 'Con-Crete CD', 'Snapped', 'Rap album'],
		availability: 'InStock',
		format: 'Audio CD',
		genre: 'Rap',
		sizes: [{ label: 'CD', productId: 'PX00ZZ8K8FA', description: 'Physical audio CD' }],
		provider: 'kunaki',
		type: 'cd'
	},
	{
		id: 2,
		name: 'The Haunted EP',
		price: 15,
		currency: 'USD',
		img: CD8,
		alt: 'Album cover for Con-Crete – The Haunted EP',
		url: './cdBaseHaunted.glb',
		description: 'Platinum selling record from Con-Crete, The Haunted EP.',
		brand: 'Con-Crete',
		sku: 'CD-HANT-1',
		category: 'Music > CDs',
		keywords: ['band merch', 'Con-Crete CD', 'The Haunted EP', 'Rap album'],
		availability: 'InStock',
		format: 'Audio CD',
		genre: 'Rap',
		sizes: [{ label: 'CD', productId: 'PX001XBZPN', description: 'Physical audio CD' }],
		provider: 'kunaki',
		type: 'cd'
	},
	{
		id: 3,
		name: 'I Hate Cops Vol. 1',
		price: 10,
		currency: 'USD',
		img: CD,
		alt: 'Album cover for Con-Crete – I Hate Cops Vol. 1',
		url: './cdBaseIHC.glb',
		description: 'Platinum selling record from Con-Crete, I Hate Cops Vol. 1.',
		brand: 'Con-Crete',
		sku: 'CD-IHC1-1',
		category: 'Music > CDs',
		keywords: ['band merch', 'Con-Crete CD', 'I Hate Cops Vol. 1', 'Rap album'],
		availability: 'InStock',
		format: 'Audio CD',
		genre: 'Rap',
		sizes: [{ label: 'CD', productId: 'PX00Z193GH', description: 'Physical audio CD' }],
		provider: 'kunaki',
		type: 'cd'
	},
	{
		id: 4,
		name: 'I Hate Cops Vol. 2',
		price: 10,
		currency: 'USD',
		img: CD7,
		alt: 'Album cover for Con-Crete – I Hate Cops Vol. 2',
		url: './cdBaseIHCv2.glb',
		description: 'Platinum selling record from Con-Crete, I Hate Cops Vol. 2.',
		brand: 'Con-Crete',
		sku: 'CD-IHC2-2',
		category: 'Music > CDs',
		keywords: ['band merch', 'Con-Crete CD', 'I Hate Cops Vol. 2', 'Rap album'],
		availability: 'InStock',
		format: 'Audio CD',
		genre: 'Rap',
		sizes: [{ label: 'CD', productId: 'PX00OJJVFR', description: 'Physical audio CD' }],
		provider: 'kunaki',
		type: 'cd'
	},
	{
		id: 5,
		name: 'SAWS UP',
		price: 10,
		currency: 'USD',
		img: CD2,
		alt: 'Album cover for Con-Crete – SAWS UP',
		url: './cdBaseSawsup.glb',
		description: 'Platinum selling record from Con-Crete, SAWS UP.',
		brand: 'Con-Crete',
		sku: 'CD-SAWSUP-3',
		category: 'Music > CDs',
		keywords: ['band merch', 'Con-Crete CD', 'SAWS UP', 'Rap album'],
		availability: 'InStock',
		format: 'Audio CD',
		genre: 'Rap',
		sizes: [{ label: 'CD', productId: 'PX00Z4E4N6', description: 'Physical audio CD' }],
		provider: 'kunaki',
		type: 'cd'
	},
	{
		id: 6,
		name: 'Kill The T.H.O.T.',
		price: 10,
		currency: 'USD',
		img: CD3,
		alt: 'Album cover for Con-Crete – Kill The T.H.O.T.',
		url: './cdBaseTHOT.glb',
		description: 'Platinum selling record from Con-Crete, Kill The T.H.O.T.',
		brand: 'Con-Crete',
		sku: 'CD-THOT-4',
		category: 'Music > CDs',
		keywords: ['band merch', 'Con-Crete CD', 'Kill The T.H.O.T.', 'Rap album'],
		availability: 'InStock',
		format: 'Audio CD',
		genre: 'Rap',
		sizes: [{ label: 'CD', productId: 'PX00ZWTX1O', description: 'Physical audio CD' }],
		provider: 'kunaki',
		type: 'cd'
	},
	{
		id: 7,
		name: 'EVOL',
		price: 10,
		currency: 'USD',
		img: CD4,
		alt: 'Album cover for Con-Crete – EVOL',
		url: './cdBaseEVOL.glb',
		description: 'Platinum selling record from Con-Crete, EVOL.',
		brand: 'Con-Crete',
		sku: 'CD-EVOL-5',
		category: 'Music > CDs',
		keywords: ['band merch', 'Con-Crete CD', 'EVOL', 'Rap album'],
		availability: 'InStock',
		format: 'Audio CD',
		genre: 'Rap',
		sizes: [{ label: 'CD', productId: 'PX00HTD7S8', description: 'Physical audio CD' }],
		provider: 'kunaki',
		type: 'cd'
	},
	{
		id: 8,
		name: 'Sawdemic',
		price: 10,
		currency: 'USD',
		img: CD5,
		alt: 'Album cover for Con-Crete – Sawdemic',
		url: './cdBaseDemic.glb',
		description: 'Platinum selling record from Con-Crete, Sawdemic.',
		brand: 'Con-Crete',
		sku: 'CD-SAWDEMIC-6',
		category: 'Music > CDs',
		keywords: ['band merch', 'Con-Crete CD', 'Sawdemic', 'Rap album'],
		availability: 'InStock',
		format: 'Audio CD',
		genre: 'Rap',
		sizes: [{ label: 'CD', productId: 'PX00ZA7VZT', description: 'Physical audio CD' }],
		provider: 'kunaki',
		type: 'cd'
	},
	{
		id: 9,
		name: 'Indulgence Of The Flesh: The Sequel',
		price: 10,
		currency: 'USD',
		img: CD6,
		alt: 'Album cover for Con-Crete – Indulgence Of The Flesh: The Sequel',
		url: './cdBaseFlesh.glb',
		description: 'Platinum selling record from Con-Crete, Indulgence Of The Flesh: The Sequel.',
		brand: 'Con-Crete',
		sku: 'CD-FLESH-7',
		category: 'Music > CDs',
		keywords: ['band merch', 'Con-Crete CD', 'Indulgence Of The Flesh', 'Rap album'],
		availability: 'InStock',
		format: 'Audio CD',
		genre: 'Rap',
		sizes: [{ label: 'CD', productId: 'PX00ZAJT2R', description: 'Physical audio CD' }],
		provider: 'kunaki',
		type: 'cd'
	}
];

// export const StagedItem = [
//
// ];

export const Shirts = [
	{
		id: 10,
		name: 'Fuck My Boss',
		price: 30,
		currency: 'USD',
		img: shirt6,
		alt: 'Cartoon Con-Crete over a dead body',
		url: './shirt6.glb',
		description: 'Cartoon Con-Crete over a dead body with blood all over the ground',
		brand: 'Con-Crete',
		sku: 'FMB-BLACK-8',
		category: 'Apparel > Shirts',
		keywords: ['band merch', 'Con-Crete shirt', 'black shirt', 'rapper apparel'],
		availability: 'InStock',
		material: '100% cotton',
		color: 'Black',
		sizes: [
			{
				label: 'M',
				catalogObjectId: '72QKBG23GGQH5MJIQXGKUXZY',
				description: 'Medium – chest 38-40'
			},
			{
				label: 'L',
				catalogObjectId: 'I43AVHNSJ4RPBFL7HHKFVL4C',
				description: 'Large – chest 42-44'
			},
			{ label: 'XL', catalogObjectId: 'VIO4C6N3O4SPX3YZTSVYYV3T', description: 'XL – chest 46-48' },
			{
				label: '2XL',
				catalogObjectId: 'ZFF55MMEMFUZ5D3FWF7SV5LR',
				description: '2XL – chest 50-52'
			},
			{
				label: '3XL',
				catalogObjectId: '7YJNAWUFXATHUKFV3GX7GRJE',
				description: '3XL – chest 52-54'
			},
			{
				label: '4XL',
				catalogObjectId: '5OUYRLR2CNIOX3AKKOIV2LX4',
				description: '4XL – chest 56-58'
			},
			{
				label: '5XL',
				catalogObjectId: 'YYFKRBTCKZBBNVXHYNCIM4KC',
				description: '5XL – chest 60-62'
			}
		],
		provider: 'square',
		type: 'shirt'
	},
	{
		id: 11,
		name: 'Good Guy',
		price: 30,
		currency: 'USD',
		img: shirt7,
		alt: 'Cartoon Con-Crete and a a lady in facepaint',
		url: './shirt7.glb',
		description: 'Con-Crete and a a lady in facepaint leaving a house for something.',
		brand: 'Con-Crete',
		sku: 'GOOD-GUY-Black-8',
		category: 'Apparel > Shirts',
		keywords: ['band merch', 'Con-Crete shirt', 'black shirt', 'rapper apparel'],
		availability: 'InStock',
		material: '100% cotton',
		color: 'Black',
		sizes: [
			{
				label: 'M',
				catalogObjectId: '72QKBG23GGQH5MJIQXGKUXZY',
				description: 'Medium – chest 38-40'
			},
			{
				label: 'L',
				catalogObjectId: '7GHAK2FGD2BU2Z463DQ46WZ2',
				description: 'Large – chest 42-44'
			},
			{ label: 'XL', catalogObjectId: 'R5I7JBXOC2FAW2WXPOCYKLYG', description: 'XL – chest 46-48' },
			{
				label: '2XL',
				catalogObjectId: 'A5AMMMYGRCTEQQER6TEDBPGJ',
				description: '2XL – chest 50-52'
			},
			{
				label: '3XL',
				catalogObjectId: 'TYID7SDBVXG6QL43DBBR4BSU',
				description: '3XL – chest 52-54'
			},
			{
				label: '4XL',
				catalogObjectId: 'IDTGRZNBZ2B4A4YRZYDVAO2U',
				description: '4XL – chest 56-58'
			},
			{
				label: '5XL',
				catalogObjectId: 'JGZHTBBTD6SIFGUKKETHUJVW',
				description: '5XL – chest 60-62'
			}
		],
		provider: 'square',
		type: 'shirt'
	},
	{
		id: 12,
		name: 'Snapped: Grey',
		price: 30,
		currency: 'USD',
		img: shirt2,
		alt: 'Grey Con-Crete shirt featuring Concrete chasing a guy with a chainsaw',
		url: './shirtBase.glb',
		description:
			'Official Con-Crete band shirt in grey, featuring Concrete chasing a guy with a chainsaw.',
		brand: 'Con-Crete',
		sku: 'SNAPPED-GREY-8',
		category: 'Apparel > Shirts',
		keywords: ['band merch', 'Con-Crete shirt', 'grey shirt', 'Rap apparel'],
		availability: 'InStock',
		material: '100% cotton',
		color: 'Grey',
		sizes: [
			{
				label: 'S',
				catalogObjectId: 'RQFLELCRCG6HU2K3Y2ZGTLE2',
				description: 'Small – chest 34-36'
			},
			{
				label: 'M',
				catalogObjectId: '3QW65BWJSVA7SO7FI2QEO5HF',
				description: 'Medium – chest 38-40'
			},
			{
				label: 'L',
				catalogObjectId: 'TRJKLULF6KV7XMNYAVZ4G7MH',
				description: 'Large – chest 42-44'
			},
			{ label: 'XL', catalogObjectId: 'WV5EGRL64IFJ6WM25AZYJXTW', description: 'XL – chest 46-48' },
			{
				label: '2XL',
				catalogObjectId: 'SHIDKLU5M7SZPW7APCCPACPR',
				description: '2XL – chest 50-52'
			}
		],
		provider: 'square',
		type: 'shirt'
	},
	{
		id: 13,
		name: 'Snapped: Black',
		price: 30,
		currency: 'USD',
		img: shirt2,
		alt: 'Black Con-Crete shirt featuring Concrete chasing a guy with a chainsaw',
		url: './shirtBase.glb',
		description:
			'Official Con-Crete band shirt in black, featuring Concrete chasing a guy with a chainsaw.',
		brand: 'Con-Crete',
		sku: 'SNAPPED-BLACK-9',
		category: 'Apparel > Shirts',
		keywords: ['band merch', 'Con-Crete shirt', 'black shirt', 'Rap apparel'],
		availability: 'InStock',
		material: '100% cotton',
		color: 'Black',
		sizes: [
			{
				label: 'XS',
				catalogObjectId: 'KL534BHYURWL43CIZJBMYTJ6',
				description: 'Extra Small – chest 32-34'
			},
			{
				label: 'S',
				catalogObjectId: 'CFGHTWXHATDEDK5DKDGOQRKM',
				description: 'Small – chest 34-36'
			},
			{
				label: 'M',
				catalogObjectId: 'SAQMIIRHLWW447TUGBD2IKIU',
				description: 'Medium – chest 38-40'
			},
			{
				label: 'L',
				catalogObjectId: 'DIZRMZ436EDCVM2TISFNO7GA',
				description: 'Large – chest 42-44'
			},
			{ label: 'XL', catalogObjectId: 'OYTZLIBQQ2XTMI66HW6B3CAU', description: 'XL – chest 46-48' },
			{
				label: '3XL',
				catalogObjectId: '73PHRWWGYWOTANHARTJVGEYT',
				description: '3XL – chest 52-54'
			},
			{
				label: '4XL',
				catalogObjectId: 'PIKSTRUQ3UGQ3EZPE4DWFW73',
				description: '4XL – chest 56-58'
			},
			{
				label: '5XL',
				catalogObjectId: 'TR3VVZ7XJ55DDLS3IZSEOXJC',
				description: '5XL – chest 60-62'
			}
		],
		provider: 'square',
		type: 'shirt'
	},
	{
		id: 14,
		name: 'SPD',
		price: 30,
		currency: 'USD',
		img: shirt3,
		alt: 'Con-Crete SPD shirt featuring Concrete chasing a guy with a chainsaw',
		url: './shirtBase2.glb',
		description: 'Official Con-Crete SPD shirt, featuring Concrete chasing a guy with a chainsaw.',
		brand: 'Con-Crete',
		sku: 'SPD-10',
		category: 'Apparel > Shirts',
		keywords: ['band merch', 'Con-Crete shirt', 'SPD shirt', 'Rap apparel'],
		availability: 'InStock',
		material: '100% cotton',
		color: 'Black',
		sizes: [
			{
				label: 'S',
				catalogObjectId: 'QKVNHFSJEG35WPYJZOZZCWMU',
				description: 'Small – chest 34-36'
			},
			{
				label: 'M',
				catalogObjectId: '5STFAF7HGSNR4MA2OQAUL6YD',
				description: 'Medium – chest 38-40'
			},
			{
				label: 'L',
				catalogObjectId: 'DOWH35SZIK53UGONOCXVRG7E',
				description: 'Large – chest 42-44'
			},
			{
				label: '2XL',
				catalogObjectId: 'CLKETJNHTE5XJRNPPCWCGJB7',
				description: '2XL – chest 48-50'
			},
			{
				label: '3XL',
				catalogObjectId: 'X2X7NI7EFK7EHNUH44PGAYGH',
				description: '3XL – chest 52-54'
			},
			{
				label: '4XL',
				catalogObjectId: 'HX37R542VEZ3H2BI4KIQN3GB',
				description: '4XL – chest 56-58'
			},
			{
				label: '5XL',
				catalogObjectId: 'HQTU3TQRBZZLRB2RVZLKPSPU',
				description: '5XL – chest 60-62'
			}
		],
		provider: 'square',
		type: 'shirt'
	},
	{
		id: 15,
		name: 'Facepaint',
		price: 30,
		currency: 'USD',
		img: shirt,
		alt: 'Con-Crete Facepaint shirt featuring Concrete chasing a guy with a chainsaw',
		url: './shirtBase3.glb',
		description:
			'Official Con-Crete Facepaint shirt, featuring Concrete chasing a guy with a chainsaw.',
		brand: 'Con-Crete',
		sku: 'FACEPAINT-11',
		category: 'Apparel > Shirts',
		keywords: ['band merch', 'Con-Crete shirt', 'facepaint shirt', 'Rap apparel'],
		availability: 'InStock',
		material: '100% cotton',
		color: 'Black',
		sizes: [
			{
				label: 'S',
				catalogObjectId: 'IYWBHKC6ZENWIORUYQ2USGGN',
				description: 'Small – chest 34-36'
			},
			{
				label: '4XL',
				catalogObjectId: 'QZR247VSO2XOSEWI4MTCPUCI',
				description: '4XL – chest 56-58'
			}
		],
		provider: 'square',
		type: 'shirt'
	}
];

export const Hats = [
	{
		id: 16,
		name: 'Con-Crete Hat',
		price: 25,
		currency: 'USD',
		img: hat,
		alt: 'Con-Crete hat featuring Concrete chasing a guy with a chainsaw',
		url: './hat.glb',
		description:
			'Official Con-Crete band hat, available in multiple colors, featuring Concrete chasing a guy with a chainsaw.',
		brand: 'Con-Crete',
		sku: 'HAT-CONCRETE-12',
		category: 'Apparel > Hats',
		keywords: ['band merch', 'Con-Crete hat', 'Rap apparel', 'adjustable cap'],
		availability: 'InStock',
		material: 'Cotton blend',
		sizes: [
			{
				label: 'Blue',
				catalogObjectId: 'H2EDDCZVWIHETO4FQ73DUB4O',
				description: 'Blue color variant'
			},
			{
				label: 'Red',
				catalogObjectId: 'MEJASG3UHPJYKVSWOUEVRDMN',
				description: 'Red color variant'
			},
			{
				label: 'Green',
				catalogObjectId: 'HOHOMKDGSAFD43AFK44J4IAQ',
				description: 'Green color variant'
			},
			{
				label: 'Grey',
				catalogObjectId: 'QC2O5YI4MN4VBWHV37L6OJFF',
				description: 'Grey color variant'
			}
		],
		provider: 'square',
		type: 'hat'
	},
	{
		id: 17,
		name: 'Facepainted Hat',
		price: 25,
		currency: 'USD',
		img: shirt,
		alt: 'Con-Crete hat featuring Concrete in facepaint',
		url: './hat2.glb',
		description:
			'Official Con-Crete Facepainted hat, available in multiple colors, featuring Concrete in facepaint.',
		brand: 'Con-Crete',
		sku: 'HAT-FACEPAINTED-13',
		category: 'Apparel > Hats',
		keywords: ['band merch', 'Con-Crete hat', 'facepaint hat', 'Rap apparel', 'adjustable cap'],
		availability: 'InStock',
		material: 'Cotton blend',
		sizes: [
			{
				label: 'Blue',
				catalogObjectId: 'ZOUPZXXJGODRYUJKSUDPZZLP',
				description: 'Blue color variant'
			},
			{
				label: 'Red',
				catalogObjectId: 'CMWNOFWPKRUQDIGDQT2NKMZS',
				description: 'Red color variant'
			},
			{
				label: 'Green',
				catalogObjectId: 'CLJHOPUGRMM5MJ4O2A27WAN4',
				description: 'Green color variant'
			},
			{
				label: 'Grey',
				catalogObjectId: 'IRPIYJLPZ4KP2COXYJFWXTTQ',
				description: 'Grey color variant'
			}
		],
		provider: 'square',
		type: 'hat'
	}
];

export const Stickers = [
	{
		id: 1,
		name: 'Painted Face ',
		price: 10,
		img: shirt,
		sizes: ['S'],
		url: './sticker3.glb',
		description: 'A stylish shirt featuring a Concrete face paint.'
	},
	{
		id: 2,
		name: 'Suit Chase ',
		price: 10,
		img: shirt2,
		sizes: ['S'],
		url: './sticker.glb',
		description: 'A stylish shirt featuring Concrete chasing a guy with a chainsaw.'
	},
	{
		id: 3,
		name: 'Pig Head ',
		price: 10,
		img: shirt3,
		sizes: ['S'],
		url: './sticker2.glb',
		description: 'A shirt featuring Concrete holding a pigs head.'
	},
	{
		id: 4,
		name: 'Classic Face ',
		price: 10,
		img: shirt4,
		sizes: ['S'],
		url: './sticker4.glb',
		description: 'A classic shirt featuring a Concrete face.'
	},
	{
		id: 5,
		name: 'Cartoon Classic ',
		price: 10,
		img: shirt5,
		sizes: ['S'],
		url: './sticker5.glb',
		description: 'A  shirt featuring a Concrete cartoon.'
	}
];
