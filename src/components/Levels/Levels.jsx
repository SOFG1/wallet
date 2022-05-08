import Level from "./Level";
import Pic from "../../img/eth.svg";
import { Element } from "react-scroll/modules";

const Levels = (props) => {
  const select = (price) => {
    props.togglePopup(true);
    props.selectLevel(price);
  };
  return (
    <Element id="levels" name="levels" className="levels">
      <div className="container">
        <div className="title-levels">
          <span>Levels</span>
          <h1>Game Levels</h1>
          <Level select={select} level={12} price={1} time={20} percent={95} />
          <Level
            select={select}
            level={11}
            price={0.8}
            time={40}
            percent={93}
          />
          <Level
            select={select}
            level={10}
            price={0.7}
            time={60}
            percent={91}
          />
          <Level
            select={select}
            level={9}
            price={0.6}
            time={100}
            percent={89}
          />
          <Level
            select={select}
            level={8}
            price={0.5}
            time={200}
            percent={87}
          />
          <Level
            select={select}
            level={7}
            price={0.4}
            time={300}
            percent={85}
          />
          <Level
            select={select}
            level={6}
            price={0.3}
            time={400}
            percent={83}
          />
          <Level
            select={select}
            level={5}
            price={0.2}
            time={500}
            percent={81}
          />
          <Level
            select={select}
            level={4}
            price={0.1}
            time={600}
            percent={79}
          />
          <Level
            select={select}
            level={3}
            price={0.08}
            time={700}
            percent={77}
          />
          <Level
            select={select}
            level={2}
            price={0.06}
            time={800}
            percent={75}
          />
          <Level
            select={select}
            level={1}
            price={0.03}
            time={900}
            percent={73}
          />
        </div>
      </div>
    </Element>
  );
};

export default Levels;
