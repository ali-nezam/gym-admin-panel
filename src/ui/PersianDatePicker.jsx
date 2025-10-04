import { useController } from "react-hook-form";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/prime.css";
import "react-multi-date-picker/styles/colors/purple.css";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import DateObject from "react-date-object";

const StyledDatepicker = styled.div``;

export default function PersianDatePicker({ name, control, disabled }) {
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const { field } = useController({
    name,
    control,
    defaultValue: new DateObject(),
  });

  return (
    <StyledDatepicker>
      <DatePicker
        disabled={disabled}
        // render={<InputIcon />}
        className="rmdp-prime purple"
        calendar={persian}
        locale={persian_fa}
        value={field.value}
        onChange={field.onChange}
        // calendarPosition="left"
        calendarPosition={isMobile ? "top" : "left"}
      />
    </StyledDatepicker>
  );
}
