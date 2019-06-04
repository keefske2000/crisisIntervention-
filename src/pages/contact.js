
import React, { Component } from 'react';
import $ from 'jquery';
import Recaptcha from 'react-google-recaptcha';
import Contact from "../components/Contact";

export default class ContactPage extends Component {
  state = {
    inputEmail: '',
    inputCheckBoth: false,
    inputCheckDesign: false,
    inputCheckDev: false,
    inputMessage: '',
    inputName: '',
    isCaptchaValid: false,
    isErrorShown: false,
    isFormValid: false
  }

  // Handle visitor's interaction with inputs
  handleInput = event => {
    // Test for input and length of the value
    if (event.target.value.length > 0 && event.target.name !== 'inputEmail') {
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    // If input is for email address validate it with regexp
    if (event.target.name === 'inputEmail') {
      // eslint-disable-next-line
      const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

      if (reg.test(String(event.target.value).toLowerCase())) {
        this.setState({
          [event.target.name]: event.target.value
        })
      }
    }
  }

  // Handle visitor's interaction with checkboxes
  handleCheckbox = event => {
    this.setState({
      [event.target.name]: event.target.checked
    })
  }

  // Show message in console when reCaptcha plugin is loaded
  onCaptchaLoad = () => {
    console.log('Captcha loaded')
  }

  // Update state after reCaptcha validates visitor
  onCaptchaVerify = (response) => {
    this.setState({
      isCaptchaValid: true
    })
  }

  handleFormSubmit = event => {
    event.preventDefault()

    // Test
    if (this.state.inputEmail.length > 0 && this.state.inputName.length > 0 && this.state.inputMessage.length > 0 && this.state.isCaptchaValid) {
      this.setState({
        isErrorShown: false,
        isFormValid: true
      })

      // Send the form with AJAX
      $.ajax({
        data: this.state,
        type: 'POST',
        url: '/mailer.php',
        success: function(data) {
          console.info(data)
        },
        error: function(xhr, status, err) {
          console.error(status, err.toString())
        }
      })

      // Reset state after sending the form
      this.setState({
        inputEmail: '',
        inputCheckBoth: false,
        inputCheckDesign: false,
        inputCheckDev: false,
        inputMessage: '',
        inputName: '',
        isCaptchaValid: false,
        isErrorShown: false,
        isFormValid: false
      })
    } else {
      // Show error message
      this.setState({
        isErrorShown: true
      })
    }
  }

  render() {
    return (
      <Contact backgroundImage="">
      <div className="contact-page">
        
        

        <h3>Contact me for any additional supports or professional advise in the area of your crisis, and I will help you to the best of my ability.</h3>
        
        <form action="">
          <fieldset>
            <label htmlFor="inputName">Name</label>

            <input onChange={this.handleInput} type="text" name="inputName" id="inputName" required={true} />
          </fieldset>

          <fieldset>
            <label htmlFor="inputEmail">Email</label>

            <input onChange={this.handleInput} type="email" name="inputEmail" id="inputEmail" required={true} />
          </fieldset>

          <div className="form__row">
            <div className="form__col">
              <fieldset>
                <label htmlFor="inputCheckDesign">
                  <input onClick={this.handleCheckbox} type="checkbox" name="inputCheckDesign" id="inputCheckDesign" defaultChecked={false} />

                  <span>Questions</span>
                </label>
              </fieldset>
            </div>

            <div className="form__col">
              <fieldset>
                <label htmlFor="inputCheckDev">
                  <input onClick={this.handleCheckbox} type="checkbox" name="inputCheckDev" id="inputCheckDev" defaultChecked={false} />

                  <span>Answers/experiences that can help others</span>
                </label>
              </fieldset>
            </div>

            <div className="form__col">
              <fieldset>
                <label htmlFor="inputCheckBoth">
                  <input onClick={this.handleCheckbox} type="checkbox" name="inputCheckBoth" id="inputCheckBoth" defaultChecked={false} />

                  <span>Donation info</span>
                </label>
              </fieldset>
            </div>
          </div>

          <fieldset>
            <label>message</label>

            <textarea onChange={this.handleInput} name="inputMessage" id="inputMessage" required={true} />
          </fieldset>

          {/* !! */}
          {/* Make sure to use your 'sitekey' for Google reCaptcha API! */}
          {/* !! */}
          <fieldset>
            <Recaptcha
              onloadCallback={this.onCaptchaLoad}
              sitekey="xxxxxxxxxxxxxxx"
              render="explicit"
              verifyCallback={this.onCaptchaVerify}
            />
          </fieldset>

          {this.state.isFormSubmitted && (
            <fieldset>
              <p>Thank you for contacting me. I will reply in four days.</p>
            </fieldset>
          )}

          {this.state.isErrorShown && (
            <fieldset>
              <p>Please, make sure to fill all fields.</p>
            </fieldset>
          )}

          <fieldset>
            <button onClick={this.handleFormSubmit} className="btn">
              Send
            </button>
          </fieldset>
        </form>
        
      </div>
      </Contact>
    )
  }
}