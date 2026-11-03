const imgImg = "https://www.figma.com/api/mcp/asset/342d5609-cded-4808-889e-55a562310d62.png";
const imgImg1 = "https://www.figma.com/api/mcp/asset/0bcf8194-8710-43e3-8f63-2c10f87341bd.png";
const imgImg2 = "https://www.figma.com/api/mcp/asset/eb5131db-d812-4e6f-8aa7-583efebc7ea5.png";
const imgImg3 = "https://www.figma.com/api/mcp/asset/a1292a82-4f14-4d02-913b-cc9ed3889da5.png";
const imgImg4 = "https://www.figma.com/api/mcp/asset/626e986a-5d98-4c85-a757-22451dbe71fa.png";
const imgImg5 = "https://www.figma.com/api/mcp/asset/998fb56b-e423-4532-8c68-fdbfa1c20fd5.png";
const imgImg6 = "https://www.figma.com/api/mcp/asset/55ec6563-91e6-443e-8a28-b2ec61543407.png";
const imgImg7 = "https://www.figma.com/api/mcp/asset/388757b6-84a4-4435-8650-a872b7aebc3b.png";
const imgImg8 = "https://www.figma.com/api/mcp/asset/acdd93fa-8ec9-49f2-8c9a-29c735f6d92a.png";
const imgImg9 = "https://www.figma.com/api/mcp/asset/60ea499c-2922-4d5a-a27c-1cea9aa74b62.png";
const imgImg10 = "https://www.figma.com/api/mcp/asset/5e05ccc8-c1e9-4618-8bc6-e44b7abc47e7.png";
const imgImg11 = "https://www.figma.com/api/mcp/asset/7e4c1319-4a37-4f5e-81a1-a6d2f9adc946.png";
const imgLine1 = "https://www.figma.com/api/mcp/asset/cd3ae22b-aa2c-4a07-af58-3eabeb2fed24.svg";
const imgBreadcrumbsArrow = "https://www.figma.com/api/mcp/asset/cad2ef12-bc63-476e-adff-57f9dec3ec2e.svg";
const imgLine2 = "https://www.figma.com/api/mcp/asset/8e27e36c-c034-454f-824d-1cf5d7d33c19.svg";
const imgVector5 = "https://www.figma.com/api/mcp/asset/502051fe-1106-4cac-ade7-fda2cde207b9.svg";
const imgVector6 = "https://www.figma.com/api/mcp/asset/b218090c-b107-45ba-a032-e22277ccbead.svg";
const imgVector7 = "https://www.figma.com/api/mcp/asset/0fce6d49-3217-422d-a908-700d8ddab4f6.svg";
const imgTypeLinkButtonHoverFalseClickFalseIconSizeIconSizeCloseButton = "https://www.figma.com/api/mcp/asset/045c9761-32d3-482d-9e7c-7ef33ac5791d.svg";
const imgCursorArrow = "https://www.figma.com/api/mcp/asset/52e8d7c3-dcec-41fb-9558-0b8b9820db9b.svg";
const imgShape = "https://www.figma.com/api/mcp/asset/5cf4ec43-e7f3-4b2b-9fa5-9491722d1265.svg";
const img = "https://www.figma.com/api/mcp/asset/19626858-5c32-47f7-8807-dc89c4d4a597.svg";

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
  acrive?: "off";
  hover?: boolean;
  menu?: "off";
  text?: string;
};

function Component1({ className, acrive = "off", hover = false, menu = "off", text = "Текст" }: Component1Props) {
  return (
    <div className={className || "content-stretch flex gap-[6px] items-center relative w-[150px]"} data-node-id="723:18453">
      <div className="content-stretch flex flex-[1_0_0] flex-col h-[24px] items-start justify-center min-w-px relative" data-node-id="723:18454" data-name="Однострочные поля">
        <div className="content-stretch flex flex-[1_0_0] items-end min-h-px pb-[3px] relative w-full" data-node-id="723:18455">
          <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--text\/text-color,black)] tracking-[-0.1974px]" data-node-id="723:18456">
            <p className="leading-[normal]">{text}</p>
          </div>
        </div>
        <div className="h-0 relative shrink-0 w-full" data-node-id="723:18457">
          <div className="absolute inset-[-1px_0_0_0]">
            <img alt="" className="block max-w-none size-full" src={imgLine1} />
          </div>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['cbuc-icons:Regular'] leading-[normal] not-italic right-[16px] text-[16px] text-[color:var(--icon\/unaccented_icon-color,#ccc)] top-[calc(50%-8.5px)] translate-x-full whitespace-nowrap" data-node-id="723:18458">{`\uE9AA`}</p>
    </div>
  );
}

