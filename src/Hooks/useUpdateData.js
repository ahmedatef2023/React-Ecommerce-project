import { baseUrl } from '../Api/BaseUrl';

export const useUpdateDataWithImage = async (url, params) => {
	const config = {
		headers: {
			'Content-Type': 'multipart/form-data',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNzk1MjEwNzAyODM2ZWI3NTdlN2IiLCJuYW1lIjoiYWhtZWQiLCJhY2NvdW50VHlwZSI6ImFkbWluIiwiX192IjoxLCJpYXQiOjE2NzkyODM1MjEsImV4cCI6MTY3OTg4ODMyMSwiaXNzIjoiZWNvbW1lcmNlX3dlYiJ9.aeQLb-UpDWq0LvbeDVDU0YxQJJM8n-_yvwKNVggSZ94'
		}
	};
	const response = await baseUrl.patch(url, params, config);
	console.log(response.status);
	return response;
};

export const useUpdateData = async (url, params) => {
	const config = {
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNzk1MjEwNzAyODM2ZWI3NTdlN2IiLCJuYW1lIjoiYWhtZWQiLCJhY2NvdW50VHlwZSI6ImFkbWluIiwiX192IjoxLCJpYXQiOjE2NzkyODM1MjEsImV4cCI6MTY3OTg4ODMyMSwiaXNzIjoiZWNvbW1lcmNlX3dlYiJ9.aeQLb-UpDWq0LvbeDVDU0YxQJJM8n-_yvwKNVggSZ94'
		}
	};
	const response = await baseUrl.patch(url, params, config);
	console.log(response.status);
	return response;
};

export const useUpdateDataWithImagePUT = async (url, params) => {
	const config = {
		headers: {
			'Content-Type': 'multipart/form-data',
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNzk1MjEwNzAyODM2ZWI3NTdlN2IiLCJuYW1lIjoiYWhtZWQiLCJhY2NvdW50VHlwZSI6ImFkbWluIiwiX192IjoxLCJpYXQiOjE2NzkyODM1MjEsImV4cCI6MTY3OTg4ODMyMSwiaXNzIjoiZWNvbW1lcmNlX3dlYiJ9.aeQLb-UpDWq0LvbeDVDU0YxQJJM8n-_yvwKNVggSZ94'
		}
	};
	const response = await baseUrl.put(url, params, config);
	console.log(response.status);
	return response;
};

export const useUpdateDataPUT = async (url, params) => {
	const config = {
		headers: {
			Authorization:
				'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDEwNzk1MjEwNzAyODM2ZWI3NTdlN2IiLCJuYW1lIjoiYWhtZWQiLCJhY2NvdW50VHlwZSI6ImFkbWluIiwiX192IjoxLCJpYXQiOjE2NzkyODM1MjEsImV4cCI6MTY3OTg4ODMyMSwiaXNzIjoiZWNvbW1lcmNlX3dlYiJ9.aeQLb-UpDWq0LvbeDVDU0YxQJJM8n-_yvwKNVggSZ94'
		}
	};
	const response = await baseUrl.put(url, params, config);
	console.log(response.status);
	return response;
};