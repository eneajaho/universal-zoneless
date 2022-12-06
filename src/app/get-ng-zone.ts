import { NgZone, ɵNoopNgZone } from '@angular/core';

export interface NgZoneOptions {
  isNoop?: boolean,
  enableLongStackTrace: boolean;
  shouldCoalesceEventChangeDetection: boolean;
  shouldCoalesceRunChangeDetection: boolean;
}

const defaultOptions: NgZoneOptions = {
    enableLongStackTrace: false,
    shouldCoalesceEventChangeDetection: false,
    shouldCoalesceRunChangeDetection: false,
};

export function getNgZone(
  options: Partial<NgZoneOptions> = defaultOptions
): NgZone {
  return options.isNoop ? new ɵNoopNgZone() : new NgZone(options);
}
