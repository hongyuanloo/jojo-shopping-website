import {
  AnnouncementContainer,
  AnnouncementText,
} from "../../styles/announcement";

export default function Announcement() {
  return (
    <AnnouncementContainer>
      <AnnouncementText>{`Free Shipping on Orders Over $150`}</AnnouncementText>
    </AnnouncementContainer>
  );
}
