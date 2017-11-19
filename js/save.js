(function saveModule(window) {

	/**
	 * Save current data to localStorage
	 * @param String name
	 * @param [Array] data
	 * @public
	 */
	function saveData(name, data){
		if(!name || !data) {console.log('Error. Required fields'); return false;}
		localStorage.setItem(name, JSON.stringify(data));
	}
	
	/**
	 * Save current data to localStorage
	 * @param String name
	 * @public
	 */
	function getData(name){
		if(!name) {console.log('Error. Required fields'); return false;}
		
		var data = localStorage.getItem(name);
		
		if(data){
			data = JSON.parse(data);
			return data;
		} else {
			console.log('No data stored');
			return false;
		}
	}
	
	window.save = {
		saveData: saveData,
		getData: getData
	}

})(window);