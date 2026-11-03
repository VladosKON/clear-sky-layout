const imgTypeLinkButtonHoverFalseClickFalseIconSizeIconSizeCloseButton = "https://www.figma.com/api/mcp/asset/d8baadec-4d11-4ef6-b05a-6583f5b3469d.svg";
const imgImg = "https://www.figma.com/api/mcp/asset/972a73ed-163a-4355-ab6b-b0a8b6b85899.png";
const imgImg1 = "https://www.figma.com/api/mcp/asset/ad215eb3-d28b-4443-b754-f3b488096e16.png";
const imgImg2 = "https://www.figma.com/api/mcp/asset/cb84ba07-8060-4b87-9829-ef59b5e6df8b.png";
const imgImg3 = "https://www.figma.com/api/mcp/asset/f15bb5b8-0de1-404d-84e3-bc951bf20b55.png";
const imgImg4 = "https://www.figma.com/api/mcp/asset/f3057893-548e-4f33-b240-bda58a1355b4.png";
const imgImg5 = "https://www.figma.com/api/mcp/asset/f06f1434-21c1-43ad-84de-d85bcedaf2d0.png";
const imgImg6 = "https://www.figma.com/api/mcp/asset/da73edea-867e-4c41-ac8e-07d077540a15.png";
const imgImg7 = "https://www.figma.com/api/mcp/asset/c92db8e5-6b8e-4803-8e55-c725595ea207.png";
const imgImg8 = "https://www.figma.com/api/mcp/asset/38ba5183-1d31-4b6d-befe-3fc88a802737.png";
const imgImg9 = "https://www.figma.com/api/mcp/asset/29f7e956-d6a8-497e-b2b1-1286cbcbc8c3.png";
const imgImg10 = "https://www.figma.com/api/mcp/asset/9db5dc48-d150-4026-939a-0e039b1f1032.png";
const imgImg11 = "https://www.figma.com/api/mcp/asset/4f92cfc9-9dc1-42ac-a118-8c7a3239d538.png";
const imgImg12 = "https://www.figma.com/api/mcp/asset/9c30ff0f-0fa2-4547-bcfa-6bc9fc950cb1.png";
const imgShape = "https://www.figma.com/api/mcp/asset/b70dca3e-8971-47b1-ae59-bd149c0bd95e.svg";
const imgCloseButton = "https://www.figma.com/api/mcp/asset/3818434d-1d1e-473d-8108-023259dca069.svg";
const imgLine1 = "https://www.figma.com/api/mcp/asset/116558e4-aace-49af-9108-9dcd728f5b2d.svg";
const imgVector5 = "https://www.figma.com/api/mcp/asset/011d6540-a0a5-45f9-be44-f6ffc62632f3.svg";
const imgVector6 = "https://www.figma.com/api/mcp/asset/8c6852f4-4fc6-4a4c-8841-6d93e2ca725a.svg";
const imgCursorArrow = "https://www.figma.com/api/mcp/asset/646a0a45-d3f9-4210-b0d2-8f12a36b3f73.svg";
const img = "https://www.figma.com/api/mcp/asset/0731762e-4f81-4f3d-80e5-f677d33f81c6.svg";
const imgVector = "https://www.figma.com/api/mcp/asset/4318202d-5ed2-4a56-a6a8-5ee8bb93ecb6.svg";

type ComponentProps = {
  className?: string;
  property1?: "Variant60" | "Variant66";
};

function Component({ className, property1 = "Variant60" }: ComponentProps) {
  const isVariant60 = property1 === "Variant60";
  return (
    <div className={className || "relative rounded-[16px] size-[28px]"} id={isVariant60 ? "node-727_20549" : "node-727_20489"}>
      <div className="absolute border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" id={isVariant60 ? "node-727_20550" : "node-727_20490"} style={isVariant60 ? { backgroundImage: "linear-gradient(123.6900684299754deg, rgba(71, 180, 205, 0.15) 35.647%, rgb(71, 180, 205) 83.824%)" } : { backgroundImage: "linear-gradient(52.43140937738794deg, rgb(77, 214, 107) 37.169%, rgb(0, 99, 156) 61.936%)" }} data-name="Цвет" />
    </div>
  );
}

type Component1Props = {
  className?: string;
  property1?: "D Другой шрифт";
};

function Component1({ className, property1 = "D Другой шрифт" }: Component1Props) {
  return (
    <div className={className || "bg-[var(--background\\/background-color,white)] border border-[var(--border\\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex items-center overflow-clip px-[8px] py-[12px] relative rounded-[6px] w-[334px]"} data-node-id="727:17936">
      <div className="content-stretch flex flex-[1_0_0] flex-col items-start justify-center min-h-[24px] min-w-px relative" data-node-id="727:17937">
        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic overflow-hidden relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_l,15px)] text-ellipsis tracking-[-0.2115px] whitespace-nowrap" data-node-id="727:17938">
          <p className="leading-[normal] overflow-hidden text-[15px] text-ellipsis">Свой градиент</p>
        </div>
      </div>
    </div>
  );
}

type CloseButtonProps = {
  className?: string;
  click?: boolean;
  hover?: boolean;
  iconSize?: "icon_size-closeButton";
  type?: "linkButton";
};

function CloseButton({ className, click = false, hover = false, iconSize = "icon_size-closeButton", type = "linkButton" }: CloseButtonProps) {
  return (
    <div className={className || "relative size-[28px]"} data-node-id="707:17083">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTypeLinkButtonHoverFalseClickFalseIconSizeIconSizeCloseButton} />
    </div>
  );
}

type WindowProps = {
  className?: string;
  state?: "default" | "градиент";
};

