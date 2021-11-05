function insert(x)
{
 let num =  document.getElementById('resul').innerHTML;
 document.getElementById('resul').innerHTML= num+x;
}
function clean()
{
   document.getElementById('resul').innerHTML= ""
}
function back()
{
  let result = document.getElementById('resul').innerHTML;
  document.getElementById('resul').innerHTML=result.substring(0,result.length-1);
}

function calcular()
{
   let result = document.getElementById('resul').innerHTML;
   if ('resul'){
      document.getElementById('resul').innerHTML=eval(result);
   }
   else{
      document.getElementById('resul').innerHTML= "";
   }
}


