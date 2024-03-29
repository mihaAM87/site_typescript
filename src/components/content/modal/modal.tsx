import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import { useDispatch, useStore } from 'react-redux';
import './modal.module.scss';
import { ModalContext } from '../../../context/modal/modalContext';
// import emailjs from 'emailjs-com';
import { AlertContext } from '../../../context/alert/alertContext';

export default function Modal() {
  const store = useStore();
  // const { modal, hide } = useContext(ModalContext);
  const alert = useContext(AlertContext);

  const mainClasses: string[] = [];
  // mainClasses.push('row');
  mainClasses.push('modal');

  const modalDialogClasses = [];
  mainClasses.push('contact-form');
  mainClasses.push('modalDialog');

  const onHide = () => {
    // hide();
    // alert.hide();
  };

  // c помощью useEffect цепляем обработчик к нажатию клавиш
  // https://ru.reactjs.org/docs/hooks-effect.html
  // React.useEffect(() => {
  //   document.addEventListener('keydown', onKeydown);
  //   return () => document.removeEventListener('keydown', onKeydown);
  // });

  // если компонент невидим, то не отображаем его
  // if (!modal) return null;

  const sendEmail = (e) => {
    e.preventDefault(); //This is important, i'm not sure why, but the email won't send without it

    const target = e.target;
    // alert.hide();

    if (
      target?.from_name?.value &&
      target?.from_name?.value.trim() != '' &&
      ((target.from_email?.value && target?.from_email?.value.trim() != '') ||
        (target.from_phone?.value && target?.from_phone?.value.trim() != ''))
    ) {
      // emailjs
      //   .sendForm(
      //     'service_14jmwku',
      //     'template_f31ex0a',
      //     target,
      //     'XYNOX-L544CmbvKdh'
      //   )
      //   .then(
      //     (result) => {
      //       window.location.reload(); //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior)
      //     },
      //     (error) => {
      //       console.log(error.text);
      //     }
      //   );
      onHide();
    } else {
      let messageTxt = '';

      if (
        !(target?.from_name?.value && target?.from_name?.value.trim() != '')
      ) {
        messageTxt = 'Не введено Ваше имя. Пожалуйста введите Ваше имя';
      } else {
        if (
          !(
            (target.from_email?.value &&
              target?.from_email?.value.trim() != '') ||
            (target.from_phone?.value && target?.from_phone?.value.trim() != '')
          )
        ) {
          messageTxt =
            'Отсутствуют Ваши контактные данные (email и номер телефона). Пожалуйста введите Ваш email или номер телефона либо что-нибудь одно из них';
        }
      }

      // alert.show(messageTxt, 'danger');
    }
  };

  // или возвращаем верстку модального окна
  return (
    <div className="modal">
      <Form onSubmit={sendEmail}>
        <div className="modalDialog">
          <div className="modalHeader">
            <div>
              <h3 className="modalTitle">Закзать</h3>
              <h3 className="modalTitle">Звонок</h3>
            </div>
            <span className="modalClose" onClick={onHide}>
              &times;
            </span>
          </div>
          <div className="modalBody">
            <div className="modalContent">
              <Form.Group>
                <Form.Control
                  name="from_name"
                  id="from_name"
                  type="text"
                  placeholder="Имя"
                />
              </Form.Group>

              <Form.Group>
                <Form.Control
                  name="from_email"
                  id="from_email"
                  type="email"
                  placeholder="name@example.com"
                />
              </Form.Group>
              <Form.Group>
                <Form.Control
                  name="from_phone"
                  id="from_phone"
                  type="text"
                  placeholder="Телефон"
                />
              </Form.Group>
            </div>
          </div>
          <div className="modalFooter">
            <div className="col-md-6">
              <button className="form-control btn btn-success" type="submit">
                Записаться
              </button>
            </div>
            <div className="col-md-6">
              <button className="form-control btn btn-primary" onClick={onHide}>
                Закрыть
              </button>
            </div>
          </div>
        </div>
      </Form>
    </div>
  );
}
// интерфейс для пропсов
