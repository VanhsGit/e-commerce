/** Only new managed uploads have a thumbnail; old and external URLs remain valid. */
export function imageThumbnail(url: string): string {
  return url.replace(
    /((?:^|\/)library\/\d{4}\/\d{2}\/[a-f0-9]{32}\/)(?:image\.(?:webp|gif|png|jpe?g)|thumbnail\.webp)(?=[?#]|$)/i,
    '$1thumbnail.webp',
  );
}
