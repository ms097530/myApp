import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonGrid, IonRow, IonCol, IonButton, IonIcon } from '@ionic/react';

import './Home.css';
import React, { useEffect, useState } from 'react';
import Display from '../components/Display';
import CalcBodyPortrait from '../components/CalcBodyPortrait';
import { menu } from 'ionicons/icons';

const Home: React.FC = () =>
{
  // KEEP DISPLAY SEPARATE FROM CURR AND PREV
  // Current calculator does not support chaining operations. In order to do a sequence of operations, EQUALS must be hit in order to maintain current value. If chaining operations is attempted, it instead starts a new operation, ignoring the result of the previous operation
  const MAX_LENGTH = 10;


  const [displayVal, setDisplayVal] = useState('0');  // value that is shown in display
  const [currVal, setCurrVal] = useState('0');
  const [prevVal, setPrevVal] = useState('0');
  const [operator, setOperator] = useState('');   // stores +, -, x, or ÷ to determine proper operation
  const [needNewInput, setNeedNewInput] = useState(true); // flag to account for different scenarios where a new input is or isn't needed
  const [lastWasOp, setLastWasOp] = useState(false);  // to stop behavior where hitting an operator multiple times would cause unexpected calculations to occur


  useEffect(() =>
  {
    console.log('currVal in useEffect:', currVal);
    setDisplayVal(String(currVal));
  }, [currVal])

  const valueKeyPressHandler = (event: React.MouseEvent<HTMLIonButtonElement>) =>
  {
    // check for error message
    if (isNaN(+currVal))
    {
      return;
    }

    // get button value
    let input = event.currentTarget.textContent;

    // arbitrary cap on input length - would like to make it based on ratio of display width to font size
    if (currVal.length >= MAX_LENGTH && !needNewInput)
    {
      setNeedNewInput(false);
      return;
    }

    if (needNewInput)
    {
      setCurrVal(input!);
    }
    else
    {
      setCurrVal(currVal + input!);
    }
    setNeedNewInput(false);
  };

  const operatorPressHandler = (event: React.MouseEvent<HTMLIonButtonElement>) =>
  {
    // check for error message
    if (isNaN(+currVal))
    {
      return;
    }
    setPrevVal(currVal);

    if (operator && !lastWasOp)
    {
      let result = 0;
      switch (operator)
      {
        case '+': result = +prevVal + +currVal; break;
        case '-': result = +prevVal - +currVal; break;
        case 'x': result = +prevVal * +currVal; break;
        case '÷': result = +prevVal / +currVal; break;
      }
      setCurrVal(String(result));
    }
    setNeedNewInput(true);
    setLastWasOp(true);
    setOperator(event.currentTarget.textContent!);

  };
  const decimalPressHandler = (event: React.MouseEvent<HTMLIonButtonElement>) =>
  {
    // check for error message
    if (isNaN(+currVal))
    {
      return;
    }
    let inputStr;
    if (needNewInput)
    {
      inputStr = '0.';
    }
    else
    {
      inputStr = currVal + '.';
    }
    setCurrVal(inputStr);
    setNeedNewInput(false);
  };
  const equalPressHandler = (event: React.MouseEvent<HTMLIonButtonElement>) =>
  {
    // check for error message
    if (isNaN(Number(currVal)))
    {
      return;
    }
    // let result = 0;
    let result = +currVal;
    switch (operator)
    {
      case '+': result = +prevVal + +currVal; break;
      case '-': result = +prevVal - +currVal; break;
      case 'x': result = +prevVal * +currVal; break;
      case '÷': result = +prevVal / +currVal; break;
    }
    let resStr = result.toString();
    if (resStr.length >= MAX_LENGTH)
    {
      let decimalIndex = resStr.indexOf('.');
      if (decimalIndex === -1 || decimalIndex >= MAX_LENGTH)
      {
        setCurrVal('Error - Clear to continue');
      }
      else
      {
        setCurrVal(resStr.slice(0, MAX_LENGTH));
        setOperator('');
        setNeedNewInput(true);
      }
    }
    else
    {
      setPrevVal(currVal);
      setCurrVal(String(result));
      setOperator('');
      setNeedNewInput(true);
    }
  };
  const clearPressHandler = (event: React.MouseEvent<HTMLIonButtonElement>) =>
  {
    // set values to default
    setCurrVal('0');
    setPrevVal('0');
    setOperator('');
    setNeedNewInput(true);
  };


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButton slot="icon-only">
            <IonIcon name="close"></IonIcon>
          </IonButton>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>

        <IonGrid>

          <IonRow>
            <IonCol>
              <Display displayValue={displayVal} />
            </IonCol>
          </IonRow>

          <CalcBodyPortrait valButtonHandler={valueKeyPressHandler} operatorButtonHandler={operatorPressHandler} clearButtonHandler={clearPressHandler} equalButtonHandler={equalPressHandler} decimalButtonHandler={decimalPressHandler} />

        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
