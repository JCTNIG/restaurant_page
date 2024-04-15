// Function to generate lorem ipsum text
export default function lorem(length) {
  const words = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'.split(' ');
  let loremIpsum = '';
  for (let i = 0; i < length; i++) {
      loremIpsum += words[i % words.length] + ' ';
  }
  return loremIpsum.trim();
}


