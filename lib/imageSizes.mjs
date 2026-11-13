// Widths next/image may request. Shared by next.config.mjs (so Next only ever
// asks for these) and scripts/generate-images.mjs (so a file exists for each).
export const DEVICE_SIZES = [640, 828, 1080, 1200, 1920];
export const IMAGE_SIZES = [32, 64, 96, 128, 256, 384];
export const ALL_WIDTHS = [...IMAGE_SIZES, ...DEVICE_SIZES];

// Where the generated files live, under /public.
export const OUT_DIR = "_img";
