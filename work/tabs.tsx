type BricksDeleteButtonProps = {
  className?: string;
  hover?: boolean;
  style?: "info";
};

function BricksDeleteButton({ className, hover = false, style = "info" }: BricksDeleteButtonProps) {
  return (
    <div className={className || "content-stretch flex items-start px-[6px] py-[4px] relative"} data-node-id="1925:21512">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="1925:21513" data-name="icons">
        <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I1925:21513;5565:16627" data-name="Ui базовый набор / Font">
          <p className="[word-break:break-word] font-['cbuc-icons24:Regular'] leading-[normal] not-italic relative shrink-0 text-[24px] text-[color:var(--icon\/danger_icon-color,#c2140a)] whitespace-nowrap" data-node-id="I1925:21513;5565:16627;8306:1722">{`\uEB72`}</p>
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[var(--border-radius\/border-radius_3xs,2px)] size-full" data-node-id="2149:56959" data-name="Навигация - Виджет">
      <div className="content-stretch flex items-center justify-end relative rounded-[3.6px] shrink-0 w-full" data-node-id="I2149:56959;18731:100136" data-name="Вкладки">
        <button className="content-stretch cursor-pointer flex gap-[12px] items-start px-[12px] relative shrink-0" data-node-id="I2149:56959;18731:100136;16041:60937" data-name="tabs/LOCAL">
          <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="I2149:56959;18731:100136;16041:60937;16016:204108" data-name="template">
            <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0" data-node-id="I2149:56959;18731:100136;16041:60937;16016:204109" data-name="Контент с маркером">
              <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px pt-[3px] relative w-full" data-node-id="I2149:56959;18731:100136;16041:60937;16016:204110" data-name="Контент внутри справа">
                <div className="content-stretch flex flex-col h-full isolate items-center relative shrink-0" data-node-id="I2149:56959;18731:100136;16041:60937;16016:204115" data-name="text">
                  <div className="content-stretch flex flex-[1_0_0] items-center mb-[-26px] min-h-px relative z-[2]" data-node-id="I2149:56959;18731:100136;16041:60937;16016:204116" data-name="Текст вкладки">
                    <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Semi_Bold')] font-[var(--font\/font-weight\/bold,600)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--акценты,#cc3d00)] text-[length:var(--font\/font-size\/font-size_l,15px)] text-left tracking-[-0.2115px] whitespace-nowrap" data-node-id="I2149:56959;18731:100136;16041:60937;16016:204117">
                      <p className="leading-[normal]">Главный</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative z-[1]" data-node-id="I2149:56959;18731:100136;16041:60937;16016:204118" data-name="Невидимый текст">
                    <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Semi_Bold')] font-[var(--font\/font-weight\/bold,600)] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[color:var(--акценты,#cc3d00)] text-[length:var(--font\/font-size\/font-size_l,15px)] text-left tracking-[-0.2115px] whitespace-nowrap" data-node-id="I2149:56959;18731:100136;16041:60937;16016:204119">
                      <p className="leading-[normal]">Главный</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--акценты,#cc3d00)] h-[3px] relative rounded-[4px] shrink-0 w-full" data-node-id="I2149:56959;18731:100136;16041:60937;16016:204121" data-name="tabsMarker" />
            </div>
          </div>
        </button>
        <div className="content-stretch flex gap-[12px] items-start px-[12px] relative shrink-0" data-node-id="I2149:56959;18731:100136;16041:61247" data-name="tabs/LOCAL">
          <div className="content-stretch flex gap-[6px] items-start relative shrink-0" data-node-id="I2149:56959;18731:100136;16041:61247;16016:204138" data-name="template">
            <div className="content-stretch flex flex-col h-[32px] items-start justify-center relative shrink-0" data-node-id="I2149:56959;18731:100136;16041:61247;16016:204139" data-name="Контент с маркером">
              <div className="content-stretch flex flex-[1_0_0] gap-[6px] items-center min-h-px pt-[3px] relative w-full" data-node-id="I2149:56959;18731:100136;16041:61247;16016:204140" data-name="Контент внутри справа">
                <div className="content-stretch flex flex-col h-full isolate items-center relative shrink-0" data-node-id="I2149:56959;18731:100136;16041:61247;16016:204145" data-name="text">
                  <div className="content-stretch flex flex-[1_0_0] items-center mb-[-26px] min-h-px relative z-[2]" data-node-id="I2149:56959;18731:100136;16041:61247;16016:204146" data-name="Текст вкладки">
                    <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="I2149:56959;18731:100136;16041:61247;16016:204147">
                      <p className="leading-[normal]">Для менеджеров</p>
                    </div>
                  </div>
                  <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative z-[1]" data-node-id="I2149:56959;18731:100136;16041:61247;16016:204148" data-name="Невидимый текст">
                    <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Semi_Bold')] font-[var(--font\/font-weight\/bold,600)] justify-center leading-[0] not-italic opacity-0 relative shrink-0 text-[color:var(--text\/secondary_text-color,#313e78)] text-[length:var(--font\/font-size\/font-size_l,15px)] tracking-[-0.2115px] whitespace-nowrap" data-node-id="I2149:56959;18731:100136;16041:61247;16016:204149">
                      <p className="leading-[normal]">Для менеджеров</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-[var(--акценты,#cc3d00)] h-[3px] opacity-0 relative rounded-[4px] shrink-0 w-full" data-node-id="I2149:56959;18731:100136;16041:61247;16016:204151" data-name="tabsMarker" />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bg-[var(--background\/info_background-color,#f8f7ff)] border border-[rgba(123,98,248,0.2)] border-solid content-stretch flex items-start left-0 opacity-0 overflow-clip rounded-[var(--border-radius\/border-radius_s,8px)] shadow-[0px_0px_var(--blur\/shadow-blur_c,8px)_0px_var(--color\/shadow-color_c,rgba(0,0,0,0.06))] top-[-40px]" data-node-id="I2149:56959;18731:100137" data-name="Плавающий тулбар">
        <div className="content-stretch flex items-center px-[var(--offset\/offset_xs,6px)] py-[var(--offset\/offset_2xs,4px)] relative shrink-0" data-node-id="I2149:56959;18731:100137;854:7149" data-name="Bricks/button">
          <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] h-[24px] items-center relative shrink-0" data-node-id="I2149:56959;18731:100137;854:7149;3360:6388" data-name="container">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56959;18731:100137;854:7149;854:7091" data-name="icons">
              <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I2149:56959;18731:100137;854:7149;854:7091;5565:16627" data-name="Ui базовый набор / Font">
                <p className="[word-break:break-word] font-['cbuc-icons24:Regular'] leading-[normal] not-italic relative shrink-0 text-[24px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:56959;18731:100137;854:7149;854:7091;5565:16627;8306:1722">{`\uE75D`}</p>
              </div>
            </div>
          </div>
        </div>
        <BricksDeleteButton className="content-stretch flex items-start px-[6px] py-[4px] relative shrink-0" />
        <div className="content-stretch flex items-center px-[var(--offset\/offset_xs,6px)] py-[var(--offset\/offset_2xs,4px)] relative shrink-0" data-node-id="I2149:56959;18731:100137;854:7151" data-name="Bricks/button">
          <div className="content-stretch flex gap-[var(--offset\/offset_2xs,4px)] h-[24px] items-center relative shrink-0" data-node-id="I2149:56959;18731:100137;854:7151;3360:6388" data-name="container">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56959;18731:100137;854:7151;854:7091" data-name="icons">
              <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I2149:56959;18731:100137;854:7151;854:7091;5565:16627" data-name="Ui базовый набор / Font">
                <p className="[word-break:break-word] font-['cbuc-icons24:Regular'] leading-[normal] not-italic relative shrink-0 text-[24px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:56959;18731:100137;854:7151;854:7091;5565:16627;8306:1722">{`\uEAB4`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
