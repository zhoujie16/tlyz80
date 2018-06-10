(function() {
	var url = 'http://101.201.196.132/school_webapi';
	//查学届
	axios.post(url + '/grade/list')
		.then(function(response) {
			var gradeList = response.data.dataList;

			console.log('学姐gradeList', gradeList);
		})
		.catch(function(error) {
			console.log(error);
		});

	//查校区 
	axios.get(url + '/campus')
		.then(function(response) {
			var campusList = response.data.dataList;

			console.log('查校区campus', campusList);
		})
		.catch(function(error) {
			console.log(error);
		});

	//查班级
	axios.post(url + '/class/list', {
			pageNum: 1,
			pageSize: 200,
			campusId: "6",
			gradeYear: "1991"
		})
		.then(function(response) {
			var classList = response.data.dataList;
			console.log('查班级 classList', classList);
		})
		.catch(function(error) {
			console.log(error);
		});
}());