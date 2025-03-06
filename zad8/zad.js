function getCookie(name)
{
  var c = document.cookie;
  point = c.indexOf(name);
  if (point != -1){
    endAt = c.indexOf (";", point + name.length);
    if (endAt == -1) endAt = c.length;
    var temp = c.substring(point + 1 + name.length, endAt);
    return temp;
  }
  return false;
}
function setCookie(name, value)
{
  data = new Date();
  data.setMonth(data.getMonth() + 1);
  var cookie = name + "=" + value + ";";
  cookie += "expires=" + data.toGMTString();
  document.cookie = cookie;
}
function check()
{
  if((value = getCookie("vcount")) != false){
    if(value == 1){
      document.write("Na tej stronie byłeś już 1 raz.");
    }
    else{
      document.write("Na tej stronie byłeś już " + value + " razy.");
    }
    value++;
    setCookie("vcount", value);
  }
  else{
    document.write("Witamy nowego użytkownika.");
    setCookie("vcount", 1);
  }
}