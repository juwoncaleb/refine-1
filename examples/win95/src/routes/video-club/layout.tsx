import { PropsWithChildren } from "react";
import { useGo } from "@refinedev/core";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import { Button } from "react95";
import { AppLayout } from "../../components/layout";
import { VideoClubTodayDate } from "../../components/today-date";
import { Link } from "react-router-dom";
import { Loading } from "./loading";

export const VideoClubLayout = ({ children }: PropsWithChildren) => {
  const navigate = useNavigate();
  const go = useGo();

  return (
    <>
      <StyledAppLayout
        title="Refine Video Club"
        iconURL="https://refine.ams3.cdn.digitaloceanspaces.com/win95/refine-video-club-app-icon-pixelated.png"
        onClose={() => navigate("/")}
        onMinimize={() => navigate("/")}
        menu={[
          {
            label: "Tapes",
            children: [
              { label: "Rent Tape", onClick: () => alert("Rent Tape") },
              { label: "Return Tape", onClick: () => alert("Return Tape") },
            ],
          },
          {
            label: "Titles",
            children: [
              { label: "Add Title", onClick: () => navigate("titles/new") },
              { label: "Browse Titles", onClick: () => navigate("titles") },
            ],
          },
          {
            label: "Members",
            children: [
              { label: "Add Member", onClick: () => alert("Add Member") },
              {
                label: "Browse Members",
                onClick: () => alert("Browse Member"),
              },
            ],
          },
          {
            label: "Help",
            children: [
              { label: "Documentation", onClick: () => alert("Documentation") },
              {
                label: "About",
                onClick: () =>
                  go({
                    hash: "about",
                    type: "replace",
                    options: { keepHash: false, keepQuery: true },
                    to: "",
                  }),
              },
            ],
          },
        ]}
      >
        <Container>
          <TodayDate />
          <HomeContainer>
            <Logo
              src="https://refine.ams3.cdn.digitaloceanspaces.com/win95/refine-video-club-emboss-logo.png"
              alt="refine video club logo"
            />

            <Links>
              {links.map((link) => (
                <Link to={link.href} key={link.label}>
                  <LinkItem>
                    <LinkItemImg src={link.icon} alt={link.label} />
                    <LinkItemLabel>{link.label}</LinkItemLabel>
                  </LinkItem>
                </Link>
              ))}
            </Links>
          </HomeContainer>

          {children}

          <BgImage
            src="https://refine.ams3.cdn.digitaloceanspaces.com/win95/noisy-gray.jpg"
            alt="background"
          />
        </Container>
      </StyledAppLayout>
      <Loading />
    </>
  );
};

const StyledAppLayout = styled(AppLayout)`
  width: 100%;
  height: 100%;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto 0;
`;

const BgImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
`;

const Logo = styled.img`
  user-select: none;
  margin-right: auto;
  margin-left: auto;
  width: 476px;
  height: 200px;
`;

const TodayDate = styled(VideoClubTodayDate)`
  position: absolute;
  right: 0;
  top: 0;
  margin-left: auto;
  margin-right: 8px;
  margin-top: 8px;
`;

const Links = styled.div`
  width: 100%;
  max-width: 608px;
  margin-top: 32px;
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
`;

const LinkItem = styled(Button)`
  width: 100%;
  padding: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  height: unset;
`;

const LinkItemImg = styled.img`
  width: 80px;
  height: 80px;
`;

const LinkItemLabel = styled.div`
  padding: 1px 0;
`;

const links = [
  {
    icon: "https://refine.ams3.cdn.digitaloceanspaces.com/win95/rent-tape.png",
    label: "Rent Tape",
    href: "tapes/rent",
  },
  {
    icon: "https://refine.ams3.cdn.digitaloceanspaces.com/win95/return-tape.png",
    label: "Return Tape",
    href: "tape/return",
  },
  {
    icon: "https://refine.ams3.cdn.digitaloceanspaces.com/win95/add-title.png",
    label: "Add Title",
    href: "titles/new",
  },
  {
    icon: "https://refine.ams3.cdn.digitaloceanspaces.com/win95/browse-titles.png",
    label: "Browse Titles",
    href: "titles",
  },
  {
    icon: "https://refine.ams3.cdn.digitaloceanspaces.com/win95/add-member.png",
    label: "Add Member",
    href: "member/new",
  },
  {
    icon: "https://refine.ams3.cdn.digitaloceanspaces.com/win95/browse-members.png",
    label: "Browse Members",
    href: "members",
  },
  {
    icon: "https://refine.ams3.cdn.digitaloceanspaces.com/win95/report.png",
    label: "Report",
    href: "report",
  },
  {
    icon: "https://refine.ams3.cdn.digitaloceanspaces.com/win95/settings.png",
    label: "Settings",
    href: "settings",
  },
];
