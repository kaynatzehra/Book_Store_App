import { axiosInstance } from "./service";

export  function booklist_api() {
	return  axiosInstance.get('booklist');
}
export  function getorders() {
	return  axiosInstance.get('orders');
}
export  function addorders(data) {
	return  axiosInstance.post('orders',data);
}