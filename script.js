function insert_Row() {
    //Write your code here
  let table_val=document.getElementById("sampleTable");
	const row3=table_val.insertRow(0);
	const cell1=row3.insertCell(0);
	const cell2=row3.insertCell(1);
	cell1.textContent="New Cell 1";
	cell2.textContent="New Cell 2";
	
	

  
}
