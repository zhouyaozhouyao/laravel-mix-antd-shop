import request from '../utils/request'
import { autograph } from '../utils/autograph'

// 后台管理员登录
export function login(query) {
	let url = '/login';
	let data = autograph(url, query);
	return request({
		url: url,
		method: 'post',
		data
	})
}

// 获取用户信息
export function getInfo(query) {
	let url = '/getInfo';
	let data = autograph(url, query);
	return request({
		url: url,
		method: 'post',
		data
	});
}

export function getMenu(query) {
	let url = '/getMenu';
	let data = autograph(url, query);
	return request({
		url: url,
		method: 'post',
		data
	});
}