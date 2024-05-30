import { Box, Icon, Typography } from "@mui/material";
import { Stat } from "./Stat";
import { Dice } from "./dice";

import D4 from "./icons/otherdices/d4.svg";
import D6 from "./icons/otherdices/d6.svg";
import D8 from "./icons/otherdices/d8.svg";
import D10 from "./icons/otherdices/d10.svg";
import D12 from "./icons/otherdices/d12.svg";
import D20 from "./icons/otherdices/d20.svg";

import STR from "./icons/stats/str.svg";
import DEX from "./icons/stats/dex.svg";
import CON from "./icons/stats/con.svg";
import INT from "./icons/stats/int.svg";
import WIS from "./icons/stats/wis.svg";
import CHA from "./icons/stats/cha.svg";

import Touch from "./icons/distance/touch.svg";
import Range from "./icons/distance/range.svg";
import Hand from "./icons/hand.svg";
import { Effect } from "./Effect";

const diceImages = {
  [Dice.D4]: D4,
  [Dice.D6]: D6,
  [Dice.D8]: D8,
  [Dice.D10]: D10,
  [Dice.D12]: D12,
  [Dice.D20]: D20,
};

const statImages = {
  [Stat.STR]: STR,
  [Stat.DEX]: DEX,
  [Stat.CON]: CON,
  [Stat.INT]: INT,
  [Stat.WIS]: WIS,
  [Stat.CHA]: CHA,
};

interface IProps {
  name: string;
  dmg: Dice;
  stat: Stat;
  bonus: number;
  hands: number;
  touch?: boolean;
  range?: [number, number];
  properties?: string[];
  effects: Effect[];
}

export const Card2 = ({
  name,
  dmg,
  stat,
  bonus,
  touch,
  range,
  hands,
  properties,
  effects,
}: IProps) => (
  <Box
    sx={{
      width: "2.5in",
      height: "3.5in",
      borderRadius: "0.1in",
      border: "1px solid black",
      display: "flex",
    }}
  >
    <Box sx={{ p: 2, width: "100%" }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Box>
          <Typography
            variant="h5"
            sx={{ display: "flex", alignItems: "center" }}
          >
            {name}
            {new Array(hands).fill(
              <Icon>
                <img src={Hand} alt="" />
              </Icon>
            )}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            Hit:
            <Icon>
              <img src={diceImages[Dice.D20]} alt={""} />
            </Icon>
            + prof +
            <Icon>
              <img src={statImages[stat]} alt={""} />
            </Icon>{" "}
            {bonus !== 0 && <>+ {bonus}</>}
          </Typography>

          <Typography sx={{ display: "flex", justifyContent: "center" }}>
            Damage:
            <Icon>
              <img src={diceImages[dmg]} alt={""} />
            </Icon>
            +
            <Icon>
              <img src={statImages[stat]} alt={""} />
            </Icon>{" "}
            {bonus !== 0 && <>+ {bonus}</>}
          </Typography>
          {(touch || range) && (
            <Typography>
              Range:
              {touch && (
                <Icon>
                  <img src={Touch} alt={""} />
                </Icon>
              )}
              {range && (
                <>
                  <Icon>
                    <img src={Range} alt={""} />
                  </Icon>
                  {range[0]} - {range[1]} ft
                </>
              )}
            </Typography>
          )}
        </Box>
        <Box
          sx={{
            width: "100%",
            flexWrap: "wrap",
            flexGrow: 1,
          }}
        >
          <Typography component="span" fontSize={12}>
            {(properties ?? []).join(" ")}
          </Typography>
          <hr />
          {(effects ?? []).map((e) => (
            <Typography component="span" fontSize={12}>
              <Typography component="span" fontSize={12} fontWeight="bold">
                {e.name}
              </Typography>
              : {e.description}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
);
