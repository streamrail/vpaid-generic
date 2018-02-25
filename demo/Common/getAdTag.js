import AdTagXML from './adtag.xml';

const DEFAULT_VIDEO_URL = 'http://cdn.visiblemeasures.com/ad_assets/p/demo/ComputerFair1982.mp4';
const DEFAULT_CLICK_THROUGH = 'http://www.yahoo.com/';
const DEFAULT_CLIENT_URL = 'demo.bundle.js';
const AD_ERROR_RATIO = 0;
const START_AD_DELAY = 0;
const START_AD_DELAY_RATIO = 0;
window.getAdTag = ({ videoURL = DEFAULT_VIDEO_URL, clickThrough = DEFAULT_CLICK_THROUGH, clientURL = DEFAULT_CLIENT_URL }) => {
  return AdTagXML
    .replace('${VIDEO_URL}', videoURL)
    .replace('${CLICK_THROUGH}', clickThrough)
    .replace('${VPAID_CLIENT}', HOST + clientURL)
    .replace('${AD_ERROR_RATIO}', AD_ERROR_RATIO)
	.replace('${START_AD_DELAY}', START_AD_DELAY)
	.replace('${START_AD_DELAY_RATIO}', START_AD_DELAY_RATIO);
}; 