function doPrint()
{
	var Title = document.all.Title.innerHTML;
	var Time = document.all.Time.innerHTML;
	var mContent = document.all.Content.innerHTML;
	var Fromwhere = document.all.Fromwhere.innerHTML;
var PartI = ' \
<style type="text/css"><!-- \
--></style><table width="600" border="0" cellspacing="0" cellpadding="0" align="center" bordercolor="#FFCC66" > \
 <tr>  <td width="600" align=left class=a3><br><br></td></tr>';

var PartII = '<tr><td><hr size="1" noshade>    </td></tr>  <tr valign="top" align="left"> \
    <td colspan="6">       <table width="100%" border="0" cellspacing="0" cellpadding="5" align="center" class="main">        <tr>           <td class=y05>  ';
	
var PartIII= '<div align="center">'+Title+'</div>';
var Part4='</td></tr><tr><td class=y04 > <div align="center" class="p9">'+Time+'</div>';
var Part5='</td></tr><tr> <td class=y05>'+mContent+'</td></tr><tr><td class =y04 align=right>';
var Part6='<div align="right">'+Fromwhere+'</div>'+'</td>';
var Part7='</tr></table> </td></tr> <tr> <td colspan="6">      <hr noshade size="1"></td>  </tr>  <tr>     <td colspan="6" class=a2>       <div align="center" ><br>通信地址：北京复兴门外大街2号&nbsp;中国广播网 邮编：100866<br>电话：86090077 86090088  传真：68045707<br>E-mail:wlb@cnradio.com<br>京ICP备010162号<br>中央人民广播电台 版权所有(C)</div> </td>  </tr></table>';
document.body.innerHTML = PartI+PartII+PartIII+Part4+Part5+Part6+Part7;
window.print();

}