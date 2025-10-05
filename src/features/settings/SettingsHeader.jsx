import styled from "styled-components";

function SettingsHeader() {
  return (
    <SettingsHeaderTitle>
      <h3>تنظیمات مدیریت باشگاه</h3>
    </SettingsHeaderTitle>
  );
}

export default SettingsHeader;

const SettingsHeaderTitle = styled.div`
  padding: 5rem 20rem 3rem 0;
  color: #000;
  font-size: 2.2rem;
  font-weight: 800;
  @media (max-width: 768px) {
    padding: 3rem 5rem 3rem 0;
  }
`;
