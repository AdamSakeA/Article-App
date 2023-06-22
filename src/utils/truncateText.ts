export default function truncateText(text: string): string {
  const maxLength = 100;
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }

  return text;
}
