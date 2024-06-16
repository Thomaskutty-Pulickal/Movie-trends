import { z } from 'zod';

export const discoverSchema = z.object({
	poster_path: z.string(),
	original_title: z.string(),
});
