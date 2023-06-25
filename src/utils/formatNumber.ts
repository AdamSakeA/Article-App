export default function formatNumber(number: number) {
  if (number && number >= 10000) {
    return (number / 1000).toFixed(0) + "K";
  } else if (number >= 1000) {
    return (number / 1000).toFixed(1) + "K";
  } else {
    return number;
  }
}
