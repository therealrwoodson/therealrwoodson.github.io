var $clientName;
var $ssts;
//var $promoBrief;
var $shortHead;
var $socialCopy;
var $finalUrl;
var $bitUrl;
var $imgPath;
var $socialHead;


document.pub.clientname.required = true;
document.pub.ssts.required = true;
//document.pub.promobrief.required = true;
document.pub.shorthead.required = true;
document.pub.socialcopy.required = true;
document.pub.finalurl.required = true;
document.pub.biturl.required = true;
document.pub.imgpath.required = true;
document.pub.socialhead.required = true;

function depBoxReset() {
document.pub.clientname.required = true;
document.pub.ssts.required = true;
//document.pub.promobrief.required = true;
document.pub.shorthead.required = true;
document.pub.socialcopy.required = true;
document.pub.finalurl.required = true;
document.pub.biturl.required = true;
document.pub.imgpath.required = true;
document.pub.socialhead.required = true;
};


function depBox() {
if (document.pub.ispubinfo.checked && !document.pub.issocial.checked) {
	
    document.pub.ssts.required = true;
	document.pub.ssts.style.display = 'inline-block';
	
  document.pub.shorthead.required = true;
  document.pub.shorthead.style.display = 'inline-block';
  
  document.pub.clientname.required = false;
   document.pub.clientname.style.display = 'none';
//document.pub.promobrief.required = false;
document.pub.socialcopy.required = true;
document.pub.socialcopy.style.display = 'inline-block';

document.pub.finalurl.required = false;
document.pub.finalurl.style.display = 'none';

document.pub.biturl.required = false;
document.pub.biturl.style.display = 'none';
document.getElementById('bitlylink').style.display = 'none';

document.pub.imgpath.required = true;
document.pub.imgpath.style.display = 'inline-block';
document.getElementById('nebulalink').style.display = 'inline-block';

document.pub.socialhead.required = true;
document.pub.socialhead.style.display = 'inline-block';

} else if (!document.pub.ispubinfo.checked && document.pub.issocial.checked) {
    document.pub.finalurl.required = true;
	document.pub.finalurl.style.display = 'inline-block';
	
    document.pub.imgpath.required = false;
	document.pub.imgpath.style.display = 'none';
	document.getElementById('nebulalink').style.display = 'none';
	
    document.pub.socialhead.required = true;
	document.pub.socialhead.style.display = 'inline-block';
	
    document.pub.socialcopy.required = true;
	document.pub.socialcopy.style.display = 'inline-block';
	
    document.pub.clientname.required = true;
	document.pub.clientname.style.display = 'inline-block';
//document.pub.promobrief.required = false;
	document.pub.biturl.required = true;
	document.pub.biturl.style.display = 'inline-block';
	document.getElementById('bitlylink').style.display = 'inline-block';
	
    document.pub.shorthead.required = false;
	document.pub.shorthead.style.display = 'none';
	
    document.pub.ssts.required = false;
	document.pub.ssts.style.display = 'none';
	
	document.getElementById('id_sites').style.display = 'none';
	document.getElementById('id_text').style.display = 'none';
	
} else if (!document.pub.ispubinfo.checked && !document.pub.issocial.checked) {
	document.pub.clientname.required = true;
	document.pub.clientname.style.display = 'inline-block';
	
	document.pub.ssts.required = true;
	document.pub.ssts.style.display = 'inline-block';
	
	//document.pub.promobrief.required = true;
	document.pub.shorthead.required = true;
	document.pub.shorthead.style.display = 'inline-block';
	
	document.pub.socialcopy.required = true;
	document.pub.socialcopy.style.display = 'inline-block';
	
	document.pub.finalurl.required = true;
	document.pub.finalurl.style.display = 'inline-block';
	
	document.pub.biturl.required = true;
	document.pub.biturl.style.display = 'inline-block';
	document.getElementById('bitlylink').style.display = 'inline-block';
	
	document.pub.imgpath.required = true;
	document.pub.imgpath.style.display = 'inline-block';
	document.getElementById('nebulalink').style.display = 'inline-block';
	
	document.pub.socialhead.required = true;
	
	document.getElementById('id_sites').style.display = 'inline-block';
	document.getElementById('id_text').style.display = 'inline-block';
	
} else if (document.pub.ispubinfo.checked && document.pub.issocial.checked) {
	document.pub.clientname.required = true;
	document.pub.clientname.style.display = 'inline-block';
	
	document.pub.ssts.required = true;
	document.pub.ssts.style.display = 'inline-block';
	
	//document.pub.promobrief.required = true;
	document.pub.shorthead.required = true;
	document.pub.shorthead.style.display = 'inline-block';
	
	document.pub.socialcopy.required = true;
	document.pub.socialcopy.style.display = 'inline-block';
	
	document.pub.finalurl.required = true;
	document.pub.finalurl.style.display = 'inline-block';
	
	document.pub.biturl.required = true;
	document.pub.biturl.style.display = 'inline-block';
	document.getElementById('bitlylink').style.display = 'inline-block';
	
	document.pub.imgpath.required = true;
	document.pub.imgpath.style.display = 'inline-block';
	document.getElementById('nebulalink').style.display = 'inline-block';
	
	document.pub.socialhead.required = true;
	
	document.getElementById('id_sites').style.display = 'inline-block';
	document.getElementById('id_text').style.display = 'inline-block';
}
};

