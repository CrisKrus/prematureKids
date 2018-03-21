export class ConfigMock{

  public get(): any {
    return '';
  }

  public getBoolean(): boolean{
    return true;
  }

}

export class FormMock{
  public register(): any{
    return true;
  }
}

export class NavMock{
  public pop(): any {
    return new Promise(function (resolve: Function): void {
      resolve();
    });
  }

  public push(): any {
    return new Promise(function (resolve: Function): any {
      resolve();
    });
  }

  public getUser(): any {
    return {
      '1': {
        'name': 'Cristian Suarez Vera',
        'age': 22,
        'email': 'cristian.suarez.ulpgc@gamil.com'
      }
    }
  }
}

export class PlatformMock {
  public ready(): any {
    return new Promise((resolve: Function) => {
      resolve();
    });
  }
}
