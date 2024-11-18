import CountdownTimer from "@/components/CountdownTimer";
import Image from "next/image"; 


export default function Home() {
  return (
    <>
    <div className={"z-[-1] absolute top-0 left-0 w-full h-[100vh]"}>
    <Image src="/pinkBg.jpg" alt="logo" width={100} height={100} className="w-full h-full object-cover"/>

    </div>
    <div className="h-[100vh] flex justify-center items-center ">
    <CountdownTimer/>
    </div >
    </>
  );
}
