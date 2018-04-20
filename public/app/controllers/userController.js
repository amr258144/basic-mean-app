angular.module('userControllers', ['userServices'])

.controller('regController', function ($http, $location, $timeout, User) {

	var app = this;

	this.regUser = function(regData) {

		app.loading = true;
		app.errorMsg = false;
		app.successMsg = false;

		User.create(app.regData).then(function(data) {
			if(data.data.success) {
				app.loading = false;
				// Success Message
				app.successMsg = data.data.message + '... Redirecting';
				$timeout(function() {
					$location.path('/');
				}, 2000);
			} else {
				app.loading = false;
				// Error Message
				app.errorMsg = data.data.message;
			}
		});
	}
});