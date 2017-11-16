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

  isLast() {
    return this._rolls.length === 3;
  }

  isStrike() {
    return this._rolls[0] === 10;
  }

  isDoubleStrike() {
    return this.isStrike() && this._rolls[1] === 10;
  }

  isSpare() {
    return (this._rolls[0] + this._rolls[1]) === 10 && !this.isStrike();
  }

  isSpecialScore() {
    return this.isSpare() || this.isStrike() || this.isDoubleStrike();
  }

  isOpen() {
    if (this.isLast()) {
      return this.isLastFrameOpen();
    }
    return this.isSpecialScore() || (this.score() < 10 && this.hasUnfinishedRolls());
  }

  isLastFrameOpen() {
    if (!this.hasUnfinishedRolls()) { return false; }
    if (this._rolls[1] && this.score() < 10) { return false; }
    return true;
  }

  hasUnfinishedRolls() {
    return this._rolls.some((roll) => roll === null)
  }

  isWaitingForFrameScores() {
    if (this.isLast()) { return false; }
    return this.isSpecialScore() && this._total === null;
  }

  score() {
    const getSum = (x, y) => x + y;
    return this._rolls.reduce(getSum);
  }
}
