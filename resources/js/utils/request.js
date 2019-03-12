import axios from 'axios'
import { message } from 'ant-design-vue'

// 创建 axios 实例
const service = axios.create({
	baseURL: process.env.MIX_BASE_URL, // 请求地址
	timeout: 150000 // 请求的时长
})

// 拦截器后面补全
service.interceptors.response.use(
	response => {
		/**
		 * 当 ret_code 值为非0的时候显示错误信息，
		 */
		const res = response.data
		if (res.ret_code !== 0) {
			message.error('请检查请求的目标地址')
			return false;
		}

		return res.data
	}
)

export default service;