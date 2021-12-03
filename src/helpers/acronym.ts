export function acronym(text: string): string {
  let firstLatter = text.trim().split(" ");
  if (firstLatter.length > 1) {
    return (
      firstLatter[0][0].trim() + firstLatter[firstLatter.length - 1][0].trim()
    );
  }

  return firstLatter[0][0];
}
