import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "../Form";
import { BrowserRouter } from "react-router-dom";

const mockedSetForm = jest.fn()

const MockForm = () => {
    return (
    <BrowserRouter>
      <Form/>
    </BrowserRouter>
    )
  }



describe("Form", () => {
  it('should render form', async () => {
    //Arrange
    render(<MockForm />)

    //Act
       const form = screen.getByTestId("form") 

    //Assert
        expect(form).toBeInTheDocument();

  });

  it('should render location', async () => {
    //Arrange
    render(<MockForm />)

    //Act
       const inputElement = screen.getByPlaceholderText(/location/i) 

    //Assert
        expect(inputElement).toBeInTheDocument();
      
  });

  it('should show the course name', async () => {
    //Arrange
        render(<MockForm />)

    //Act
    const inputElement = screen.getByPlaceholderText(/name/i)
    userEvent.click(inputElement)
    userEvent.type(inputElement, 'JavaScript course')
      
    //Assert
        expect(inputElement.value).toBe('JavaScript course')
        
  });

  it('should be able to type into the input box', async () => {
    //Arrange
      render(<MockForm />)
  
    //Act
        const inputElement = screen.getByPlaceholderText(/duration/i)
        userEvent.type(inputElement, '12 weeks')
        const buttonElement = screen.getByRole('button', {name: /Save/i})
        userEvent.click(buttonElement)

    //Assert
        expect(inputElement.value).toBe('')
  });

});