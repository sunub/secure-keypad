import axios, { AxiosError } from "axios";
import isNode from "detect-node";

const host = isNode ? "http://127.0.0.1:3001" : "";

const Axios = axios.create({});

export const http = {
	get: function get<Response = unknown>(url: string) {
		return Axios.get<Response>(url).then((res) => res.data);
	},
	post: function post<Response = unknown, Request = any>(
		url: string,
		body?: Request
	) {
		return Axios.post<Response>(url, body).then((res) => res.data);
	},
};

// export const http = {
// 	get: (url: string) => {
// 		return Axios.get<Response>(url)
// 			.then((res) => res.data)
// 			.catch(function (error: AxiosError) {
// 				if (error.response) {
// 					console.log(error.cause);
// 					console.log(error.response.data);
// 					console.log(error.response.status);
// 					console.log(error.response.headers);
// 					console.error(
// 						"요청이 전송되었지만 적절한 상태코드가 반환되지 않았다."
// 					);
// 				} else if (error.request) {
// 					console.log(error.cause);
// 					console.error(
// 						"요청이 전송되었지만, 응답이 수신되지 않습니다."
// 					);
// 				} else {
// 					console.log("Error", error.message);
// 				}
// 				console.log(error.config);
// 			});
// 	},
// 	post: (url: string, body?: any) => {
// 		return Axios.post<Response>(url, body)
// 			.then((res) => res.data)
// 			.catch(function (error: AxiosError) {
// 				if (error.response) {
// 					console.log(error.cause);
// 					console.log(error.response.data);
// 					console.log(error.response.status);
// 					console.log(error.response.headers);
// 					console.error(
// 						"요청이 전송되었지만 적절한 상태코드가 반환되지 않았다."
// 					);
// 				} else if (error.request) {
// 					console.log(error.cause);
// 					console.error(
// 						"요청이 전송되었지만, 응답이 수신되지 않습니다."
// 					);
// 				} else {
// 					console.log("Error", error.message);
// 				}
// 				console.log(error.config);
// 			});
// 	},
// };
