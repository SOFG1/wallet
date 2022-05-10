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
          <Level select={select} level={props.priceList[12]} price={1} time={20} percent={95} />
          <Level
            select={select}
            level={11}
            price={props.priceList[11]}
            time={40}
            percent={93}
          />
          <Level
            select={select}
            level={10}
            price={props.priceList[10]}
            time={60}
            percent={91}
          />
          <Level
            select={select}
            level={9}
            price={props.priceList[9]}
            time={100}
            percent={89}
          />
          <Level
            select={select}
            level={8}
            price={props.priceList[8]}
            time={200}
            percent={87}
          />
          <Level
            select={select}
            level={7}
            price={props.priceList[7]}
            time={300}
            percent={85}
          />
          <Level
            select={select}
            level={6}
            price={props.priceList[6]}
            time={400}
            percent={83}
          />
          <Level
            select={select}
            level={5}
            price={props.priceList[5]}
            time={500}
            percent={81}
          />
          <Level
            select={select}
            level={4}
            price={props.priceList[4]}
            time={600}
            percent={79}
          />
          <Level
            select={select}
            level={3}
            price={props.priceList[3]}
            time={700}
            percent={77}
          />
          <Level
            select={select}
            level={2}
            price={props.priceList[2]}
            time={800}
            percent={75}
          />
          <Level
            select={select}
            level={1}
            price={props.priceList[1]}
            time={900}
            percent={73}
          />
        </div>
      </div>
    </Element>
  );
};

export default Levels;