function Window({ className, state = "default" }: WindowProps) {
  const is = state === "градиент";
  const isDefault = state === "default";
  return (
    <div className={className || "bg-[var(--background\\/contrast_background-color,#f3f5f7)] content-stretch drop-shadow-[0px_0px_9px_rgba(0,0,0,0.12)] flex flex-col isolate items-start relative rounded-[8px] w-[362px]"} id={is ? "node-2149_59070" : "node-2149_58803"}>
      <div className="content-stretch flex items-center pb-[15px] pl-[16px] pr-[6px] pt-[12px] relative shrink-0 w-full z-[2]" id={is ? "node-2149_59072" : "node-2149_58804"} data-name="1 строка">
        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" id={is ? "node-2149_59073" : "node-2149_58805"} data-name="Заголовок в окне Основной с переменной">
          <div className="content-stretch flex h-[28px] items-center relative shrink-0" id={is ? "node-2149_59074" : "node-2149_58806"} data-name="Текст">
            <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_2xl,17px)] tracking-[-0.2397px] whitespace-nowrap" id={is ? "node-2149_59075" : "node-2149_58807"}>
              <p className="leading-[normal]">Фон</p>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch" id={is ? "node-2149_59076" : "node-2149_58808"}>
            <div className="flex-[1_0_0] h-full min-w-px relative" />
          </div>
          <div className="content-stretch flex gap-[10px] items-center justify-end pt-px relative shrink-0" id={is ? "node-2149_59077" : "node-2149_58809"}>
            <div className="content-stretch flex gap-[6px] items-center pr-[2px] relative shrink-0" id={is ? "node-2149_59078" : "node-2149_58810"} data-name="buttonsWrap">
              <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[28px]" id={is ? "node-2149_59079" : "node-2149_58811"} data-name="ghost">
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" id={is ? "node-I2149_59079-17890_9803" : "node-I2149_58811-17890_9803"} data-name="_buttonContent">
                  <div className="content-stretch flex items-center relative shrink-0" id={is ? "node-I2149_59079-17890_9803-17890_165" : "node-I2149_58811-17890_9803-17890_165"} data-name="iconWrap">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" id={is ? "node-I2149_59079-17890_9803-17890_166" : "node-I2149_58811-17890_9803-17890_166"} data-name="icons/font">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" id={is ? "node-I2149_59079-17890_9803-17890_166-17887_22647" : "node-I2149_58811-17890_9803-17890_166-17887_22647"} data-name="iconWrap">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/secondary_icon-color,#656c87)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" id={is ? "node-I2149_59079-17890_9803-17890_166-17887_22661" : "node-I2149_58811-17890_9803-17890_166-17887_22661"}>{`\uE671`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[28px]" id={is ? "node-2149_59080" : "node-2149_58812"} data-name="Дополнительнве кнопки">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" id={is ? "node-I2149_59080-6560_17087" : "node-I2149_58812-6560_17087"} data-name="eyedropper-alt">
                  <div className="col-1 h-[16px] ml-0 mt-0 relative row-1 w-[15.997px]" id={is ? "node-I2149_59080-6560_17088" : "node-I2149_58812-6560_17088"} data-name="Shape">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShape} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[28px]" id={is ? "node-2149_59081" : "node-2149_58813"} data-name="done/doneButton">
              <div className="bg-[var(--background\/contrast\/success_color,#12a12c)] content-stretch drop-shadow-[0px_0px_calc(var(--blur\/shadow-blur_d,6px)/2)_var(--color\/shadow-color_d,rgba(0,0,0,0.1))] flex flex-col h-[28px] items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 w-full" id={is ? "node-I2149_59081-37368_12221" : "node-I2149_58813-37368_12221"} data-name="filled">
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" id={is ? "node-I2149_59081-37368_12221-17890_2850" : "node-I2149_58813-37368_12221-17890_2850"} data-name="_buttonContent">
                  <div className="content-stretch flex items-center relative shrink-0" id={is ? "node-I2149_59081-37368_12221-17890_2850-17890_165" : "node-I2149_58813-37368_12221-17890_2850-17890_165"} data-name="iconWrap">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" id={is ? "node-I2149_59081-37368_12221-17890_2850-17890_166" : "node-I2149_58813-37368_12221-17890_2850-17890_166"} data-name="icons/font">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" id={is ? "node-I2149_59081-37368_12221-17890_2850-17890_166-17887_22647" : "node-I2149_58813-37368_12221-17890_2850-17890_166-17887_22647"} data-name="iconWrap">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/contrast_icon-color,white)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" id={is ? "node-I2149_59081-37368_12221-17890_2850-17890_166-17887_22661" : "node-I2149_58813-37368_12221-17890_2850-17890_166-17887_22661"}>{`\uE75E`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[28px]" id={is ? "node-2149_59082" : "node-2149_58814"} data-name="close/closeButton">
              {isDefault && (
                <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="I2149:58814;19062:34116" data-name="_closeButton">
                  <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCloseButton} />
                </div>
              )}
              {is && <CloseButton className="flex-[1_0_0] min-h-px relative w-full" />}
            </button>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[362px] z-[1]" id={is ? "node-2149_59083" : "node-2149_58815"} data-name="Настройки цвета">
        <div className="content-stretch flex flex-col gap-[4px] isolate items-start pb-[4px] px-[4px] relative shrink-0 w-full z-[2]" id={is ? "node-2149_59084" : "node-2149_58816"} data-name="Выбор своего цвета">
          <div className={`bg-white content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full ${is ? "z-[2]" : "z-[3]"}`} id={is ? "node-2149_59085" : "node-2149_58817"}>
            <div className="content-stretch flex isolate items-center justify-between relative shrink-0 w-full" id={is ? "node-2149_59086" : "node-2149_58818"} data-name="Код цвета и кнопки">
              <div className="bg-[#f8f8f8] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid h-[32px] relative rounded-[18px] shrink-0 w-[70px] z-[2]" id={is ? "node-2149_59087" : "node-2149_58819"} data-name="Component 99" />
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[1]" id={is ? "node-2149_59088" : "node-2149_58820"} data-name="Component 100">
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-[46px]" id={is ? "node-I2149_59088-297_30596" : "node-I2149_58820-297_30596"} data-name="HEX">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-[24px] items-start justify-center min-w-px relative" id={is ? "node-I2149_59088-297_30596-11709_27544" : "node-I2149_58820-297_30596-11709_27544"} data-name="Однострочные поля">
                    <div className="content-stretch flex flex-[1_0_0] items-end min-h-px pb-[3px] relative w-full" id={is ? "node-I2149_59088-297_30596-11709_27545" : "node-I2149_58820-297_30596-11709_27545"}>
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--text\/text-color,black)] tracking-[-0.1974px]" id={is ? "node-I2149_59088-297_30596-11709_27546" : "node-I2149_58820-297_30596-11709_27546"}>
                        <p className="leading-[normal]">HEX</p>
                      </div>
                    </div>
                    <div className="h-0 relative shrink-0 w-full" id={is ? "node-I2149_59088-297_30596-11709_27547" : "node-I2149_58820-297_30596-11709_27547"}>
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine1} />
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] absolute font-['cbuc-icons:Regular'] leading-[normal] not-italic right-[16px] text-[16px] text-[color:var(--icon\/unaccented_icon-color,#ccc)] top-[calc(50%-8.5px)] translate-x-full whitespace-nowrap" id={is ? "node-I2149_59088-297_30596-11709_27548" : "node-I2149_58820-297_30596-11709_27548"}>{`\uE9AA`}</p>
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" id={is ? "node-I2149_59088-297_30597" : "node-I2149_58820-297_30597"}>
                  <div className="content-stretch flex flex-col h-[24px] items-start justify-end pb-px relative shrink-0 w-[66px]" id={is ? "node-I2149_59088-297_30598" : "node-I2149_58820-297_30598"} data-name="Код цвета">
                    <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] w-[min-content]" id={is ? "node-I2149_59088-297_30599" : "node-I2149_58820-297_30599"}>
                      <p className="leading-[1.4]">#F8F8F8</p>
                    </div>
                    <div className="absolute h-0 left-0 top-[23.5px] w-[66px]" id={is ? "node-I2149_59088-297_30600" : "node-I2149_58820-297_30600"}>
                      <div className="absolute inset-[-0.5px_0]">
                        <img alt="" className="block max-w-none size-full" src={imgVector5} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[24px] items-start relative shrink-0" id={is ? "node-I2149_59088-297_30601" : "node-I2149_58820-297_30601"} data-name="Прозрачность">
                    <div className="content-stretch flex flex-col h-full items-start justify-end pb-px relative shrink-0" id={is ? "node-I2149_59088-297_30602" : "node-I2149_58820-297_30602"}>
                      <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px] whitespace-nowrap" id={is ? "node-I2149_59088-297_30603" : "node-I2149_58820-297_30603"}>
                        <p className="leading-[1.4]">100</p>
                      </div>
                      <div className="absolute h-0 left-0 top-[23.5px] w-[24px]" id={is ? "node-I2149_59088-297_30604" : "node-I2149_58820-297_30604"}>
                        <div className="absolute inset-[-0.5px_0]">
                          <img alt="" className="block max-w-none size-full" src={imgVector6} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col h-full items-start justify-end pb-px relative shrink-0 w-[11px]" id={is ? "node-I2149_59088-297_30605" : "node-I2149_58820-297_30605"}>
                      <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] w-full" id={is ? "node-I2149_59088-297_30606" : "node-I2149_58820-297_30606"}>
                        <p className="leading-[1.4]">%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`bg-white content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-full ${is ? "z-[1]" : "z-[2]"}`} id={is ? "node-2149_59089" : "node-2149_58821"} data-name="Цвета">
            {isDefault && (
              <>
                <div className="content-stretch flex flex-col gap-[8px] items-start justify-center pb-[8px] pt-[10px] px-[12px] relative shrink-0 w-[354px]" data-node-id="2149:58822" data-name="Точки цвета">
                  <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="I2149:58822;297:30050">
                    <div className="content-start flex flex-wrap gap-[8px_6px] h-[64px] items-start relative shrink-0 w-[334px]" data-node-id="I2149:58822;297:30051" data-name="Типовые цвета">
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30064" data-name="Цвет28.2">
                        <div className="absolute bg-gradient-to-b border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col from-[rgba(148,50,83,0.1)] items-center justify-center left-0 rounded-[100px] size-[28px] to-[rgba(248,248,248,0)] top-0" data-node-id="I2149:58822;297:30064;7721:185944" data-name="Цвет" />
                      </div>
                      <button className="block cursor-pointer relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30063" data-name="Цвет28.2">
                        <div className="absolute bg-gradient-to-b border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col from-[rgba(241,103,103,0.1)] items-center justify-center left-0 rounded-[100px] size-[28px] to-[rgba(248,248,248,0)] top-0" data-node-id="I2149:58822;297:30063;7721:185944" data-name="Цвет" />
                      </button>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30065" data-name="Цвет28.2">
                        <div className="absolute bg-gradient-to-b border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col from-[rgba(229,149,69,0.1)] items-center justify-center left-0 rounded-[100px] size-[28px] to-[rgba(248,248,248,0)] top-0" data-node-id="I2149:58822;297:30065;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30066" data-name="Цвет28.2">
                        <div className="absolute bg-gradient-to-b border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col from-[rgba(229,203,69,0.1)] items-center justify-center left-0 rounded-[100px] size-[28px] to-[rgba(248,248,248,0)] top-0" data-node-id="I2149:58822;297:30066;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30067" data-name="Цвет28.2">
                        <div className="absolute bg-gradient-to-b border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col from-[rgba(0,153,24,0.1)] items-center justify-center left-0 rounded-[100px] size-[28px] to-[rgba(248,248,248,0)] top-0" data-node-id="I2149:58822;297:30067;7721:185944" data-name="Цвет" />
                      </div>
                      <button className="block cursor-pointer relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30062" data-name="Цвет28.2">
                        <div className="absolute bg-gradient-to-b border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col from-[rgba(12,148,255,0.1)] items-center justify-center left-0 rounded-[100px] size-[28px] to-[rgba(248,248,248,0)] top-0" data-node-id="I2149:58822;297:30062;7721:185944" data-name="Цвет" />
                      </button>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30068" data-name="Цвет28.2">
                        <div className="absolute bg-gradient-to-b border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col from-[rgba(50,97,148,0.1)] items-center justify-center left-0 rounded-[100px] size-[28px] to-[rgba(248,248,248,0)] top-0" data-node-id="I2149:58822;297:30068;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30069" data-name="Цвет28.2">
                        <div className="absolute bg-gradient-to-b border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col from-[rgba(76,50,148,0.1)] items-center justify-center left-0 rounded-[100px] size-[28px] to-[rgba(248,248,248,0)] top-0" data-node-id="I2149:58822;297:30069;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30070" data-name="Цвет28.2">
                        <div className="absolute bg-gradient-to-b border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col from-[rgba(148,50,136,0.1)] items-center justify-center left-0 rounded-[100px] size-[28px] to-[rgba(248,248,248,0)] top-0" data-node-id="I2149:58822;297:30070;7721:185944" data-name="Цвет" />
                      </div>
                      <button className="block cursor-pointer relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30071" data-name="Цвет28.2">
                        <div className="absolute bg-[#f8f8f8] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:58822;297:30071;7721:185944" data-name="Цвет" />
                      </button>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30052" data-name="Цвет28.2">
                        <div className="absolute bg-[#ffe3ec] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:58822;297:30052;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30053" data-name="Цвет28.2">
                        <div className="absolute bg-[#ffe5e3] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:58822;297:30053;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30054" data-name="Цвет28.2">
                        <div className="absolute bg-[#fff1e3] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:58822;297:30054;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30055" data-name="Цвет28.2">
                        <div className="absolute bg-[#fffbe3] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:58822;297:30055;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30056" data-name="Цвет28.2">
                        <div className="absolute bg-[#e3ffe8] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:58822;297:30056;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30057" data-name="Цвет28.2">
                        <div className="absolute bg-[#e3faff] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:58822;297:30057;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30058" data-name="Цвет28.2">
                        <div className="absolute bg-[#e3f1ff] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:58822;297:30058;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30059" data-name="Цвет28.2">
                        <div className="absolute bg-[#eae3ff] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:58822;297:30059;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30060" data-name="Цвет28.2">
                        <div className="absolute bg-[#ffe3fa] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:58822;297:30060;7721:185944" data-name="Цвет" />
                      </div>
                      <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:58822;297:30061" data-name="Цвет28.2">
                        <div className="absolute bg-[#ededed] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:58822;297:30061;7721:185944" data-name="Цвет" />
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[58px] size-[16px] top-[22px]" data-node-id="I2149:58822;297:31555" data-name="clickCursor">
                    <div className="absolute bg-[#6cc] inset-0 opacity-50 rounded-[32px]" data-node-id="I2149:58822;297:31555;3784:15252" data-name="dot" />
                    <div className="absolute left-px size-[24px] top-[5px]" data-node-id="I2149:58822;297:31555;4102:6974" data-name="Cursor/Arrow">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCursorArrow} />
                    </div>
                  </div>
                  <div className="absolute left-[194px] size-[16px] top-[22px]" data-node-id="I2149:58822;297:31576" data-name="clickCursor">
                    <div className="absolute bg-[#6cc] inset-0 opacity-50 rounded-[32px]" data-node-id="I2149:58822;297:31576;3784:15252" data-name="dot" />
                    <div className="absolute left-px size-[24px] top-[5px]" data-node-id="I2149:58822;297:31576;4102:6974" data-name="Cursor/Arrow">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCursorArrow} />
                    </div>
                  </div>
                  <div className="absolute left-[330px] size-[16px] top-[22px]" data-node-id="I2149:58822;297:31588" data-name="clickCursor">
                    <div className="absolute bg-[#6cc] inset-0 opacity-50 rounded-[32px]" data-node-id="I2149:58822;297:31588;3784:15252" data-name="dot" />
                    <div className="absolute left-px size-[24px] top-[5px]" data-node-id="I2149:58822;297:31588;4102:6974" data-name="Cursor/Arrow">
                      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCursorArrow} />
                    </div>
                  </div>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start pb-[12px] pl-[4px] pt-[8px] relative shrink-0 w-full" data-node-id="2149:58823" data-name="footer">
                  <div className="h-[8px] relative shrink-0 w-full" data-node-id="2149:58824" data-name="разделитель">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={img} />
                  </div>
                  <div className="content-stretch flex gap-[20px] h-[24px] items-start pl-[8px] relative shrink-0 w-full" data-node-id="2149:58826" data-name="buttonsWrap">
                    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-node-id="2149:58827" data-name="link">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2149:58827;17890:5965" data-name="_buttonContent">
                        <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-node-id="I2149:58827;17890:5965;17890:60" data-name="textWrap">
                          <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] leading-[normal] not-italic relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] whitespace-nowrap" data-node-id="I2149:58827;17890:5965;17890:61">
                            Другой цвет
                          </p>
                        </div>
                      </div>
                    </div>
                    <button className="content-stretch cursor-pointer flex flex-col h-[24px] items-center justify-center relative shrink-0" data-node-id="2149:58828" data-name="link">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2149:58828;17890:5965" data-name="_buttonContent">
                        <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-node-id="I2149:58828;17890:5965;17890:60" data-name="textWrap">
                          <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] leading-[normal] not-italic relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_m,14px)] text-left tracking-[-0.1974px] whitespace-nowrap" data-node-id="I2149:58828;17890:5965;17890:61">
                            Градиент
                          </p>
                        </div>
                      </div>
                    </button>
                    <div className="content-stretch flex flex-col h-[24px] items-center justify-center relative shrink-0" data-node-id="2149:58829" data-name="link">
                      <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2149:58829;17890:5965" data-name="_buttonContent">
                        <div className="content-stretch flex h-full items-center justify-center relative shrink-0" data-node-id="I2149:58829;17890:5965;17890:60" data-name="textWrap">
                          <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] leading-[normal] not-italic relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] whitespace-nowrap" data-node-id="I2149:58829;17890:5965;17890:61">
                            Текстура
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
            {is && (
              <div className="bg-white content-stretch flex flex-col items-start px-[12px] relative rounded-[8px] shrink-0 w-full" data-node-id="2149:59090">
                <div className="content-stretch flex items-center py-[10px] relative shrink-0 w-full" data-node-id="2149:59091" data-name="2 строка">
                  <button className="content-stretch cursor-pointer flex h-[28px] items-center relative shrink-0" data-node-id="2149:59092">
                    <div className="content-stretch flex items-center relative shrink-0" data-node-id="2149:59093" data-name="BackButton">
                      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-node-id="2149:59094" data-name="_backButton">
                        <div className="content-stretch flex items-start pr-[6px] relative shrink-0" data-node-id="2149:59095" data-name="backButtonContainer">
                          <div className="bg-[var(--background\/contrast\/pale_color,rgba(51,51,51,0.05))] content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[28px]" data-node-id="2149:59096" data-name="Button">
                            <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="2149:59097" data-name="_button">
                              <div className="h-[15px] relative shrink-0 w-[7.5px]" data-node-id="2149:59098" data-name="Vector">
                                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgVector} />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col h-[28px] items-start justify-end pb-[4px] relative shrink-0 w-[74px]" data-node-id="2149:59103">
                      <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Semi_Bold')] font-[var(--font\/font-weight\/bold,600)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_xl,16px)] text-left tracking-[-0.2256px] whitespace-nowrap" data-node-id="2149:59104">
                        <p className="leading-[normal]">Градиент</p>
                      </div>
                    </div>
                  </button>
                </div>
                <div className="content-stretch flex flex-col gap-[8px] items-start pb-[12px] relative shrink-0 w-full" data-node-id="2149:59105">
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2149:59106" data-name="08">
                    <div className="bg-gradient-to-l border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid from-[#f8f8f8] from-[52.044%] h-[48px] overflow-clip relative rounded-[6px] shrink-0 to-[#f2f9ff] w-full" data-node-id="I2149:59106;11365:602000" data-name="Виды текстур" />
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2149:59107" data-name="09">
                    <div className="bg-gradient-to-t border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid from-1/2 from-[#f8f8f8] h-[48px] overflow-clip relative rounded-[6px] shrink-0 to-[#f2f9ff] to-[97.058%] w-full" data-node-id="I2149:59107;11365:602000" data-name="Виды текстур" />
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2149:59108" data-name="10">
                    <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid h-[48px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-node-id="I2149:59108;11365:602000" style={{ backgroundImage: "linear-gradient(167.97846009802495deg, rgb(242, 249, 255) 15.182%, rgb(248, 248, 248) 52.986%)" }} data-name="Виды текстур" />
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2149:59109" data-name="11">
                    <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid h-[48px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-node-id="I2149:59109;11365:602000" style={{ backgroundImage: "linear-gradient(7.870457282041215deg, rgb(248, 248, 248) 48.04%, rgb(242, 249, 255) 82.869%)" }} data-name="Виды текстур" />
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2149:59110" data-name="12">
                    <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid h-[48px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-node-id="I2149:59110;11365:602000" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 325 48' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(-9.8428e-8 -2.4 16.25 -1.4537e-8 162.5 24)'><stop stop-color='rgba(242,249,255,1)' offset='0'/><stop stop-color='rgba(248,248,248,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="Виды текстур" />
                  </div>
                  <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-node-id="2149:59111" data-name="13">
                    <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid h-[48px] overflow-clip relative rounded-[6px] shrink-0 w-full" data-node-id="I2149:59111;11365:602000" style={{ backgroundImage: "url(\"data:image/svg+xml;utf8,<svg viewBox='0 0 325 48' xmlns='http://www.w3.org/2000/svg' preserveAspectRatio='none'><rect x='0' y='0' height='100%' width='100%' fill='url(%23grad)' opacity='1'/><defs><radialGradient id='grad' gradientUnits='userSpaceOnUse' cx='0' cy='0' r='10' gradientTransform='matrix(16.542 -1.8 11.062 2.3323 162.5 24)'><stop stop-color='rgba(242,249,255,1)' offset='0'/><stop stop-color='rgba(248,248,248,1)' offset='1'/></radialGradient></defs></svg>\")" }} data-name="Виды текстур" />
                  </div>
                  <Component1 className="bg-[var(--background\/background-color,white)] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch cursor-pointer flex items-center overflow-clip px-[8px] py-[12px] relative rounded-[6px] shrink-0 w-full" />
                </div>
                <div className="content-stretch flex flex-col items-start pb-[10px] relative shrink-0" data-node-id="2149:59113">
                  <div className="content-stretch flex items-center pb-[8px] pl-[2px] pr-[var(--components\/popup\/menu\/grouping_padding-horizontal_menu,16px)] relative shrink-0 w-[334px]" data-node-id="2149:59114" data-name="MyGroup">
                    <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="I2149:59114;11796:60542" data-name="grouping">
                      <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] items-center pr-[var(--components\/list\/group\/grouping_expander_padding-right_list,4px)] relative shrink-0" data-node-id="I2149:59114;11796:60543" data-name="_header">
                        <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/label_text-color,#8991a9)] text-[length:var(--font\/font-size\/font-size_xs,12px)] tracking-[-0.1692px] whitespace-nowrap" data-node-id="I2149:59114;11796:60544">
                          <p className="leading-[normal]">Ранее использовались</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-start flex flex-wrap gap-[8px_6px] h-[28px] items-start relative shrink-0 w-[334px]" data-node-id="2149:59115" data-name="История Типовое">
                    <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2149:59116" data-name="Цвет с подсказкой">
                      <div className="absolute border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59116;12016:56993" style={{ backgroundImage: "linear-gradient(1.4582284868258597deg, rgb(248, 248, 248) 46.517%, rgb(255, 244, 246) 98.759%)" }} data-name="Цвет" />
                    </div>
                    <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2149:59117" data-name="Цвет с подсказкой">
                      <div className="absolute border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59117;12016:56993" style={{ backgroundImage: "linear-gradient(1.4582284868258597deg, rgb(248, 248, 248) 46.517%, rgb(234, 241, 247) 98.759%)" }} data-name="Цвет" />
                    </div>
                    <div className="relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2149:59118" data-name="Цвет с подсказкой">
                      <div className="absolute border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid content-stretch flex flex-col items-center justify-center left-0 rounded-[100px] size-[28px] top-0" data-node-id="I2149:59118;12016:56993" style={{ backgroundImage: "linear-gradient(1.4582278181503483deg, rgb(231, 255, 229) 50%, rgb(255, 244, 246) 98.759%)" }} data-name="Цвет" />
                    </div>
                    <Component className="relative rounded-[16px] shrink-0 size-[28px]" />
                    <Component className="relative rounded-[16px] shrink-0 size-[28px]" property1="Variant66" />
                  </div>
                </div>
              </div>
            )}
          </div>
          {isDefault && (
            <div className="bg-[var(--background\/background-color,white)] content-stretch flex flex-col h-[376px] items-start overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-full z-[1]" data-node-id="2149:58830">
              <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_______91px_91px_91px_91px_91px_91px_91px] relative shrink-0 w-[334px]" data-node-id="2149:58831" data-name="ImagesCatalog">
                <button className="bg-white border border-[var(--border\/border-color,#eaeaea)] border-solid content-stretch cursor-pointer flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] self-stretch shrink-0" data-node-id="I2149:58831;430:10074" data-name="Фото в коллекции [06.07.26]">
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="I2149:58831;430:10074;430:10037" data-name="img">
                    <div aria-hidden className="absolute inset-0 pointer-events-none">
                      <img alt="" className="absolute max-w-none object-cover size-full" src={imgImg} />
                      <img alt="" className="absolute max-w-none object-cover size-full" src={imgImg1} />
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start opacity-0 right-[5px] top-[5px]" data-node-id="I2149:58831;430:10074;433:12135" role="button" tabIndex="0" data-name="Редактировать Local">
                    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--border-radius\/border-radius_2xs,4px)] shrink-0 size-[24px]" data-node-id="I2149:58831;430:10074;433:12135;13801:187741" data-name="Button">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center mb-[-24px] min-h-px p-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10074;433:12135;13801:187741;13629:11092" data-name="borderBack">
                        <div className="bg-[var(--components\/button\/default_contrast_background-color_button,white)] flex-[1_0_0] h-full min-w-px opacity-75 relative rounded-[3px]" data-node-id="I2149:58831;430:10074;433:12135;13801:187741;13629:11093" data-name="background" />
                      </div>
                      <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid flex-[1_0_0] mb-[-24px] min-h-px opacity-75 relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10074;433:12135;13801:187741;13629:11094" data-name="border" />
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10074;433:12135;13801:187741;13629:11095" data-name="icon">
                        <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-node-id="I2149:58831;430:10074;433:12135;13801:187741;13629:11096" data-name="_button">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:58831;430:10074;433:12135;13801:187741;13629:11096;12337:7243" data-name="icons">
                            <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:58831;430:10074;433:12135;13801:187741;13629:11096;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                              <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] text-left whitespace-nowrap" data-node-id="I2149:58831;430:10074;433:12135;13801:187741;13629:11096;12337:7243;5565:16629;8306:1722">{`\uE660`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <div className="bg-white border border-[var(--border\/border-color,#eaeaea)] border-solid content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] self-stretch shrink-0" data-node-id="I2149:58831;430:10084" data-name="Фото в коллекции [06.07.26]">
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="I2149:58831;430:10084;430:10037" data-name="img">
                    <div aria-hidden className="absolute inset-0 pointer-events-none">
                      <img alt="" className="absolute max-w-none object-cover size-full" src={imgImg} />
                      <img alt="" className="absolute max-w-none object-cover size-full" src={imgImg2} />
                    </div>
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start opacity-0 right-[5px] top-[5px]" data-node-id="I2149:58831;430:10084;433:12135" data-name="Редактировать Local">
                    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--border-radius\/border-radius_2xs,4px)] shrink-0 size-[24px]" data-node-id="I2149:58831;430:10084;433:12135;13801:187741" data-name="Button">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center mb-[-24px] min-h-px p-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10084;433:12135;13801:187741;13629:11092" data-name="borderBack">
                        <div className="bg-[var(--components\/button\/default_contrast_background-color_button,white)] flex-[1_0_0] h-full min-w-px opacity-75 relative rounded-[3px]" data-node-id="I2149:58831;430:10084;433:12135;13801:187741;13629:11093" data-name="background" />
                      </div>
                      <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid flex-[1_0_0] mb-[-24px] min-h-px opacity-75 relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10084;433:12135;13801:187741;13629:11094" data-name="border" />
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10084;433:12135;13801:187741;13629:11095" data-name="icon">
                        <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-node-id="I2149:58831;430:10084;433:12135;13801:187741;13629:11096" data-name="_button">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:58831;430:10084;433:12135;13801:187741;13629:11096;12337:7243" data-name="icons">
                            <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:58831;430:10084;433:12135;13801:187741;13629:11096;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                              <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:58831;430:10084;433:12135;13801:187741;13629:11096;12337:7243;5565:16629;8306:1722">{`\uE660`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[var(--border\/border-color,#eaeaea)] border-solid content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] self-stretch shrink-0" data-node-id="I2149:58831;430:10096" data-name="Фото в коллекции [06.07.26]">
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="I2149:58831;430:10096;430:10037" data-name="img">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg3} />
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start opacity-0 right-[5px] top-[5px]" data-node-id="I2149:58831;430:10096;433:12135" data-name="Редактировать Local">
                    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--border-radius\/border-radius_2xs,4px)] shrink-0 size-[24px]" data-node-id="I2149:58831;430:10096;433:12135;13801:187741" data-name="Button">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center mb-[-24px] min-h-px p-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10096;433:12135;13801:187741;13629:11092" data-name="borderBack">
                        <div className="bg-[var(--components\/button\/default_contrast_background-color_button,white)] flex-[1_0_0] h-full min-w-px opacity-75 relative rounded-[3px]" data-node-id="I2149:58831;430:10096;433:12135;13801:187741;13629:11093" data-name="background" />
                      </div>
                      <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid flex-[1_0_0] mb-[-24px] min-h-px opacity-75 relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10096;433:12135;13801:187741;13629:11094" data-name="border" />
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10096;433:12135;13801:187741;13629:11095" data-name="icon">
                        <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-node-id="I2149:58831;430:10096;433:12135;13801:187741;13629:11096" data-name="_button">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:58831;430:10096;433:12135;13801:187741;13629:11096;12337:7243" data-name="icons">
                            <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:58831;430:10096;433:12135;13801:187741;13629:11096;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                              <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:58831;430:10096;433:12135;13801:187741;13629:11096;12337:7243;5565:16629;8306:1722">{`\uE660`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[var(--border\/border-color,#eaeaea)] border-solid content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] self-stretch shrink-0" data-node-id="I2149:58831;430:10114" data-name="Фото в коллекции [06.07.26]">
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="I2149:58831;430:10114;430:10037" data-name="img">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg4} />
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start opacity-0 right-[5px] top-[5px]" data-node-id="I2149:58831;430:10114;433:12135" data-name="Редактировать Local">
                    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--border-radius\/border-radius_2xs,4px)] shrink-0 size-[24px]" data-node-id="I2149:58831;430:10114;433:12135;13801:187741" data-name="Button">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center mb-[-24px] min-h-px p-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10114;433:12135;13801:187741;13629:11092" data-name="borderBack">
                        <div className="bg-[var(--components\/button\/default_contrast_background-color_button,white)] flex-[1_0_0] h-full min-w-px opacity-75 relative rounded-[3px]" data-node-id="I2149:58831;430:10114;433:12135;13801:187741;13629:11093" data-name="background" />
                      </div>
                      <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid flex-[1_0_0] mb-[-24px] min-h-px opacity-75 relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10114;433:12135;13801:187741;13629:11094" data-name="border" />
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10114;433:12135;13801:187741;13629:11095" data-name="icon">
                        <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-node-id="I2149:58831;430:10114;433:12135;13801:187741;13629:11096" data-name="_button">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:58831;430:10114;433:12135;13801:187741;13629:11096;12337:7243" data-name="icons">
                            <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:58831;430:10114;433:12135;13801:187741;13629:11096;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                              <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:58831;430:10114;433:12135;13801:187741;13629:11096;12337:7243;5565:16629;8306:1722">{`\uE660`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[var(--border\/border-color,#eaeaea)] border-solid content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] self-stretch shrink-0" data-node-id="I2149:58831;430:10123" data-name="Фото в коллекции [06.07.26]">
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="I2149:58831;430:10123;430:10037" data-name="img">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg5} />
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start opacity-0 right-[5px] top-[5px]" data-node-id="I2149:58831;430:10123;433:12135" data-name="Редактировать Local">
                    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--border-radius\/border-radius_2xs,4px)] shrink-0 size-[24px]" data-node-id="I2149:58831;430:10123;433:12135;13801:187741" data-name="Button">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center mb-[-24px] min-h-px p-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10123;433:12135;13801:187741;13629:11092" data-name="borderBack">
                        <div className="bg-[var(--components\/button\/default_contrast_background-color_button,white)] flex-[1_0_0] h-full min-w-px opacity-75 relative rounded-[3px]" data-node-id="I2149:58831;430:10123;433:12135;13801:187741;13629:11093" data-name="background" />
                      </div>
                      <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid flex-[1_0_0] mb-[-24px] min-h-px opacity-75 relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10123;433:12135;13801:187741;13629:11094" data-name="border" />
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10123;433:12135;13801:187741;13629:11095" data-name="icon">
                        <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-node-id="I2149:58831;430:10123;433:12135;13801:187741;13629:11096" data-name="_button">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:58831;430:10123;433:12135;13801:187741;13629:11096;12337:7243" data-name="icons">
                            <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:58831;430:10123;433:12135;13801:187741;13629:11096;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                              <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:58831;430:10123;433:12135;13801:187741;13629:11096;12337:7243;5565:16629;8306:1722">{`\uE660`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[var(--border\/border-color,#eaeaea)] border-solid content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] self-stretch shrink-0" data-node-id="I2149:58831;430:10129" data-name="Фото в коллекции [06.07.26]">
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="I2149:58831;430:10129;430:10037" data-name="img">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg6} />
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start opacity-0 right-[5px] top-[5px]" data-node-id="I2149:58831;430:10129;433:12135" data-name="Редактировать Local">
                    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--border-radius\/border-radius_2xs,4px)] shrink-0 size-[24px]" data-node-id="I2149:58831;430:10129;433:12135;13801:187741" data-name="Button">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center mb-[-24px] min-h-px p-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10129;433:12135;13801:187741;13629:11092" data-name="borderBack">
                        <div className="bg-[var(--components\/button\/default_contrast_background-color_button,white)] flex-[1_0_0] h-full min-w-px opacity-75 relative rounded-[3px]" data-node-id="I2149:58831;430:10129;433:12135;13801:187741;13629:11093" data-name="background" />
                      </div>
                      <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid flex-[1_0_0] mb-[-24px] min-h-px opacity-75 relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10129;433:12135;13801:187741;13629:11094" data-name="border" />
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10129;433:12135;13801:187741;13629:11095" data-name="icon">
                        <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-node-id="I2149:58831;430:10129;433:12135;13801:187741;13629:11096" data-name="_button">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:58831;430:10129;433:12135;13801:187741;13629:11096;12337:7243" data-name="icons">
                            <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:58831;430:10129;433:12135;13801:187741;13629:11096;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                              <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:58831;430:10129;433:12135;13801:187741;13629:11096;12337:7243;5565:16629;8306:1722">{`\uE660`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[var(--border\/border-color,#eaeaea)] border-solid content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] self-stretch shrink-0" data-node-id="I2149:58831;430:10141" data-name="Фото в коллекции [06.07.26]">
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="I2149:58831;430:10141;430:10037" data-name="img">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg7} />
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start opacity-0 right-[5px] top-[5px]" data-node-id="I2149:58831;430:10141;433:12135" data-name="Редактировать Local">
                    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--border-radius\/border-radius_2xs,4px)] shrink-0 size-[24px]" data-node-id="I2149:58831;430:10141;433:12135;13801:187741" data-name="Button">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center mb-[-24px] min-h-px p-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10141;433:12135;13801:187741;13629:11092" data-name="borderBack">
                        <div className="bg-[var(--components\/button\/default_contrast_background-color_button,white)] flex-[1_0_0] h-full min-w-px opacity-75 relative rounded-[3px]" data-node-id="I2149:58831;430:10141;433:12135;13801:187741;13629:11093" data-name="background" />
                      </div>
                      <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid flex-[1_0_0] mb-[-24px] min-h-px opacity-75 relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10141;433:12135;13801:187741;13629:11094" data-name="border" />
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10141;433:12135;13801:187741;13629:11095" data-name="icon">
                        <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-node-id="I2149:58831;430:10141;433:12135;13801:187741;13629:11096" data-name="_button">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:58831;430:10141;433:12135;13801:187741;13629:11096;12337:7243" data-name="icons">
                            <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:58831;430:10141;433:12135;13801:187741;13629:11096;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                              <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:58831;430:10141;433:12135;13801:187741;13629:11096;12337:7243;5565:16629;8306:1722">{`\uE660`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[var(--border\/border-color,#eaeaea)] border-solid content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] self-stretch shrink-0" data-node-id="I2149:58831;430:10142" data-name="Фото в коллекции [06.07.26]">
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="I2149:58831;430:10142;430:10037" data-name="img">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg8} />
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start opacity-0 right-[5px] top-[5px]" data-node-id="I2149:58831;430:10142;433:12135" data-name="Редактировать Local">
                    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--border-radius\/border-radius_2xs,4px)] shrink-0 size-[24px]" data-node-id="I2149:58831;430:10142;433:12135;13801:187741" data-name="Button">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center mb-[-24px] min-h-px p-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10142;433:12135;13801:187741;13629:11092" data-name="borderBack">
                        <div className="bg-[var(--components\/button\/default_contrast_background-color_button,white)] flex-[1_0_0] h-full min-w-px opacity-75 relative rounded-[3px]" data-node-id="I2149:58831;430:10142;433:12135;13801:187741;13629:11093" data-name="background" />
                      </div>
                      <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid flex-[1_0_0] mb-[-24px] min-h-px opacity-75 relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10142;433:12135;13801:187741;13629:11094" data-name="border" />
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10142;433:12135;13801:187741;13629:11095" data-name="icon">
                        <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-node-id="I2149:58831;430:10142;433:12135;13801:187741;13629:11096" data-name="_button">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:58831;430:10142;433:12135;13801:187741;13629:11096;12337:7243" data-name="icons">
                            <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:58831;430:10142;433:12135;13801:187741;13629:11096;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                              <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:58831;430:10142;433:12135;13801:187741;13629:11096;12337:7243;5565:16629;8306:1722">{`\uE660`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[var(--border\/border-color,#eaeaea)] border-solid content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] self-stretch shrink-0" data-node-id="I2149:58831;430:10159" data-name="Фото в коллекции [06.07.26]">
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="I2149:58831;430:10159;430:10037" data-name="img">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg9} />
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start opacity-0 right-[5px] top-[5px]" data-node-id="I2149:58831;430:10159;433:12135" data-name="Редактировать Local">
                    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--border-radius\/border-radius_2xs,4px)] shrink-0 size-[24px]" data-node-id="I2149:58831;430:10159;433:12135;13801:187741" data-name="Button">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center mb-[-24px] min-h-px p-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10159;433:12135;13801:187741;13629:11092" data-name="borderBack">
                        <div className="bg-[var(--components\/button\/default_contrast_background-color_button,white)] flex-[1_0_0] h-full min-w-px opacity-75 relative rounded-[3px]" data-node-id="I2149:58831;430:10159;433:12135;13801:187741;13629:11093" data-name="background" />
                      </div>
                      <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid flex-[1_0_0] mb-[-24px] min-h-px opacity-75 relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10159;433:12135;13801:187741;13629:11094" data-name="border" />
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10159;433:12135;13801:187741;13629:11095" data-name="icon">
                        <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-node-id="I2149:58831;430:10159;433:12135;13801:187741;13629:11096" data-name="_button">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:58831;430:10159;433:12135;13801:187741;13629:11096;12337:7243" data-name="icons">
                            <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:58831;430:10159;433:12135;13801:187741;13629:11096;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                              <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:58831;430:10159;433:12135;13801:187741;13629:11096;12337:7243;5565:16629;8306:1722">{`\uE660`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[var(--border\/border-color,#eaeaea)] border-solid content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] self-stretch shrink-0" data-node-id="I2149:58831;430:10160" data-name="Фото в коллекции [06.07.26]">
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="I2149:58831;430:10160;430:10037" data-name="img">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg10} />
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start opacity-0 right-[5px] top-[5px]" data-node-id="I2149:58831;430:10160;433:12135" data-name="Редактировать Local">
                    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--border-radius\/border-radius_2xs,4px)] shrink-0 size-[24px]" data-node-id="I2149:58831;430:10160;433:12135;13801:187741" data-name="Button">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center mb-[-24px] min-h-px p-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10160;433:12135;13801:187741;13629:11092" data-name="borderBack">
                        <div className="bg-[var(--components\/button\/default_contrast_background-color_button,white)] flex-[1_0_0] h-full min-w-px opacity-75 relative rounded-[3px]" data-node-id="I2149:58831;430:10160;433:12135;13801:187741;13629:11093" data-name="background" />
                      </div>
                      <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid flex-[1_0_0] mb-[-24px] min-h-px opacity-75 relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10160;433:12135;13801:187741;13629:11094" data-name="border" />
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10160;433:12135;13801:187741;13629:11095" data-name="icon">
                        <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-node-id="I2149:58831;430:10160;433:12135;13801:187741;13629:11096" data-name="_button">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:58831;430:10160;433:12135;13801:187741;13629:11096;12337:7243" data-name="icons">
                            <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:58831;430:10160;433:12135;13801:187741;13629:11096;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                              <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:58831;430:10160;433:12135;13801:187741;13629:11096;12337:7243;5565:16629;8306:1722">{`\uE660`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[var(--border\/border-color,#eaeaea)] border-solid content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] self-stretch shrink-0" data-node-id="I2149:58831;430:10177" data-name="Фото в коллекции [06.07.26]">
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="I2149:58831;430:10177;430:10037" data-name="img">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg11} />
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start opacity-0 right-[5px] top-[5px]" data-node-id="I2149:58831;430:10177;433:12135" data-name="Редактировать Local">
                    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--border-radius\/border-radius_2xs,4px)] shrink-0 size-[24px]" data-node-id="I2149:58831;430:10177;433:12135;13801:187741" data-name="Button">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center mb-[-24px] min-h-px p-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10177;433:12135;13801:187741;13629:11092" data-name="borderBack">
                        <div className="bg-[var(--components\/button\/default_contrast_background-color_button,white)] flex-[1_0_0] h-full min-w-px opacity-75 relative rounded-[3px]" data-node-id="I2149:58831;430:10177;433:12135;13801:187741;13629:11093" data-name="background" />
                      </div>
                      <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid flex-[1_0_0] mb-[-24px] min-h-px opacity-75 relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10177;433:12135;13801:187741;13629:11094" data-name="border" />
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10177;433:12135;13801:187741;13629:11095" data-name="icon">
                        <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-node-id="I2149:58831;430:10177;433:12135;13801:187741;13629:11096" data-name="_button">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:58831;430:10177;433:12135;13801:187741;13629:11096;12337:7243" data-name="icons">
                            <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:58831;430:10177;433:12135;13801:187741;13629:11096;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                              <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:58831;430:10177;433:12135;13801:187741;13629:11096;12337:7243;5565:16629;8306:1722">{`\uE660`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-white border border-[var(--border\/border-color,#eaeaea)] border-solid content-stretch flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] self-stretch shrink-0" data-node-id="I2149:58831;430:10178" data-name="Фото в коллекции [06.07.26]">
                  <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="I2149:58831;430:10178;430:10037" data-name="img">
                    <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgImg12} />
                  </div>
                  <div className="absolute content-stretch flex flex-col items-start opacity-0 right-[5px] top-[5px]" data-node-id="I2149:58831;430:10178;433:12135" data-name="Редактировать Local">
                    <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--border-radius\/border-radius_2xs,4px)] shrink-0 size-[24px]" data-node-id="I2149:58831;430:10178;433:12135;13801:187741" data-name="Button">
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center mb-[-24px] min-h-px p-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10178;433:12135;13801:187741;13629:11092" data-name="borderBack">
                        <div className="bg-[var(--components\/button\/default_contrast_background-color_button,white)] flex-[1_0_0] h-full min-w-px opacity-75 relative rounded-[3px]" data-node-id="I2149:58831;430:10178;433:12135;13801:187741;13629:11093" data-name="background" />
                      </div>
                      <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid flex-[1_0_0] mb-[-24px] min-h-px opacity-75 relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10178;433:12135;13801:187741;13629:11094" data-name="border" />
                      <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I2149:58831;430:10178;433:12135;13801:187741;13629:11095" data-name="icon">
                        <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-node-id="I2149:58831;430:10178;433:12135;13801:187741;13629:11096" data-name="_button">
                          <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:58831;430:10178;433:12135;13801:187741;13629:11096;12337:7243" data-name="icons">
                            <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:58831;430:10178;433:12135;13801:187741;13629:11096;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                              <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:58831;430:10178;433:12135;13801:187741;13629:11096;12337:7243;5565:16629;8306:1722">{`\uE660`}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute left-[94px] size-[16px] top-[42px]" data-node-id="I2149:58831;297:31600" data-name="clickCursor">
                  <div className="absolute bg-[#6cc] inset-0 opacity-50 rounded-[32px]" data-node-id="I2149:58831;297:31600;3784:15252" data-name="dot" />
                  <div className="absolute left-px size-[24px] top-[5px]" data-node-id="I2149:58831;297:31600;4102:6974" data-name="Cursor/Arrow">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCursorArrow} />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