function pubName() {
  var sel = document.getElementById('id_sites');
  var opt = sel.options[sel.selectedIndex];
  return opt.text;
}

function makeItWork() {
 
  
  $clientName = document.pub.clientname.value;
  $ssts = document.pub.ssts.value;
  //$promoBrief = document.pub.promobrief.value;
  $shortHead = document.pub.shorthead.value;
  $socialCopy = document.pub.socialcopy.value;
  $finalUrl = document.pub.finalurl.value;
  $bitUrl = document.pub.biturl.value;
  $imgUrl = document.pub.imgpath.value;
  $socialHead = document.pub.socialhead.value;
  
  if (!document.pub.ispubinfo.checked && !document.pub.issocial.checked) {
    makeFb($finalUrl);
  makeTw($socialCopy, $bitUrl, $clientName);
  makeEmail($socialHead, $socialCopy, $bitUrl, $clientName);
  //makeLi();
  makeStyleCode($imgUrl, $socialHead, $socialCopy);
  makeMeta($ssts, $imgUrl, $socialCopy);
  makeDraftPath($ssts, $shortHead);
    makeDraftUrl($ssts, $shortHead);
	} else if (document.pub.ispubinfo.checked && document.pub.issocial.checked) {
	    makeFb($finalUrl);
	  makeTw($socialCopy, $bitUrl, $clientName);
	  makeEmail($socialHead, $socialCopy, $bitUrl, $clientName);
	  //makeLi();
	  makeStyleCode($imgUrl, $socialHead, $socialCopy);
	  makeMeta($ssts, $imgUrl, $socialCopy);
	  makeDraftPath($ssts, $shortHead);
	    makeDraftUrl($ssts, $shortHead);
  } else if (document.pub.ispubinfo.checked && !document.pub.issocial.checked) {
    makeDraftPath($ssts, $shortHead);
	makeDraftUrl($ssts, $shortHead);
	makeMeta($ssts, $imgUrl, $socialCopy);
	makeStyleCode($imgUrl, $socialHead, $socialCopy);
  } else if (!document.pub.ispubinfo.checked && document.pub.issocial.checked) {
    makeFb($finalUrl);
	makeTw($socialCopy, $bitUrl, $clientName);
	makeEmail($socialHead, $socialCopy, $bitUrl, $clientName);
  }
 };

  
  
  
   
  
  
  
  //makeLi();
  
 
  


function countChar(val) {
        var $charNum = document.getElementById('charNum');
        var len = val.length;
        if (len > 280) {
          window.alert('Too many characters. ' + (280 - len) + ' characters remaining');
			//$charNum.style.color = 'red';
		}
		else {
		  return;
        }
      }


