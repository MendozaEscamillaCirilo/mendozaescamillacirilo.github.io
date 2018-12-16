var XHR = (function(){
	var _get = function(obj_arg){
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = _atender_cambios_estado(xhr,obj_arg);
		xhr.open("GET",obj_arg.url+"?r="+Math.random(),true);
		xhr.send();
	};

	var _atender_cambios_estado = function(xhr,obj_arg){
		return function(){
			if (xhr.readyState === 4) {
				if (xhr.status >= 200 && xhr.status <= 299) {
					obj_arg.exito(xhr,obj_arg.url);
				}else{
					obj_arg.fallo(xhr,obj_arg.url);
				}
			}
		};
	};

	return {
		"get":_get
	};
})();