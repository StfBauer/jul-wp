import * as React from 'react';
import styles from './HelloWorld.module.scss';
import { IHelloWorldProps } from './IHelloWorldProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class HelloWorld extends React.Component<IHelloWorldProps, {}> {

  private loaded(event) {
    console.log("LOADED --- ", event);
    console.log("LOADED --- ", this);

    let scrollElement = document.getElementsByClassName(styles.outerframe);
    let myElement: HTMLElement = scrollElement[0] as HTMLElement;
    let outerHeight = document.getElementById('myfirstid');
    console.log('CLASSLIST ::::::', outerHeight.classList);
    console.log(window.getComputedStyle(scrollElement[0], null).getPropertyValue("height"));
    console.log('SCROLLHEIGHT ::::::', scrollElement[0].scrollHeight);
    console.log('SCROLLHEIGHT ::::::', myElement);
    console.log('SCROLLHEIGHT ::::::', myElement.style.height);
    var realElement = window.getComputedStyle(myElement, null);
    console.log('REAL ELEMENT', realElement);
    console.log('REAL ELEMENT', realElement.height);
    console.log(outerHeight.style.height = scrollElement[0].scrollHeight + 'px');
    // // console.log(outerHeight.style.height = '2000px');
    // console.log('SCROLLHEIGHT ::::::', scrollElement[0].scrollHeight);
    console.log(outerHeight.style.height = scrollElement[0].scrollHeight + 'px');


    // let innerFrame = document.getElementsByClassName(styles.innerframe);
    // console.log(innerFrame[0]);

    // console.log(event.target.getComputedStyle());
    // console.log(event.target.classlist);
    // console.log(event.target.parent);
    // event.target.style.height = scrollElement[0].scrollHeight;

  }

  public render(): React.ReactElement<IHelloWorldProps> {
    return (
      <div>
        I am the content before the iframe
      <div id="myfirstid" className={styles.outerframe}>

        <iframe
          // src="https://support.office.com/en-us/client/d7978db0-33b5-4ad3-93ac-ef0bd3c2a670?embed=true&ns=trainingservices&version=1"
          // src="https://support.office.com/en-us/client/422bf3aa-9ae8-46f1-83a2-e65720e1a34d?embed=true&ns=trainingservices&version=1"
          src="https://support.office.com/en-us/client/aae42c96-cecb-47ab-b601-eddb8d1379bc?embed=true&ns=trainingservices&version=1"
          frameBorder="0"
          className={styles.innerframe} onLoad={this.loaded.bind(this)}></iframe>


      </div>
      I am the content after the iframe
      </div>
    );
  }
}
