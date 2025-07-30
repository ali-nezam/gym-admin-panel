import styled from "styled-components";

const SettingsHeaderTitle = styled.div`
  padding: 5rem 20rem 3rem 0;
  color: #000;
  font-size: 2.2rem;
  font-weight: 800;
`;

function SettingsHeader() {
  return (
    <SettingsHeaderTitle>
      <h3>تنظیمات مدیریت باشگاه</h3>
    </SettingsHeaderTitle>
  );
}

export default SettingsHeader;
