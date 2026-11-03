const imgTypeLinkButtonHoverFalseClickFalseIconSizeIconSize1CloseButton = "https://www.figma.com/api/mcp/asset/6174f930-9965-408c-ab75-d3590b5e6894.svg";
const imgEyedropperAlt = "https://www.figma.com/api/mcp/asset/696e13fe-e2cd-449a-b95f-d69167876e27.svg";
const imgLine1 = "https://www.figma.com/api/mcp/asset/7189e59b-0348-495a-9327-95b0ce037110.svg";
const imgVector5 = "https://www.figma.com/api/mcp/asset/bcff43ce-a043-4459-b4cd-acf3a585b556.svg";
const imgVector6 = "https://www.figma.com/api/mcp/asset/7b0466c3-7ab3-42e3-953c-cd753c72ee77.svg";
const img = "https://www.figma.com/api/mcp/asset/b34bd4a1-c09d-445e-bc16-135add8d6b1f.svg";

type CloseButtonProps = {
  className?: string;
  click?: boolean;
  hover?: boolean;
  iconSize?: "icon_size1-closeButton";
  type?: "linkButton";
};

function CloseButton({ className, click = false, hover = false, iconSize = "icon_size1-closeButton", type = "linkButton" }: CloseButtonProps) {
  return (
    <div className={className || "relative size-[28px]"} data-node-id="1925:57549">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTypeLinkButtonHoverFalseClickFalseIconSizeIconSize1CloseButton} />
    </div>
  );
}

type CloseCloseButtonProps = {
  className?: string;
  closeButtonViewMode?: "linkButton";
  inlineHeight?: "m (24)";
};

function CloseCloseButton({ className, closeButtonViewMode = "linkButton", inlineHeight = "m (24)" }: CloseCloseButtonProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-center justify-center relative size-[var(--inline_height\\/inline_height_m,24px)]"} data-node-id="1925:57590">
      <CloseButton className="flex-[1_0_0] min-h-px relative w-full" />
    </div>
  );
}

type Component2Props = {
  className?: string;
  property1?: "Default";
};

