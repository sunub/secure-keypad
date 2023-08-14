import axios, { AxiosError } from "axios";
import isNode from "detect-node";

const host = isNode ? "http://127.0.0.1:3001" : "";

const Axios = axios.create();

export const http = {
	get: function get<Response = unknown>(url: string) {
		return Axios.get<Response>(url).then((res) => res.data);
	},
	post: function post<Response = unknown, Request = any>(
		url: string,
		body?: Request
	) {
		return Axios.post<Response>(url, body).then((res) => {
			return res.data;
		});
	},
};
