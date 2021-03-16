var $clientName;
var $ssts;
var $promoBrief;
var $shortHead;
var $socialCopy;
var $finalUrl;
var $bitUrl;
var $imgPath;
var $socialHead;

function pubName() {
  var sel = document.getElementById('id_sites');
  var opt = sel.options[sel.selectedIndex];
  return opt.text;
}

function makeItWork() {
 
  
  $clientName = document.pub.clientname.value;
  $ssts = document.pub.ssts.value;
  $promoBrief = document.pub.promobrief.value;
  $shortHead = document.pub.shorthead.value;
  $socialCopy = document.pub.socialcopy.value;
  $finalUrl = document.pub.finalurl.value;
  $bitUrl = document.pub.biturl.value;
  $imgUrl = document.pub.imgpath.value;
  $socialHead = document.pub.socialhead.value;
  
  if (!document.pub.isdrafturl.checked && !document.pub.isfinalurl.checked && !document.pub.ismeta.checked && !document.pub.isstyle.checked && !document.pub.isfb.checked && !document.pub.istw.checked && !document.pub.ismail.checked) {
    console.log('NOTHING');
    makeFb($finalUrl);
  makeTw($socialCopy, $bitUrl, $clientName);
  makeEmail($socialHead, $socialCopy, $bitUrl, $clientName);
  //makeLi();
  makeStyleCode($imgUrl, $socialHead, $socialCopy);
  makeMeta($ssts, $imgUrl, $socialCopy);
  makeDraftUrl($ssts, $shortHead);
    makeFinalUrl($ssts, $shortHead);
  } else {
    
    if (document.pub.isdrafturl.checked) {
    makeDraftUrl($ssts, $shortHead);
  }
  if (document.pub.isfinalurl.checked) {
    makeFinalUrl($ssts, $shortHead);
  }
  if (document.pub.ismeta.checked) {
     makeMeta($ssts, $imgUrl, $socialCopy);
  }
  if (document.pub.isstyle.checked) {
    makeStyleCode($imgUrl, $socialHead, $socialCopy);
  }
  if (document.pub.isfb.checked) {
    makeFb($finalUrl);
  }
  if (document.pub.istw.checked) {
    makeTw($socialCopy, $bitUrl, $clientName);
  }
  if (document.pub.ismail.checked) {
    makeEmail($socialHead, $socialCopy, $bitUrl, $clientName);
  }
  };

  
  
  
   
  
  
  
  //makeLi();
  
 
  
}

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

function makeDraftUrl(s,h) {
  var $tempH = h.replace(/[&\/\\#!@^;,+()$~%.'"’”“‘:—=*?<>{}]/g, '').replace(/\s/g, '-');
  
    document.getElementsByName('drafturlout')[0].value = '/sponsor-story/' + s + '/' + $tempH + '-01/'; 
}

function makeFinalUrl(s,h) {
  var $tempH = h.replace(/[&\/\\#!@^;,+()$~%.'"’”“‘:—=*?<>{}]/g, '').replace(/\s/g, '-');
  
  document.getElementsByName('finalurlout')[0].value = 'https://www.' + pubName() + '/pages/interactives/sponsor-story/' + s + '/' + $tempH + '-01/';
}

function makeMeta(s,u,d) {
	document.getElementsByName('metaout')[0].value = '\{\n"ssts": "sponsor-story/sponsor-story:' + s + '/",\n"og_image": "' + u + '",\n"description": "' + d + '",\n"og_image_width": "400",\n"og_image_height": "210"\n\}'
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
