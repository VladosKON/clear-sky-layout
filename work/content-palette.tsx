const imgTypeLinkButtonHoverFalseClickFalseIconSizeIconSize1CloseButton = "https://www.figma.com/api/mcp/asset/c14e166e-9d3a-4811-b8d7-2df760527120.svg";
const imgEyedropperAlt = "https://www.figma.com/api/mcp/asset/e6a32e79-aa9e-4228-bb81-2d5baf0dfcc0.svg";
const imgLine1 = "https://www.figma.com/api/mcp/asset/266da0cc-4157-4a51-8cbe-478fc68b593a.svg";
const imgVector5 = "https://www.figma.com/api/mcp/asset/7563698d-0d42-4639-b91d-6aa8a2452b14.svg";
const imgVector6 = "https://www.figma.com/api/mcp/asset/de6a2bb4-758a-4ccf-b61a-c0e3708de12e.svg";
const img = "https://www.figma.com/api/mcp/asset/e3c5144d-adab-44d3-96c0-2f642b8cb5f5.svg";
const img1 = "https://www.figma.com/api/mcp/asset/ac454b62-5367-40a9-87c9-8d6b04360a67.svg";

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
    <div className="content-stretch flex flex-col items-start relative size-full" data-node-id="2149:59664" data-name="окно настройки центра">
      <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-node-id="2149:59665" data-name="Окно - Фон центральной части">
        <div className="content-stretch flex flex-col items-start relative rounded-[12px] shrink-0" data-node-id="I2149:59665;2149:59617" data-name="Окно настройки меню">
          <div className="bg-[var(--background\/contrast_background-color,#f3f5f7)] content-stretch drop-shadow-[0px_0px_9px_rgba(0,0,0,0.12)] flex flex-col isolate items-start relative rounded-[12px] shrink-0 w-[366px]" data-node-id="I2149:59665;2149:59618" data-name="Свой цвет">
            <div className="content-stretch flex gap-[10px] h-[56px] items-center relative shrink-0 w-full z-[2]" data-node-id="I2149:59665;2149:59619" data-name="1 строка">
              <div className="content-stretch flex h-full items-end pb-[19px] pl-[16px] relative shrink-0" data-node-id="I2149:59665;2149:59620" data-name="headingCaption">
                <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] leading-[normal] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_2xl,17px)] tracking-[-0.2397px] whitespace-nowrap" data-node-id="I2149:59665;2149:59621">
                  Фон контента
                </p>
              </div>
              <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I2149:59665;2149:59622" data-name="Заголовок в окне Основной с переменной">
                <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="I2149:59665;2149:59623">
                  <div className="flex-[1_0_0] h-full min-w-px relative" />
                </div>
                <div className="content-stretch flex items-center justify-end relative shrink-0" data-node-id="I2149:59665;2149:59624">
                  <div className="content-stretch flex gap-[12px] items-center justify-end pr-[12px] relative shrink-0" data-node-id="I2149:59665;2149:59625" data-name="Дополнительные команды">
                    <div className="content-stretch flex gap-[6px] items-center justify-end relative shrink-0" data-node-id="I2149:59665;2149:59626">
                      <div className="relative shrink-0 size-[28px]" data-node-id="I2149:59665;2149:59627" data-name="Пипетка">
                        <div className="absolute content-stretch flex flex-col items-center justify-center left-0 rounded-[var(--components\/button\/border-radius_button,100px)] size-[28px] top-0" data-node-id="I2149:59665;2149:59628" data-name="Пипетка">
                          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2149:59665;2149:59628;17890:9803" data-name="_buttonContent">
                            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2149:59665;2149:59628;17890:9803;17890:165" data-name="iconWrap">
                              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:59665;2149:59628;17890:9803;17890:166" data-name="icons/font">
                                <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:59665;2149:59628;17890:9803;17890:166;17887:22647" data-name="iconWrap">
                                  <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/secondary_icon-color,#656c87)] whitespace-nowrap" data-node-id="I2149:59665;2149:59628;17890:9803;17890:166;17887:22661">
                                    ​
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="absolute inset-[21.43%]" data-node-id="I2149:59665;2149:59629" data-name="eyedropper-alt">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEyedropperAlt} />
                        </div>
                      </div>
                      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[28px]" data-node-id="I2149:59665;2149:59631" data-name="ghost">
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2149:59665;2149:59631;17890:9869" data-name="_buttonContent">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2149:59665;2149:59631;17890:9869;17890:165" data-name="iconWrap">
                            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:59665;2149:59631;17890:9869;17890:166" data-name="icons/font">
                              <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:59665;2149:59631;17890:9869;17890:166;17887:22647" data-name="iconWrap">
                                <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/readonly_icon-color,#ccc)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I2149:59665;2149:59631;17890:9869;17890:166;17887:22661">{`\uE629`}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button className="content-stretch cursor-pointer flex flex-col items-start relative shrink-0 w-[28px]" data-node-id="I2149:59665;2149:59632" data-name="done/doneButton">
                      <div className="bg-[var(--background\/contrast\/success_color,#12a12c)] content-stretch drop-shadow-[0px_0px_calc(var(--blur\/shadow-blur_d,6px)/2)_var(--color\/shadow-color_d,rgba(0,0,0,0.1))] flex flex-col h-[28px] items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 w-full" data-node-id="I2149:59665;2149:59632;37368:12221" data-name="filled">
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2149:59665;2149:59632;37368:12221;17890:2850" data-name="_buttonContent">
                          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2149:59665;2149:59632;37368:12221;17890:2850;17890:165" data-name="iconWrap">
                            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:59665;2149:59632;37368:12221;17890:2850;17890:166" data-name="icons/font">
                              <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:59665;2149:59632;37368:12221;17890:2850;17890:166;17887:22647" data-name="iconWrap">
                                <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/contrast_icon-color,white)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] text-left whitespace-nowrap" data-node-id="I2149:59665;2149:59632;37368:12221;17890:2850;17890:166;17887:22661">{`\uE75E`}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </button>
                  </div>
                  <div className="content-stretch flex items-center justify-end pr-[8px] relative shrink-0" data-node-id="I2149:59665;2149:59633" data-name="closeButton">
                    <CloseCloseButton className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[24px]" />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col isolate items-start pb-[4px] px-[4px] relative shrink-0 w-full z-[1]" data-node-id="I2149:59665;2149:59635" data-name="Выбор своего цвета">
              <div className="content-stretch flex flex-col gap-[4px] items-start relative rounded-[8px] shrink-0 w-full z-[1]" data-node-id="I2149:59665;2149:59636">
                <div className="bg-white content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full" data-node-id="I2149:59665;2149:59637" data-name="Выбор цвета - Аккордеон">
                  <div className="content-stretch flex isolate items-center justify-between relative shrink-0 w-full" data-node-id="I2149:59665;2149:59637;16385:66611" data-name="Код цвета и кнопки">
                    <div className="bg-[var(--цвет-цу,#ecedee)] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid h-[32px] relative rounded-[18px] shrink-0 w-[70px] z-[2]" data-node-id="I2149:59665;2149:59637;16385:66612" data-name="Component 99" />
                    <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[1]" data-node-id="I2149:59665;2149:59637;16385:66613" data-name="Component 100">
                      <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-[46px]" data-node-id="I2149:59665;2149:59637;16385:66614" data-name="HEX">
                        <div className="content-stretch flex flex-[1_0_0] flex-col h-[24px] items-start justify-center min-w-px relative" data-node-id="I2149:59665;2149:59637;16385:66614;11709:27544" data-name="Однострочные поля">
                          <div className="content-stretch flex flex-[1_0_0] items-end min-h-px pb-[3px] relative w-full" data-node-id="I2149:59665;2149:59637;16385:66614;11709:27545">
                            <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--text\/text-color,black)] tracking-[-0.1974px]" data-node-id="I2149:59665;2149:59637;16385:66614;11709:27546">
                              <p className="leading-[normal]">HEX</p>
                            </div>
                          </div>
                          <div className="h-0 relative shrink-0 w-full" data-node-id="I2149:59665;2149:59637;16385:66614;11709:27547">
                            <div className="absolute inset-[-1px_0_0_0]">
                              <img alt="" className="block max-w-none size-full" src={imgLine1} />
                            </div>
                          </div>
                        </div>
                        <p className="[word-break:break-word] absolute font-['cbuc-icons:Regular'] leading-[normal] not-italic right-[16px] text-[16px] text-[color:var(--icon\/unaccented_icon-color,#ccc)] top-[calc(50%-8.5px)] translate-x-full whitespace-nowrap" data-node-id="I2149:59665;2149:59637;16385:66614;11709:27548">{`\uE9AA`}</p>
                      </div>
                      <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I2149:59665;2149:59637;16385:66615">
                        <div className="content-stretch flex flex-col h-[24px] items-start justify-end pb-px relative shrink-0 w-[66px]" data-node-id="I2149:59665;2149:59637;16385:66616" data-name="Код цвета">
                          <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] w-[min-content]" data-node-id="I2149:59665;2149:59637;16385:66617">
                            <p className="leading-[1.4]">#ECEDEE</p>
                          </div>
                          <div className="absolute h-0 left-0 top-[23.5px] w-[66px]" data-node-id="I2149:59665;2149:59637;16385:66618">
                            <div className="absolute inset-[-0.5px_0]">
                              <img alt="" className="block max-w-none size-full" src={imgVector5} />
                            </div>
                          </div>
                        </div>
                        <div className="content-stretch flex h-[24px] items-start relative shrink-0 w-[35px]" data-node-id="I2149:59665;2149:59637;16385:66619" data-name="Прозрачность">
                          <div className="content-stretch flex flex-[1_0_0] flex-col h-full items-start justify-end min-w-px pb-px relative" data-node-id="I2149:59665;2149:59637;16385:66620">
                            <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px] whitespace-nowrap" data-node-id="I2149:59665;2149:59637;16385:66621">
                              <p className="leading-[1.4]">100</p>
                            </div>
                            <div className="absolute h-0 left-0 right-0 top-[23.5px]" data-node-id="I2149:59665;2149:59637;16385:66622">
                              <div className="absolute inset-[-0.5px_0]">
                                <img alt="" className="block max-w-none size-full" src={imgVector6} />
                              </div>
                            </div>
                          </div>
                          <div className="content-stretch flex flex-col h-full items-start justify-end pb-px relative shrink-0 w-[11px]" data-node-id="I2149:59665;2149:59637;16385:66623">
                            <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] w-full" data-node-id="I2149:59665;2149:59637;16385:66624">
                              <p className="leading-[1.4]">%</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-[var(--background\/background-color,white)] content-stretch flex flex-col items-start px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="I2149:59665;2149:59638">
                  <div className="content-stretch flex flex-col items-start pb-[2px] pt-[12px] relative shrink-0 w-full" data-node-id="I2149:59665;2149:59639" data-name="Цвета">
                    <div className="content-start cursor-pointer flex flex-wrap gap-[8px_6px] items-start relative shrink-0 w-[334px]" data-node-id="I2149:59665;2149:59640" data-name="Типовые цвета">
                      <button className="content-stretch flex items-center relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59665;2149:59641" data-name="Цвет аккордеона">
                        <div className="relative shrink-0 size-[28px]" data-node-id="I2149:59665;2149:59641;2149:58749" data-name="нет фона">
                          <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
                        </div>
                      </button>
                      <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59665;2149:59642" data-name="Цвет28.2">
                        <div className="absolute bg-[var(--color-2,white)] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59665;2149:59642;7721:185944" data-name="Цвет" />
                      </button>
                      <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59665;2149:59643" data-name="Цвет28.2">
                        <div className="absolute bg-[var(--color-3,rgba(255,255,255,0.85))] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59665;2149:59643;7721:185944" data-name="Цвет" />
                      </button>
                      <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59665;2149:59644" data-name="Цвет28.2">
                        <div className="absolute bg-[var(--color-4,rgba(255,255,255,0.7))] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59665;2149:59644;7721:185944" data-name="Цвет" />
                      </button>
                      <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59665;2149:59645" data-name="Цвет28.2">
                        <div className="absolute bg-[var(--color-5,rgba(255,255,255,0.6))] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59665;2149:59645;7721:185944" data-name="Цвет" />
                      </button>
                      <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59665;2149:59646" data-name="Цвет28.2">
                        <div className="absolute bg-[var(--color-6,#f8f8f8)] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59665;2149:59646;7721:185944" data-name="Цвет" />
                      </button>
                      <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59665;2149:59647" data-name="Цвет28.2">
                        <div className="absolute bg-[var(--color-7,#f2f2f2)] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59665;2149:59647;7721:185944" data-name="Цвет" />
                      </button>
                      <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59665;2149:59648" data-name="Цвет28.2">
                        <div className="absolute bg-[var(--color-8,#ecedee)] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59665;2149:59648;7721:185944" data-name="Цвет" />
                      </button>
                      <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59665;2149:59649" data-name="Цвет28.2">
                        <div className="absolute bg-[var(--color-9,#ebeded)] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59665;2149:59649;7721:185944" data-name="Цвет" />
                      </button>
                      <button className="block relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:59665;2149:59650" data-name="Цвет28.2">
                        <div className="absolute bg-[var(--color-10,#f3f5f7)] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59665;2149:59650;7721:185944" data-name="Цвет" />
                      </button>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-col gap-[12px] items-start pb-[12px] pt-[16px] relative shrink-0 w-full" data-node-id="I2149:59665;2149:59651">
                    <div className="h-px relative shrink-0 w-full" data-node-id="I2149:59665;2149:59652" data-name="разделитель">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={img1} />
                    </div>
                    <div className="content-stretch flex h-[24px] items-start pl-[2px] relative shrink-0 w-full" data-node-id="I2149:59665;2149:59654">
                      <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-node-id="I2149:59665;2149:59655" data-name="link">
                        <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2149:59665;2149:59655;17890:5965" data-name="_buttonContent">
                          <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-node-id="I2149:59665;2149:59655;17890:5965;17890:60" data-name="textWrap">
                            <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] leading-[normal] not-italic relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] whitespace-nowrap" data-node-id="I2149:59665;2149:59655;17890:5965;17890:61">
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
