import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'
import './Landing.css';



const { css } = styled
const cardContainer = document.querySelector('.card-container')

const CardWrapper = styled.div`
  overflow: hidden;
  padding: 0 0;
  margin: 48px auto 0;
  width: 300px;
  font-family: Quicksand, arial, sans-serif;
  box-shadow: 0 0 20px rgba(0, 0, 0, .05), 0 0px 40px rgba(0, 0, 0, .08);
  border-radius: 5px;
`

const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
  background-color: white;
  opacity: 0.7;
`

const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`

const CardBody = styled.div`
  padding-right: 32px;
  padding-left: 32px;
  background-color: white;
  opacity: 0.7;
`

const CardFieldset = styled.fieldset`
  position: relative;
  padding: 0;
  margin: 0;
  border: 0;

  & + & {
    margin-top: 24px;
  }

  &:nth-last-of-type(2) {
    margin-top: 32px;
  }

  &:last-of-type {
    text-align: center;
  }
`

const CardInput = styled.input`
  padding: 7px 0;
  width: 100%;
  font-family: inherit;
  font-size: 14px;
  border-top: 0;
  border-right: 0;
  border-bottom: 1px solid #ddd;
  border-left: 0;
  transition: border-bottom-color .25s ease-in;

  &:focus {
    border-bottom-color: #e5195f;
    outline: 0;
  }
`

const CardIcon = styled.span`
  color: #666;
  cursor: pointer;
  opacity: .25;
  transition: opacity .25s ease-in;

  &:hover {
    opacity: .95;
  }

  
`

const CardOptionsNote = styled.small`
  padding-top: 8px;
  display: block;
  width: 100%;
  font-size: 12px;
  text-align: center;
  text-transform: uppercase;
`

const CardOptions = styled.ul`
  padding: 0;
  margin: 16px 0 8px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  list-style-type: none;
`

const CardOptionsItem = styled.li`
  &:nth-of-type(n+2) {
    margin-left: 16px;
  }
`

const CardButton = styled.button`
  display: block;
  width: 100%;
  padding: 12px 0;
  font-family: inherit;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #e5195f;
  border: 0;
  border-radius: 35px;
  box-shadow: 0 10px 10px rgba(0, 0, 0, .08);
  cursor: pointer;
  transition: all .25s cubic-bezier(.02, .01, .47, 1);
  text-decoration: none;

  &:hover {
    box-shadow: 0 15px 15px rgba(0, 0, 0, .16);
    transform: translate(0, -5px);
  }
`

const CardLink = styled.a`
  display: inline-block;
  font-size: 12px;
  text-decoration: none;
  color: #aaa;
  border-bottom: 1px solid #ddd;
  cursor: pointer;
  transition: color .25s ease-in;
  

  &:hover {
    color: #777;
  }
`

class Card extends React.Component {
  constructor (props) {
    super(props)
    
    this.state = {
      isPasswordVisible: false
    }
    
    this.revealPassword = this.revealPassword.bind(this);
  }
  
  revealPassword () {
    this.setState({
      isPasswordVisible: !this.state.isPasswordVisible
    })
  }
  
  render () {
    return(
        <div className="card-container">
      <CardWrapper>
        <CardHeader>
          <CardHeading>Join the Love Side</CardHeading>
        </CardHeader>
        
        <CardBody>
          <CardFieldset>
            <CardInput
              placeholder='Username'
              type='text'
              required
            />
          </CardFieldset>

          <CardFieldset>
            <CardInput
              placeholder='Species'
              type='text'
              required
            />
          </CardFieldset>
          
          <CardFieldset>
            <CardInput
              placeholder='E-mail'
              type='text'
              required
            />
          </CardFieldset>
          
          <CardFieldset>
            <CardInput
              placeholder='Password'
              type={!this.state.isPasswordVisible ? 'password' : 'text'}
              required
            />
            
            <CardIcon
              onClick={this.revealPassword}
              className='fa fa-eye'
              eye
              small
            />
          </CardFieldset>
          
          
          
          <CardFieldset>
              <Link to="/Home">
            <CardButton type='button'>Sign Up</CardButton>
              </Link>
          </CardFieldset>
          
          <CardFieldset>
            <CardLink>I already have an account</CardLink>
          </CardFieldset>
        </CardBody>
      </CardWrapper>
    </div>
    )
  }
}




export default Card; 