const MS_MODAL_STYLE = `@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap);#ms-modal{position:fixed;display:block;width:100%;height:100%;inset:0;background:rgba(22,22,22,.88);z-index:99999;font-family:Inter,sans-serif}.custom_modal{position:absolute;font-family:Inter;top:50%;opacity:1;left:50%;transform:translate(-50%,-50%);box-sizing:border-box;width:calc(100% - 20px);background:#fff;user-select:none;border-radius:24px;background:#fff;display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;max-width:792px}.custom_modal_left{display:flex;flex-direction:row;justify-content:flex-start;align-items:flex-start;padding:8px;box-sizing:border-box}.custom_modal_left{width:50%}.custom_modal_right{width:50%;position:relative;height:440px;display:flex;flex-direction:column;justify-content:space-between;align-items:flex-start;padding:24px 40px 24px 24px;box-sizing:border-box}.custom_modal_menu{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;padding:16px;border-radius:18px;background:#f6f8f9;width:100%;gap:8px}.custom_modal_el{height:72px;width:100%;border-radius:16px;background:#fff;display:flex;flex-direction:row;justify-content:space-between;align-items:center;box-sizing:border-box;padding:20px;cursor:pointer;transition:all 40ms ease-in 40ms}.modal_el_name{color:#000;font-size:16px;font-weight:500;display:flex}.custom_modal_el:hover{outline:1px solid #1b8cde;border-radius:16px;background:rgba(27,140,222,.04)}.custom_modal_right_top{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start;width:100%}.custom_modal_right_top_o{color:#000;font-family:Inter;font-size:20px;font-weight:500}.modal_custom_close{position:absolute;right:16px;top:8px}.custom_modal_right_bottom{display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.custom_modal_right_top_t{color:#5d5858;font-family:Inter;font-size:14px;font-weight:400}.custom_modal_right_bottom_title{color:#000;font-family:Inter;font-size:16px;font-weight:500}.custom_modal_right_bottom_steps{margin-top:24px;gap:12px;display:flex;flex-direction:column;justify-content:flex-start;align-items:flex-start}.bottom_steps_el{font-size:14px;font-weight:400;color:#1b8cde}.modal_el_name_dop{border-radius:8px;background:rgba(2,100,247,.1);width:62px;height:23px;color:#0264f7;font-size:12px;font-weight:500;display:flex;justify-content:center;align-items:center;margin-left:8px}.custom_modal.black{background:#121315}.custom_modal.black .custom_modal_menu{background:#1e1f21}.custom_modal.black .custom_modal_el{background:#323336}.custom_modal.black .custom_modal_right_top_o{color:#fff}.custom_modal.black .custom_modal_right_top_t{color:#929292}.custom_modal.black .modal_custom_close svg path{fill:#fff}.custom_modal.black .custom_modal_right_bottom_title{color:#fff}.custom_modal.black .modal_el_name{color:#fff}li.bottom_steps_el d{color:#929292}@media (max-width:675px){.custom_modal_right{display:none}.custom_modal_left{width:100%}.custom_modal{max-width:400px}.modal_el_name_dop{display:none}}`;