type BricksBreadcrumbsProps = {
  className?: string;
  arrowVisible?: boolean;
  breadcrumbsTitle?: string;
  hover?: boolean;
  size?: "m";
};

function BricksBreadcrumbs({ className, arrowVisible = true, breadcrumbsTitle = "Вторая папка", hover = false, size = "m" }: BricksBreadcrumbsProps) {
  return (
    <div className={className || "content-stretch flex items-baseline relative"} data-node-id="727:23411">
      {arrowVisible && (
        <div className="relative shrink-0 size-[14px]" data-node-id="727:23412" data-name="breadcrumbs__arrow">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgBreadcrumbsArrow} />
        </div>
      )}
      <div className="content-stretch flex items-center relative shrink-0" data-node-id="727:23414" data-name="breadcrumbs__titleWrapper">
        <p className="[word-break:break-word] font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] leading-[normal] not-italic relative shrink-0 text-[color:var(--text\/label_text-color,#8991a9)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] whitespace-nowrap" data-node-id="727:23415">
          {breadcrumbsTitle}
        </p>
      </div>
    </div>
  );
}

type BricksButtonHomeProps = {
  className?: string;
  click?: "false";
  hover?: boolean;
};

function BricksButtonHome({ className, click = "false", hover = false }: BricksButtonHomeProps) {
  return (
    <div className={className || "content-stretch flex items-center justify-center relative"} data-node-id="727:23405">
      <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="727:23406" data-name="icons">
        <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I727:23406;5565:16629" data-name="Ui базовый набор / Font">
          <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/label_icon-color,#8991a9)] whitespace-nowrap" data-node-id="I727:23406;5565:16629;8306:1722">{`\uE920`}</p>
        </div>
      </div>
    </div>
  );
}

type Component100Props = {
  className?: string;
  property1?: "gray" | "gradient 1";
};