function Component2({ className, property1 = "Default" }: Component2Props) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[10px] items-start relative w-[366px]"} data-node-id="2158:59423">
      <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-node-id="2158:59424" data-name="Окно настройки акцентного 2">
        <div className="bg-[var(--background\/contrast_background-color,#f3f5f7)] content-stretch drop-shadow-[0px_0px_9px_rgba(0,0,0,0.12)] flex flex-col isolate items-start relative rounded-[12px] shrink-0 w-[366px]" data-node-id="2158:59425" data-name="Свой цвет">
          <div className="content-stretch flex gap-[10px] h-[56px] items-center relative shrink-0 w-full z-[2]" data-node-id="2158:59426" data-name="1 строка">
            <div className="content-stretch flex h-full items-end pb-[19px] pl-[16px] relative shrink-0" data-node-id="2158:59427" data-name="headingCaption">
              <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] leading-[normal] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_2xl,17px)] tracking-[-0.2397px] whitespace-nowrap" data-node-id="2158:59428">
                Акцентный
              </p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="2158:59429" data-name="Заголовок в окне Основной с переменной">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="2158:59430">
                <div className="flex-[1_0_0] h-full min-w-px relative" />
              </div>
              <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="2158:59431">
                <div className="content-stretch flex gap-[12px] items-center justify-end pr-[12px] relative shrink-0" data-node-id="2158:59432" data-name="Дополнительные команды">
                  <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0" data-node-id="2158:59433">
                    <div className="relative shrink-0 size-[28px]" data-node-id="2158:59434" data-name="Пипетка">
                      <div className="absolute content-stretch flex flex-col items-center justify-center left-0 rounded-[var(--components\/button\/border-radius_button,100px)] size-[28px] top-0" data-node-id="2158:59435" data-name="Пипетка">
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2158:59435;17890:9803" data-name="_buttonContent">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2158:59435;17890:9803;17890:165" data-name="iconWrap">
                            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2158:59435;17890:9803;17890:166" data-name="icons/font">
                              <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2158:59435;17890:9803;17890:166;17887:22647" data-name="iconWrap">
                                <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I2158:59435;17890:9803;17890:166;17887:22661">
                                  ​
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-[21.43%]" data-node-id="2158:59436" data-name="eyedropper-alt">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEyedropperAlt} />
                      </div>
                    </div>
                    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[28px]" data-node-id="2158:59438" data-name="ghost">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2158:59438;17890:9803" data-name="_buttonContent">
                        <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2158:59438;17890:9803;17890:165" data-name="iconWrap">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2158:59438;17890:9803;17890:166" data-name="icons/font">
                            <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2158:59438;17890:9803;17890:166;17887:22647" data-name="iconWrap">
                              <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/secondary_icon-color,#656c87)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] text-left whitespace-nowrap" data-node-id="I2158:59438;17890:9803;17890:166;17887:22661">{`\uE629`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-[28px]" data-node-id="2158:59439" data-name="done/doneButton">
                    <div className="bg-[var(--background\/contrast\/success_color,#12a12c)] content-stretch drop-shadow-[0px_0px_calc(var(--blur\/shadow-blur_d,6px)/2)_var(--color\/shadow-color_d,rgba(0,0,0,0.1))] flex flex-col h-[28px] items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 w-full" data-node-id="I2158:59439;37368:12221" data-name="filled">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2158:59439;37368:12221;17890:2850" data-name="_buttonContent">
                        <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2158:59439;37368:12221;17890:2850;17890:165" data-name="iconWrap">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2158:59439;37368:12221;17890:2850;17890:166" data-name="icons/font">
                            <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2158:59439;37368:12221;17890:2850;17890:166;17887:22647" data-name="iconWrap">
                              <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/contrast_icon-color,white)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] text-left whitespace-nowrap" data-node-id="I2158:59439;37368:12221;17890:2850;17890:166;17887:22661">{`\uE75E`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <button className="content-stretch cursor-pointer flex items-center justify-end pr-[8px] relative shrink-0" data-node-id="2158:59440" data-name="closeButton">
                  <CloseCloseButton className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" />
                </button>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col isolate items-start pb-[4px] px-[4px] relative shrink-0 w-full z-[1]" data-node-id="2158:59442" data-name="Выбор своего цвета">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative rounded-[8px] shrink-0 w-full z-[1]" data-node-id="2158:59443">
              <div className="bg-[var(--background\/background-color,white)] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="2158:59444">
                <div className="content-stretch flex isolate items-center justify-between relative shrink-0 w-[334px]" data-node-id="2158:59445" data-name="Код цвета и кнопки">
                  <div className="content-stretch flex items-center relative shrink-0 z-[2]" data-node-id="2158:59446">
                    <div className="bg-[var(--акценты,#cc3d00)] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid h-[32px] relative rounded-[18px] shrink-0 w-[70px]" data-node-id="2158:59447" data-name="Выбранный цвет" />
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[1]" data-node-id="2158:59448">
                    <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-[46px]" data-node-id="2158:59449" data-name="HEX">
                      <div className="content-stretch flex flex-[1_0_0] flex-col h-[24px] items-start justify-center min-w-px relative" data-node-id="I2158:59449;11709:27544" data-name="Однострочные поля">
                        <div className="content-stretch flex flex-[1_0_0] items-end min-h-px pb-[3px] relative w-full" data-node-id="I2158:59449;11709:27545">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--text\/text-color,black)] tracking-[-0.1974px]" data-node-id="I2158:59449;11709:27546">
                            <p className="leading-[normal]">HEX</p>
                          </div>
                        </div>
                        <div className="h-0 relative shrink-0 w-full" data-node-id="I2158:59449;11709:27547">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine1} />
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] absolute font-['cbuc-icons:Regular'] leading-[normal] not-italic right-[16px] text-[16px] text-[color:var(--icon\/unaccented_icon-color,#ccc)] top-[calc(50%-8.5px)] translate-x-full whitespace-nowrap" data-node-id="I2158:59449;11709:27548">{`\uE9AA`}</p>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="2158:59450">
                      <div className="content-stretch flex h-[24px] items-end pb-[3px] relative shrink-0 w-[66px]" data-node-id="2158:60215" data-name="Код цвета">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/text-color,black)] tracking-[-0.1974px] whitespace-nowrap" data-node-id="2158:60216">
                          <p className="leading-[normal]">#</p>
                        </div>
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/text-color,black)] tracking-[-0.1974px] whitespace-nowrap" data-node-id="2158:60217">
                          <p className="leading-[normal]">CC3D00</p>
                        </div>
                        <div className="absolute h-0 left-0 top-[23.5px] w-[66px]" data-node-id="2158:60218">
                          <div className="absolute inset-[-0.5px_0]">
                            <img alt="" className="block max-w-none size-full" src={imgVector5} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex h-[24px] items-start relative shrink-0" data-node-id="2158:59454" data-name="Прозрачность">
                        <div className="content-stretch flex flex-col h-full items-start justify-end pb-[3px] relative shrink-0" data-node-id="2158:59455">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/text-color,black)] text-right tracking-[-0.1974px] whitespace-nowrap" data-node-id="2158:59456">
                            <p className="leading-[normal]">100</p>
                          </div>
                          <div className="absolute h-0 left-0 top-[23.5px] w-[24px]" data-node-id="2158:59457">
                            <div className="absolute inset-[-0.5px_0]">
                              <img alt="" className="block max-w-none size-full" src={imgVector6} />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-full items-start justify-end pb-[3px] relative shrink-0 w-[11px]" data-node-id="2158:59458">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/text-color,black)] tracking-[-0.1974px] w-full" data-node-id="2158:59459">
                            <p className="leading-[normal]">%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--background\/background-color,white)] content-stretch flex flex-col items-start px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="2158:59460">
                <div className="content-stretch flex flex-col items-start pb-[2px] pt-[12px] relative shrink-0 w-full" data-node-id="2158:59461" data-name="Цвета">
                  <div className="content-start cursor-pointer flex flex-wrap gap-[8px_6px] h-[64px] items-start relative shrink-0 w-[334px]" data-node-id="2158:59462" data-name="Типовые цвета">
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59463" data-name="Цвет28.2">
                      <div className="absolute bg-[#943253] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59463;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59464" data-name="Цвет28.2">
                      <div className="absolute bg-[#f16767] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59464;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59465" data-name="Цвет28.2">
                      <div className="absolute bg-[#f6733c] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59465;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59466" data-name="Цвет28.2">
                      <div className="absolute bg-[#e5cb45] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59466;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59467" data-name="Цвет28.2">
                      <div className="absolute bg-[#009918] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59467;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59468" data-name="Цвет28.2">
                      <div className="absolute bg-[#0c94ff] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59468;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59469" data-name="Цвет28.2">
                      <div className="absolute bg-[#326194] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59469;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59470" data-name="Цвет28.2">
                      <div className="absolute bg-[#4c3294] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59470;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59471" data-name="Цвет28.2">
                      <div className="absolute bg-[#943288] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59471;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59472" data-name="Цвет28.2">
                      <div className="absolute bg-[#999] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59472;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59473" data-name="Цвет28.2">
                      <div className="absolute bg-[#ffe3ec] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59473;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59474" data-name="Цвет28.2">
                      <div className="absolute bg-[#ffe5e3] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59474;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59475" data-name="Цвет28.2">
                      <div className="absolute bg-[#fff1e3] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59475;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59476" data-name="Цвет28.2">
                      <div className="absolute bg-[#fffbe3] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59476;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59477" data-name="Цвет28.2">
                      <div className="absolute bg-[#e3ffe8] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59477;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59478" data-name="Цвет28.2">
                      <div className="absolute bg-[#e3faff] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59478;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59479" data-name="Цвет28.2">
                      <div className="absolute bg-[#e3f1ff] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59479;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59480" data-name="Цвет28.2">
                      <div className="absolute bg-[#eae3ff] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59480;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59481" data-name="Цвет28.2">
                      <div className="absolute bg-[#ffe3fa] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59481;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59482" data-name="Цвет28.2">
                      <div className="absolute bg-[#ededed] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59482;7721:185944" data-name="Цвет" />
                    </button>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-[16px] relative shrink-0 w-full" data-node-id="2158:59483">
                  <div className="h-px relative shrink-0 w-full" data-node-id="2158:59484" data-name="разделитель">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
                  </div>
                  <div className="content-stretch flex h-[24px] items-start pl-[2px] relative shrink-0 w-full" data-node-id="2158:59486">
                    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-node-id="2158:59487" data-name="link">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2158:59487;17890:5965" data-name="_buttonContent">
                        <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-node-id="I2158:59487;17890:5965;17890:60" data-name="textWrap">
                          <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] leading-[normal] not-italic relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] whitespace-nowrap" data-node-id="I2158:59487;17890:5965;17890:61">
                            Другой цвет
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component1() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="2158:60078" data-name="окно настройки Акцентного 1">
      <Component2 className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" />
    </div>
  );
}
