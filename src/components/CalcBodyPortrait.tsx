import React from 'react';
import { IonRow, IonCol, IonButton } from '@ionic/react';


const CalcBodyPortrait: React.FC<{ valButtonHandler: (event: React.MouseEvent<HTMLIonButtonElement>) => void; operatorButtonHandler: (event: React.MouseEvent<HTMLIonButtonElement>) => void; clearButtonHandler: (event: React.MouseEvent<HTMLIonButtonElement>) => void; equalButtonHandler: (event: React.MouseEvent<HTMLIonButtonElement>) => void; decimalButtonHandler: (event: React.MouseEvent<HTMLIonButtonElement>) => void }> = props =>
{
    return (
        <div>
            <IonRow>
                <IonCol>
                    <IonButton className="clear" onClick={props.clearButtonHandler}>C</IonButton>
                </IonCol>
                <IonCol>

                </IonCol>
                <IonCol>
                    <IonButton className="operator" onClick={props.operatorButtonHandler}>&#247;</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton className="operator" onClick={props.operatorButtonHandler}>x</IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonButton onClick={props.valButtonHandler}>7</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton onClick={props.valButtonHandler}>8</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton onClick={props.valButtonHandler}>9</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton className="operator" onClick={props.operatorButtonHandler}>-</IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonButton onClick={props.valButtonHandler}>4</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton onClick={props.valButtonHandler}>5</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton onClick={props.valButtonHandler}>6</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton className="operator" onClick={props.operatorButtonHandler}>+</IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonButton onClick={props.valButtonHandler}>1</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton onClick={props.valButtonHandler}>2</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton onClick={props.valButtonHandler}>3</IonButton>
                </IonCol>
                <IonCol>
                    <IonButton className="operator" onClick={props.equalButtonHandler}>=</IonButton>
                </IonCol>
            </IonRow>
            <IonRow>
                <IonCol>
                    <IonButton onClick={props.valButtonHandler}>0</IonButton>
                </IonCol>
                <IonCol>

                </IonCol>
                <IonCol>
                    <IonButton onClick={props.decimalButtonHandler}>.</IonButton>
                </IonCol>
                <IonCol>

                </IonCol>
            </IonRow>
        </div>
    );
};

export default CalcBodyPortrait;