function Component100({ className, property1 = "gray" }: Component100Props) {
  const isGradient1 = property1 === "gradient 1";
  const isGray = property1 === "gray";
  return (
    <div className={className || `content-stretch flex items-center relative ${isGradient1 ? "gap-[4px]" : "gap-[8px]"}`} id={isGradient1 ? "node-1932_19910" : "node-1932_19898"}>
      {isGray && (
        <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-[46px]" data-node-id="1932:19899" data-name="HEX">
          <div className="content-stretch flex flex-[1_0_0] flex-col h-[24px] items-start justify-center min-w-px relative" data-node-id="I1932:19899;11709:27544" data-name="Однострочные поля">
            <div className="content-stretch flex flex-[1_0_0] items-end min-h-px pb-[3px] relative w-full" data-node-id="I1932:19899;11709:27545">
              <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--text\/text-color,black)] tracking-[-0.1974px]" data-node-id="I1932:19899;11709:27546">
                <p className="leading-[normal]">HEX</p>
              </div>
            </div>
            <div className="h-0 relative shrink-0 w-full" data-node-id="I1932:19899;11709:27547">
              <div className="absolute inset-[-1px_0_0_0]">
                <img alt="" className="block max-w-none size-full" src={imgLine2} />
              </div>
            </div>
          </div>
          <p className="[word-break:break-word] absolute font-['cbuc-icons:Regular'] leading-[normal] not-italic right-[16px] text-[16px] text-[color:var(--icon\/unaccented_icon-color,#ccc)] top-[calc(50%-8.5px)] translate-x-full whitespace-nowrap" data-node-id="I1932:19899;11709:27548">{`\uE9AA`}</p>
        </div>
      )}
      <div className={`content-stretch flex items-center relative shrink-0 ${isGradient1 ? "gap-[2px]" : "gap-[4px]"}`} id={isGradient1 ? "node-1932_19911" : "node-1932_19900"}>
        {isGray && (
          <>
            <div className="content-stretch flex flex-col h-[24px] items-start justify-end pb-px relative shrink-0 w-[66px]" data-node-id="1932:19901" data-name="Код цвета">
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] w-[min-content]" data-node-id="1932:19902">
                <p className="leading-[1.4]">#F8F8F8</p>
              </div>
              <div className="absolute h-0 left-0 top-[23.5px] w-[66px]" data-node-id="1932:19903">
                <div className="absolute inset-[-0.5px_0]">
                  <img alt="" className="block max-w-none size-full" src={imgVector5} />
                </div>
              </div>
            </div>
            <div className="content-stretch flex h-[24px] items-start relative shrink-0" data-node-id="1932:19904" data-name="Прозрачность">
              <div className="content-stretch flex flex-col h-full items-start justify-end pb-px relative shrink-0" data-node-id="1932:19905">
                <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px] whitespace-nowrap" data-node-id="1932:19906">
                  <p className="leading-[1.4]">100</p>
                </div>
                <div className="absolute h-0 left-0 top-[23.5px] w-[24px]" data-node-id="1932:19907">
                  <div className="absolute inset-[-0.5px_0]">
                    <img alt="" className="block max-w-none size-full" src={imgVector6} />
                  </div>
                </div>
              </div>
              <div className="content-stretch flex flex-col h-full items-start justify-end pb-px relative shrink-0 w-[11px]" data-node-id="1932:19908">
                <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] w-full" data-node-id="1932:19909">
                  <p className="leading-[1.4]">%</p>
                </div>
              </div>
            </div>
          </>
        )}
        {isGradient1 && (
          <>
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="1932:19912">
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--icon\/secondary_icon-color,#656c87)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] whitespace-nowrap" data-node-id="1932:19913">
                <p className="leading-[normal]">#</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1932:19914">
              <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-node-id="1932:19915">
                <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/text-color,black)] tracking-[-0.1974px] whitespace-nowrap" data-node-id="1932:19916">
                  <p className="leading-[normal]">F2F9FF</p>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-center justify-center px-[2px] relative shrink-0" data-node-id="1932:19922">
              <div className="[word-break:break-word] flex flex-col font-[family-name:var(--icon\/font-family\/2xs_icon_font-family,'cbuc-icons:Regular')] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--icon\/secondary_icon-color,#656c87)] text-[length:var(--icon\/icon_size\/icon-size_2xs,12px)] w-full" data-node-id="1932:19923">
                <p className="leading-[normal]">{`\uEBE6`}</p>
              </div>
            </div>
            <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="1932:19924">
              <div className="content-stretch flex h-[24px] items-center relative shrink-0" data-node-id="1932:19925">
                <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] whitespace-nowrap" data-node-id="1932:19926">
                  <p className="leading-[normal]">F8F8F8</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      {isGradient1 && (
        <div className="content-stretch flex h-[24px] items-start relative shrink-0" data-node-id="1932:19932" data-name="Прозрачность">
          <div className="content-stretch flex flex-col h-full items-start justify-end pb-[3px] relative shrink-0" data-node-id="1932:19933">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/text-color,black)] text-right tracking-[-0.1974px] whitespace-nowrap" data-node-id="1932:19934">
              <p className="leading-[normal]">100</p>
            </div>
            <div className="absolute h-0 left-0 top-[23.5px] w-[24px]" data-node-id="1932:19935">
              <div className="absolute inset-[-0.5px_0]">
                <img alt="" className="block max-w-none size-full" src={imgVector7} />
              </div>
            </div>
          </div>
          <div className="content-stretch flex flex-col h-full items-start justify-end pb-[3px] relative shrink-0 w-[11px]" data-node-id="1932:19936">
            <div className="[word-break:break-word] flex flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[14px] text-[color:var(--text\/text-color,black)] tracking-[-0.1974px] w-full" data-node-id="1932:19937">
              <p className="leading-[normal]">%</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

type Component99Props = {
  className?: string;
  property1?: "gray" | "gradient 1";
};

