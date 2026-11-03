const imgTypeLinkButtonHoverFalseClickFalseIconSizeIconSize1CloseButton = "https://www.figma.com/api/mcp/asset/2081ff92-7776-443a-9f2f-bdf57530ad87.svg";
const imgEyedropperAlt = "https://www.figma.com/api/mcp/asset/22257d5d-4c71-49f6-a3a1-9df643ba9b0d.svg";
const imgLine1 = "https://www.figma.com/api/mcp/asset/c1f4cdbc-bcda-490e-9b78-9b684e5da0bb.svg";
const imgVector5 = "https://www.figma.com/api/mcp/asset/da77d70a-ca79-46bf-9284-c5e5cfb8283b.svg";
const imgVector6 = "https://www.figma.com/api/mcp/asset/578d29b4-e969-44f4-aefa-5bd7be4da8ca.svg";
const img = "https://www.figma.com/api/mcp/asset/acd66470-7692-442b-9f4b-f2bfcee5f86e.svg";
const img1 = "https://www.figma.com/api/mcp/asset/d86b156f-7074-4bba-a32a-a249b5793987.svg";

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

export default function Component() {
  return (
    <div className="relative size-full" data-node-id="2149:59659" data-name="окно настройки аккордеона">
      <div className="absolute content-stretch flex flex-col gap-[10px] items-start left-0 top-0 w-[366px]" data-node-id="2149:59660" data-name="Окно - Аккордеон">
        <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0" data-node-id="I2149:59660;2149:59529" data-name="Окно настройки меню">
          <div className="bg-[var(--background\/contrast_background-color,#f3f5f7)] content-stretch drop-shadow-[0px_0px_9px_rgba(0,0,0,0.12)] flex flex-col isolate items-start relative rounded-[12px] shrink-0 w-[366px]" data-node-id="I2149:59660;2149:59530" data-name="Свой цвет">
            <div className="content-stretch flex gap-[10px] h-[56px] items-center relative shrink-0 w-full z-[2]" data-node-id="I2149:59660;2149:59531" data-name="1 строка">
              <div className="content-stretch flex h-full items-end pb-[19px] pl-[16px] relative shrink-0" data-node-id="I2149:59660;2149:59532" data-name="headingCaption">
                <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] leading-[normal] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_2xl,17px)] tracking-[-0.2397px] whitespace-nowrap" data-node-id="I2149:59660;2149:59533">
                  Меню навигации
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I2149:59660;2149:59534" data-name="Заголовок в окне Основной с переменной">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I2149:59660;2149:59535">
                  <div className="flex-[1_0_0] h-full min-w-px relative" />
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I2149:59660;2149:59536">
                  <div className="content-stretch flex gap-[12px] items-center justify-end pr-[12px] relative shrink-0" data-node-id="I2149:59660;2149:59537" data-name="Дополнительные команды">
                    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0" data-node-id="I2149:59660;2149:59538">
                      <div className="relative shrink-0 size-[28px]" data-node-id="I2149:59660;2149:59539" data-name="Пипетка">
                        <div className="absolute content-stretch flex flex-col items-center justify-center left-0 rounded-[var(--components\/button\/border-radius_button,100px)] size-[28px] top-0" data-node-id="I2149:59660;2149:59540" data-name="Пипетка">
                          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2149:59660;2149:59540;17890:9803" data-name="_buttonContent">
                            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2149:59660;2149:59540;17890:9803;17890:165" data-name="iconWrap">
                              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:59660;2149:59540;17890:9803;17890:166" data-name="icons/font">
                                <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:59660;2149:59540;17890:9803;17890:166;17887:22647" data-name="iconWrap">
                                  <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I2149:59660;2149:59540;17890:9803;17890:166;17887:22661">
                                    ​
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-[21.43%]" data-node-id="I2149:59660;2149:59541" data-name="eyedropper-alt">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEyedropperAlt} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[28px]" data-node-id="I2149:59660;2149:59543" data-name="ghost">
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2149:59660;2149:59543;17890:9869" data-name="_buttonContent">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2149:59660;2149:59543;17890:9869;17890:165" data-name="iconWrap">
                            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:59660;2149:59543;17890:9869;17890:166" data-name="icons/font">
                              <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:59660;2149:59543;17890:9869;17890:166;17887:22647" data-name="iconWrap">
                                <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/readonly_icon-color,#ccc)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I2149:59660;2149:59543;17890:9869;17890:166;17887:22661">{`\uE629`}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-[28px]" data-node-id="I2149:59660;2149:59544" data-name="done/doneButton">
                      <div className="bg-[var(--background\/contrast\/success_color,#12a12c)] content-stretch drop-shadow-[0px_0px_calc(var(--blur\/shadow-blur_d,6px)/2)_var(--color\/shadow-color_d,rgba(0,0,0,0.1))] flex flex-col h-[28px] items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 w-full" data-node-id="I2149:59660;2149:59544;37368:12221" data-name="filled">
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2149:59660;2149:59544;37368:12221;17890:2850" data-name="_buttonContent">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2149:59660;2149:59544;37368:12221;17890:2850;17890:165" data-name="iconWrap">
                            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:59660;2149:59544;37368:12221;17890:2850;17890:166" data-name="icons/font">
                              <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:59660;2149:59544;37368:12221;17890:2850;17890:166;17887:22647" data-name="iconWrap">
                                <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/contrast_icon-color,white)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] text-left whitespace-nowrap" data-node-id="I2149:59660;2149:59544;37368:12221;17890:2850;17890:166;17887:22661">{`\uE75E`}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="content-stretch flex items-center justify-end pr-[8px] relative shrink-0" data-node-id="I2149:59660;2149:59545" data-name="closeButton">
                    <CloseCloseButton className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[24px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col isolate items-start pb-[4px] px-[4px] relative shrink-0 w-full z-[1]" data-node-id="I2149:59660;2149:59547" data-name="Выбор своего цвета">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative rounded-[8px] shrink-0 w-full z-[1]" data-node-id="I2149:59660;2149:59548">
                <div className="bg-white content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="I2149:59660;2149:59549" data-name="Выбор цвета - Аккордеон">
                  <div className="content-stretch flex isolate items-center justify-between relative shrink-0 w-full" data-node-id="I2149:59660;2149:59549;16385:66611" data-name="Код цвета и кнопки">
                    <div className="bg-[var(--цвета-аккордеона\/фон-аккордеона,#2c3e50)] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid h-[32px] relative rounded-[18px] shrink-0 w-[70px] z-[2]" data-node-id="I2149:59660;2149:59549;16385:66612" data-name="Component 99" />
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[1]" data-node-id="I2149:59660;2149:59549;16385:66613" data-name="Component 100">
                      <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-[46px]" data-node-id="I2149:59660;2149:59549;16385:66614" data-name="HEX">
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-[24px] items-start justify-center min-w-px relative" data-node-id="I2149:59660;2149:59549;16385:66614;11709:27544" data-name="Однострочные поля">
                          <div className="content-stretch flex flex-[1_0_0] items-end min-h-px pb-[3px] relative w-full" data-node-id="I2149:59660;2149:59549;16385:66614;11709:27545">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--text\/text-color,black)] tracking-[-0.1974px]" data-node-id="I2149:59660;2149:59549;16385:66614;11709:27546">
                              <p className="leading-[normal]">HEX</p>
                            </div>
                          </div>
                          <div className="h-0 relative shrink-0 w-full" data-node-id="I2149:59660;2149:59549;16385:66614;11709:27547">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine1} />
                            </div>
                          </div>
                        </div>
                        <p className="[word-break:break-word] absolute font-['cbuc-icons:Regular'] leading-[normal] not-italic right-[16px] text-[16px] text-[color:var(--icon\/unaccented_icon-color,#ccc)] top-[calc(50%-8.5px)] translate-x-full whitespace-nowrap" data-node-id="I2149:59660;2149:59549;16385:66614;11709:27548">{`\uE9AA`}</p>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I2149:59660;2149:59549;16385:66615">
                        <div className="content-stretch flex flex-col h-[24px] items-start justify-end pb-px relative shrink-0 w-[66px]" data-node-id="I2149:59660;2149:59549;16385:66616" data-name="Код цвета">
                          <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] w-[min-content]" data-node-id="I2149:59660;2149:59549;16385:66617">
                            <p className="leading-[1.4]">#2C3E50</p>
                          </div>
                          <div className="absolute h-0 left-0 top-[23.5px] w-[66px]" data-node-id="I2149:59660;2149:59549;16385:66618">
                            <div className="absolute inset-[-0.5px_0]">
                              <img alt="" className="block max-w-none size-full" src={imgVector5} />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-[35px]" data-node-id="I2149:59660;2149:59549;16385:66619" data-name="Прозрачность">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-end min-w-px pb-px relative" data-node-id="I2149:59660;2149:59549;16385:66620">
                            <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px] whitespace-nowrap" data-node-id="I2149:59660;2149:59549;16385:66621">
                              <p className="leading-[1.4]">100</p>
                            </div>
                            <div className="absolute h-0 left-0 right-0 top-[23.5px]" data-node-id="I2149:59660;2149:59549;16385:66622">
                              <div className="absolute inset-[-0.5px_0]">
                                <img alt="" className="block max-w-none size-full" src={imgVector6} />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col h-full items-start justify-end pb-px relative shrink-0 w-[11px]" data-node-id="I2149:59660;2149:59549;16385:66623">
                            <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] w-full" data-node-id="I2149:59660;2149:59549;16385:66624">
                              <p className="leading-[1.4]">%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--background\/background-color,white)] content-stretch flex flex-col items-start px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="I2149:59660;2149:59550">
                  <div className="content-stretch flex flex-col items-start pb-[2px] pt-[12px] relative shrink-0 w-full" data-node-id="I2149:59660;2149:59551" data-name="Цвета">
                    <div className="content-start flex flex-wrap gap-[8px_6px] items-start relative shrink-0 w-[334px]" data-node-id="I2149:59660;2149:59552" data-name="Типовые цвета">
                      <button className="content-stretch cursor-pointer flex items-center relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59660;2149:59553" data-name="Цвет аккордеона">
                        <div className="relative shrink-0 size-[28px]" data-node-id="I2149:59660;2149:59553;2149:58749" data-name="нет фона">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
                        </div>
                      </button>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59660;2149:59554" data-name="Цвет28.2">
                        <div className="absolute bg-[#f0f0f0] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59660;2149:59554;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59660;2149:59555" data-name="Цвет28.2">
                        <div className="absolute bg-[#f6eaf0] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59660;2149:59555;7721:185944" data-name="Цвет" />
                      </div>
                      <button className="block cursor-pointer relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59660;2149:59556" data-name="Цвет28.2">
                        <div className="absolute bg-[#e9e9e9] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59660;2149:59556;7721:185944" data-name="Цвет" />
                      </button>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59660;2149:59557" data-name="Цвет28.2">
                        <div className="absolute bg-[#d8e1e2] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59660;2149:59557;7721:185944" data-name="Цвет" />
                      </div>
                      <button className="block cursor-pointer relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59660;2149:59558" data-name="Цвет28.2">
                        <div className="absolute bg-[#2c3e50] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59660;2149:59558;7721:185944" data-name="Цвет" />
                      </button>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59660;2149:59559" data-name="Цвет28.2">
                        <div className="absolute bg-[#502c2c] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59660;2149:59559;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59660;2149:59560" data-name="Цвет28.2">
                        <div className="absolute bg-[#402c50] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59660;2149:59560;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59660;2149:59561" data-name="Цвет28.2">
                        <div className="absolute bg-[#323232] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59660;2149:59561;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59660;2149:59562" data-name="Цвет28.2">
                        <div className="absolute bg-[#050620] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59660;2149:59562;7721:185944" data-name="Цвет" />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-[16px] relative shrink-0 w-full" data-node-id="I2149:59660;2149:59563">
                    <div className="h-px relative shrink-0 w-full" data-node-id="I2149:59660;2149:59564" data-name="разделитель">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={img1} />
                    </div>
                    <div className="content-stretch flex h-[24px] items-start pl-[2px] relative shrink-0 w-full" data-node-id="I2149:59660;2149:59566">
                      <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-node-id="I2149:59660;2149:59567" data-name="link">
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2149:59660;2149:59567;17890:5965" data-name="_buttonContent">
                          <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-node-id="I2149:59660;2149:59567;17890:5965;17890:60" data-name="textWrap">
                            <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] leading-[normal] not-italic relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] whitespace-nowrap" data-node-id="I2149:59660;2149:59567;17890:5965;17890:61">
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
    </div>
  );
}
