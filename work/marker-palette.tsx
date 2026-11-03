const imgTypeLinkButtonHoverFalseClickFalseIconSizeIconSize1CloseButton = "https://www.figma.com/api/mcp/asset/738a45ec-a13f-47cf-a748-0584d9f7d44a.svg";
const imgEyedropperAlt = "https://www.figma.com/api/mcp/asset/acd0d86f-c1a7-4325-b393-a02763bda003.svg";
const imgLine1 = "https://www.figma.com/api/mcp/asset/95578544-def1-4bc5-8d16-4ef2187e5e9e.svg";
const imgVector5 = "https://www.figma.com/api/mcp/asset/07b58157-4811-4cde-a823-38bb742ba5fa.svg";
const imgVector6 = "https://www.figma.com/api/mcp/asset/c53de89f-8925-4a7f-a249-83293c5129c5.svg";
const img = "https://www.figma.com/api/mcp/asset/edcaaf1e-bb96-4bc6-9cde-3878c94d12fc.svg";

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

type Component1Props = {
  className?: string;
  property1?: "Default";
};

function Component1({ className, property1 = "Default" }: Component1Props) {
  return (
    <div className={className || "content-stretch flex flex-col gap-[10px] items-start relative w-[366px]"} data-node-id="2158:59355">
      <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0 w-full" data-node-id="2158:59356" data-name="Окно настройки акцентного 1">
        <div className="bg-[var(--background\/contrast_background-color,#f3f5f7)] content-stretch drop-shadow-[0px_0px_9px_rgba(0,0,0,0.12)] flex flex-col isolate items-start relative rounded-[12px] shrink-0 w-[366px]" data-node-id="2158:59357" data-name="Свой цвет">
          <div className="content-stretch flex gap-[10px] h-[56px] items-center relative shrink-0 w-full z-[2]" data-node-id="2158:59358" data-name="1 строка">
            <div className="content-stretch flex h-full items-end pb-[19px] pl-[16px] relative shrink-0" data-node-id="2158:59359" data-name="headingCaption">
              <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] leading-[normal] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_2xl,17px)] tracking-[-0.2397px] whitespace-nowrap" data-node-id="2158:59360">
                Акцентный 2
              </p>
            </div>
            <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="2158:59361" data-name="Заголовок в окне Основной с переменной">
              <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="2158:59362">
                <div className="flex-[1_0_0] h-full min-w-px relative" />
              </div>
              <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="2158:59363">
                <div className="content-stretch flex gap-[12px] items-center justify-end pr-[12px] relative shrink-0" data-node-id="2158:59364" data-name="Дополнительные команды">
                  <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0" data-node-id="2158:59365">
                    <div className="relative shrink-0 size-[28px]" data-node-id="2158:59366" data-name="Пипетка">
                      <div className="absolute content-stretch flex flex-col items-center justify-center left-0 rounded-[var(--components\/button\/border-radius_button,100px)] size-[28px] top-0" data-node-id="2158:59367" data-name="Пипетка">
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2158:59367;17890:9803" data-name="_buttonContent">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2158:59367;17890:9803;17890:165" data-name="iconWrap">
                            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2158:59367;17890:9803;17890:166" data-name="icons/font">
                              <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2158:59367;17890:9803;17890:166;17887:22647" data-name="iconWrap">
                                <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I2158:59367;17890:9803;17890:166;17887:22661">
                                  ​
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="absolute inset-[21.43%]" data-node-id="2158:59368" data-name="eyedropper-alt">
                        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEyedropperAlt} />
                      </div>
                    </div>
                    <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[28px]" data-node-id="2158:59370" data-name="ghost">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2158:59370;17890:9803" data-name="_buttonContent">
                        <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2158:59370;17890:9803;17890:165" data-name="iconWrap">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2158:59370;17890:9803;17890:166" data-name="icons/font">
                            <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2158:59370;17890:9803;17890:166;17887:22647" data-name="iconWrap">
                              <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/secondary_icon-color,#656c87)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] text-left whitespace-nowrap" data-node-id="I2158:59370;17890:9803;17890:166;17887:22661">{`\uE629`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-[28px]" data-node-id="2158:59371" data-name="done/doneButton">
                    <div className="bg-[var(--background\/contrast\/success_color,#12a12c)] content-stretch drop-shadow-[0px_0px_calc(var(--blur\/shadow-blur_d,6px)/2)_var(--color\/shadow-color_d,rgba(0,0,0,0.1))] flex flex-col h-[28px] items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 w-full" data-node-id="I2158:59371;37368:12221" data-name="filled">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2158:59371;37368:12221;17890:2850" data-name="_buttonContent">
                        <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2158:59371;37368:12221;17890:2850;17890:165" data-name="iconWrap">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2158:59371;37368:12221;17890:2850;17890:166" data-name="icons/font">
                            <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2158:59371;37368:12221;17890:2850;17890:166;17887:22647" data-name="iconWrap">
                              <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/contrast_icon-color,white)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] text-left whitespace-nowrap" data-node-id="I2158:59371;37368:12221;17890:2850;17890:166;17887:22661">{`\uE75E`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="content-stretch flex items-center justify-end pr-[8px] relative shrink-0" data-node-id="2158:59372" data-name="closeButton">
                  <CloseCloseButton className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[24px]" />
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col isolate items-start pb-[4px] px-[4px] relative shrink-0 w-full z-[1]" data-node-id="2158:59374" data-name="Выбор своего цвета">
            <div className="content-stretch flex flex-col gap-[4px] items-start relative rounded-[8px] shrink-0 w-full z-[1]" data-node-id="2158:59375">
              <div className="bg-[var(--background\/background-color,white)] content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="2158:59376">
                <div className="content-stretch flex isolate items-center justify-between relative shrink-0 w-[334px]" data-node-id="2158:59377" data-name="Код цвета и кнопки">
                  <div className="content-stretch flex items-center relative shrink-0 z-[2]" data-node-id="2158:59378">
                    <div className="bg-[var(--маркер,#0c94ff)] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid h-[32px] relative rounded-[18px] shrink-0 w-[70px]" data-node-id="2158:59379" data-name="Выбранный цвет" />
                  </div>
                  <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[1]" data-node-id="2158:59380">
                    <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-[46px]" data-node-id="2158:59381" data-name="HEX">
                      <div className="content-stretch flex flex-[1_0_0] flex-col h-[24px] items-start justify-center min-w-px relative" data-node-id="I2158:59381;11709:27544" data-name="Однострочные поля">
                        <div className="content-stretch flex flex-[1_0_0] items-end min-h-px pb-[3px] relative w-full" data-node-id="I2158:59381;11709:27545">
                          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--text\/text-color,black)] tracking-[-0.1974px]" data-node-id="I2158:59381;11709:27546">
                            <p className="leading-[normal]">HEX</p>
                          </div>
                        </div>
                        <div className="h-0 relative shrink-0 w-full" data-node-id="I2158:59381;11709:27547">
                          <div className="absolute inset-[-1px_0_0_0]">
                            <img alt="" className="block max-w-none size-full" src={imgLine1} />
                          </div>
                        </div>
                      </div>
                      <p className="[word-break:break-word] absolute font-['cbuc-icons:Regular'] leading-[normal] not-italic right-[16px] text-[16px] text-[color:var(--icon\/unaccented_icon-color,#ccc)] top-[calc(50%-8.5px)] translate-x-full whitespace-nowrap" data-node-id="I2158:59381;11709:27548">{`\uE9AA`}</p>
                    </div>
                    <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="2158:59382">
                      <div className="content-stretch flex h-[24px] items-end pb-[3px] relative shrink-0 w-[66px]" data-node-id="2158:59383" data-name="Код цвета">
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/text-color,black)] tracking-[-0.1974px] whitespace-nowrap" data-node-id="2158:59384">
                          <p className="leading-[normal]">#</p>
                        </div>
                        <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/text-color,black)] tracking-[-0.1974px] whitespace-nowrap" data-node-id="2158:60213">
                          <p className="leading-[normal]">0C94FF</p>
                        </div>
                        <div className="absolute h-0 left-0 top-[23.5px] w-[66px]" data-node-id="2158:59385">
                          <div className="absolute inset-[-0.5px_0]">
                            <img alt="" className="block max-w-none size-full" src={imgVector5} />
                          </div>
                        </div>
                      </div>
                      <div className="content-stretch flex h-[24px] items-start relative shrink-0" data-node-id="2158:59386" data-name="Прозрачность">
                        <div className="content-stretch flex flex-col h-full items-start justify-end pb-[3px] relative shrink-0" data-node-id="2158:59387">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/text-color,black)] text-right tracking-[-0.1974px] whitespace-nowrap" data-node-id="2158:59388">
                            <p className="leading-[normal]">100</p>
                          </div>
                          <div className="absolute h-0 left-0 top-[23.5px] w-[24px]" data-node-id="2158:59389">
                            <div className="absolute inset-[-0.5px_0]">
                              <img alt="" className="block max-w-none size-full" src={imgVector6} />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex flex-col h-full items-start justify-end pb-[3px] relative shrink-0 w-[11px]" data-node-id="2158:59390">
                          <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/text-color,black)] tracking-[-0.1974px] w-full" data-node-id="2158:59391">
                            <p className="leading-[normal]">%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--background\/background-color,white)] content-stretch flex flex-col items-start px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="2158:59392">
                <div className="content-stretch flex flex-col items-start pb-[2px] pt-[12px] relative shrink-0 w-full" data-node-id="2158:59678" data-name="Цвета">
                  <div className="content-start cursor-pointer flex flex-wrap gap-[8px_6px] h-[64px] items-start relative shrink-0 w-[334px]" data-node-id="2158:59679" data-name="Типовые цвета">
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59680" data-name="Цвет28.2">
                      <div className="absolute bg-[#943253] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59680;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59681" data-name="Цвет28.2">
                      <div className="absolute bg-[#f16767] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59681;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59682" data-name="Цвет28.2">
                      <div className="absolute bg-[#f6733c] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59682;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59683" data-name="Цвет28.2">
                      <div className="absolute bg-[#e5cb45] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59683;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59684" data-name="Цвет28.2">
                      <div className="absolute bg-[#009918] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59684;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59685" data-name="Цвет28.2">
                      <div className="absolute bg-[#0c94ff] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59685;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59686" data-name="Цвет28.2">
                      <div className="absolute bg-[#326194] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59686;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59687" data-name="Цвет28.2">
                      <div className="absolute bg-[#4c3294] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59687;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59688" data-name="Цвет28.2">
                      <div className="absolute bg-[#943288] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59688;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59689" data-name="Цвет28.2">
                      <div className="absolute bg-[#999] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59689;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59690" data-name="Цвет28.2">
                      <div className="absolute bg-[#ffe3ec] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59690;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59691" data-name="Цвет28.2">
                      <div className="absolute bg-[#ffe5e3] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59691;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59692" data-name="Цвет28.2">
                      <div className="absolute bg-[#fff1e3] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59692;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59693" data-name="Цвет28.2">
                      <div className="absolute bg-[#fffbe3] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59693;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59694" data-name="Цвет28.2">
                      <div className="absolute bg-[#e3ffe8] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59694;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59695" data-name="Цвет28.2">
                      <div className="absolute bg-[#e3faff] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59695;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59696" data-name="Цвет28.2">
                      <div className="absolute bg-[#e3f1ff] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59696;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59697" data-name="Цвет28.2">
                      <div className="absolute bg-[#eae3ff] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59697;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59698" data-name="Цвет28.2">
                      <div className="absolute bg-[#ffe3fa] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59698;7721:185944" data-name="Цвет" />
                    </button>
                    <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2158:59699" data-name="Цвет28.2">
                      <div className="absolute bg-[#ededed] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2158:59699;7721:185944" data-name="Цвет" />
                    </button>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-[16px] relative shrink-0 w-full" data-node-id="2158:59415">
                  <div className="h-px relative shrink-0 w-full" data-node-id="2158:59416" data-name="разделитель">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
                  </div>
                  <div className="content-stretch flex h-[24px] items-start pl-[2px] relative shrink-0 w-full" data-node-id="2158:59418">
                    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-node-id="2158:59419" data-name="link">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2158:59419;17890:5965" data-name="_buttonContent">
                        <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-node-id="I2158:59419;17890:5965;17890:60" data-name="textWrap">
                          <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] leading-[normal] not-italic relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] whitespace-nowrap" data-node-id="I2158:59419;17890:5965;17890:61">
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

export default function Component2() {
  return (
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="2158:60077" data-name="окно настройки Акцентного 2">
      <Component1 className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" />
    </div>
  );
}
