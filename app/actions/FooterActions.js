import alt from '../alt';

class FooterActions {
  constructor() {
    this.generateActions(
      'getTopCharactersSuccess',
      'getTopCharactersFail'
    );

    //Equivalent syntax without using Alt shorthand
    // getTopCharactersSuccess(payload) {
    //   this.dispatch(payload);
    // }
    // getTopCharactersFail(payload) {
    //   this.dispatch(payload);
    // }
  }

  getTopCharacters() {
    $.ajax({ url: '/api/characters/top' })
      .done((data) => {
        this.actions.getTopCharactersSuccess(data)
      })
      .fail((jqXhr) => {
        this.actions.getTopCharactersFail(jqXhr)
      });
  }
}

export default alt.createActions(FooterActions);
