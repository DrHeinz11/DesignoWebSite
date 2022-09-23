import { Subject } from "rxjs";

export class MenuManager {
  subject = new Subject();

  getSignal() {
    return this.subject.asObservable();
  }
  setSignal(value) {
    this.subject.next(value);
  }
}
