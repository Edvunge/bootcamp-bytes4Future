function formataData(data){
	const DIA = String(data.getDate()).padStart(2,'0')
	const MES = String(data.getMonth()+1).padStart(2,'0')
	let ano = data.getFullYear()
	return MES + "-" + DIA + "-" + ano  // MM-DD-YYYY
}