import { rest } from "msw";
import { createKeypadResponse } from "@/utils/pads";
import { z } from "zod";

export const handlers = () => {
	return [
		rest.post("/api/keypad", keypadResolver),
		rest.post("/api/password", passwordResolver),
	];
};

const keypadResponseMap = new Map<string, CreateKeypadResponse>();

const keypadResolver: Parameters<typeof rest.post>[1] = (_, res, ctx) => {
	const keypadResponse = createKeypadResponse();

	keypadResponseMap.set(keypadResponse.uid, keypadResponse);

	return res(ctx.status(200), ctx.json(keypadResponse));
};

const KeypadInputResultSchema = z.object({
	uid: z.string(),
	coords: z.array(z.object({ x: z.number(), y: z.number() })),
});

const passwordResolver: Parameters<typeof rest.post>[1] = (_, res, ctx) => {
	const { password, confirmPassword } = z
		.object({
			password: KeypadInputResultSchema,
			confirmPassword: KeypadInputResultSchema,
		})
		.parse(ctx.body);

	if (password.uid === confirmPassword.uid) {
		return res(ctx.status(404, "You must use two different keypads"));
	}
};
