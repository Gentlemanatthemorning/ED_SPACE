import React, { Component } from "react";

import ShowMoreText from "react-show-more-text";

// ...

class More2 extends Component {
  executeOnClick(isExpanded) {
    console.log(isExpanded);
  }

  render() {
    return (
      <ShowMoreText
        lines={2}
        more="Show more"
        less="Show less"
        anchorClass=""
        onClick={this.executeOnClick}
      >
        <p>
          «Щоб бути розумним треба прочитати одну книгу. Щоб знайти її -
          потрібні тисячі» - так каже одна мудрість. Це саме стосується і книжок
          з англійської. Але вам не треба опрацьовувати 1000 книжок. Ми зробили
          це замість вас. Ми багато уваги приділяємо як комфорту так і потребам
          наших учнів тому відмовляємось від програм по книжкам які треба
          встигнути зробити. Наша програма адаптується і достосовується під
          кожного з учнів.
          <br />
          <br />
          Наші викладачі відібрали найкращі матеріали з вже існючих книг.
          Пропустили неважливе, та закцентували увагу на потрібному. Жодної
          непотрібної вправи. Лише якісний «контент». Більше ніякого
          <span>«London is the capital of Great Britain»</span>! Все це для
          того, щоб зробити навчання для вас легшим та цікавішим!
        </p>
      </ShowMoreText>
    );
  }
}

export default More2;