function amperoctoplus(s) {
	s = s.replace(/&/g, '%26');
	s = s.replace(/#/g, '%23');
	s = s.replace(/\+/g, '%2B');
	s = s.replace(/@/g, '%40');
	s = s.replace(/:/g, '%3A');
	return s;
}

function makeDraftPath(s,h) {
  var $tempH = h.replace(/[&\/\\#!@^;,+()$~%.'"’”“‘:—=*?<>{}]/g, '').replace(/\s/g, '-');
  
    document.getElementsByName('draftpathout')[0].value = '/sponsor-story/' + s + '/' + $tempH + '-01/'; 
}

function makeDraftUrl(s,h) {
  var $tempH = h.replace(/[&\/\\#!@^;,+()$~%.'"’”“‘:—=*?<>{}]/g, '').replace(/\s/g, '-');
  
  document.getElementsByName('drafturlout')[0].value = 'https://www.' + pubName() + '/pages/interactives/sponsor-story/' + s + '/' + $tempH + '-01/';
}

function makeMeta(s,u,d) {
	document.getElementsByName('metaout')[0].value = '\{\n"ssts": "sponsor-story/' + s + '/",\n"og_image": "' + u + '",\n"description": "' + d + '",\n"og_image_width": "400",\n"og_image_height": "210"\n\}'
}

function makeStyleCode(i,s,d) {
  document.getElementsByName('stylemetaout')[0].value = '<style>\r\nbody {\r\nbackground: #ffffff\r\n!important;\r\nmin-width: initial !important;\r\n}\r\n\r\n.transition-wrap {width: 100%;\r\n}\r\n/*Framework Classes that needs to be overwritten...*/\r\n.asset {\r\nbackground: #ffffff\r\n!important;\r\npadding: 0 !important;\r\nwidth: 100% !important;\r\n}\r\n.fixed {\r\nz-index: 201 !important;\r\n}\r\n#overlay .close {\r\ndisplay: none !important;\r\n}\r\n.padded-container {\r\npadding: 0 !important;\r\n}\r\n.non-article-content {\r\npadding: 0 !important;\r\n}\r\n.ui-film {\r\nbackground-color: #ffffff;\r\n}\r\n</style>\r\n\r\n<meta name=\"twitter:card\" content=\"summary_large_image\">\r\n<meta name=\"twitter:image\" content=\"' + i + '">\r\n<meta name=\"twitter:image:width\" content=\"840\">\r\n<meta name=\"twitter:image:height\" content=\"420\">\r\n<meta name=\"twitter:site\" content=\"@USATODAY\" />\r\n<meta name=\"twitter:creator\" content=\"@USATODAY\" />\r\n<meta name=\"twitter:title\" content=\"' + s + '\" />\r\n<meta name=\"twitter:description\" content=\"' + d + '\" />'
}

function makeFb(u) {
	document.getElementsByName('fbout')[0].value = "https://www.facebook.com/sharer/sharer.php?u=" + amperoctoplus(encodeURI(u));
}

function makeTw(s,b,c) {
  
	/* Clean up ampersands, octothorpes, and pluses */
  var $tweetdeck = s + ' ' + b + ' ' + 'Story from ' + c + ' via @USATODAY';
  countChar($tweetdeck);
	var $tweetnew = encodeURI($tweetdeck);
	$tweetnew = amperoctoplus($tweetnew);
	
	document.getElementsByName('twout')[0].value = "https://twitter.com/intent/tweet?text=" + $tweetnew;
}


function makeEmail(s,b,l,c) {
	
	/* Clean up ampersands, octothorpes, and pluses in the email body */
	var $emailbody = amperoctoplus(encodeURI(b + ' ' + l + ' ' + '\nStory from ' + c));
	/*$emailbody = amperoctoplus($emailbody);*/
	
  var $emailrecipient;
	$emailrecipient = "mailto:?";
  
	var $emailstring = "";
	
  $emailstring = $emailstring + "&subject=" + amperoctoplus(encodeURI(s));
	
	$emailstring = $emailstring + "&body=" + $emailbody;
	
  var $emailstringfinal = $emailrecipient + $emailstring.slice(1);
	
	document.getElementsByName('emailout')[0].value = $emailstringfinal;
}


function complainToRich() {
	var d = new Date();
	/* Clean up ampersands, octothorpes, and pluses in the email body */
	var $emailbody = amperoctoplus(encodeURI('[' + d.getMonth() + '-' + d.getDate() + '-' + d.getFullYear() + '@' + d.getHours() + ':' + d.getMinutes() + ']'));
	/*$emailbody = amperoctoplus($emailbody);*/
	
  var $emailrecipient;
	$emailrecipient = "mailto:rwoodson@gannett.com?";
  
	var $emailstring = "";
	
  $emailstring = $emailstring + "&subject=Doer-Matic%20Issue";
	
	$emailstring = $emailstring + "&body=" + $emailbody + '%0A---%0AIssue%3A%0A';
	
  var $emailstringfinal = $emailrecipient + $emailstring.slice(1);
	
  window.open($emailstringfinal);
}
