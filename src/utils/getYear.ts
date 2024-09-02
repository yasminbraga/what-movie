export default function getYear(releaseDate: string) {
  const splitDate = releaseDate.split("-");
  return splitDate[0];
}
