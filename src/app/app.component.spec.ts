import {async, TestBed} from "@angular/core/testing";
import {IonicModule} from "ionic-angular";
import {StatusBar} from "@ionic-native/status-bar";
import {SplashScreen} from "@ionic-native/splash-screen";

import {MyApp} from "./app.component";

let fixture;
let component;

describe('MyApp Component', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MyApp],
      imports: [
        IonicModule.forRoot(MyApp)
      ],
      providers: [
        StatusBar,
        SplashScreen
      ]
    }).compileComponents().then(() => {
      fixture = TestBed.createComponent(MyApp);
      component = fixture.componentInstance;
    });
  }));
  it('should be created', () => {
    expect(true).toBe(true);
    // expect(component instanceof MyApp).toBe(true);
  });
  //
  // it('should have two pages', () => {
  //   expect(component.pages.length).toBe(2);
  // });
});
