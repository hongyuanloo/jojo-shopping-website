import { Box, Slide } from "@mui/material";
import { useEffect, useState } from "react";
import { AutoSliderContainer, MessageText } from "../../styles/autoSlider";

const messages = [
  "10% off on your first order!",
  "Singapore sale starts now, visit any store.",
  "Additonal 20% off on second items!",
];

export default function AutoSlider() {
  const [messageIndex, setMessageIndex] = useState(0);
  const [show, setShow] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 3000);

    const intervalId = setInterval(() => {
      setMessageIndex((i) => (i + 1) % messages.length);
      setShow(true);

      setTimeout(() => {
        setShow(false);
      }, 3000);
    }, 4000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <AutoSliderContainer>
      <Slide
        direction={show ? "left" : "right"}
        in={show}
        timeout={{ enter: 500, exit: 100 }}
      >
        <Box display="flex" justifyContent="center" alignItems="center">
          <MessageText>{messages[messageIndex]}</MessageText>
        </Box>
      </Slide>
    </AutoSliderContainer>
  );
}
