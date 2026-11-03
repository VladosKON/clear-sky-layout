const imgTypeExternalHoverFalseClickFalseIconSizeIconSizeCloseButton = "https://www.figma.com/api/mcp/asset/bf36695a-5830-4e78-8461-4535d5334c16.svg";

type CloseButtonProps = {
  className?: string;
  click?: boolean;
  hover?: boolean;
  iconSize?: "icon_size-closeButton";
  type?: "external";
};

function CloseButton({ className, click = false, hover = false, iconSize = "icon_size-closeButton", type = "external" }: CloseButtonProps) {
  return (
    <div className={className || "relative size-[28px]"} data-node-id="1925:57535">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgTypeExternalHoverFalseClickFalseIconSizeIconSizeCloseButton} />
    </div>
  );
}

type CloseCloseButtonProps = {
  className?: string;
  closeButtonViewMode?: "external";
  inlineHeight?: "xl (32)";
};

function CloseCloseButton({ className, closeButtonViewMode = "external", inlineHeight = "xl (32)" }: CloseCloseButtonProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-center justify-center relative size-[var(--inline_height\\/inline_height_xl,32px)]"} data-node-id="1925:57584">
      <CloseButton className="flex-[1_0_0] min-h-px relative w-full" />
    </div>
  );
}

function Component({ className }: { className?: string }) {
  return (
    <div className={className || "content-stretch flex items-center justify-center py-[var(--offset\\/offset_xs,6px)] relative w-[134px]"} data-node-id="1925:57120" data-name="Цвет/Разделитель/Горизонтальный">
      <div className="flex flex-[1_0_0] h-px items-center justify-center min-w-px relative" data-node-id="1925:57121" style={{ containerType: "size" }}>
        <div className="-rotate-90 flex-none h-[100cqw]">
          <div className="bg-[var(--border\/border-color,#eaeaea)] h-full relative w-px" />
        </div>
      </div>
    </div>
  );
}

type Component1Props = {
  className?: string;
  property1?: "Редактор";
};

function Component1({ className, property1 = "Редактор" }: Component1Props) {
  return (
    <div className={className || "content-stretch flex flex-col h-[28px] items-center justify-center px-[var(--offset\\/offset_2xs,4px)] relative rounded-[10px] w-[55px]"} data-node-id="1925:57123">
      <div className="absolute bottom-0 content-stretch flex gap-[var(--offset\/none,0px)] items-center left-0 px-[var(--offset\/offset_st,10px)] py-[var(--offset\/offset_3xs,2px)] rounded-[10px] top-0" data-node-id="1925:57124" data-name="Масштаб">
        <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] h-[24px] items-center justify-center relative shrink-0" data-node-id="I1925:57124;16219:71023" data-name="container">
          <div className="content-stretch flex items-center relative shrink-0" data-node-id="I1925:57124;16219:71025" data-name="name">
            <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] text-center tracking-[-0.1974px] whitespace-nowrap" data-node-id="I1925:57124;16219:71026">
              <p className="leading-[normal]">100%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type Component3Props = {
  className?: string;
  active?: "False";
  children?: React.ReactNode | null;
  hover?: boolean;
  text?: string;
};

function Component3({ className, active = "False", children = null, hover = false, text = "Тема" }: Component3Props) {
  return (
    <div className={className || "bg-[var(--background\\/info_background-color,#f8f7ff)] content-stretch flex gap-[var(--offset\\/none,0px)] items-center pl-[var(--offset\\/none,0px)] pr-px py-px relative rounded-bl-[11px] rounded-br-[15px] rounded-tl-[11px] rounded-tr-[15px]"} data-node-id="2149:58719">
      <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] h-[28px] items-center pl-[10px] pr-[var(--offset\/offset_xs,6px)] relative shrink-0" data-node-id="2149:58720" data-name="container">
        <div className="content-stretch flex h-[26px] items-center relative shrink-0" data-node-id="2149:58722" data-name="name">
          <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] text-center tracking-[-0.1974px] whitespace-nowrap" data-node-id="2149:58723">
            <p className="leading-[normal]">{text}</p>
          </div>
        </div>
      </div>
      <div className="content-stretch flex items-start relative shrink-0" data-node-id="2149:58724" data-name="Фон">
        {children || (
          <div className="content-stretch flex items-center relative rounded-[16px] shrink-0" data-node-id="2149:58725" data-name="Цвет фона">
            <div className="bg-[#f8f8f8] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid relative rounded-[100px] shrink-0 size-[28px]" data-node-id="I2149:58725;2149:58765" data-name="Цвет" />
          </div>
        )}
      </div>
    </div>
  );
}

