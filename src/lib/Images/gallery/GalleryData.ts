// galleryData.ts
const images = import.meta.glob('$lib/Images/gallery/*.jpg', { eager: true });

const altMap: Record<string, string> = {
	'con1.jpg': 'Con-Crete live on stage with fans',
	'con2.jpg': 'Hanging with the dead',
	'con3.jpg': 'Con-Crete with fans',
	'con4.jpg': 'Con-Crete with fans',
	'con5.jpg': 'Con-Crete at a music festival',
	'con6.jpg': 'Fuck my boss',
	'con7.jpg': 'Con-Crete with fans',
	'con8.jpg': 'Con-Crete with fans',
	'con9.jpg': 'Con-Crete with fans',
	'con10.jpg': 'Con-Crete with fans',
	'con11.jpg': 'Con-Crete with fans',
	'con12.jpg': 'Con-Crete with fans',
	'con13.jpg': 'Con-Crete with Shaggy-2-Dope'
};

export const galleryImages = Object.entries(images).map(([path, module]) => {
	const fileName = path.split('/').pop()!;
	return {
		src: module.default,
		alt: altMap[fileName] || `Con-Crete gallery image`,
		caption: fileName.replace('.jpg', '')
	};
});
