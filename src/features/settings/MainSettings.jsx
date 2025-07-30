import styled from "styled-components";
import FormSettings from "./FormSettings";
import SettingsHeader from "./SettingsHeader";
function MainSettings() {
  return (
    <StyledMainSettings>
      <SettingsHeader />
      <FormSettings />
    </StyledMainSettings>
  );
}

export default MainSettings;
const StyledMainSettings = styled.div``;
