(function() {
	return;
	var url = 'http://101.201.196.132/school_webapi';
	$.ajax({
		type: "post",
		url: url + '/grade/list',
		async: true,
		success: function(data) {
			console.log('gradeList', data);
			var gradeList = data.dataList;

		},
		error: function(err) {
			console.log(err)
		}
	});
	$.ajax({
		type: "post",
		url: url + '/class/list',
		async: true,
		traditional:true,
		contentType:'application/json;charset=UTF-8',
		data: {
			campusId: null,
			className: null,
			gradeYear: null,
			headTeacherName: null,
			pageNum: 1,
			pageSize: 20
		},
		success: function(data) {
			console.log('classList', data);
			var classList = data.dataList;

		},
		error: function(err) {
			console.log(err)
		}
	});
}());