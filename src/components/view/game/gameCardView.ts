import { createElemDOM } from '../../../utils/utils';
import '../../../assets/styles/filter-page.css';
import '../../../assets/styles/description.css';
export class GameCardView {
  private static drawCard(data: DataGame): HTMLElement {
    const card = createElemDOM('div', 'card card-small');
    const title = createElemDOM('h2', 'card__title', data.nameGameRu);
    const imgBlock = createElemDOM('div', 'card__img_block');
    const img = createElemDOM('img', 'card__img');
    const img1 = createElemDOM('h1', 'card__img1', `+`);
    imgBlock.append(img, img1);
    const difficult = createElemDOM('p', 'card__difficult', `Сложность: ${data.basicComplexity}`);
    const description = createElemDOM('p', 'card__description', `${data.check1}, ${data.check2}, ${data.check3}`);
    card.dataset.gameId = data.id.toString();

    if (img instanceof HTMLImageElement) {
      img.alt = data.nameGameRu;
      img.src = data.image;
    }
 
    const buttonView1 = createElemDOM(
      'button',
      'button button_trane',
      'Тренироваться'
    );
 
    const buttonView2 = createElemDOM(
      'button',
      'button button_details',
      'Подробнее'
    );
    const buttWrap = createElemDOM('div', 'wrapper_butt');
    buttWrap.append(buttonView1, buttonView2);
    card.append(imgBlock, difficult, title, description, buttWrap);
    return card;
  }

  public static draw(data: DataGame[]): void {
    const fragment = document.createDocumentFragment();
    const container = document.querySelector('.games');
    if (!container) throw new Error("Can't find element with class 'games'");

    if (!data.length) {
      fragment.append(createElemDOM('p', '', 'No games to display'));
    } 
    else {
      data.forEach((game) => {fragment.append(GameCardView.drawCard(game));
      });
    }

    container.textContent = '';
    container.append(fragment);
  }

  public static drawProduct(game: DataGame): void {
    const fragment = document.createDocumentFragment();
    const container = document.querySelector('.product-page');
    if (!container)
      throw new Error("Can't find element with class 'product-page'");
    const card = createElemDOM('div', 'card card_single');
    card.dataset.gameId = game.id.toString();
    const title = createElemDOM('h3', 'card__title uppercase', `Тренажер: ${game.nameGameRu}`);
    const containerTitle = createElemDOM('div', 'container__title');
    const img = createElemDOM('img', 'img');
    if (img instanceof HTMLImageElement) {
      img.alt = game.nameGameRu;
      img.src = game.image;
    }
    const containerCheck =  createElemDOM('div', 'container__check');
    const check1 = createElemDOM(
      'p',
      'card__check1',
      game.check1
    );
    const check2 = createElemDOM(
      'p',
      'card__check2',
      game.check2
    );
    const check3 = createElemDOM(
      'p',
      'card__check3',
      game.check3
    );
    const buttonTrain = createElemDOM(
      'button',
      'button_trane',
      'Тренироваться'
    );
    containerCheck.append(check1, check2, check3, buttonTrain);
    containerTitle.append(img, containerCheck)
    const hr =  createElemDOM('hr', 'card__hr');
    const containerDescription =  createElemDOM('div', 'container__description');

    card.append(
      title,
      containerTitle,
      hr,
      containerDescription)

    const description = createElemDOM(
      'p',
      'card__description',
      game.discriptionp1
    );
    containerDescription.append(description)

    if(game.discriptionp2 !== undefined) {
    const description1 = createElemDOM(
      'p',
      'card__description',
      game.discriptionp2
    );
    containerDescription.append(
      description1)
    }
    if(game.discriptionp3 !== undefined) {
    const description2 = createElemDOM(
      'p',
      'card__description',
      game.discriptionp3
    );
    containerDescription.append(
      description2,
    );
    }
    const titleQuestion = createElemDOM(
      'h3',
      'card__description uppercase',
      `Что тренирует ${game.nameGameRu}:`
    );
    
    containerDescription.append(titleQuestion)
    const questionp1 = createElemDOM(
      'p',
      'card__description',
      game.questionp1
    );
    containerDescription.append(questionp1)

    if(game.questionp2 !== undefined) {
    const questionp2 = createElemDOM(
      'p',
      'card__description',
      game.questionp2,
    );

    containerDescription.append(
      questionp2)
    }
    if(game.questionp3 !== undefined) {
    const questionp3 = createElemDOM(
      'p',
      'card__description',
      game.questionp3
    );
    
    containerDescription.append(
      questionp3,
    );
    }
    if(game.questionp4 !== undefined) {
      const questionp4 = createElemDOM(
        'p',
        'card__description',
        game.questionp4
      );
      containerDescription.append(
        questionp4,
      );
    }
      if(game.questionp5 !== undefined) {
        const questionp5 = createElemDOM(
          'p',
          'card__description',
          game.questionp5
        );
        containerDescription.append(
          questionp5,
        );
      }
        if(game.questionp6 !== undefined) {
          const questionp6 = createElemDOM(
            'p',
            'card__description',
            game.questionp6
          );
          containerDescription.append(
            questionp6,
          );
    }
    const titleRules = createElemDOM(
      'h3',
      'card__description uppercase',
      `Правила ${game.nameGameRu}:`
    );
    
    containerDescription.append(titleRules)
    const rulesp1 = createElemDOM(
      'p',
      'card__description',
      game.rulesp1
    );
    containerDescription.append(rulesp1)

    if(game.rulesp2 !== undefined) {
    const rulesp2 = createElemDOM(
      'p',
      'card__description',
      game.rulesp2
    );
    containerDescription.append(
      rulesp2)
    }
    if(game.rulesp3 !== undefined) {
    const rulesp3 = createElemDOM(
      'p',
      'card__description',
      game.rulesp3
    );
    
    containerDescription.append(
      rulesp3,
    );
    }
    if(game.rulesp4 !== undefined) {
      const rulesp4 = createElemDOM(
        'p',
        'card__description',
        game.rulesp4
      );
    
      containerDescription.append(
        rulesp4,
      );
    }
      if(game.rulesp5 !== undefined) {
        const rulesp5 = createElemDOM(
          'p',
          'card__description',
          game.rulesp5
        );
        containerDescription.append(
          rulesp5,
        );
      }
        
    fragment.append(card);

    container.textContent = '';
    container.append(fragment);
  }
  }
