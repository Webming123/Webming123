// 封装请求
const http = ({url, method='get', data=''}) => {
	return new Promise((resolve, reject) => {
		uni.request({
			method,
			url: `https://netease-cloud-music-api-amber-sigma.vercel.app/` + url,
			data,
			success(res) {
				resolve(res.data) // 将请求成功后得到的数据返回出去 可以用then方法接受到数据
			},
			
			fail(err) {
				reject(err) // 将请求失败后返回的信息 返回出去 可以用catch方法接受到
			},
			
			complete() {
				
			}
		})
	})
}

export default http;
