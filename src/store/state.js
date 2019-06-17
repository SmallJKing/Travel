let defaultCity = '上海'
try{
	if(localStorage.city){
		defaultCity = localStorage.city
	}
} catch(e){
	//TODO handle the exception
}
export default {
	city: defaultCity
}