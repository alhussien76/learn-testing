import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ContactComponent],
      imports: [
        FormsModule,
        ReactiveFormsModule
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have text `contact page`', async(() => {
    expect(fixture.componentInstance.text).toEqual('contact page');
  }));

  it('should set submitted to true', async(() => {
    fixture.componentInstance.onSubmit();

    expect(fixture.componentInstance.submitted).toBeTrue()
  }));

  it('should call submit method', async(() => {

    spyOn(component, 'onSubmit');
    const el = fixture.debugElement.query(By.css('button')).nativeElement;
    console.log(el);
    el.click();
    // component.onSubmit()
    // console.log(component.submitted);

    expect(component.onSubmit).toHaveBeenCalled();
  }))

});
