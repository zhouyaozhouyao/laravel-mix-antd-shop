import md5 from 'js-md5'

export function autograph(url, query) {
	const version = 1.0
	const timestamp = Date.parse(new Date()) // 当前客户端时间
	const time = timestamp / 1000; //转换时间
	const param = JSON.stringify(query) // 参数转换
	const guid = '1' // 用户 id
	var sign = ''; // 签名字符串
	sign = md5(guid + time + param + 'zhouyao')

	return {
		version: version,
		time: time,
		param: param,
		sign: sign,
		guid: guid,
	}
}