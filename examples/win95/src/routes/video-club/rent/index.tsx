import { useMemo, useState } from "react";
import { Button, Separator } from "react95";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IconChevronRight } from "../../../components/icons/chevron-right";
import { IconChevronLeft } from "../../../components/icons/chevron-left";
import { VideoClubLayoutSubPage } from "../subpage-layout";
import { VideoClubPageTapeRentMemberList } from "./select-member";
import { VideoClubPageTapeRentTitleList } from "./select-title";
import { VideoClubPageTapeRentConfirm } from "./create";
import { IExendedMember, IExtendedVideoTitle } from "../../../interfaces";
import { ArrowGreenPixelatedIcon } from "../../../components/icons/arrow-green-pixelated";

type Screen = "members" | "titles" | "confirm";

export const VideoClubPageTapeRentCreateIndex = () => {
  const [selectedTitle, setSelectedTitle] =
    useState<IExtendedVideoTitle | null>(null);

  return null;
};

const Container = styled.div`
  padding: 16px 24px;
  display: flex;
  gap: 24px;
`;

const ScreenImage = styled.img`
  max-width: 200px;
  max-height: 498px;
  aspect-ratio: 200 / 492;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding: 16px;
`;

const ActionButton = styled(Button)`
  width: 110px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
`;

// const screenConfig = useMemo(() => {
//   switch (screen) {
//     case "members":
//       return {
//         title: "Select Member",
//         help: "You can browse all the members in the Refine Video Club.",
//         screenImage:
//           "https://refine.ams3.cdn.digitaloceanspaces.com/win95/members.jpg",
//         component: VideoClubPageTapeRentMemberList,
//         nextButtonProps: {
//           disabled: !selectedMember,
//           text: "Next",
//           type: "button",
//           form: "",
//           style: {
//             flexDirection: "row",
//           },
//           icon: <IconChevronRight />,
//         },
//         backButtonProps: {
//           disabled: true,
//         },
//       } as const;
//     case "titles":
//       return {
//         title: "Select Title",
//         help: "You can browse all the titles in the Refine Video Club.",
//         screenImage:
//           "https://refine.ams3.cdn.digitaloceanspaces.com/win95/tape.jpg",
//         component: VideoClubPageTapeRentTitleList,
//         nextButtonProps: {
//           disabled: !selectedTitle,
//           text: "Next",
//           type: "button",
//           form: "",
//           style: {
//             flexDirection: "row",
//           },
//           icon: <IconChevronRight />,
//         },
//         backButtonProps: {
//           disabled: false,
//         },
//       } as const;
//     case "confirm":
//       return {
//         title: "Rent tape",
//         help: "Please confirm the rental.",
//         screenImage: null,
//         component: VideoClubPageTapeRentConfirm,
//         nextButtonProps: {
//           disabled: false,
//           text: "Confirm",
//           type: "submit",
//           form: "rent-tape-form",
//           style: {
//             flexDirection: "row-reverse",
//           },
//           icon: <ArrowGreenPixelatedIcon />,
//         },
//         backButtonProps: {
//           disabled: false,
//         },
//       } as const;
//   }
// }, [screen, selectedMember, selectedTitle]);
