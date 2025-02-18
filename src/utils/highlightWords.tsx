export function highlightWords(text: string) {
  return text.split(' ').map((word, idx) => {
    if (word.includes('*')) {
      return <span key={idx} className="text-secondary">{`${word.replace('*', '')} `}</span>;
    }
    return `${word} `;
  });
}