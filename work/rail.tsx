const img = "https://www.figma.com/api/mcp/asset/055d562f-47ce-434e-adf3-5a2ac7a04aaa.png";
const imgEllipse272 = "https://www.figma.com/api/mcp/asset/6000b6c1-c26c-4557-8fdc-af165ea436cd.svg";
const imgFrame = "https://www.figma.com/api/mcp/asset/07832192-96d8-4ebc-a21b-a94faface9bf.svg";

export default function Component() {
  return (
    <div className="bg-[var(--настройка-интерфейса\/цвет-под-контентом,rgba(255,255,255,0))] content-stretch flex flex-col items-center pb-[var(--offset\/offset_s,8px)] pt-[10px] relative size-full" data-node-id="2149:57185" data-name="Информеры">
      <div className="content-stretch flex flex-col gap-[6px] items-center relative shrink-0" data-node-id="2149:57186" data-name="Верхние команды">
        <div className="content-stretch flex items-center justify-center p-[3.372px] relative shrink-0 size-[26.975px]" data-node-id="2149:57187" data-name="ФИО">
          <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="2149:57188">
            <p className="[word-break:break-word] col-1 font-['Inter:Semi_Bold'] font-semibold leading-[normal] ml-[2.53px] mt-0 not-italic relative row-1 text-[11.802px] text-[color:var(--text\/label_text-color,#8991a9)] tracking-[-0.1664px] whitespace-nowrap" data-node-id="2149:57189">
              СС
            </p>
            <div className="col-1 ml-0 mt-[10.12px] relative row-1 size-[5.058px]" data-node-id="2149:57190">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgEllipse272} />
            </div>
          </div>
        </div>
        <div className="bg-[var(--background\/contrast\/pale_color,rgba(51,51,51,0.05))] content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[24px]" data-node-id="2149:57194" data-name="filled">
          <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2149:57194;17890:4319" data-name="_buttonContent">
            <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2149:57194;17890:4319;17890:165" data-name="iconWrap">
              <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:57194;17890:4319;17890:166" data-name="icons/font">
                <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:57194;17890:4319;17890:166;17887:22647" data-name="iconWrap">
                  <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/icon-color,#333)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I2149:57194;17890:4319;17890:166;17887:22661">{`\uE95D`}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-[1_0_0] items-end justify-center min-h-px pb-[var(--offset\/offset_l,16px)] relative w-[26.975px]" data-node-id="2149:57195" data-name="Клик">
        <div className="relative shrink-0 size-[100px]" data-node-id="2149:57196" />
      </div>
      <div className="content-stretch flex flex-col gap-[var(--offset\/offset_st,10px)] items-start relative shrink-0" data-node-id="2149:57197" data-name="Информеры">
        <div className="relative rounded-[13.488px] shrink-0 size-[26.975px]" data-node-id="2149:57198" data-name="Звонки">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[13.488px]">
            <img alt="" className="absolute h-[2762.5%] left-[-3187.5%] max-w-none top-[-2231.25%] w-[4684.37%]" src={img} />
          </div>
        </div>
        <div className="relative rounded-[13.488px] shrink-0 size-[26.975px]" data-node-id="2149:57199" data-name="Сообщения">
          <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-[13.488px]">
            <img alt="" className="absolute h-[2762.5%] left-[-3187.5%] max-w-none top-[-2381.25%] w-[4684.37%]" src={img} />
          </div>
        </div>
        <div className="bg-[var(--background\/same\/info_same_background-color,#eeebff)] border-[0.844px] border-[var(--background\/same\/info_active_same_background-color,#d4ccff)] border-solid content-stretch flex items-center justify-center relative rounded-[13.5px] shrink-0 size-[27px]" data-node-id="2149:57200" data-name="helpButton">
          <div className="h-[13.5px] relative shrink-0 w-[10.125px]" data-node-id="I2149:57200;7857:24819" data-name="Frame">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
        </div>
      </div>
    </div>
  );
}
