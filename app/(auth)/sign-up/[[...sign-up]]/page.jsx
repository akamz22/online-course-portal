import { SignUp } from "@clerk/nextjs";
import MobileBottomMenu from "@/app/(router)/_components/MobileBottomMenu";
import Header from "@/app/(router)/_components/Header";
export default function Page() {
  return <>
    <Header className='md:hidden' />
    <SignUp />
    <MobileBottomMenu />
  </>
}