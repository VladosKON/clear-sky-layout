const imgFrame = "https://www.figma.com/api/mcp/asset/9c9c30ca-563a-4d30-8817-ca8497919362.svg";

type Component2Props = {
  className?: string;
  active?: boolean;
  hover?: boolean;
  propValue?: "Раздел" | "Магазин";
};

function Component2({ className, active = false, hover = false, propValue = "Раздел" }: Component2Props) {
  const isAndFalseAndFalse = propValue === "Магазин" && !hover && !active;
  return (
    <div className={className || "content-stretch flex items-center justify-center px-[var(--offset\\/offset_st,10px)] py-[var(--offset\\/offset_m,12px)] relative rounded-[var(--border-radius\\/border-radius_s,8px)]"} id={isAndFalseAndFalse ? "node-1925_41447" : "node-1925_41445"}>
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" id={isAndFalseAndFalse ? "node-1925_41448" : "node-1925_41446"} data-name="icons">
        <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" id={isAndFalseAndFalse ? "node-I1925_41448-5565_16627" : "node-I1925_41446-5565_16627"} data-name="Ui базовый набор / Font">
          <p className={`[word-break:break-word] font-["cbuc-icons24:Regular"] leading-[normal] not-italic relative shrink-0 text-[24px] whitespace-nowrap ${isAndFalseAndFalse ? String.raw`text-[color:var(--icon\/primary_hover_icon-color,#db4200)]` : String.raw`text-[color:var(--icon\/icon-color,#333)]`}`} id={isAndFalseAndFalse ? "node-I1925_41448-5565_16627-8306_1722" : "node-I1925_41446-5565_16627-8306_1722"}>
            {isAndFalseAndFalse ? "\uEADD" : "\uEAA9"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Component() {
  return (
    <div className="content-stretch flex gap-[var(--offset\/none,0px)] isolate items-start pr-[var(--offset\/none,0px)] py-[var(--offset\/none,0px)] relative size-full" data-node-id="2149:56253" data-name="ПС Дашборд">
      <div className="content-stretch flex flex-col h-full isolate items-center justify-between pb-[var(--offset\/offset_s,8px)] pl-[var(--offset\/offset_xs,6px)] pr-[var(--offset\/offset_2xs,4px)] pt-[var(--offset\/none,0px)] relative shrink-0 z-[1]" data-node-id="I2149:56253;16041:45387" data-name="Вписанный тулбар">
        <div className="content-stretch flex flex-col gap-[var(--offset\/offset_m,12px)] items-center pb-[var(--offset\/offset_st,10px)] relative shrink-0 z-[4]" data-node-id="I2149:56253;16041:45388" data-name="Команды">
          <div className="content-stretch cursor-pointer flex flex-col gap-[var(--offset\/offset_3xs,2px)] items-center relative shrink-0" data-node-id="I2149:56253;16041:45389" data-name="Пункты сайдбара">
            <Component2 className="content-stretch flex items-center justify-center px-[var(--offset\/offset_st,10px)] py-[var(--offset\/offset_m,12px)] relative rounded-[var(--border-radius\/border-radius_s,8px)] shrink-0" propValue="Магазин" />
            <button className="content-stretch flex items-center justify-center px-[var(--offset\/offset_st,10px)] py-[var(--offset\/offset_m,12px)] relative rounded-[var(--border-radius\/border-radius_s,8px)] shrink-0" data-node-id="I2149:56253;16041:45391" data-name="Данные">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56253;16041:45391;16453:137517" data-name="icons">
                <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I2149:56253;16041:45391;16453:137517;5565:16627" data-name="Ui базовый набор / Font">
                  <p className="[word-break:break-word] font-['cbuc-icons24:Regular'] leading-[normal] not-italic relative shrink-0 text-[24px] text-[color:var(--icon\/icon-color,#333)] text-left whitespace-nowrap" data-node-id="I2149:56253;16041:45391;16453:137517;5565:16627;8306:1722">{`\uEBBC`}</p>
                </div>
              </div>
            </button>
            <button className="content-stretch flex items-center justify-center px-[var(--offset\/offset_st,10px)] py-[var(--offset\/offset_m,12px)] relative rounded-[var(--border-radius\/border-radius_s,8px)] shrink-0" data-node-id="I2149:56253;16041:45392" data-name="Структура">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56253;16041:45392;16453:137517" data-name="icons">
                <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I2149:56253;16041:45392;16453:137517;5565:16627" data-name="Ui базовый набор / Font">
                  <p className="[word-break:break-word] font-['cbuc-icons24:Regular'] leading-[normal] not-italic relative shrink-0 text-[24px] text-[color:var(--icon\/icon-color,#333)] text-left whitespace-nowrap" data-node-id="I2149:56253;16041:45392;16453:137517;5565:16627;8306:1722">{`\uEBF9`}</p>
                </div>
              </div>
            </button>
            <button className="content-stretch flex items-center justify-center px-[var(--offset\/offset_st,10px)] py-[var(--offset\/offset_m,12px)] relative rounded-[var(--border-radius\/border-radius_s,8px)] shrink-0" data-node-id="I2149:56253;16041:45394" data-name="Фильтр">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56253;16041:45394;16453:137517" data-name="icons">
                <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I2149:56253;16041:45394;16453:137517;5565:16627" data-name="Ui базовый набор / Font">
                  <p className="[word-break:break-word] font-['cbuc-icons24:Regular'] leading-[normal] not-italic relative shrink-0 text-[#333] text-[24px] text-left whitespace-nowrap" data-node-id="I2149:56253;16041:45394;16453:137517;5565:16627;8306:1722">{`\uE94C`}</p>
                </div>
              </div>
            </button>
            <button className="content-stretch flex items-center justify-center px-[var(--offset\/offset_st,10px)] py-[var(--offset\/offset_m,12px)] relative rounded-[var(--border-radius\/border-radius_s,8px)] shrink-0" data-node-id="I2149:56253;16041:45395" data-name="Поиск">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56253;16041:45395;16453:137517" data-name="icons">
                <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I2149:56253;16041:45395;16453:137517;5565:16627" data-name="Ui базовый набор / Font">
                  <p className="[word-break:break-word] font-['cbuc-icons24:Regular'] leading-[normal] not-italic relative shrink-0 text-[24px] text-[color:var(--icon\/icon-color,#333)] text-left whitespace-nowrap" data-node-id="I2149:56253;16041:45395;16453:137517;5565:16627;8306:1722">{`\uEAA7`}</p>
                </div>
              </div>
            </button>
            <button className="content-stretch flex items-center justify-center px-[var(--offset\/offset_st,10px)] py-[var(--offset\/offset_m,12px)] relative rounded-[var(--border-radius\/border-radius_s,8px)] shrink-0" data-node-id="I2149:56253;16041:45396" data-name="Настройки">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56253;16041:45396;16453:137517" data-name="icons">
                <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[24px]" data-node-id="I2149:56253;16041:45396;16453:137517;5565:16627" data-name="Ui базовый набор / Font">
                  <p className="[word-break:break-word] font-['cbuc-icons24:Regular'] leading-[normal] not-italic relative shrink-0 text-[#333] text-[24px] text-left whitespace-nowrap" data-node-id="I2149:56253;16041:45396;16453:137517;5565:16627;8306:1722">{`\uEAA9`}</p>
                </div>
              </div>
            </button>
          </div>
        </div>
        <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[32px] z-[3]" data-node-id="I2149:56253;16041:47535" data-name="Три точки">
          <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[100px] w-full" data-node-id="I2149:56253;16041:47535;12337:8300" data-name="_button">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:56253;16041:47535;12337:8300;12337:7245" data-name="icons">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 size-[24px]" data-node-id="I2149:56253;16041:47535;12337:8300;12337:7245;5565:16627" data-name="Ui базовый набор / Font">
                <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[20px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I2149:56253;16041:47535;12337:8300;12337:7245;5565:16627;8306:1722">{`\uE9D9`}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="content-stretch flex flex-[1_0_0] items-start justify-center min-h-px py-[var(--offset\/offset_m,12px)] relative w-[32px] z-[2]" data-node-id="I2149:56253;16041:45397" data-name="Кнопка разворота панели" />
        <div className="bg-[var(--background\/same\/info_same_background-color,#eeebff)] border border-[var(--background\/same\/info_active_same_background-color,#d4ccff)] border-solid content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[32px] z-[1]" data-node-id="I2149:56253;16041:45398" data-name="helpButton">
          <div className="h-[16px] relative shrink-0 w-[12px]" data-node-id="I2149:56253;16041:45398;7857:24819" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
        </div>
      </div>
    </div>
  );
}
