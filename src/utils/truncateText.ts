export default function truncateText(text: string, maxLength: number): string {
  if (text === undefined) return "Loading..";
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
  }

  return text;
}
