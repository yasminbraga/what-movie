export default function minutesToHour(runtime: number) {
  const hour = Math.floor(runtime / 60);
  const minutes = runtime % 60;
  return `${hour}H ${minutes}M`;
}
