import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { TextBox } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex2Cb, useIntroCb, usePast_projCb, useDiv6Cb, useDiv7Cb, useDiv8Cb, useDiv9Cb, useDiv13Cb, useDiv14Cb, useFlex7Cb, useDiv15Cb, useDiv16Cb, useDiv17Cb, useTextBox29Cb, useImage4Cb, useTextBox10Cb, useTextBox11Cb, useTextBox12Cb, useImage5Cb, useTextBox15Cb, useImage6Cb, useTextBox18Cb, useTextBox17Cb, useImage8Cb, useTextBox19Cb, useTextBox20Cb, useImage9Cb, useTextBox21Cb, useTextBox22Cb, useImage11Cb, useTextBox23Cb, useTextBox24Cb, useImage13Cb, useTextBox26Cb, useTextBox41Cb, useTextBox28Cb, useImage16Cb, useTextBox38Cb, useImage17Cb, useTextBox39Cb, useImage18Cb, useTextBox40Cb } from "../page-cbs/Home";
import "../page-css/Home.css"

export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Flex2Props = useStore((state)=>state["Home"]["Flex2"]);
const Flex2IoProps = useIoStore((state)=>state["Home"]["Flex2"]);
const Flex2Cb = useFlex2Cb()
const IntroProps = useStore((state)=>state["Home"]["Intro"]);
const IntroIoProps = useIoStore((state)=>state["Home"]["Intro"]);
const IntroCb = useIntroCb()
const Past_projProps = useStore((state)=>state["Home"]["Past_proj"]);
const Past_projIoProps = useIoStore((state)=>state["Home"]["Past_proj"]);
const Past_projCb = usePast_projCb()
const Div6Props = useStore((state)=>state["Home"]["Div6"]);
const Div6IoProps = useIoStore((state)=>state["Home"]["Div6"]);
const Div6Cb = useDiv6Cb()
const Div7Props = useStore((state)=>state["Home"]["Div7"]);
const Div7IoProps = useIoStore((state)=>state["Home"]["Div7"]);
const Div7Cb = useDiv7Cb()
const Div8Props = useStore((state)=>state["Home"]["Div8"]);
const Div8IoProps = useIoStore((state)=>state["Home"]["Div8"]);
const Div8Cb = useDiv8Cb()
const Div9Props = useStore((state)=>state["Home"]["Div9"]);
const Div9IoProps = useIoStore((state)=>state["Home"]["Div9"]);
const Div9Cb = useDiv9Cb()
const Div13Props = useStore((state)=>state["Home"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["Home"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Div14Props = useStore((state)=>state["Home"]["Div14"]);
const Div14IoProps = useIoStore((state)=>state["Home"]["Div14"]);
const Div14Cb = useDiv14Cb()
const Flex7Props = useStore((state)=>state["Home"]["Flex7"]);
const Flex7IoProps = useIoStore((state)=>state["Home"]["Flex7"]);
const Flex7Cb = useFlex7Cb()
const Div15Props = useStore((state)=>state["Home"]["Div15"]);
const Div15IoProps = useIoStore((state)=>state["Home"]["Div15"]);
const Div15Cb = useDiv15Cb()
const Div16Props = useStore((state)=>state["Home"]["Div16"]);
const Div16IoProps = useIoStore((state)=>state["Home"]["Div16"]);
const Div16Cb = useDiv16Cb()
const Div17Props = useStore((state)=>state["Home"]["Div17"]);
const Div17IoProps = useIoStore((state)=>state["Home"]["Div17"]);
const Div17Cb = useDiv17Cb()
const TextBox29Props = useStore((state)=>state["Home"]["TextBox29"]);
const TextBox29IoProps = useIoStore((state)=>state["Home"]["TextBox29"]);
const TextBox29Cb = useTextBox29Cb()
const Image4Props = useStore((state)=>state["Home"]["Image4"]);
const Image4IoProps = useIoStore((state)=>state["Home"]["Image4"]);
const Image4Cb = useImage4Cb()
const TextBox10Props = useStore((state)=>state["Home"]["TextBox10"]);
const TextBox10IoProps = useIoStore((state)=>state["Home"]["TextBox10"]);
const TextBox10Cb = useTextBox10Cb()
const TextBox11Props = useStore((state)=>state["Home"]["TextBox11"]);
const TextBox11IoProps = useIoStore((state)=>state["Home"]["TextBox11"]);
const TextBox11Cb = useTextBox11Cb()
const TextBox12Props = useStore((state)=>state["Home"]["TextBox12"]);
const TextBox12IoProps = useIoStore((state)=>state["Home"]["TextBox12"]);
const TextBox12Cb = useTextBox12Cb()
const Image5Props = useStore((state)=>state["Home"]["Image5"]);
const Image5IoProps = useIoStore((state)=>state["Home"]["Image5"]);
const Image5Cb = useImage5Cb()
const TextBox15Props = useStore((state)=>state["Home"]["TextBox15"]);
const TextBox15IoProps = useIoStore((state)=>state["Home"]["TextBox15"]);
const TextBox15Cb = useTextBox15Cb()
const Image6Props = useStore((state)=>state["Home"]["Image6"]);
const Image6IoProps = useIoStore((state)=>state["Home"]["Image6"]);
const Image6Cb = useImage6Cb()
const TextBox18Props = useStore((state)=>state["Home"]["TextBox18"]);
const TextBox18IoProps = useIoStore((state)=>state["Home"]["TextBox18"]);
const TextBox18Cb = useTextBox18Cb()
const TextBox17Props = useStore((state)=>state["Home"]["TextBox17"]);
const TextBox17IoProps = useIoStore((state)=>state["Home"]["TextBox17"]);
const TextBox17Cb = useTextBox17Cb()
const Image8Props = useStore((state)=>state["Home"]["Image8"]);
const Image8IoProps = useIoStore((state)=>state["Home"]["Image8"]);
const Image8Cb = useImage8Cb()
const TextBox19Props = useStore((state)=>state["Home"]["TextBox19"]);
const TextBox19IoProps = useIoStore((state)=>state["Home"]["TextBox19"]);
const TextBox19Cb = useTextBox19Cb()
const TextBox20Props = useStore((state)=>state["Home"]["TextBox20"]);
const TextBox20IoProps = useIoStore((state)=>state["Home"]["TextBox20"]);
const TextBox20Cb = useTextBox20Cb()
const Image9Props = useStore((state)=>state["Home"]["Image9"]);
const Image9IoProps = useIoStore((state)=>state["Home"]["Image9"]);
const Image9Cb = useImage9Cb()
const TextBox21Props = useStore((state)=>state["Home"]["TextBox21"]);
const TextBox21IoProps = useIoStore((state)=>state["Home"]["TextBox21"]);
const TextBox21Cb = useTextBox21Cb()
const TextBox22Props = useStore((state)=>state["Home"]["TextBox22"]);
const TextBox22IoProps = useIoStore((state)=>state["Home"]["TextBox22"]);
const TextBox22Cb = useTextBox22Cb()
const Image11Props = useStore((state)=>state["Home"]["Image11"]);
const Image11IoProps = useIoStore((state)=>state["Home"]["Image11"]);
const Image11Cb = useImage11Cb()
const TextBox23Props = useStore((state)=>state["Home"]["TextBox23"]);
const TextBox23IoProps = useIoStore((state)=>state["Home"]["TextBox23"]);
const TextBox23Cb = useTextBox23Cb()
const TextBox24Props = useStore((state)=>state["Home"]["TextBox24"]);
const TextBox24IoProps = useIoStore((state)=>state["Home"]["TextBox24"]);
const TextBox24Cb = useTextBox24Cb()
const Image13Props = useStore((state)=>state["Home"]["Image13"]);
const Image13IoProps = useIoStore((state)=>state["Home"]["Image13"]);
const Image13Cb = useImage13Cb()
const TextBox26Props = useStore((state)=>state["Home"]["TextBox26"]);
const TextBox26IoProps = useIoStore((state)=>state["Home"]["TextBox26"]);
const TextBox26Cb = useTextBox26Cb()
const TextBox41Props = useStore((state)=>state["Home"]["TextBox41"]);
const TextBox41IoProps = useIoStore((state)=>state["Home"]["TextBox41"]);
const TextBox41Cb = useTextBox41Cb()
const TextBox28Props = useStore((state)=>state["Home"]["TextBox28"]);
const TextBox28IoProps = useIoStore((state)=>state["Home"]["TextBox28"]);
const TextBox28Cb = useTextBox28Cb()
const Image16Props = useStore((state)=>state["Home"]["Image16"]);
const Image16IoProps = useIoStore((state)=>state["Home"]["Image16"]);
const Image16Cb = useImage16Cb()
const TextBox38Props = useStore((state)=>state["Home"]["TextBox38"]);
const TextBox38IoProps = useIoStore((state)=>state["Home"]["TextBox38"]);
const TextBox38Cb = useTextBox38Cb()
const Image17Props = useStore((state)=>state["Home"]["Image17"]);
const Image17IoProps = useIoStore((state)=>state["Home"]["Image17"]);
const Image17Cb = useImage17Cb()
const TextBox39Props = useStore((state)=>state["Home"]["TextBox39"]);
const TextBox39IoProps = useIoStore((state)=>state["Home"]["TextBox39"]);
const TextBox39Cb = useTextBox39Cb()
const Image18Props = useStore((state)=>state["Home"]["Image18"]);
const Image18IoProps = useIoStore((state)=>state["Home"]["Image18"]);
const Image18Cb = useImage18Cb()
const TextBox40Props = useStore((state)=>state["Home"]["TextBox40"]);
const TextBox40IoProps = useIoStore((state)=>state["Home"]["TextBox40"]);
const TextBox40Cb = useTextBox40Cb()

  return (<>
  <Flex className="p-Home Flex2" {...Flex2Props} {...Flex2Cb} {...Flex2IoProps}>
<Image className="p-Home Image4" {...Image4Props} {...Image4Cb} {...Image4IoProps}/>
</Flex>
<Div className="p-Home Intro" {...IntroProps} {...IntroCb} {...IntroIoProps}>
<Image className="p-Home Image5" {...Image5Props} {...Image5Cb} {...Image5IoProps}/>
<TextBox className="p-Home TextBox10" {...TextBox10Props} {...TextBox10Cb} {...TextBox10IoProps}/>
<TextBox className="p-Home TextBox11" {...TextBox11Props} {...TextBox11Cb} {...TextBox11IoProps}/>
<TextBox className="p-Home TextBox12" {...TextBox12Props} {...TextBox12Cb} {...TextBox12IoProps}/>
</Div>
<Flex className="p-Home Past_proj" {...Past_projProps} {...Past_projCb} {...Past_projIoProps}>
<TextBox className="p-Home TextBox15" {...TextBox15Props} {...TextBox15Cb} {...TextBox15IoProps}/>
</Flex>
<Div className="p-Home Div6" {...Div6Props} {...Div6Cb} {...Div6IoProps}>
<TextBox className="p-Home TextBox17" {...TextBox17Props} {...TextBox17Cb} {...TextBox17IoProps}/>
<TextBox className="p-Home TextBox18" {...TextBox18Props} {...TextBox18Cb} {...TextBox18IoProps}/>
<Image className="p-Home Image6" {...Image6Props} {...Image6Cb} {...Image6IoProps}/>
</Div>
<Div className="p-Home Div7" {...Div7Props} {...Div7Cb} {...Div7IoProps}>
<TextBox className="p-Home TextBox19" {...TextBox19Props} {...TextBox19Cb} {...TextBox19IoProps}/>
<TextBox className="p-Home TextBox20" {...TextBox20Props} {...TextBox20Cb} {...TextBox20IoProps}/>
<Image className="p-Home Image8" {...Image8Props} {...Image8Cb} {...Image8IoProps}/>
</Div>
<Div className="p-Home Div8" {...Div8Props} {...Div8Cb} {...Div8IoProps}>
<TextBox className="p-Home TextBox21" {...TextBox21Props} {...TextBox21Cb} {...TextBox21IoProps}/>
<TextBox className="p-Home TextBox22" {...TextBox22Props} {...TextBox22Cb} {...TextBox22IoProps}/>
<Image className="p-Home Image9" {...Image9Props} {...Image9Cb} {...Image9IoProps}/>
</Div>
<Div className="p-Home Div9" {...Div9Props} {...Div9Cb} {...Div9IoProps}>
<TextBox className="p-Home TextBox23" {...TextBox23Props} {...TextBox23Cb} {...TextBox23IoProps}/>
<TextBox className="p-Home TextBox24" {...TextBox24Props} {...TextBox24Cb} {...TextBox24IoProps}/>
<Image className="p-Home Image11" {...Image11Props} {...Image11Cb} {...Image11IoProps}/>
</Div>
<Div className="p-Home Div13" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<TextBox className="p-Home TextBox41" {...TextBox41Props} {...TextBox41Cb} {...TextBox41IoProps}/>
<TextBox className="p-Home TextBox26" {...TextBox26Props} {...TextBox26Cb} {...TextBox26IoProps}/>
<Image className="p-Home Image13" {...Image13Props} {...Image13Cb} {...Image13IoProps}/>
</Div>
<Div className="p-Home Div14" {...Div14Props} {...Div14Cb} {...Div14IoProps}>
<TextBox className="p-Home TextBox28" {...TextBox28Props} {...TextBox28Cb} {...TextBox28IoProps}/>
</Div>
<TextBox className="p-Home TextBox29" {...TextBox29Props} {...TextBox29Cb} {...TextBox29IoProps}/>
<Flex className="p-Home Flex7" {...Flex7Props} {...Flex7Cb} {...Flex7IoProps}>
<Div className="p-Home Div15" {...Div15Props} {...Div15Cb} {...Div15IoProps}>
<Image className="p-Home Image16" {...Image16Props} {...Image16Cb} {...Image16IoProps}/>
<TextBox className="p-Home TextBox38" {...TextBox38Props} {...TextBox38Cb} {...TextBox38IoProps}/>
</Div>
<Div className="p-Home Div16" {...Div16Props} {...Div16Cb} {...Div16IoProps}>
<Image className="p-Home Image17" {...Image17Props} {...Image17Cb} {...Image17IoProps}/>
<TextBox className="p-Home TextBox39" {...TextBox39Props} {...TextBox39Cb} {...TextBox39IoProps}/>
</Div>
<Div className="p-Home Div17" {...Div17Props} {...Div17Cb} {...Div17IoProps}>
<Image className="p-Home Image18" {...Image18Props} {...Image18Cb} {...Image18IoProps}/>
<TextBox className="p-Home TextBox40" {...TextBox40Props} {...TextBox40Cb} {...TextBox40IoProps}/>
</Div>
</Flex>
  </>);
}
