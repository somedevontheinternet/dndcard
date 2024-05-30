import { Box, Icon, Typography } from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import AddIcon from "@mui/icons-material/Add";
import Hand from "./icons/hand.svg";
import D4 from "./icons/dices/d4.svg";
import D6 from "./icons/dices/d6.svg";
import D8 from "./icons/dices/d8.svg";
import D10 from "./icons/dices/d10.svg";
import D12 from "./icons/dices/d12.svg";
import D20 from "./icons/dices/d20.svg";
import { Dice } from "./dice";

import Touch from "./icons/distance/touch.svg";
import Range from "./icons/distance/range.svg";

const diceImages = {
  [Dice.D4]: D4,
  [Dice.D6]: D6,
  [Dice.D8]: D8,
  [Dice.D10]: D10,
  [Dice.D12]: D12,
  [Dice.D20]: D20,
};

interface IProps {
  title: string;
  dmg: Dice;
  stat: string;
  hands: number;
  touch?: boolean;
  range?: [number, number];
  properties?: string[];
}

export const Card = ({
  title,
  dmg,
  hands,
  stat,
  touch,
  range,
  properties,
}: IProps) => (
  <Box
    sx={{
      width: "2.5in",
      height: "3.5in",
      borderRadius: "0.1in",
      display: "flex",
      alignItems: "center",
      border: "1px solid black",
      padding: 2,
      flexDirection: "column",
    }}
  >
    <Typography variant="h5">{title}</Typography>
    <Box
      sx={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        height: "100%",
      }}
    >
      <Box
        sx={{
          width: "50%",
          p: 1,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>Hit</Typography>
            <FillBox label={stat} />
            <FillBox label="BONUS" />
            <FillBox label="PROF" />
            <ArrowDownwardIcon />
            <FillBox />
            <AddIcon />
            <img width={40} height={40} src={D20} alt="" />
          </Box>

          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography>Damage</Typography>
            <FillBox label={stat} />
            <FillBox label="BONUS" />
            <ArrowDownwardIcon />
            <FillBox />
            <AddIcon />
            <img width={40} height={40} src={diceImages[dmg]} alt="" />
          </Box>
        </Box>
      </Box>

      {/* Right side */}
      <Box
        sx={{
          width: "50%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {(touch || range) && (
          <Box sx={{ display: "flex" }}>
            {touch && <img width={40} height={40} src={Touch} alt="" />}
            {range && (
              <Box sx={{ display: "flex" }}>
                <img width={40} height={40} src={Range} alt="" />
                <Typography>
                  {range[0]} ft
                  <br />
                  {range[1]} ft
                </Typography>
              </Box>
            )}
          </Box>
        )}
        <Box sx={{ border: "1px solid black", flexGrow: 1, p: 1 }}>
          {properties?.map((prop) => (
            <Typography sx={{ fontSize: 12 }}>{prop}</Typography>
          ))}
        </Box>
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          {new Array(hands).fill(
            <Icon>
              <img src={Hand} alt="" />
            </Icon>
          )}
        </Box>
      </Box>
    </Box>
  </Box>
);

interface IFillBox {
  label?: string;
}
const FillBox = ({ label }: IFillBox) => (
  <Box
    sx={{
      my: 0.25,
      border: "1px solid black",
      width: 40,
      height: 40,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
    }}
  >
    {label && <span style={{ opacity: 0.4, fontSize: "10px" }}>{label}</span>}
  </Box>
);
