import { cn } from "@/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import Image from "next/image";

export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] text-white ">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        //   icon={item.icon}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:bg-black"></div>
);
const items = [
  {
    title: "Meeting Note Taker",
    description: "Take your meeting notes get delivered to your email",
    header: <Image src={"https://static.vecteezy.com/system/resources/previews/005/542/833/original/note-pad-book-modern-simple-line-logo-icon-symbol-graphic-design-illustration-vector.jpg"} alt="" height={200} width={200}/>,
    className: "col-span-1 text-white",
    // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Meeting Scheduler",
    description: "Schedule your meeting using the power of Lindy",
    header: <Image src={"https://e7.pngegg.com/pngimages/239/431/png-clipart-time-and-date-logo-illustration-computer-icons-time-management-time-attendance-clocks-schedule-calendar-text-thumbnail.png"} alt="" height={200} width={200}/>,
    className: "col-span-1",
    // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Lead Generator",
    description: "Use power of Lindy AI to generate more leads ",
    header: <Image src={"https://banner2.cleanpng.com/20180702/xa/kisspng-lead-generation-marketing-conversion-funnel-brand-5b3a001485f794.5457227415305277645487.jpg"} alt="" height={400} width={200}/>,
    className: "col-span-1",
    // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Email Drafter",
    description:
      "Use lindyAI to draft your email and be more efficent with your email ",
    header: <Image src={"https://w7.pngwing.com/pngs/799/918/png-transparent-mail-google-gmail-google-s-logo-icon-thumbnail.png"} alt="" height={200} width={200}/>,
    className: "col-span-1",
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Email Drafter",
    description:
      "Use lindyAI to draft your email and be more efficent with your email ",
    header: <Image src={"https://static.vecteezy.com/system/resources/previews/021/350/454/original/customer-icon-for-your-website-design-logo-app-ui-free-vector.jpg"} alt="" height={200} width={200}/>,
    className: "col-span-1",
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Email Drafter",
    description:
      "Use lindyAI to draft your email and be more efficent with your email ",
    header: <Image src={"https://i.fbcd.co/products/resized/resized-750-500/s002e-7-e02-mainpreview-b2135ca3937cddf145ce87d1ceeb1cb2ad5a9d5dbd79c5c1604cf1d19f257fea.jpg"} alt="" height={200} width={200}/>,
    className: "col-span-1",
    // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
];
