import {
  Box,
  Checkbox,
  FormControlLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { Card } from "./Card";
import { Stat } from "./Stat";
import { Dice } from "./dice";
import { useState } from "react";
import { Card2 } from "./Card2";

export const App = () => {
  const [title, setTitle] = useState("Dagger");
  const [dmg, setDmg] = useState(Dice.D4);
  const [stat, setStat] = useState(Stat.STR);
  const [hands, setHands] = useState(1);
  const [touch, setTouch] = useState(true);
  const [range, setRange] = useState(true);
  const [rangeMin, setRangeMin] = useState(20);
  const [rangeMax, setRangeMax] = useState(60);
  const [bonus, setBonus] = useState(0);
  return (
    <Box>
      <Box sx={{ my: 4 }}>
        <TextField
          label="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Select value={dmg} onChange={(e) => setDmg(e.target.value as Dice)}>
          <MenuItem value={Dice.D4}>D4</MenuItem>
          <MenuItem value={Dice.D6}>D6</MenuItem>
          <MenuItem value={Dice.D8}>D8</MenuItem>
          <MenuItem value={Dice.D10}>D10</MenuItem>
          <MenuItem value={Dice.D12}>D12</MenuItem>
          <MenuItem value={Dice.D20}>D20</MenuItem>
        </Select>
        <Select value={stat} onChange={(e) => setStat(e.target.value as Stat)}>
          <MenuItem value={Stat.STR}>STR</MenuItem>
          <MenuItem value={Stat.DEX}>DEX</MenuItem>
          <MenuItem value={Stat.CON}>CON</MenuItem>
          <MenuItem value={Stat.INT}>INT</MenuItem>
          <MenuItem value={Stat.WIS}>WIS</MenuItem>
          <MenuItem value={Stat.CHA}>CHA</MenuItem>
        </Select>
        <TextField
          label="hands"
          type="number"
          value={hands}
          onChange={(e) => setHands(parseInt(e.target.value))}
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={touch}
              onChange={(e) => setTouch(e.target.checked)}
            />
          }
          label="touch"
        />

        <FormControlLabel
          control={
            <Checkbox
              checked={range}
              onChange={(e) => setRange(e.target.checked)}
            />
          }
          label="range"
        />
        {range && (
          <>
            <TextField
              label="range min"
              type="number"
              value={rangeMin}
              onChange={(e) => setRangeMin(parseInt(e.target.value))}
            />

            <TextField
              label="range max"
              type="number"
              value={rangeMax}
              onChange={(e) => setRangeMax(parseInt(e.target.value))}
            />
          </>
        )}

        <TextField
          label="bonus"
          type="number"
          value={bonus}
          onChange={(e) => setBonus(parseInt(e.target.value))}
        />
      </Box>
      <Card
        title={title}
        dmg={dmg}
        hands={hands}
        stat={stat}
        touch={touch}
        range={range ? [rangeMin, rangeMax] : undefined}
        properties={["Finesse", "Light", "Range", "Thrown", "Simple"]}
        effects={[
          {
            name: "Blood Frenzy",
            description:
              "After the weapon is used to kill 5 creatures, it grants a +2 to hit. After the weapon is used to kill 10 creatures it grants +1 extra attack. Bonuses last 10 turns. Killing another creature within the time limit resets the timer.",
          },
        ]}
      />
      <span style={{ margin: "20px" }} />
      <Card2
        name={title}
        dmg={dmg}
        stat={stat}
        bonus={bonus}
        touch={touch}
        range={range ? [rangeMin, rangeMax] : undefined}
        hands={hands}
        properties={["Finesse", "Light", "Range", "Thrown", "Simple"]}
        effects={[
          {
            name: "Blood Frenzy",
            description:
              "After the weapon is used to kill 5 creatures, it grants a +2 to hit. After the weapon is used to kill 10 creatures it grants +1 extra attack. Bonuses last 10 turns. Killing another creature within the time limit resets the timer.",
          },
        ]}
      />
    </Box>
  );
};
