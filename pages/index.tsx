import {
  Bubble,
  EducationAndCertificate,
  Introduce,
  Social,
  Technical,
} from "@/components";

export default function Home() {
  return (
    <>
      <div className="flex flex-col gap-3">
        <Introduce />
        <EducationAndCertificate />
        <Technical />
        <Bubble />
        <Social />
      </div>
    </>
  );
}
