  //Temp convertion program...
  
  const textBox=document.getElementById("textBox");
    const tofahrenheit=document.getElementById("tofahrenheit");
    const toCelsius=document.getElementById("toCelsius");
    const result=document.getElementById("result"); 
    let temp;

    function convert(){
      if(tofahrenheit.checked){
        //result.textContent = "you selected to fahrenheit";
        temp=Number(textBox.value);
        temp=temp * 9 / 5 + 32;
        result.textContent =temp + "℉"

      }
      else if(toCelsius.checked){
        //result.textContent = "you selected to celsius";
        temp=Number(textBox.value);
        temp=(temp-32)*(5/9);
        result.textContent =temp + "℃"

      }
      else{
        result.textContent = "Select a unit";
      }
    }
