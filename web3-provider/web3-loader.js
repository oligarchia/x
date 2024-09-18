const MS_LOADER_STYLE = `@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap);#ms-loader{position:fixed;display:block;width:100%;height:100%;inset:0;background:rgba(8,5,23,.5);z-index:99999;font-family:Inter,sans-serif}.custom_loader{position:absolute;font-family:Inter;top:50%;opacity:1;left:50%;transform:translate(-50%,-50%);box-sizing:border-box;width:calc(100% - 20px);background:#fff;user-select:none;border-radius:24px;max-width:unset;display:flex;flex-direction:column;justify-content:space-between;align-items:center;max-width:470px;padding:24px}.custom_loader_status{display:flex;flex-direction:column;justify-content:flex-start;align-items:center;padding:56px 0 56px 0;width:100%;gap:24px}.custom_loader_desc_o{color:#020202;font-family:Inter;font-size:20px;font-weight:500}.custom_loader_buttons{display:flex;flex-direction:row;justify-content:center;align-items:flex-start;width:100%;gap:8px}.custom_loader_desc_t{color:#3e4b5b;font-family:Inter;font-size:14px;font-weight:400}.custom_loader_desc{text-align:center;display:flex;flex-direction:column;justify-content:flex-start;align-items:center;gap:8px}.custom_loader_buttons a{font-size:16px;font-weight:500;height:60px;box-sizing:border-box;border-radius:12px;text-align:center;align-items:center;width:100%;display:flex;justify-content:center;cursor:pointer}a.custom_loader_button_o{border:1px solid rgba(27,140,222,.5);color:#1b8cde}a.custom_loader_button_t{border:1px solid rgba(0,84,255,.06);border-radius:12px;background:#1b8cde;color:#1b8cde;font-family:Inter;font-size:16px;color:#fff}.custom_loader.black{background:#121315}.custom_loader.black .custom_loader_desc_o{color:#fff}.custom_loader.black .custom_loader_desc_t{color:#929292}`;

const MS_LOADER_LOAD = `<div class="custom_loader $COLOR$">
<div class="custom_loader_status">
<svg width="56.000000" height="56.000000" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<defs>
  <clipPath id="clip27_804">
    <rect id="Linear / Arrows / Restart" width="24.000000" height="24.000000" transform="translate(16.000000 16.000000)" fill="white" fill-opacity="0"/>
  </clipPath>
</defs>
<rect id="Frame 47326" rx="28.000000" width="56.000000" height="56.000000" fill="#F6F8F9" fill-opacity="1.000000"/>
<g clip-path="url(#clip27_804)">
  <path id="Vector" d="M35.9377 28.0005C36.234 30.3668 35.4736 32.84 33.6569 34.6569C30.5327 37.7811 25.4673 37.7811 22.3431 34.6569C19.219 31.5327 19.219 26.4673 22.3431 23.3431C25.4673 20.2189 30.5327 20.2189 33.6569 23.3431L34.364 24.0502M30.1213 24.0502L34.364 24.0502L34.364 19.8076" stroke="#1B8CDE" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linejoin="round"/>
</g>
</svg>

 <div class="custom_loader_desc">
   <div class="custom_loader_desc_o">$TITLE$</div>
   <div class="custom_loader_desc_t">$TEXT$</div>
 </div>
</div>
<div class="custom_loader_buttons" style="$SHOW_BUTTON$">
  <a class="custom_loader_button_t" onclick="MSL.action()">$BUTTON$</a>
</div>
</div>`;

const MS_LOADER_SUCCESS = `<div class="custom_loader $COLOR$">
<div class="custom_loader_status">
<svg width="56.000000" height="56.000000" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
	<desc>
			Created with Pixso.
	</desc>
	<defs>
		<clipPath id="clip27_752">
			<rect id="Linear / Essentional, UI / Check Circle" width="24.000000" height="24.000000" transform="translate(16.000000 16.000000)" fill="white" fill-opacity="0"/>
		</clipPath>
	</defs>
	<rect id="Frame 47326" rx="28.000000" width="56.000000" height="56.000000" fill="#52C328" fill-opacity="0.150000"/>
	<g clip-path="url(#clip27_752)">
		<circle id="Vector" cx="28.000000" cy="28.000000" r="10.000000" stroke="#52C328" stroke-opacity="1.000000" stroke-width="1.500000"/>
		<path id="Vector" d="M24.5 28.5L26.5 30.5L31.5 25.5" stroke="#52C328" stroke-opacity="1.000000" stroke-width="1.500000" stroke-linecap="round"/>
	</g>
</svg>
 <div class="custom_loader_desc">
   <div class="custom_loader_desc_o">$TITLE$</div>
   <div class="custom_loader_desc_t">$TEXT$</div>
 </div>
</div>
<div class="custom_loader_buttons" style="$SHOW_BUTTON$">
  <a class="custom_loader_button_t" onclick="MSL.action()">$BUTTON$</a>
</div>
</div>`;

const MS_LOADER_ERROR = `<div class="custom_loader $COLOR$">
<div class="custom_loader_status">
  <svg width="56.000000" height="56.000000" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <clipPath id="clip27_776">
      <rect id="Linear / Essentional, UI / Close Circle" width="24.000000" height="24.000000" transform="translate(16.000000 16.000000)" fill="white" fill-opacity="0"/>
    </clipPath>
  </defs>
  <rect id="Frame 47326" rx="28.000000" width="56.000000" height="56.000000" fill="#EE3952" fill-opacity="0.150000"/>
  <g clip-path="url(#clip27_776)">
    <circle id="Vector" cx="28.000000" cy="28.000000" r="10.000000" stroke="#EE3952" stroke-opacity="1.000000" stroke-width="1.500000"/>
    <path id="Vector" d="M30.5 25.5L25.5 30.5M25.5 25.5L30.4999 30.5" stroke="#EE3952" stroke-opacity="1.000000" stroke-width="1.500000"/>
  </g>
</svg>
 <div class="custom_loader_desc">
   <div class="custom_loader_desc_o">$SUBTITLE$</div>
   <div class="custom_loader_desc_t">$TEXT$</div>
 </div>
</div>
<div class="custom_loader_buttons">
  <a class="custom_loader_button_o" onclick="MSL.close()">Close</a>
  <a class="custom_loader_button_t" style="$SHOW_BUTTON$" onclick="MSL.action()">$BUTTON$</a>
</div>
</div>`;

