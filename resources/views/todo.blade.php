<!DOCTYPE html>
<html>
<head>
	<title>Todo React+Laravel</title>
	<meta name="csrf-token" content="{{csrf_token()}}">
	<base href="http://localhost/todo_react/public" target="_blank">	
	<link rel="stylesheet" type="text/css" href="{{asset('css/app.css')}}">
	<style type="text/css">
		.mt-1 {
			margin-top: 10px;
		}

		.mt-2 {
			margin-top: 20px;
		}

		.mt-3 {
			margin-top: 30px;
		}

		.mb-1 {
			margin-bottom: 10px;
		}

		.mb-2 {
			margin-bottom: 20px;
		}

		.mb-3 {
			margin-bottom: 30px;
		}
	</style>
</head>
<body>
	<div class="container">
		<div id="app-root"></div>
		
	</div>
	<script type="text/javascript" src="{{asset(mix('js/app.js'))}}" defer="true"></script>
	<script type="text/javascript" src="{{asset(mix('js/todo/Todo.js'))}}" defer="true"></script>
</body>
</html>