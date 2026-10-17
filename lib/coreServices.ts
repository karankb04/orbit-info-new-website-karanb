/**
 * The four core services. Home (lib/homeServices.tsx) and /services
 * (lib/services.tsx) both key their data on these ids, so adding a fifth core
 * service here makes TypeScript flag every list that is missing it.
 */
export type CoreServiceId = "laptop" | "cctv" | "tally" | "backup";
