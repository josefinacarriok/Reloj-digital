my.ready(function () {
setInterval(function () {
	my('.col > .time').html(getTime())
	my('.float-right').html(
		new Date().getHours() < 12 ?
		'AM' : 'PM'
	)
	my('ul > li')
		.eq(new Date().getDay() - 1)
		.addClass('my-active')
}, 1000)
function toFixed (e) {
	return e < 10 ? '0' + e : e
}
function toHours (e) {
	return e > 12 ? e - 12 : e
}
function getTime () {
	var n = new Date()
	var hour = toFixed(toHours(n.getHours()))
	var min = toFixed(n.getMinutes())
	var sec = toFixed(n.getSeconds())
	return [hour, min, sec].join(':')
}
})