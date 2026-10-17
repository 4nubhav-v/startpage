import { useState, useEffect } from "react";
import NumberFlow, { NumberFlowGroup } from "@number-flow/react";

function HeaderSectionCenter() {
  const [hour, setHour] = useState<number>(0);
  const [min, setMin] = useState<number>(0);
  const [sec, setSec] = useState<number>(0);
  const [temperature, setTemperature] = useState<string | null>(null);
  useEffect(() => {
    const id = setInterval(() => {
      const time = new Date();
      const s = time.getSeconds();
      const h = time.getHours();
      const m = time.getMinutes();
      setHour(h % 12 || 12);
      setMin(m);
      setSec(s);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const fetchTemperature = async () => {
      try {
        const response = await fetch(
          "https://api.open-meteo.com/v1/forecast?latitude=26.7617&longitude=89.0767&current_weather=true",
        );
        const data = await response.json();
        setTemperature(data.current_weather.temperature + "°C");
      } catch (error) {
        console.error("Error fetching temperature:", error);
      }
    };
    fetchTemperature();
  }, []);
  return (
    <>
      <div className="font-ibm-plex-sans px-2 text-sm font-semibold">
        <NumberFlowGroup>
          <NumberFlow value={hour} format={{ minimumIntegerDigits: 2 }} />
          <NumberFlow
            value={min}
            format={{ minimumIntegerDigits: 2 }}
            prefix=" : "
          />
          <NumberFlow
            value={sec}
            format={{ minimumIntegerDigits: 2 }}
            prefix=" : "
          />
        </NumberFlowGroup>
      </div>
      <p className="px-2 text-sm font-semibold">{temperature}</p>
    </>
  );
}

export default HeaderSectionCenter;