const MS_MODAL_CODE = `<div class="custom_modal $COLOR$">
<div class="custom_modal_left">
  <div class="custom_modal_menu">
  <div class="modal_el_name">
        Choose Wallet to sign-in
      </div>
    <div class="custom_modal_el" onclick="connect_wallet('MetaMask')">
      <div class="modal_el_name">
        MetaMask
      </div>
      <div class="modal_el_logo">
        <svg width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <clipPath id="clip27_831">
              <rect id="Metamask" width="17.777777" height="17.777777" transform="translate(7.109375 7.111084)" fill="white" fill-opacity="0" />
            </clipPath>
            <clipPath id="clip27_830">
              <rect id="Frame 1948756302" rx="16.000000" width="32.000000" height="32.000000" fill="white" fill-opacity="0" />
            </clipPath>
          </defs>
          <rect id="Frame 1948756302" rx="16.000000" width="32.000000" height="32.000000" fill="#F6851B" fill-opacity="0.150000" />
          <g clip-path="url(#clip27_830)">
            <g clip-path="url(#clip27_831)">
              <path id="Vector" d="M24.0032 7.80566L17.0664 12.9577L18.3492 9.91809L24.0032 7.80566Z" fill="#E2761B" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M17.0664 12.9577L18.3492 9.91809L24.0032 7.80566L17.0664 12.9577Z" stroke="#E2761B" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M7.98828 7.80566L14.8693 13.0065L13.6493 9.91809L7.98828 7.80566Z" fill="#E4761B" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M14.8693 13.0065L13.6493 9.91809L7.98828 7.80566L14.8693 13.0065Z" stroke="#E4761B" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M21.5037 19.748L19.6562 22.5786L23.6092 23.6661L24.7456 19.8108L21.5037 19.748Z" fill="#E4761B" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M19.6562 22.5786L23.6092 23.6661L24.7456 19.8108L21.5037 19.748L19.6562 22.5786Z" stroke="#E4761B" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M7.25391 19.8108L8.38332 23.6661L12.3363 22.5786L10.4888 19.748L7.25391 19.8108Z" fill="#E4761B" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M8.38332 23.6661L12.3363 22.5786L10.4888 19.748L7.25391 19.8108L8.38332 23.6661Z" stroke="#E4761B" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M12.1171 14.9655L11.0156 16.6317L14.9407 16.806L14.8012 12.5881L12.1171 14.9655Z" fill="#E4761B" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M11.0156 16.6317L14.9407 16.806L14.8012 12.5881L12.1171 14.9655L11.0156 16.6317Z" stroke="#E4761B" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M19.8721 14.9655L17.1531 12.5393L17.0625 16.806L20.9806 16.6317L19.8721 14.9655Z" fill="#E4761B" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M17.1531 12.5393L17.0625 16.806L20.9806 16.6317L19.8721 14.9655L17.1531 12.5393Z" stroke="#E4761B" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M12.3359 22.5785L14.6924 21.4282L12.6566 19.8386L12.3359 22.5785Z" fill="#E4761B" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M14.6924 21.4282L12.6566 19.8386L12.3359 22.5785L14.6924 21.4282Z" stroke="#E4761B" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M17.2891 21.4282L19.6525 22.5785L19.3248 19.8386L17.2891 21.4282Z" fill="#E4761B" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M19.6525 22.5785L19.3248 19.8386L17.2891 21.4282L19.6525 22.5785Z" stroke="#E4761B" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M19.6642 22.5786L17.3008 21.4282L17.489 22.969L17.4681 23.6173L19.6642 22.5786Z" fill="#D7C1B3" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M17.3008 21.4282L17.489 22.969L17.4681 23.6173L19.6642 22.5786L17.3008 21.4282Z" stroke="#D7C1B3" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M12.3438 22.5786L14.5398 23.6173L14.5259 22.969L14.7002 21.4282L12.3438 22.5786Z" fill="#D7C1B3" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M14.5398 23.6173L14.5259 22.969L14.7002 21.4282L12.3438 22.5786L14.5398 23.6173Z" stroke="#D7C1B3" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M14.5715 18.8207L12.6055 18.2421L13.9928 17.6077L14.5715 18.8207Z" fill="#233447" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M12.6055 18.2421L13.9928 17.6077L14.5715 18.8207L12.6055 18.2421Z" stroke="#233447" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M17.418 18.8207L17.9966 17.6077L19.391 18.2421L17.418 18.8207Z" fill="#233447" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M17.9966 17.6077L19.391 18.2421L17.418 18.8207L17.9966 17.6077Z" stroke="#233447" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M12.3358 22.5786L12.6704 19.748L10.4883 19.8108L12.3358 22.5786Z" fill="#CD6116" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M12.6704 19.748L10.4883 19.8108L12.3358 22.5786L12.6704 19.748Z" stroke="#CD6116" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M19.3203 19.748L19.655 22.5786L21.5024 19.8108L19.3203 19.748Z" fill="#CD6116" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M19.655 22.5786L21.5024 19.8108L19.3203 19.748L19.655 22.5786Z" stroke="#CD6116" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M20.9806 16.6316L17.0625 16.8059L17.425 18.8207L18.0037 17.6076L19.398 18.242L20.9806 16.6316Z" fill="#CD6116" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M17.0625 16.8059L17.425 18.8207L18.0037 17.6076L19.398 18.242L20.9806 16.6316L17.0625 16.8059Z" stroke="#CD6116" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M12.5974 18.242L13.9917 17.6076L14.5634 18.8207L14.9329 16.8059L11.0078 16.6316L12.5974 18.242Z" fill="#CD6116" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M13.9917 17.6076L14.5634 18.8207L14.9329 16.8059L11.0078 16.6316L12.5974 18.242L13.9917 17.6076Z" stroke="#CD6116" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M11.0156 16.6316L12.6609 19.8386L12.6052 18.242L11.0156 16.6316Z" fill="#E4751F" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M12.6609 19.8386L12.6052 18.242L11.0156 16.6316L12.6609 19.8386Z" stroke="#E4751F" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M19.4017 18.242L19.332 19.8386L20.9843 16.6316L19.4017 18.242Z" fill="#E4751F" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M19.332 19.8386L20.9843 16.6316L19.4017 18.242L19.332 19.8386Z" stroke="#E4751F" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M14.9437 16.8059L14.5742 18.8207L15.0343 21.1981L15.1389 18.0678L14.9437 16.8059Z" fill="#E4751F" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M14.5742 18.8207L15.0343 21.1981L15.1389 18.0678L14.9437 16.8059L14.5742 18.8207Z" stroke="#E4751F" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M17.0671 16.8059L16.8789 18.0608L16.9626 21.1981L17.4297 18.8207L17.0671 16.8059Z" fill="#E4751F" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M16.8789 18.0608L16.9626 21.1981L17.4297 18.8207L17.0671 16.8059L16.8789 18.0608Z" stroke="#E4751F" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M17.4241 18.8208L16.957 21.1982L17.2917 21.4283L19.3274 19.8387L19.3971 18.2422L17.4241 18.8208Z" fill="#F6851B" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M16.957 21.1982L17.2917 21.4283L19.3274 19.8387L19.3971 18.2422L17.4241 18.8208L16.957 21.1982Z" stroke="#F6851B" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M12.6055 18.2422L12.6612 19.8387L14.697 21.4283L15.0316 21.1982L14.5715 18.8208L12.6055 18.2422Z" fill="#F6851B" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M12.6612 19.8387L14.697 21.4283L15.0316 21.1982L14.5715 18.8208L12.6055 18.2422L12.6612 19.8387Z" stroke="#F6851B" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M17.4601 23.6174L17.481 22.969L17.3067 22.8156L14.6784 22.8156L14.5181 22.969L14.532 23.6174L12.3359 22.5786L13.1028 23.2061L14.6575 24.2867L17.3277 24.2867L18.8893 23.2061L19.6562 22.5786L17.4601 23.6174Z" fill="#C0AD9E" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M17.481 22.969L17.3067 22.8156L14.6784 22.8156L14.5181 22.969L14.532 23.6174L12.3359 22.5786L13.1028 23.2061L14.6575 24.2867L17.3277 24.2867L18.8893 23.2061L19.6562 22.5786L17.4601 23.6174L17.481 22.969Z" stroke="#C0AD9E" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M17.2943 21.4283L16.9596 21.1982L15.0285 21.1982L14.6938 21.4283L14.5195 22.9691L14.6799 22.8157L17.3082 22.8157L17.4825 22.9691L17.2943 21.4283Z" fill="#161616" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M16.9596 21.1982L15.0285 21.1982L14.6938 21.4283L14.5195 22.9691L14.6799 22.8157L17.3082 22.8157L17.4825 22.9691L17.2943 21.4283L16.9596 21.1982Z" stroke="#161616" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M24.2964 13.2924L24.889 10.4479L24.0036 7.80566L17.2969 12.7834L19.8764 14.9656L23.5226 16.0323L24.3313 15.0911L23.9827 14.8401L24.5405 14.3311L24.1082 13.9965L24.6659 13.5712L24.2964 13.2924Z" fill="#763D16" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M24.889 10.4479L24.0036 7.80566L17.2969 12.7834L19.8764 14.9656L23.5226 16.0323L24.3313 15.0911L23.9827 14.8401L24.5404 14.3311L24.1082 13.9965L24.6659 13.5712L24.2964 13.2924L24.889 10.4479Z" stroke="#763D16" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M7.10938 10.4479L7.70197 13.2924L7.3255 13.5712L7.88323 13.9965L7.45796 14.3311L8.01569 14.8401L7.66711 15.0911L8.46885 16.0323L12.115 14.9656L14.6946 12.7834L7.98781 7.80566L7.10938 10.4479Z" fill="#763D16" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M7.70197 13.2924L7.3255 13.5712L7.88323 13.9965L7.45796 14.3311L8.01569 14.8401L7.66711 15.0911L8.46885 16.0323L12.115 14.9656L14.6946 12.7834L7.98781 7.80566L7.10938 10.4479L7.70197 13.2924Z" stroke="#763D16" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M23.522 16.0325L19.8758 14.9658L20.9843 16.632L19.332 19.839L21.5072 19.8111L24.749 19.8111L23.522 16.0325Z" fill="#F6851B" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M19.8758 14.9658L20.9843 16.632L19.332 19.839L21.5072 19.8111L24.749 19.8111L23.522 16.0325L19.8758 14.9658Z" stroke="#F6851B" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M12.1171 14.9656L8.47088 16.0323L7.25781 19.8109L10.4927 19.8109L12.6609 19.8388L11.0155 16.6318L12.1171 14.9656Z" fill="#F6851B" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M8.47088 16.0323L7.25781 19.8109L10.4927 19.8109L12.6609 19.8388L11.0155 16.6318L12.1171 14.9656L8.47088 16.0323Z" stroke="#F6851B" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
              <path id="Vector" d="M17.0646 16.806L17.2946 12.7833L18.3543 9.91797L13.6484 9.91797L14.6942 12.7833L14.9382 16.806L15.0219 18.0748L15.0288 21.1982L16.96 21.1982L16.9739 18.0748L17.0646 16.806Z" fill="#F6851B" fill-opacity="1.000000" fill-rule="nonzero" />
              <path id="Vector" d="M17.2946 12.7833L18.3543 9.91797L13.6484 9.91797L14.6942 12.7833L14.9382 16.806L15.0219 18.0748L15.0288 21.1982L16.96 21.1982L16.9739 18.0748L17.0646 16.806L17.2946 12.7833Z" stroke="#F6851B" stroke-opacity="1.000000" stroke-width="0.111111" stroke-linejoin="round" />
            </g>
          </g>
        </svg>
      </div>
    </div>
    <div class="custom_modal_el" onclick="connect_wallet('Coinbase')">
      <div class="modal_el_name">
        Coinbase
      </div>
      <div class="modal_el_logo">
        <svg width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <clipPath id="clip27_871">
              <rect id="Frame 1948756303" rx="16.000000" width="32.000000" height="32.000000" fill="white" fill-opacity="0" />
            </clipPath>
          </defs>
          <rect id="Frame 1948756303" rx="16.000000" width="32.000000" height="32.000000" fill="#0052FF" fill-opacity="0.150000" />
          <g clip-path="url(#clip27_871)">
            <path id="Vector" d="M15.9944 7.11108C20.9036 7.11108 24.8832 11.0908 24.8832 16C24.8832 20.9092 20.9036 24.8889 15.9944 24.8889C11.0852 24.8889 7.10547 20.9092 7.10547 16C7.10547 11.0908 11.0852 7.11108 15.9944 7.11108Z" fill="#0052FF" fill-opacity="1.000000" fill-rule="evenodd" />
            <path id="Vector" d="M15.9961 19.125C14.2695 19.125 12.8711 17.7266 12.8711 16C12.8711 14.2734 14.2695 12.875 15.9961 12.875C17.543 12.875 18.8268 14.0026 19.0742 15.4792L22.2227 15.4792C21.957 12.2708 19.2721 9.75 15.9961 9.75C12.5456 9.75 9.74609 12.5495 9.74609 16C9.74609 19.4505 12.5456 22.25 15.9961 22.25C19.2721 22.25 21.957 19.7292 22.2227 16.5208L19.0716 16.5208C18.8242 17.9974 17.543 19.125 15.9961 19.125Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
          </g>
        </svg>

      </div>
    </div>
    <div class="custom_modal_el" onclick="connect_wallet('Binance Wallet')">
      <div class="modal_el_name">
        Binance
      </div>
      <div class="modal_el_logo">
        <svg width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <clipPath id="clip27_879">
              <rect id="Frame 1948756302" rx="16.000000" width="32.000000" height="32.000000" fill="white" fill-opacity="0" />
            </clipPath>
          </defs>
          <rect id="Frame 1948756302" rx="16.000000" width="32.000000" height="32.000000" fill="#F3BA2F" fill-opacity="0.150000" />
          <g clip-path="url(#clip27_879)">
            <path id="Union" d="M12.5465 14.5801L15.9991 11.1281L19.4546 14.5831L21.4634 12.5746L15.9991 7.11108L10.5377 12.5716L12.5465 14.5801ZM7.10938 15.9993L9.11765 13.9913L11.1259 15.9993L9.11765 18.0073L7.10938 15.9993ZM15.9991 20.8718L12.5466 17.4199L10.5348 19.4254L10.5378 19.4283L15.9991 24.8889L21.4634 19.4254L19.4546 17.4169L15.9991 20.8718ZM20.8706 16.0007L22.8789 13.9927L24.8872 16.0007L22.8789 18.0087L20.8706 16.0007ZM15.9991 13.9619L18.0375 15.9999L15.9991 18.041L13.9607 16.0029L13.9607 15.997L14.3187 15.6391L14.4932 15.4675L15.9991 13.9619Z" fill="#F3BA2F" fill-opacity="1.000000" fill-rule="evenodd" />
          </g>
        </svg>

      </div>
    </div>
    <div class="custom_modal_el" onclick="connect_wallet('Trust Wallet')">
      <div class="modal_el_name">
        Trust Wallet
      </div>
      <div class="modal_el_logo">
        <svg width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <clipPath id="clip27_886">
              <rect id="Frame 1948756303" rx="16.000000" width="32.000000" height="32.000000" fill="white" fill-opacity="0" />
            </clipPath>
          </defs>
          <rect id="Frame 1948756303" rx="16.000000" width="32.000000" height="32.000000" fill="#EBF3FC" fill-opacity="1.000000" />
          <g clip-path="url(#clip27_886)">
            <path id="Vector" d="M21.5992 11.3994C21.4485 22.3047 20.3001 20.1422 16.3956 23.2001C12.4911 20.1422 11.3499 22.3047 11.1992 11.3994C11.8811 11.3994 14.2927 11.5176 16.3956 9.6001C18.4986 11.5176 20.9102 11.3994 21.5992 11.3994Z" stroke="#3375BB" stroke-opacity="1.000000" stroke-width="1.600000" stroke-linejoin="round" />
          </g>
        </svg>

      </div>
    </div>
    <div class="custom_modal_el" onclick="use_wc()">
      <div class="modal_el_name">
        Wallet Connect <div class="modal_el_name_dop">QR-code</div>
      </div>
      <div class="modal_el_logo">
        <svg width="32.000000" height="32.000000" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
          <defs>
            <clipPath id="clip27_894">
              <rect id="Frame 1948756302" rx="16.000000" width="32.000000" height="32.000000" fill="white" fill-opacity="0" />
            </clipPath>
          </defs>
          <rect id="Frame 1948756302" rx="16.000000" width="32.000000" height="32.000000" fill="#006FFF" fill-opacity="1.000000" />
          <g clip-path="url(#clip27_894)">
            <path id="Vector" d="M10.477 13.3237C13.721 10.729 18.987 10.729 22.231 13.3237L22.6215 13.6383C22.7853 13.7673 22.7853 13.9788 22.6215 14.1077L21.2861 15.1755C21.2042 15.2426 21.0719 15.2426 20.9901 15.1755L20.4546 14.7474C18.187 12.9368 14.521 12.9368 12.2533 14.7474L11.6801 15.2064C11.5983 15.2735 11.466 15.2735 11.3841 15.2064L10.0487 14.1387C9.88493 14.0097 9.88493 13.7982 10.0487 13.6693L10.477 13.3237ZM24.9962 15.5314L26.1867 16.4805C26.3505 16.6095 26.3505 16.821 26.1867 16.95L20.8263 21.2365C20.6625 21.3655 20.3979 21.3655 20.2405 21.2365L16.4359 18.1931C16.3981 18.1622 16.3288 18.1622 16.291 18.1931L12.4864 21.2365C12.3226 21.3655 12.0581 21.3655 11.9006 21.2365L6.52127 16.95C6.35749 16.821 6.35749 16.6095 6.52127 16.4805L7.71178 15.5314C7.87555 15.4025 8.14011 15.4025 8.29758 15.5314L12.1022 18.5748C12.14 18.6058 12.2093 18.6058 12.2471 18.5748L16.0516 15.5314C16.2154 15.4025 16.48 15.4025 16.6375 15.5314L20.442 18.5748C20.4798 18.6058 20.5491 18.6058 20.5869 18.5748L24.3915 15.5314C24.5679 15.4025 24.8324 15.4025 24.9962 15.5314Z" fill="#FFFFFF" fill-opacity="1.000000" fill-rule="nonzero" />
          </g>
        </svg>

      </div>
    </div>
  </div>
</div>
<div class="custom_modal_right">
  <div onclick="MSM.close()" class="modal_custom_close"><svg width="40.000000" height="40.000000" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <clipPath id="clip18_102">
        <rect id="close" width="15.999998" height="15.999998" transform="translate(12.000000 12.000000)" fill="white" fill-opacity="0"/>
      </clipPath>
    </defs>
    <rect id="close" width="15.999998" height="15.999998" transform="translate(12.000000 12.000000)" fill="#FFFFFF" fill-opacity="0"/>
    <g clip-path="url(#clip18_102)">
      <path id="Vector" d="M24.6664 16.2733L23.7263 15.3333L19.9997 19.0599L16.273 15.3333L15.333 16.2733L19.0597 19.9999L15.333 23.7266L16.273 24.6666L19.9997 20.9399L23.7263 24.6666L24.6664 23.7266L20.9397 19.9999L24.6664 16.2733Z" fill="#000000" fill-opacity="1.000000" fill-rule="nonzero"/>
    </g>
  </svg>
  </div>
    <div class="custom_modal_right_top">
      <div class="custom_modal_right_top_o">Login to The Arena</div>
      <div class="custom_modal_right_top_t">Choose a wallet to log-in</div>
    </div>
	<div class="custom_modal_logo">
      <img src="/icons/logo.svg" alt="" height="80" width="80" style="margin-top: 4px;">
    </div>
    <div class="custom_modal_right_bottom">
      <div class="custom_modal_right_bottom_title">Mini-instruction</div>
      <div class="custom_modal_right_bottom_steps">
        <li class="bottom_steps_el">Step 1: <d>Choose a cryptocurrency wallet</d></li>
        <li class="bottom_steps_el">Step 2: <d>Sign in or register the chosen wallet by following the instructions.</d></li>
        <li class="bottom_steps_el">Step 3: <d>To start using your cryptocurrency wallet, you will need to connect cryptocurrency exchange or trading service.</d></li>

      </div>
    </div>
	
</div>
</div>
</div>`;

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
      let allEL = document.querySelectorAll('.custom_modal_el');
      for(let i = 0; i < allEL.length; i++) {
        allEL[i].classList.remove('active');
      }

      document.querySelector(marker).classList.add("active");
      if (MSM.connect_select) MSM.connect();
    } catch(err) {
      console.log(err);
    }
  },
  connect: () => {
    try {
      let checked_id = document.querySelector('.custom_modal_el.active').id;
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