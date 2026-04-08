import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fallback',
  standalone: true
})
export class FallbackPipe implements PipeTransform {
  transform(value: unknown, fallbackText = 'Unknown'): string {
    if (value === null || value === undefined) {
      return fallbackText;
    }

    const asText = String(value).trim();
    return asText.length ? asText : fallbackText;
  }
}