export default function Component4() {
  return (
    <div className="content-stretch flex items-center justify-between relative size-full" data-node-id="2149:56254" data-name="Шапка с командами интерфейса">
      <div className="content-stretch flex flex-[1_0_0] gap-[var(--offset\/offset_m,12px)] items-center min-w-px pl-[var(--offset\/offset_s,8px)] pr-[var(--offset\/offset_m,12px)] relative" data-node-id="2149:56255" data-name="Левая часть">
        <div className="bg-[var(--background\/info_background-color,#f8f7ff)] content-stretch cursor-pointer flex gap-[2px] items-start p-px relative rounded-[11px] shrink-0" data-node-id="2149:56256" data-name="Аккордеон">
          <button className="content-stretch flex gap-[var(--offset\/none,0px)] items-center px-[var(--offset\/offset_xs,6px)] py-[var(--offset\/offset_3xs,2px)] relative rounded-[10px] shrink-0" data-node-id="I2149:56256;16238:80771" data-name="Настройки">
            <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] h-[24px] items-center justify-center relative shrink-0" data-node-id="I2149:56256;16238:80771;16219:71023" data-name="container">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56256;16238:80771;16219:71024" data-name="icons">
                <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:56256;16238:80771;16219:71024;5565:16629" data-name="iconsWrap">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] text-left whitespace-nowrap" data-node-id="I2149:56256;16238:80771;16219:71024;5565:16629;8306:1722">{`\uEBBE`}</p>
                </div>
              </div>
              <div className="content-stretch flex items-center pr-[var(--offset\/offset_2xs,4px)] relative shrink-0" data-node-id="I2149:56256;16238:80771;16219:71025" data-name="name">
                <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] text-center tracking-[-0.1974px] whitespace-nowrap" data-node-id="I2149:56256;16238:80771;16219:71026">
                  <p className="leading-[normal]">Меню</p>
                </div>
              </div>
            </div>
          </button>
          <button className="content-stretch flex gap-[var(--offset\/none,0px)] items-center px-[var(--offset\/offset_xs,6px)] py-[var(--offset\/offset_3xs,2px)] relative rounded-[10px] shrink-0" data-node-id="I2149:56256;18431:28064" data-name="Загрузка лого">
            <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] h-[24px] items-center justify-center relative shrink-0" data-node-id="I2149:56256;18431:28064;16219:71023" data-name="container">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56256;18431:28064;16219:71024" data-name="icons">
                <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:56256;18431:28064;16219:71024;5565:16629" data-name="iconsWrap">
                  <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] text-left whitespace-nowrap" data-node-id="I2149:56256;18431:28064;16219:71024;5565:16629;8306:1722">{`\uE9E2`}</p>
                </div>
              </div>
              <div className="content-stretch flex items-center pr-[var(--offset\/offset_2xs,4px)] relative shrink-0" data-node-id="I2149:56256;18431:28064;16219:71025" data-name="name">
                <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] text-center tracking-[-0.1974px] whitespace-nowrap" data-node-id="I2149:56256;18431:28064;16219:71026">
                  <p className="leading-[normal]">Логотип</p>
                </div>
              </div>
            </div>
          </button>
        </div>
        <div className="content-stretch flex gap-[8px] h-[19px] items-center relative shrink-0 w-[153px]" data-node-id="2149:56257" data-name="Название" />
      </div>
      <div className="content-stretch flex gap-[80px] items-center relative shrink-0" data-node-id="2149:56260" data-name="Центр">
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="2149:56261" data-name="Цвета">
          <Component3 className="bg-[var(--background\/info_background-color,#f8f7ff)] content-stretch flex gap-[var(--offset\/none,0px)] items-center pl-[var(--offset\/none,0px)] pr-px py-px relative rounded-bl-[11px] rounded-br-[15px] rounded-tl-[11px] rounded-tr-[15px] shrink-0">
            <button className="content-stretch flex items-center mr-[-4px] relative rounded-[16px] shrink-0" data-node-id="2149:62383" data-name="Цвет аккордеона">
              <div className="bg-[var(--цвета-аккордеона\/фон-аккордеона,#2c3e50)] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid relative rounded-[100px] shrink-0 size-[28px]" data-node-id="I2149:62383;1930:54231" data-name="Цвет" />
            </button>
            <button className="content-stretch flex items-center mr-[-4px] relative rounded-[16px] shrink-0" data-node-id="2158:60164" data-name="Акценты">
              <div className="bg-[var(--акценты,#cc3d00)] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid relative rounded-[100px] shrink-0 size-[28px]" data-node-id="I2158:60164;1930:54231" data-name="Цвет" />
            </button>
            <button className="content-stretch flex items-center mr-[-4px] relative rounded-[16px] shrink-0" data-node-id="2158:60165" data-name="Маркер">
              <div className="bg-[var(--маркер,#0c94ff)] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid relative rounded-[100px] shrink-0 size-[28px]" data-node-id="I2158:60165;1930:54231" data-name="Цвет" />
            </button>
            <button className="content-stretch flex items-center relative rounded-[16px] shrink-0" data-node-id="2149:62386" data-name="ЦУ">
              <div className="bg-[var(--цвет-цу,#ecedee)] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid relative rounded-[100px] shrink-0 size-[28px]" data-node-id="I2149:62386;1930:54231" data-name="Цвет" />
            </button>
          </Component3>
          <div className="bg-[var(--background\/info_background-color,#f8f7ff)] content-stretch cursor-pointer flex gap-[var(--offset\/none,0px)] items-center pl-[var(--offset\/none,0px)] pr-px py-px relative rounded-bl-[11px] rounded-br-[15px] rounded-tl-[11px] rounded-tr-[15px] shrink-0" data-node-id="2149:56263" data-name="Тема2">
            <button className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] h-[28px] items-center pl-[10px] pr-[var(--offset\/offset_xs,6px)] relative shrink-0" data-node-id="I2149:56263;2149:58720" data-name="container">
              <div className="content-stretch flex h-[26px] items-center relative shrink-0" data-node-id="I2149:56263;2149:58722" data-name="name">
                <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] text-center tracking-[-0.1974px] whitespace-nowrap" data-node-id="I2149:56263;2149:58723">
                  <p className="leading-[normal]">Фон</p>
                </div>
              </div>
            </button>
            <div className="content-stretch flex items-start relative shrink-0" data-node-id="I2149:56263;2149:58724" data-name="Фон">
              <button className="content-stretch flex items-center mr-[-4px] relative rounded-[16px] shrink-0 size-[28px]" data-node-id="I2149:56263;2149:58724;2149:62388" data-name="Цвет фона">
                <div className="bg-[#f8f8f8] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid relative rounded-[100px] shrink-0 size-[28px]" data-node-id="I2149:56263;2149:58724;2149:62388;2024:30754" data-name="Цвет" />
              </button>
              <button className="content-stretch flex items-center relative rounded-[16px] shrink-0" data-node-id="I2149:56263;2149:58724;2149:62389" data-name="Фон центральной части">
                <div className="bg-[var(--цвет-контента,#f8f8f8)] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid relative rounded-[100px] shrink-0 size-[28px]" data-node-id="I2149:56263;2149:58724;2149:62389;1930:54254" data-name="Цвет" />
              </button>
            </div>
          </div>
        </div>
        <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-node-id="2149:56264">
          <div className="bg-[var(--background\/info_background-color,#f8f7ff)] content-stretch flex gap-[2px] items-start p-px relative rounded-[11px] shrink-0 w-[90px]" data-node-id="2149:56265" data-name="Выравнивание02">
            <button className="content-stretch cursor-pointer flex gap-[var(--offset\/none,0px)] items-center p-[var(--offset\/offset_3xs,2px)] relative rounded-[10px] shrink-0" data-node-id="I2149:56265;16288:201288" data-name="Ноут">
              <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I2149:56265;16288:201288;16219:71023" data-name="container">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56265;16288:201288;16219:71024" data-name="icons">
                  <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:56265;16288:201288;16219:71024;5565:16629" data-name="iconsWrap">
                    <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] text-left whitespace-nowrap" data-node-id="I2149:56265;16288:201288;16219:71024;5565:16629;8306:1722">{`\uE6C0`}</p>
                  </div>
                </div>
              </div>
            </button>
            <div className="bg-[var(--background\/info_active_background-color,#e1dbff)] content-stretch flex gap-[var(--offset\/none,0px)] items-center p-[var(--offset\/offset_3xs,2px)] relative rounded-[10px] shrink-0" data-node-id="I2149:56265;16288:201289" data-name="Планшет">
              <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I2149:56265;16288:201289;16219:71037" data-name="container">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56265;16288:201289;16219:71038" data-name="icons">
                  <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:56265;16288:201289;16219:71038;5565:16629" data-name="iconsWrap">
                    <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:56265;16288:201289;16219:71038;5565:16629;8306:1722">{`\uE6BF`}</p>
                  </div>
                </div>
              </div>
            </div>
            <button className="content-stretch cursor-pointer flex gap-[var(--offset\/none,0px)] items-center p-[var(--offset\/offset_3xs,2px)] relative rounded-[10px] shrink-0" data-node-id="I2149:56265;16288:201290" data-name="Кнопка тулбара LOCAL2">
              <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I2149:56265;16288:201290;16219:71023" data-name="container">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56265;16288:201290;16219:71024" data-name="icons">
                  <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:56265;16288:201290;16219:71024;5565:16629" data-name="iconsWrap">
                    <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] text-left whitespace-nowrap" data-node-id="I2149:56265;16288:201290;16219:71024;5565:16629;8306:1722">{`\uE6C2`}</p>
                  </div>
                </div>
              </div>
            </button>
          </div>
          <div className="bg-[var(--background\/info_background-color,#f8f7ff)] content-stretch flex gap-[2px] items-start p-px relative rounded-[var(--border-radius\/border-radius_m,12px)] shrink-0" data-node-id="2149:56266" data-name="Адаптация">
            <div className="bg-[var(--background\/info_active_background-color,#e1dbff)] content-stretch flex gap-[var(--offset\/none,0px)] items-center p-[var(--offset\/offset_3xs,2px)] relative rounded-[10px] shrink-0" data-node-id="2149:56267" data-name="ПК">
              <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I2149:56267;16219:71037" data-name="container">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56267;16219:71038" data-name="icons">
                  <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:56267;16219:71038;5565:16629" data-name="iconsWrap">
                    <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:56267;16219:71038;5565:16629;8306:1722">{`\uE730`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--offset\/none,0px)] items-center p-[var(--offset\/offset_3xs,2px)] relative rounded-[10px] shrink-0" data-node-id="2149:56268" data-name="Ноут">
              <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I2149:56268;16219:71023" data-name="container">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56268;16219:71024" data-name="icons">
                  <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:56268;16219:71024;5565:16629" data-name="iconsWrap">
                    <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:56268;16219:71024;5565:16629;8306:1722">{`\uE637`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--offset\/none,0px)] items-center p-[var(--offset\/offset_3xs,2px)] relative rounded-[10px] shrink-0" data-node-id="2149:56269" data-name="Планшет">
              <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I2149:56269;16219:71023" data-name="container">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56269;16219:71024" data-name="icons">
                  <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:56269;16219:71024;5565:16629" data-name="iconsWrap">
                    <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:56269;16219:71024;5565:16629;8306:1722">{`\uEAB4`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[var(--background\/info_background-color,#f8f7ff)] content-stretch flex gap-[2px] items-start p-px relative rounded-[var(--border-radius\/border-radius_m,12px)] shrink-0" data-node-id="2149:56270" data-name="Доп. команды">
            <div className="content-stretch flex gap-[var(--offset\/none,0px)] items-center p-[var(--offset\/offset_3xs,2px)] relative rounded-[10px] shrink-0" data-node-id="2149:56271" data-name="Назад">
              <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I2149:56271;16219:71023" data-name="container">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56271;16219:71024" data-name="icons">
                  <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:56271;16219:71024;5565:16629" data-name="iconsWrap">
                    <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:56271;16219:71024;5565:16629;8306:1722">{`\uE6CF`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--offset\/none,0px)] items-center p-[var(--offset\/offset_3xs,2px)] relative rounded-[10px] shrink-0" data-node-id="2149:56272" data-name="Вперед">
              <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] items-center justify-center relative shrink-0 size-[24px]" data-node-id="I2149:56272;16219:71023" data-name="container">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56272;16219:71024" data-name="icons">
                  <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:56272;16219:71024;5565:16629" data-name="iconsWrap">
                    <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:56272;16219:71024;5565:16629;8306:1722">{`\uE6CA`}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex gap-[var(--offset\/none,0px)] items-center p-[var(--offset\/offset_3xs,2px)] relative rounded-[10px] shrink-0" data-node-id="2149:56273" data-name="Сброс">
              <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I2149:56273;16219:71023" data-name="container">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56273;16219:71024" data-name="icons">
                  <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:56273;16219:71024;5565:16629" data-name="iconsWrap">
                    <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:56273;16219:71024;5565:16629;8306:1722">{`\uE629`}</p>
                  </div>
                </div>
              </div>
            </div>
            <Component1 className="content-stretch flex flex-col h-[28px] items-center justify-center px-[var(--offset\/offset_2xs,4px)] relative rounded-[10px] shrink-0 w-[55px]" />
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] gap-[var(--offset\/offset_m,12px)] items-center justify-end min-w-px pr-[var(--offset\/offset_st,10px)] relative rounded-[14px]" data-node-id="2149:56275" data-name="Правая часть">
        <div className="bg-[var(--background\/info_background-color,#f8f7ff)] content-stretch flex gap-[var(--offset\/none,0px)] items-center pl-[var(--offset\/none,0px)] pr-[10px] py-px relative rounded-[11px] shrink-0" data-node-id="2149:56276" data-name="Язык">
          <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] h-[28px] items-center pl-[10px] pr-[var(--offset\/none,0px)] relative shrink-0" data-node-id="I2149:56276;16219:71536" data-name="container">
            <div className="content-stretch flex h-[26px] items-center relative shrink-0" data-node-id="I2149:56276;16219:71538" data-name="name">
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] text-center tracking-[-0.1974px] whitespace-nowrap" data-node-id="I2149:56276;16219:71539">
                <p className="leading-[normal]">Язык RU</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-start relative shrink-0" data-node-id="2149:56277" data-name="done/doneButton">
          <div className="bg-[var(--background\/contrast\/success_color,#12a12c)] content-stretch drop-shadow-[0px_0px_calc(var(--blur\/shadow-blur_d,6px)/2)_var(--color\/shadow-color_d,rgba(0,0,0,0.1))] flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[32px]" data-node-id="I2149:56277;22488:25567" data-name="filled">
            <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2149:56277;22488:25567;17890:2832" data-name="_buttonContent">
              <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2149:56277;22488:25567;17890:2832;17890:165" data-name="iconWrap">
                <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56277;22488:25567;17890:2832;17890:166" data-name="icons/font">
                  <div className="content-stretch flex flex-col items-center justify-center pt-[0.5px] relative shrink-0 size-[20px]" data-node-id="I2149:56277;22488:25567;17890:2832;17890:166;17887:22649" data-name="iconWrap">
                    <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/contrast_icon-color,white)] text-[length:var(--icon\/icon_size\/icon-size_st,20px)] whitespace-nowrap" data-node-id="I2149:56277;22488:25567;17890:2832;17890:166;17887:22663">{`\uE75E`}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CloseCloseButton className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[32px]" />
      </div>
    </div>
  );
}