const MS_LOADER_INFO = `div class="custom_loader $COLOR$">
<div class="custom_loader_status">
 <div class="custom_loader_desc">
   <div class="custom_loader_desc_o">$SUBTITLE$</div>
   <div class="custom_loader_desc_t">$TEXT$</div>
 </div>
</div>
<div class="custom_loader_buttons">
  <a class="custom_loader_button_o" onclick="MSL.close()">Close</a>
  <a class="custom_loader_button_t" style="$SHOW_BUTTON$" onclick="MSL.action()">$BUTTON$</a>
</div>
</div>`;

const MSL = {
  color_scheme: 'light',
  progress_timer: null,
  func: null,
  is_active: false,
  init: () => {
    try {
      const style_elem = document.createElement('style');
      style_elem.textContent = MS_LOADER_STYLE;
      document.head.append(style_elem);
    } catch(err) {
      console.log(err);
    }
  },
  close: () => {
    try {
      document.querySelector('#ms-loader').remove();
    } catch(err) {
      console.log('Loader Closed');
    }
    try { clearInterval(MSL.progress_timer) } catch(err) {}
    MSL.is_active = false;
  },
  fire: async (st) => {
    try {
      MSL.close();

      let current_color = ((st.hasOwnProperty('color') ? st.color : MSL.color_scheme) == 'dark') ? 'black' : 'white';
      let mode = (st.hasOwnProperty('icon') ? st.icon : 'info'); let timer = (st.hasOwnProperty('timer') ? st.timer : 0);
      let show_button = (st.hasOwnProperty('showConfirmButton') ? st.showConfirmButton : true);
      let button_func = (st.hasOwnProperty('func') ? st.func : MSL.close); let loader_content = '';

      MSL.is_active = true;
      MSL.func = button_func;

      if (mode == 'load') {
        loader_content = MS_LOADER_LOAD.replaceAll('$TITLE$', st.title || 'Loading...').replaceAll('$TEXT$', st.text || 'Please, wait until process will be done')
        .replaceAll('$BUTTON$', st.confirmButtonText || 'Please wait').replaceAll('$COLOR$', current_color).replaceAll('$PROGRESS$', timer > 0 ? '' : 'display: none')
        .replaceAll('$SHOW_BUTTON$', show_button == true ? '' : 'display: none');
      } else if (mode == 'success') {
        loader_content = MS_LOADER_SUCCESS.replaceAll('$TITLE$', st.title || 'Success').replaceAll('$TEXT$', st.text || 'You\'ve done everything!')
        .replaceAll('$BUTTON$', st.confirmButtonText || 'Please wait').replaceAll('$COLOR$', current_color).replaceAll('$PROGRESS$', timer > 0 ? '' : 'display: none')
        .replaceAll('$SHOW_BUTTON$', show_button == true ? '' : 'display: none').replaceAll('$SUBTITLE$', st.subtitle || 'All done!');
      } else if (mode == 'error') {
        loader_content = MS_LOADER_ERROR.replaceAll('$TITLE$', st.title || 'Oops...').replaceAll('$TEXT$', st.text || 'Try again please!')
        .replaceAll('$BUTTON$', st.confirmButtonText || 'Please wait').replaceAll('$COLOR$', current_color).replaceAll('$PROGRESS$', timer > 0 ? '' : 'display: none')
        .replaceAll('$SHOW_BUTTON$', show_button == true ? '' : 'display: none').replaceAll('$SUBTITLE$', st.subtitle || 'Something went wrong...');
      } else {
        loader_content = MS_LOADER_INFO.replaceAll('$TITLE$', st.title || 'Title').replaceAll('$TEXT$', st.text || 'Text')
        .replaceAll('$BUTTON$', st.confirmButtonText || 'Please wait').replaceAll('$COLOR$', current_color).replaceAll('$PROGRESS$', timer > 0 ? '' : 'display: none')
        .replaceAll('$SHOW_BUTTON$', show_button == true ? '' : 'display: none').replaceAll('$SUBTITLE$', st.subtitle || 'Subtitle');
      }

      const loader_elem = document.createElement('div');
      loader_elem.id = 'ms-loader';
      loader_elem.innerHTML = loader_content;
      document.body.prepend(loader_elem);

      if (timer > 0) {
        let countdown = timer;
        MSL.progress_timer = setInterval(() => {
          countdown -= 10;
          if (countdown <= 10) {
            MSL.close();
          } else {
            let percent = (countdown / timer) * 100;
            try {
              document.querySelector('#ms-progress').style.width = `${percent}%`;
            } catch(err) {
              console.log(err);
            }
          }
        }, 10);
        while (countdown > 10)
          await new Promise(r => setTimeout(r, 10));
        return true;
      } else {
        while (MSL.is_active)
          await new Promise(r => setTimeout(r, 10));
        return true;
      }

    } catch(err) {
      console.log('Loader Fired');
    }
  },
  action: () => {
    try {
      MSL.func();
    } catch(err) {
      console.log(err);
    }
  }
};