function Component99({ className, property1 = "gray" }: Component99Props) {
  const isGradient1 = property1 === "gradient 1";
  return <div className={className || `${String.raw`border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid h-[32px] relative rounded-[18px] w-[70px] `}${isGradient1 ? "bg-gradient-to-b from-[#f2f9ff] to-[#f8f8f8] to-[59.375%]" : "bg-[#f8f8f8]"}`} id={isGradient1 ? "node-1932_19893" : "node-1932_19892"} />;
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

type Component2Props = {
  className?: string;
  property1?: "D Другой шрифт";
};

function Component2({ className, property1 = "D Другой шрифт" }: Component2Props) {
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

type LocalProps = {
  className?: string;
  property1?: "Default";
};

function Local({ className, property1 = "Default" }: LocalProps) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-node-id="816:15030">
      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--border-radius\/border-radius_2xs,4px)] shrink-0 size-[24px]" data-node-id="816:15031" data-name="Button">
        <div className="content-stretch flex flex-[1_0_0] items-center justify-center mb-[-24px] min-h-px p-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I816:15031;13629:11092" data-name="borderBack">
          <div className="bg-[var(--components\/button\/default_contrast_background-color_button,white)] flex-[1_0_0] h-full min-w-px opacity-75 relative rounded-[3px]" data-node-id="I816:15031;13629:11093" data-name="background" />
        </div>
        <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid flex-[1_0_0] mb-[-24px] min-h-px opacity-75 relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I816:15031;13629:11094" data-name="border" />
        <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I816:15031;13629:11095" data-name="icon">
          <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-node-id="I816:15031;13629:11096" data-name="_button">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I816:15031;13629:11096;12337:7243" data-name="icons">
              <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I816:15031;13629:11096;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I816:15031;13629:11096;12337:7243;5565:16629;8306:1722">{`\uE95F`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

type Local1Props = {
  className?: string;
  property1?: "Default";
};

function Local1({ className, property1 = "Default" }: Local1Props) {
  return (
    <div className={className || "content-stretch flex flex-col items-start relative"} data-node-id="816:15025">
      <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--border-radius\/border-radius_2xs,4px)] shrink-0 size-[24px]" data-node-id="816:15026" data-name="Button">
        <div className="content-stretch flex flex-[1_0_0] items-center justify-center mb-[-24px] min-h-px p-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I816:15026;13629:11092" data-name="borderBack">
          <div className="bg-[var(--components\/button\/default_contrast_background-color_button,white)] flex-[1_0_0] h-full min-w-px opacity-75 relative rounded-[3px]" data-node-id="I816:15026;13629:11093" data-name="background" />
        </div>
        <div className="border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid flex-[1_0_0] mb-[-24px] min-h-px opacity-75 relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I816:15026;13629:11094" data-name="border" />
        <div className="content-stretch flex flex-[1_0_0] items-center justify-center min-h-px relative rounded-[var(--border-radius\/border-radius_2xs,4px)] w-full" data-node-id="I816:15026;13629:11095" data-name="icon">
          <div className="content-stretch flex items-center justify-center relative rounded-[100px] shrink-0" data-node-id="I816:15026;13629:11096" data-name="_button">
            <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I816:15026;13629:11096;12337:7243" data-name="icons">
              <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I816:15026;13629:11096;12337:7243;5565:16629" data-name="Ui базовый набор / Font">
                <p className="[word-break:break-word] font-['cbuc-icons:Regular'] leading-[normal] not-italic relative shrink-0 text-[16px] text-[color:var(--icon\/icon-color,#333)] whitespace-nowrap" data-node-id="I816:15026;13629:11096;12337:7243;5565:16629;8306:1722">{`\uE660`}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CursorArrow({ className }: { className?: string }) {
  return (
    <div className={className || "relative size-[24px]"} data-node-id="783:16942" data-name="Cursor/Arrow">
      <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgCursorArrow} />
    </div>
  );
}

type WindowProps = {
  className?: string;
  state?: "default";
};

