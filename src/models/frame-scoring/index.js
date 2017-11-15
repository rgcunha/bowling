export default class FrameScoring {
  constructor({id, rolls = [], total = null, lastFrame = false}) {
    this._id = id;

    if (rolls.length > 0) {
      this._rolls = rolls;
    } else {
      const TOTAL_ROLLS = lastFrame ? 3 : 2;
      this._rolls = Array(TOTAL_ROLLS).fill(null);
    }

    if (total) {
      this._total = total;
    } else {
      if (this.isOpen()) {
        this._total = null;
      } else {
        this._total = this.score();
      }
    }
  }

  get id() {
    return this._id;
  }

  get rolls() {
    return this._rolls;
  }

  get total() {
    return this._total;
  }

  isStrike() {
    return this._rolls[0] === 10;
  }

  isSpare() {
    return this.score() === 10 && !this.isStrike();
  }

  isSpecialScore() {
    return this.isSpare() || this.isStrike();
  }

  isOpen() {
    return this.isSpecialScore() || (this.score() < 10 && this.hasUnfinishedRolls());
  }

  hasUnfinishedRolls() {
    return this._rolls.some((roll) => roll === null)
  }

  isWaitingForFrameScores() {
    return this.isSpecialScore() && this._total === null;
  }

  score() {
    const getSum = (x, y) => x + y;
    return this._rolls.reduce(getSum);
  }
}
