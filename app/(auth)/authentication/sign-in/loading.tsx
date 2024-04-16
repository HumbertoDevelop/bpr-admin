import Image from "next/image";
export default function Loading() {
  return (
    <div className="postion-relative">
      <Image alt="" width={80} height={80} src={"/images/svg/loading_1.png"} className="position-absolute top-50 start-50 translate-middle rotate-full"/>
    </div>
  );
}