function Window({ className, state = "default" }: WindowProps) {
  return (
    <div className={className || "bg-[var(--background\\/contrast_background-color,#f3f5f7)] content-stretch drop-shadow-[0px_0px_9px_rgba(0,0,0,0.12)] flex flex-col isolate items-start relative rounded-[8px] w-[362px]"} data-node-id="2149:58803">
      <div className="content-stretch flex items-center pb-[15px] pl-[16px] pr-[6px] pt-[12px] relative shrink-0 w-full z-[2]" data-node-id="2149:58804" data-name="1 строка">
        <div className="content-stretch flex flex-[1_0_0] items-center min-w-px relative" data-node-id="2149:58805" data-name="Заголовок в окне Основной с переменной">
          <div className="content-stretch flex h-[28px] items-center relative shrink-0" data-node-id="2149:58806" data-name="Текст">
            <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_2xl,17px)] tracking-[-0.2397px] whitespace-nowrap" data-node-id="2149:58807">
              <p className="leading-[normal]">Фон</p>
            </div>
          </div>
          <div className="flex flex-[1_0_0] flex-row items-center self-stretch" data-node-id="2149:58808">
            <div className="flex-[1_0_0] h-full min-w-px relative" />
          </div>
          <div className="content-stretch flex gap-[10px] items-center justify-end pt-px relative shrink-0" data-node-id="2149:58809">
            <div className="content-stretch flex gap-[6px] items-center pr-[2px] relative shrink-0" data-node-id="2149:58810" data-name="buttonsWrap">
              <div className="content-stretch flex flex-col items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 size-[28px]" data-node-id="2149:58811" data-name="ghost">
                <img alt="" width="28" height="28" src="https://www.figma.com/api/mcp/asset/background-attachment.png" />
              </div>
              <div className="content-stretch flex items-center justify-center relative rounded-[16px] shrink-0 size-[28px]" data-node-id="2149:58812" data-name="Дополнительнве кнопки">
                <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0" data-node-id="I2149:58812;6560:17087" data-name="eyedropper-alt">
                  <div className="col-1 h-[16px] ml-0 mt-0 relative row-1 w-[15.997px]" data-node-id="I2149:58812;6560:17088" data-name="Shape">
                    <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgShape} />
                  </div>
                </div>
              </div>
            </div>
            <div className="content-stretch flex flex-col items-start relative shrink-0 w-[28px]" data-node-id="2149:58813" data-name="done/doneButton">
              <div className="bg-[var(--background\/contrast\/success_color,#12a12c)] content-stretch drop-shadow-[0px_0px_calc(var(--blur\/shadow-blur_d,6px)/2)_var(--color\/shadow-color_d,rgba(0,0,0,0.1))] flex flex-col h-[28px] items-center justify-center relative rounded-[var(--components\/button\/border-radius_button,100px)] shrink-0 w-full" data-node-id="I2149:58813;37368:12221" data-name="filled">
                <div className="content-stretch flex flex-[1_0_0] items-center min-h-px relative" data-node-id="I2149:58813;37368:12221;17890:2850" data-name="_buttonContent">
                  <div className="content-stretch flex items-center relative shrink-0" data-node-id="I2149:58813;37368:12221;17890:2850;17890:165" data-name="iconWrap">
                    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0" data-node-id="I2149:58813;37368:12221;17890:2850;17890:166" data-name="icons/font">
                      <div className="content-stretch flex flex-col items-center justify-center pb-px relative shrink-0 size-[16px]" data-node-id="I2149:58813;37368:12221;17890:2850;17890:166;17887:22647" data-name="iconWrap">
                        <p className="[word-break:break-word] font-[family-name:var(--icon\/font-family\/s_icon_font-family,'cbuc-icons:Regular')] leading-[normal] not-italic relative shrink-0 text-[color:var(--icon\/contrast_icon-color,white)] text-[length:var(--icon\/icon_size\/icon-size_s,16px)] whitespace-nowrap" data-node-id="I2149:58813;37368:12221;17890:2850;17890:166;17887:22661">{`\uE75E`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <button className="content-stretch cursor-pointer flex flex-col items-center justify-center relative shrink-0 size-[28px]" data-node-id="2149:58814" data-name="close/closeButton">
              <CloseButton className="flex-[1_0_0] min-h-px relative w-full" />
            </button>
          </div>
        </div>
      </div>
      <div className="content-stretch flex flex-col isolate items-start relative shrink-0 w-[362px] z-[1]" data-node-id="2149:58815" data-name="Настройки цвета">
        <div className="content-stretch flex flex-col gap-[4px] isolate items-start pb-[4px] px-[4px] relative shrink-0 w-full z-[2]" data-node-id="2149:58816" data-name="Выбор своего цвета">
          <div className="bg-white content-stretch flex flex-col items-start px-[12px] py-[8px] relative rounded-[8px] shrink-0 w-full z-[3]" data-node-id="2149:58817">
            <div className="content-stretch flex isolate items-center justify-between relative shrink-0 w-full" data-node-id="2149:58818" data-name="Код цвета и кнопки">
              <div className="bg-[#f8f8f8] border border-[var(--border\/unaccented_border-color,#d2d6da)] border-solid h-[32px] relative rounded-[18px] shrink-0 w-[70px] z-[2]" data-node-id="2149:58819" data-name="Component 99" />
              <div className="content-stretch flex gap-[8px] items-center relative shrink-0 z-[1]" data-node-id="2149:58820" data-name="Component 100">
                <div className="content-stretch flex gap-[6px] h-[24px] items-center relative shrink-0 w-[46px]" data-node-id="I2149:58820;297:30596" data-name="HEX">
                  <div className="content-stretch flex flex-[1_0_0] flex-col h-[24px] items-start justify-center min-w-px relative" data-node-id="I2149:58820;297:30596;11709:27544" data-name="Однострочные поля">
                    <div className="content-stretch flex flex-[1_0_0] items-end min-h-px pb-[3px] relative w-full" data-node-id="I2149:58820;297:30596;11709:27545">
                      <div className="[word-break:break-word] flex flex-[1_0_0] flex-col font-['Inter:Regular'] font-normal justify-center leading-[0] min-w-px not-italic relative text-[14px] text-[color:var(--text\/text-color,black)] tracking-[-0.1974px]" data-node-id="I2149:58820;297:30596;11709:27546">
                        <p className="leading-[normal]">HEX</p>
                      </div>
                    </div>
                    <div className="h-0 relative shrink-0 w-full" data-node-id="I2149:58820;297:30596;11709:27547">
                      <div className="absolute inset-[-1px_0_0_0]">
                        <img alt="" className="block max-w-none size-full" src={imgLine2} />
                      </div>
                    </div>
                  </div>
                  <p className="[word-break:break-word] absolute font-['cbuc-icons:Regular'] leading-[normal] not-italic right-[16px] text-[16px] text-[color:var(--icon\/unaccented_icon-color,#ccc)] top-[calc(50%-8.5px)] translate-x-full whitespace-nowrap" data-node-id="I2149:58820;297:30596;11709:27548">{`\uE9AA`}</p>
                </div>
                <div className="content-stretch flex gap-[4px] items-center relative shrink-0" data-node-id="I2149:58820;297:30597">
                  <div className="content-stretch flex flex-col h-[24px] items-start justify-end pb-px relative shrink-0 w-[66px]" data-node-id="I2149:58820;297:30598" data-name="Код цвета">
                    <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] min-w-full not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] w-[min-content]" data-node-id="I2149:58820;297:30599">
                      <p className="leading-[1.4]">#F8F8F8</p>
                    </div>
                    <div className="absolute h-0 left-0 top-[23.5px] w-[66px]" data-node-id="I2149:58820;297:30600">
                      <div className="absolute inset-[-0.5px_0]">
                        <img alt="" className="block max-w-none size-full" src={imgVector5} />
                      </div>
                    </div>
                  </div>
                  <div className="content-stretch flex h-[24px] items-start relative shrink-0" data-node-id="I2149:58820;297:30601" data-name="Прозрачность">
                    <div className="content-stretch flex flex-col h-full items-start justify-end pb-px relative shrink-0" data-node-id="I2149:58820;297:30602">
                      <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] text-right tracking-[-0.1974px] whitespace-nowrap" data-node-id="I2149:58820;297:30603">
                        <p className="leading-[1.4]">100</p>
                      </div>
                      <div className="absolute h-0 left-0 top-[23.5px] w-[24px]" data-node-id="I2149:58820;297:30604">
                        <div className="absolute inset-[-0.5px_0]">
                          <img alt="" className="block max-w-none size-full" src={imgVector6} />
                        </div>
                      </div>
                    </div>
                    <div className="content-stretch flex flex-col h-full items-start justify-end pb-px relative shrink-0 w-[11px]" data-node-id="I2149:58820;297:30605">
                      <div className="[word-break:break-word] flex flex-col font-[family-name:var(--font\/font-family\/default,'Inter:Regular')] font-[var(--font\/font-weight\/regular,400)] justify-center leading-[0] not-italic relative shrink-0 text-[color:var(--text\/text-color,black)] text-[length:var(--font\/font-size\/font-size_m,14px)] tracking-[-0.1974px] w-full" data-node-id="I2149:58820;297:30606">
                        <p className="leading-[1.4]">%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white content-stretch flex flex-col items-start justify-center relative rounded-[8px] shrink-0 w-full z-[2]" data-node-id="2149:58821" data-name="Цвета">
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
                <CursorArrow className="absolute left-px size-[24px] top-[5px]" />
              </div>
              <div className="absolute left-[194px] size-[16px] top-[22px]" data-node-id="I2149:58822;297:31576" data-name="clickCursor">
                <div className="absolute bg-[#6cc] inset-0 opacity-50 rounded-[32px]" data-node-id="I2149:58822;297:31576;3784:15252" data-name="dot" />
                <CursorArrow className="absolute left-px size-[24px] top-[5px]" />
              </div>
              <div className="absolute left-[330px] size-[16px] top-[22px]" data-node-id="I2149:58822;297:31588" data-name="clickCursor">
                <div className="absolute bg-[#6cc] inset-0 opacity-50 rounded-[32px]" data-node-id="I2149:58822;297:31588;3784:15252" data-name="dot" />
                <CursorArrow className="absolute left-px size-[24px] top-[5px]" />
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
          </div>
          <div className="bg-[var(--background\/background-color,white)] content-stretch flex flex-col h-[376px] items-start overflow-clip p-[12px] relative rounded-[8px] shrink-0 w-full z-[1]" data-node-id="2149:58830">
            <div className="gap-x-[8px] gap-y-[8px] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[_______91px_91px_91px_91px_91px_91px_91px] relative shrink-0 w-[334px]" data-node-id="2149:58831" data-name="ImagesCatalog">
              <button className="bg-white border border-[var(--border\/border-color,#eaeaea)] border-solid content-stretch cursor-pointer flex flex-col items-start justify-self-stretch overflow-clip relative rounded-[8px] self-stretch shrink-0" data-node-id="I2149:58831;430:10074" data-name="Фото в коллекции [06.07.26]">
                <div className="flex-[1_0_0] min-h-px relative w-full" data-node-id="I2149:58831;430:10074;430:10037" data-name="img">
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-background-image="true" src={imgImg} />
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
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-background-image="true" src={imgImg1} />
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
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-background-image="true" src={imgImg2} />
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
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-background-image="true" src={imgImg3} />
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
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-background-image="true" src={imgImg4} />
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
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-background-image="true" src={imgImg5} />
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
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-background-image="true" src={imgImg6} />
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
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-background-image="true" src={imgImg7} />
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
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-background-image="true" src={imgImg8} />
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
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-background-image="true" src={imgImg9} />
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
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-background-image="true" src={imgImg10} />
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
                  <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" data-background-image="true" src={imgImg11} />
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
                <CursorArrow className="absolute left-px size-[24px] top-[5px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Component3() {
  return (
    <div className="content-stretch flex items-center relative size-full" data-node-id="2149:59525" data-name="окно настройки фона">
      <Window className="bg-[var(--background\/contrast_background-color,#f3f5f7)] content-stretch drop-shadow-[0px_0px_9px_rgba(0,0,0,0.12)] flex flex-col isolate items-start relative rounded-[8px] shrink-0 w-[362px]" />
    </div>
  );
}
