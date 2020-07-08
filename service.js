// 管理账号信息
const USERS_KEY = 'USERS_KEY';
const DAYS_KEY = 'DAYS_KEY';
const STATE_KEY = 'STATE_KEY';

const getUsers = function() {
	let ret = '';
	ret = uni.getStorageSync(USERS_KEY);
	if (!ret) {
		ret = '[]';
	}
	return JSON.parse(ret);
}

const addUser = function(userInfo) {
	let users = getUsers();
	users.push({
		account: userInfo.account,
		password: userInfo.password
	});
	uni.setStorageSync(USERS_KEY, JSON.stringify(users));
}

const getDay = function() {
	let day = '';
	day = uni.getStorageSync(DAYS_KEY);
	if (!day) {
		day = '[]';
	}
	return JSON.parse(day);
}

const addDay = function(dayInfo){
	let days = getDay();
	days.push({
		account: dayInfo.account,
		time: dayInfo.timer
	});
	uni.setStorageSync(DAYS_KEY, JSON.stringify(days));
}

export default {
	getUsers,
	addUser,
	getDay,
	addDay
}
