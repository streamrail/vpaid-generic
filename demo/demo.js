import VPAIDInterface from '../src/js/index';
if (typeof window.getVPAIDAd !== 'function') {
	new VPAIDInterface({ window: window });	
}
