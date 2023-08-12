import { RestContext, rest } from "msw";
import { createKeypadResponse } from "@/utils/pads";
import { AxiosRequestTransformer } from "axios";

export const handler = () => {
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

const passwordResolver: Parameters<typeof rest.post>[1] = (_, res, ctx) => {};
