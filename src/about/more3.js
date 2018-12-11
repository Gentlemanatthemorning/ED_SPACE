import React, { Component } from "react";

import ShowMoreText from "react-show-more-text";

// ...

class More3 extends Component {
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
          Ми знаємо, що вам, як батькам, дуже важливо розуміти як справи у вашої
          самостійної дитини. Які в неї успіхи у навчанні, з ким спілкується, що
          взагалі робить у школі чи на додаткових курсах? Саме тому, щоб ви мали
          повне розуміння того, чим зайнята ваша дитина у нас - ми будемо
          систематично надавати інформацію щодо успіхів у навчанні, про теми на
          які спілкується, з яким настроєм приходить до нас, з якими труднощами
          зтикається в навчанні, що дається легко та багато іншого.
          <br />
          <br />
          <span>Регулярний зворотній зв’язок</span> - важко переоцінити, аби
          мати розуміння своїх успіхів для ефективного навчання. Ви будете
          розуміти, на що ми робимо акценти при роботі з вашою дитиною. Таким
          чином, ви постійно залучені до процесу освіти дитини, матимете
          розуміння прогресу у навчанні та її емоційного стану.
        </p>
      </ShowMoreText>
    );
  }
}

export default More3;
